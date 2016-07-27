<template xmlns:v-el="http://www.w3.org/1999/xhtml">
  <div :class="[prefixCls + '-trigger-cont']" :style="{width: width}">
    <div v-if="trigger === 'click'"
         v-el:trigger
         :class="[prefixCls + '-trigger', disabled && (prefixCls + '-trigger-disabled')]"
         @click="clickHandler">
      <slot name="trigger">trigger slot is not set</slot>
    </div>
    <div v-if="trigger === 'hover'"
         v-el:trigger
         :class="[prefixCls + '-trigger', disabled && (prefixCls + '-trigger-disabled')]"
         @mouseenter="hoverHandler"
         @mouseleave="hoverHandler">
      <slot name="trigger">trigger slot is not set</slot>
    </div>
    <div v-if="trigger === 'focus'"
         v-el:trigger
         :class="[prefixCls + '-trigger', disabled && (prefixCls + '-trigger-disabled')]">
      <slot name="trigger">trigger slot is not set</slot>
    </div>
    <div v-if="trigger === 'hover'"
         v-el:popup
         v-show="show"
         :class="popupClassObj"
         :transition="effect"
         @mouseenter="hoverHandler"
         @mouseleave="hoverHandler">
      <slot name="popup">popup slot is not set</slot>
    </div>
    <div v-else
         v-el:popup
         v-show="show"
         :class="popupClassObj"
         :transition="effect">
      <slot name="popup">popup slot is not set</slot>
    </div>
  </div>
</template>

