<template xmlns:v-el="http://www.w3.org/1999/xhtml">
  <div :class="[prefixCls + '-trigger-cont']">
    <div v-if="trigger === 'click'"
        v-el:trigger
         :class="[prefixCls + '-trigger']"
         @click="clickHandler">
      <slot name="trigger">trigger slot is not set</slot>
    </div>
    <div v-if="trigger === 'hover'"
         v-el:trigger
         :class="[prefixCls + '-trigger']"
         @mouseenter="hoverHandler"
         @mouseleave="hoverHandler">
      <slot name="trigger">trigger slot is not set</slot>
    </div>
    <div v-if="trigger === 'focus'"
         v-el:trigger
         :class="[prefixCls + '-trigger']">
      <slot name="trigger">trigger slot is not set</slot>
    </div>
    <div v-el:popup
         v-show="show"
         :class="popupClassObj"
         :transition="effect">
      <slot name="popup">popup slot is not set</slot>
    </div>
  </div>
</template>

<script type="text/babel">
  import GlobalMixin from './../_utils/GlobalMixin.js'
  import EventListener from './../_utils/EventListener.js'

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
      popupCls: {
        type: String,
        default: 'popup'
      },
      popupAlwaysInView: {
        type: Boolean,
        default: true
      }
    },

    data () {
      return {
        position: {
          top: 0,
          left: 0
        },
        show: false
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

    ready () {
      const $trigger = this.$els.trigger.children[0]
      const me = this
      const { trigger } = this

      if (trigger === 'focus') {
        this._focusEvent = EventListener.listen($trigger, 'focus', () => {
          me.show = true
          me.resetPos()
        })

        this._blurEvent = EventListener.listen($trigger, 'blur', () => {
          this.show = false
        })
      }
    },

    methods: {
      toggle () {
        this.show = !this.show
      },

      /**
       * 设置弹窗视图内可见优先
       */
      enablePopupInView () {
        const { placement } = this

        if (placement.startsWith('top')) {

        } else if (placement.startsWith('bottom')) {

        }
      },

      /**
       * 设置tooltip坐标
       */
      resetPos () {
        const me = this
        const { placement } = this
        const $popup = me.$els.popup

        // 坐标修正
        if (me.show && $popup.offsetWidth === 0) {
          setTimeout(() => {
            me.resetPos()
          }, 0)
          return
        }

        const $trigger = me.$els.trigger.children[0]
        const offset = $trigger.getBoundingClientRect()
        const offsetLeft = document.documentElement.scrollLeft + document.body.scrollLeft + offset.left
        const offsetTop = document.documentElement.scrollTop + document.body.scrollTop + offset.top
        const offsetWidth = offset.width
        const offsetHeight = offset.height
        const popupOffsetWidth = $popup.offsetWidth
        const popupOffsetHeight = $popup.offsetHeight

        switch (placement) {
          case 'top' :
            me.position.left = offsetLeft - popupOffsetWidth / 2 + offsetWidth / 2
            me.position.top = offsetTop - popupOffsetHeight
            break
          case 'topLeft' :
            me.position.left = offsetLeft
            me.position.top = offsetTop - popupOffsetHeight
            break
          case 'topRight' :
            me.position.left = offsetLeft + offsetWidth - popupOffsetWidth
            me.position.top = offsetTop - popupOffsetHeight
            break
          case 'left':
            me.position.left = offsetLeft - popupOffsetWidth
            me.position.top = offsetTop + offsetHeight / 2 - popupOffsetHeight / 2
            break
          case 'leftTop':
            me.position.left = offsetLeft - popupOffsetWidth
            me.position.top = offsetTop
            break
          case 'leftBottom':
            me.position.left = offsetLeft - popupOffsetWidth
            me.position.top = offsetTop + offsetHeight - popupOffsetHeight
            break
          case 'right':
            me.position.left = offsetLeft + offsetWidth
            me.position.top = offsetTop + offsetHeight / 2 - popupOffsetHeight / 2
            break
          case 'rightTop':
            me.position.left = offsetLeft + offsetWidth
            me.position.top = offsetTop
            break
          case 'rightBottom':
            me.position.left = offsetLeft + offsetWidth
            me.position.top = offsetTop + offsetHeight - popupOffsetHeight
            break
          case 'bottom':
            me.position.left = offsetLeft - popupOffsetWidth / 2 + offsetWidth / 2
            me.position.top = offsetTop + offsetHeight
            break
          case 'bottomLeft':
            me.position.left = offsetLeft
            me.position.top = offsetTop + offsetHeight
            break
          case 'bottomRight':
            me.position.left = offsetLeft + offsetWidth - popupOffsetWidth
            me.position.top = offsetTop + offsetHeight
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
          placement: placement
        })
      },

      clickHandler (ev) {
        this.show = !this.show
        this.resetPos()
      },

      hoverHandler (ev) {
        const { type } = ev

        if (type === 'mouseenter') {
          this.show = true
          this.resetPos()
        } else {
          this.show = false
        }
      },

      focusHandler (ev) {
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
    }
  }
</script>
