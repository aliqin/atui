<template>
  <div :class="[prefixCls + '-trigger-cont']" style="width:100%">
    <div v-if="popupAlwaysShow"
         ref="trigger"
         :class="[prefixCls + '-trigger', disabled && (prefixCls + '-trigger-disabled')]">
      <slot name="trigger"></slot>
    </div>
    <div v-if="trigger === 'click' && !popupAlwaysShow"
         ref="trigger"
         :class="[prefixCls + '-trigger', disabled && (prefixCls + '-trigger-disabled')]"
         @click="clickHandler">
      <slot name="trigger"></slot>
    </div>
    <div v-if="trigger === 'hover'"
         ref="trigger"
         :class="[prefixCls + '-trigger', disabled && (prefixCls + '-trigger-disabled')]"
         @mouseenter="hoverHandler"
         @mouseleave="hoverHandler">
      <slot name="trigger"></slot>
    </div>
    <div v-if="trigger === 'focus' || trigger === 'always'"
         ref="trigger"
         :class="[prefixCls + '-trigger', disabled && (prefixCls + '-trigger-disabled')]">
      <slot name="trigger"></slot>
    </div>
    <div v-if="trigger === 'hover'"
         ref="popup"
         v-show="showPopup"
         :class="popupClassObj"
         :transition="effect"
         @mouseenter="hoverHandler"
         @mouseleave="hoverHandler">
      <slot name="popup"></slot>
    </div>
    <div v-else
         ref="popup"
         v-show="showPopup"
         :class="popupClassObj"
         :transition="effect">
      <slot name="popup"></slot>
    </div>
  </div>
</template>