<script type="text/babel">
  import GlobalMixin from '../_utils/GlobalMixin.js'
  import EventListener from '../_utils/EventListener.js'

  export default {
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
        default: 'auto'
      },
      popupCls: {
        type: String,
        default: 'popup'
      },
      popupAlwaysInView: {
        type: Boolean,
        default: true
      },
      popupHideWhenClickOutside: {
        type: Boolean,
        default: false
      },
      popupHideDelay: {
        type: Number,
        default: 0
      },
      triggerUsePopupWidth: {
        type: Boolean,
        default: false
      },
      show: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },

    data () {
      return {
        position: {
          top: 0,
          left: 0
        }
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
      'show' (val, oldVal) {
        // 向父组件派发事件
        this.$dispatch('trigger-popup-toggle', val)
      }
    },

    ready () {
      const $trigger = this.$els.trigger
      const $popup = this.$els.popup
      const $triggerTarget = $trigger.querySelector('input, textarea')
      const me = this
      const { trigger, popupHideWhenClickOutside, triggerUsePopupWidth } = this

      this.originalPlacement = this.placement

      if (trigger === 'focus') {
        this._focusEvent = EventListener.listen($triggerTarget, 'focus', () => {
          me.show = true
          me.resetPos()
        })

        this._blurEvent = EventListener.listen($triggerTarget, 'blur', () => {
          // blur触发的,延迟100ms关闭popup,保证popup上的交互事件触发
          setTimeout(() => {
            me.show = false
          }, 100)
        })
      }

      // 点击trigger组件外部区域的时候,隐藏popup
      if (popupHideWhenClickOutside) {
        this._closeEvent = EventListener.listen(window, 'click', (ev) => {
          if (!$popup.contains(ev.target) && !$trigger.contains(ev.target)) {
            me.show = false
          }
        })
      }

      // trigger使用popup宽度
      if (triggerUsePopupWidth) {
//        console.log('$popup.style.width 1', $popup.style.width)
//
//        $popup.style.visibility = 'hidden'
//        me.show = true
//        $popup.style.display = 'block'
//
//        setTimeout(() => {
//          $trigger.style.width = $popup.style.width
//          $popup.style.visibility = ''
//          $popup.style.display = ''
//          console.log('$popup.style.width 2', $popup.style.width)
//        }, 1000)
      }
    },

    methods: {
      /**
       * 优先设置弹窗视图内可见
       */
      enablePopupInView (data) {
        const { originalPlacement } = this
        const { triggerOffset, triggerWidth, triggerHeight, popupWidth, popupHeight } = data
        const triggerTop = triggerOffset.top
        const triggerLeft = triggerOffset.left
        const winWidth = window.innerWidth
        const winHeight = window.innerHeight
        let fixedPlacement = originalPlacement
        let hasFix = false

        if (fixedPlacement.startsWith('top')) {
          if (triggerTop < popupHeight) {
            fixedPlacement = fixedPlacement.replace('top', 'bottom')
            hasFix = true
          }
        } else if (fixedPlacement.startsWith('bottom')) {
          if (winHeight - triggerTop - triggerHeight < popupHeight) {
            fixedPlacement = fixedPlacement.replace('bottom', 'top')
            hasFix = true
          }
        } else if (fixedPlacement.startsWith('left')) {
          if (triggerLeft < popupWidth) {
            fixedPlacement = fixedPlacement.replace('left', 'right')
            hasFix = true
          }
        } else if (fixedPlacement.startsWith('right')) {
          if (winWidth - triggerLeft - triggerWidth < popupWidth) {
            fixedPlacement = fixedPlacement.replace('right', 'left')
            hasFix = true
          }
        }

        if (fixedPlacement.endsWith('Top')) {
          if (winHeight - triggerTop - triggerHeight < popupHeight) {
            fixedPlacement = fixedPlacement.replace('Top', 'Bottom')
            hasFix = true
          }
        } else if (fixedPlacement.endsWith('Bottom')) {
          if (triggerTop < popupHeight) {
            fixedPlacement = fixedPlacement.replace('Bottom', 'Top')
            hasFix = true
          }
        } else if (fixedPlacement.endsWith('Left')) {
          if (winWidth - triggerLeft - triggerWidth < popupWidth) {
            fixedPlacement = fixedPlacement.replace('Left', 'Right')
            hasFix = true
          }
        } else if (fixedPlacement.endsWith('Right')) {
          if (triggerLeft < popupWidth) {
            fixedPlacement = fixedPlacement.replace('Right', 'Left')
            hasFix = true
          }
        }

        if (hasFix) {
          this.resetPos(fixedPlacement)
        } else {
          this.resetPos(originalPlacement)
        }
      },

      /**
       * 设置tooltip坐标
       */
      resetPos (inPlacement) {
        const me = this
        const { popupAlwaysInView } = this
        const $popup = me.$els.popup

        // 坐标修正
        if (!inPlacement && me.show && $popup.offsetWidth === 0) {
          setTimeout(() => {
            me.resetPos()
          }, 0)
          return
        }

        const $trigger = me.$els.trigger.children[0]
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
          this.placement = inPlacement
        }

        switch (this.placement) {
          case 'top' :
            me.position.left = triggerLeft - popupWidth / 2 + triggerWidth / 2
            me.position.top = triggerTop - popupHeight
            break
          case 'topLeft' :
            me.position.left = triggerLeft
            me.position.top = triggerTop - popupHeight
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

        $popup.style.top = this.position.top + 'px'
        $popup.style.left = this.position.left + 'px'

        // 向父组件派发事件
        this.$dispatch('trigger-reset-pos', {
          $trigger: $trigger,
          $popup: $popup,
          placement: this.placement
        })
      },

      clickHandler (ev) {
        if (this.disabled) return

        this.show = !this.show

        if (this.show) {
          this.resetPos()
        }
      },

      hoverHandler (ev) {
        if (this.disabled) return

        const me = this
        const { popupHideDelay } = this
        const { type } = ev

        if (popupHideDelay && this._mouseLeaveTimer) clearTimeout(this._mouseLeaveTimer)

        if (type === 'mouseenter') {
          this.show = true
          this.resetPos()
        } else {
          if (popupHideDelay) {
            this._mouseLeaveTimer = setTimeout(() => {
              me.show = false
            }, popupHideDelay)
          } else {
            this.show = false
          }
        }
      },

      focusHandler (ev) {
        if (this.disabled) return

        const { type } = ev

        console.log('ev', ev)

        if (type === 'focus') {
          this.show = true
          this.resetPos()
        } else {
          this.show = false
        }
      }
    },

    attached () {
      if (this.$els.popup) {
        document.body.appendChild(this.$els.popup)
      }
    },

    beforeDestroy () {
      const $popup = this.$els.popup

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