<script type="text/babel">
  import GlobalMixin from '../_utils/GlobalMixin.js'
  import EventListener from '../_utils/EventListener.js'

  export default {
    name: 'Trigger',
    mixins: [GlobalMixin],
    props: {
      trigger: {
        type: String,
        default: 'click'
      },
      effect: {
        type: String,
        default: 'zoom'
      },
      placement: {
        type: String,
        default: 'bottom'
      },
      width: {
        type: String,
        default: '100%'
      },
      offset: {
        type: Array,
        default () {
          return [0, 2]
        }
      },
      popupCls: {
        type: String,
        default: 'popup'
      },
      popupAlwaysInView: {
        type: Boolean,
        default: true
      },
      popupAlwaysShow: {
        type: Boolean
      },
      popupHideWhenClickOutside: {
        type: Boolean
      },
      // todo: 增强trigger和popup坐标对齐方式
      // 参考 https://github.com/yiminghe/dom-align
      // popup弹出的时候,刚好盖住trigger
      popupCoverTrigger: {
        type: Boolean
      },
      popupHideDelay: {
        type: Number,
        default: 0
      },
      triggerUsePopupWidth: {
        type: Boolean
      },
      popupUseTriggerWidth: {
        type: Boolean
      },
      show: {
        type: Boolean
      },
      disabled: {
        type: Boolean
      }
    },

    data () {
      return {
        position: {
          top: 0,
          left: 0
        },
        showPopup: this.show,
        popupPlacement: this.placement
      }
    },

    computed: {
      popupClassObj () {
        let { prefixCls, popupCls, placement } = this
        let classObj = {}

        classObj[`${prefixCls}-popup`] = true
        classObj[`${prefixCls}-${popupCls}`] = true
        classObj[`${prefixCls}-${popupCls}-top`] = placement === 'top'
        classObj[`${prefixCls}-${popupCls}-top-left`] = placement === 'topLeft'
        classObj[`${prefixCls}-${popupCls}-top-right`] = placement === 'topRight'
        classObj[`${prefixCls}-${popupCls}-left`] = placement === 'left'
        classObj[`${prefixCls}-${popupCls}-left-top`] = placement === 'leftTop'
        classObj[`${prefixCls}-${popupCls}-left-bottom`] = placement === 'leftBottom'
        classObj[`${prefixCls}-${popupCls}-right`] = placement === 'right'
        classObj[`${prefixCls}-${popupCls}-right-top`] = placement === 'rightTop'
        classObj[`${prefixCls}-${popupCls}-right-bottom`] = placement === 'rightBottom'
        classObj[`${prefixCls}-${popupCls}-bottom`] = placement === 'bottom'
        classObj[`${prefixCls}-${popupCls}-bottom-left`] = placement === 'bottomLeft'
        classObj[`${prefixCls}-${popupCls}-bottom-right`] = placement === 'bottomRight'

        return classObj
      }
    },

    watch: {
      showPopup (val, oldVal) {
        // 向父组件派发事件
        this.$emit('toggle-popup', val)
      },
      show (val, oldVal) {
        this.showPopup = val
      }
    },

    mounted () {
      const me = this
      const $trigger = me.$refs.trigger
      const $popup = me.$refs.popup
      const $triggerTarget = $trigger.querySelector('input, textarea')
      const { trigger, popupHideWhenClickOutside, triggerUsePopupWidth, popupAlwaysShow, popupUseTriggerWidth } = this
      if (trigger === 'focus') {
        me._focusEvent = EventListener.listen($triggerTarget, 'focus', () => {
          me.showPopup = true
          this.$nextTick(() => {
            this.resetPos()
          })
        })

        me._blurEvent = EventListener.listen($triggerTarget, 'blur', () => {
          // blur触发的,延迟100ms关闭popup,保证popup上的交互事件触发
          setTimeout(() => {
            me.showPopup = false
          }, 100)
        })
      }

      // 点击trigger组件外部区域的时候,隐藏popup
      if (!popupAlwaysShow && popupHideWhenClickOutside) {
        this._closeEvent = EventListener.listen(window, 'click', (ev) => {
          if (!$popup.contains(ev.target) && !$trigger.contains(ev.target)) {
            me.showPopup = false
          }
        })
      }

      // trigger使用popup宽度
      if (triggerUsePopupWidth) {
        $popup.style.visibility = 'hidden'
        $popup.style.display = 'block'
        $trigger.style.width = window.getComputedStyle($popup).width
        $popup.style.visibility = ''
        $popup.style.display = 'none'
      }

      if (popupUseTriggerWidth) {
        $popup.style.minWidth = window.getComputedStyle($trigger).width
      }

      // 永远展示popup,并且默认展示
      if (popupAlwaysShow) {
        // 显示优化,避免上来出现在页面左上角
        $popup.style.visibility = 'hidden'
        this.showPopup = true
        this.$nextTick(() => {
          this.resetPos()
        })
        $popup.style.visibility = ''
      }

      // popup append to body
      this.$nextTick(() => {
        if (this.$refs.popup) {
          document.body.appendChild(this.$refs.popup)
        }
      })
    },
    created () {
      this.showPopup = this.show
    },

    methods: {
      /**
       * 优先设置弹窗视图内可见
       */
      enablePopupInView (data) {
        const { popupPlacement } = this
        const { triggerOffset, triggerWidth, triggerHeight, popupWidth, popupHeight } = data
        const triggerTop = triggerOffset.top
        const triggerLeft = triggerOffset.left
        const winWidth = window.innerWidth
        const winHeight = window.innerHeight
        let fixedPlacement = popupPlacement
        let hasFix = false

        if (~fixedPlacement.indexOf('top')) {
          if (triggerTop < popupHeight) {
            fixedPlacement = fixedPlacement.replace('top', 'bottom')
            hasFix = true
          }
        } else if (~fixedPlacement.indexOf('bottom')) {
          if (winHeight - triggerTop - triggerHeight < popupHeight) {
            fixedPlacement = fixedPlacement.replace('bottom', 'top')
            hasFix = true
          }
        } else if (~fixedPlacement.indexOf('left')) {
          if (triggerLeft < popupWidth) {
            fixedPlacement = fixedPlacement.replace('left', 'right')
            hasFix = true
          }
        } else if (~fixedPlacement.indexOf('right')) {
          if (winWidth - triggerLeft - triggerWidth < popupWidth) {
            fixedPlacement = fixedPlacement.replace('right', 'left')
            hasFix = true
          }
        }
        if (this.endsWith('Top', fixedPlacement)) {
          if (winHeight - triggerTop - triggerHeight < popupHeight) {
            fixedPlacement = fixedPlacement.replace('Top', 'Bottom')
            hasFix = true
          }
        } else if (this.endsWith('Bottom', fixedPlacement)) {
          if (triggerTop < popupHeight) {
            fixedPlacement = fixedPlacement.replace('Bottom', 'Top')
            hasFix = true
          }
        } else if (this.endsWith('Left', fixedPlacement)) {
          if (winWidth - triggerLeft - triggerWidth < popupWidth) {
            fixedPlacement = fixedPlacement.replace('Left', 'Right')
            hasFix = true
          }
        } else if (this.endsWith('Right', fixedPlacement)) {
          if (triggerLeft < popupWidth) {
            fixedPlacement = fixedPlacement.replace('Right', 'Left')
            hasFix = true
          }
        }

        if (hasFix) {
          this.resetPos(fixedPlacement)
        } else {
          this.resetPos(this.placement)
        }
      },

      /**
       * 设置tooltip坐标
       */
      resetPos (inPlacement) {
        const me = this
        const { popupAlwaysInView, offset, popupCoverTrigger } = this
        const $popup = me.$refs.popup
        // 坐标修正
        if (!inPlacement && me.show && $popup.offsetWidth === 0) {
          setTimeout(() => {
            me.resetPos()
          }, 0)
          return
        }

        const $trigger = me.$refs.trigger.children[0]
        const triggerOffset = $trigger.getBoundingClientRect()
        const triggerLeft = document.documentElement.scrollLeft + document.body.scrollLeft + triggerOffset.left
        const triggerTop = document.documentElement.scrollTop + document.body.scrollTop + triggerOffset.top
        const triggerWidth = triggerOffset.width
        const triggerHeight = triggerOffset.height
        const popupWidth = $popup.offsetWidth
        const popupHeight = $popup.offsetHeight

        // 弹窗是否in view修正
        if (popupAlwaysInView && !inPlacement) {
          return this.enablePopupInView({
            triggerOffset: triggerOffset,
            triggerWidth: triggerWidth,
            triggerHeight: triggerHeight,
            popupWidth: popupWidth,
            popupHeight: popupHeight
          })
        }

        if (inPlacement) {
          this.popupPlacement = inPlacement
        }
        // @note top值减4，减去2px的border宽度，另外2px是保持trigger和popup保持2px的间距
        switch (this.popupPlacement) {
          case 'top' :
            me.position.left = triggerLeft - popupWidth / 2 + triggerWidth / 2
            me.position.top = triggerTop - popupHeight - 4
            break
          case 'topLeft' :
            me.position.left = triggerLeft
            me.position.top = triggerTop - popupHeight - 4
            break
          case 'topRight' :
            me.position.left = triggerLeft + triggerWidth - popupWidth
            me.position.top = triggerTop - popupHeight
            break
          case 'left':
            me.position.left = triggerLeft - popupWidth
            me.position.top = triggerTop + triggerHeight / 2 - popupHeight / 2
            break
          case 'leftTop':
            me.position.left = triggerLeft - popupWidth
            me.position.top = triggerTop
            break
          case 'leftBottom':
            me.position.left = triggerLeft - popupWidth
            me.position.top = triggerTop + triggerHeight - popupHeight
            break
          case 'right':
            me.position.left = triggerLeft + triggerWidth
            me.position.top = triggerTop + triggerHeight / 2 - popupHeight / 2
            break
          case 'rightTop':
            me.position.left = triggerLeft + triggerWidth
            me.position.top = triggerTop
            break
          case 'rightBottom':
            me.position.left = triggerLeft + triggerWidth
            me.position.top = triggerTop + triggerHeight - popupHeight
            break
          case 'bottom':
            me.position.left = triggerLeft - popupWidth / 2 + triggerWidth / 2
            me.position.top = triggerTop + triggerHeight
            break
          case 'bottomLeft':
            me.position.left = triggerLeft
            me.position.top = triggerTop + triggerHeight
            break
          case 'bottomRight':
            me.position.left = triggerLeft + triggerWidth - popupWidth
            me.position.top = triggerTop + triggerHeight
            break
          default:
            console.log('Wrong placement prop')
        }

        if (popupCoverTrigger) {
          if (~this.placement.indexOf('top')) {
            offset[1] = triggerHeight
          } else if (~this.placement.indexOf('bottom')) {
            offset[1] = -triggerHeight
          }
        }

        $popup.style.left = this.position.left + offset[0] + 'px'
        $popup.style.top = this.position.top + offset[1] + 'px'

        // 向父组件派发事件
        this.$emit('reset-pos', {
          $trigger: $trigger,
          $popup: $popup,
          placement: this.popupPlacement
        })
      },
      /*
      * 判断字符串source是否以target结尾
      */
      endsWith (target, source) {
        return source.lastIndexOf(target) + target.length === source.length
      },

      clickHandler (ev) {
        if (this.disabled) return

        this.showPopup = !this.showPopup

        if (this.showPopup) {
          this.$nextTick(() => {
            this.resetPos()
          })
        }
      },

      hoverHandler (ev) {
        if (this.disabled) return

        const me = this
        const { popupHideDelay } = this
        const { type } = ev

        if (popupHideDelay && this._mouseLeaveTimer) clearTimeout(this._mouseLeaveTimer)

        if (type === 'mouseenter') {
          this.showPopup = true
          this.$nextTick(() => {
            this.resetPos()
          })
        } else {
          if (popupHideDelay) {
            this._mouseLeaveTimer = setTimeout(() => {
              me.showPopup = false
            }, popupHideDelay)
          } else {
            this.showPopup = false
          }
        }
      },

      focusHandler (ev) {
        if (this.disabled) return

        const { type } = ev

        if (type === 'focus') {
          this.showPopup = true
          this.$nextTick(() => {
            this.resetPos()
          })
        } else {
          this.showPopup = false
        }
      }
    },

    beforeDestroy () {
      const $popup = this.$refs.popup

      if ($popup && $popup.nodeType) {
        $popup.parentNode.removeChild($popup)
      }

      if (this._blurEvent) {
        this._blurEvent.remove()
        this._focusEvent.remove()
      }

      if (this._closeEvent) {
        this._closeEvent.remove()
      }

      this._mouseLeaveTimer = null
    }
  }
</script>
