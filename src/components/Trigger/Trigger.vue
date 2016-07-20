<template>
  <div :class="[prefixCls + '-trigger-cont']">
    <div v-if="triggerEvent === 'click'"
        v-el:trigger
         :class="[prefixCls + '-trigger']"
         @click="clickHandler">
      <slot name="trigger">trigger slot is not set</slot>
    </div>
    <div v-if="triggerEvent === 'hover'"
         v-el:trigger
         :class="[prefixCls + '-trigger']"
         @mouseenter="hoverHandler"
         @mouseleave="hoverHandler">
      <slot name="trigger">trigger slot is not set</slot>
    </div>
    <div v-if="triggerEvent === 'focus'"
         v-el:trigger
         :class="[prefixCls + '-trigger']"
         @focus="focusHandler"
         @blur="blurHandler">
      <slot name="trigger">trigger slot is not set</slot>
    </div>
    <div v-el:popup
         v-show="show"
         :class="popupClassObj" >
      <slot name="popup">popup slot is not set</slot>
    </div>
  </div>
</template>

<script type="text/babel">
  import GlobalMixin from './../_utils/GlobalMixin.js'

  export default {
    mixins: [GlobalMixin],

    props: {
      triggerEvent: {
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
        let { prefixCls, placement } = this
        let classObj = {}

        classObj[prefixCls + '-popup'] = true
        classObj[prefixCls + '-popup-top'] = placement === 'top'
        classObj[prefixCls + '-popup-top-left'] = placement === 'topLeft'
        classObj[prefixCls + '-popup-top-right'] = placement === 'topRight'
        classObj[prefixCls + '-popup-left'] = placement === 'left'
        classObj[prefixCls + '-popup-left-top'] = placement === 'leftTop'
        classObj[prefixCls + '-popup-left-bottom'] = placement === 'leftBottom'
        classObj[prefixCls + '-popup-right'] = placement === 'right'
        classObj[prefixCls + '-popup-right-top'] = placement === 'rightTop'
        classObj[prefixCls + '-popup-right-bottom'] = placement === 'rightBottom'
        classObj[prefixCls + '-popup-bottom'] = placement === 'bottom'
        classObj[prefixCls + '-popup-bottom-left'] = placement === 'bottomLeft'
        classObj[prefixCls + '-popup-bottom-right'] = placement === 'bottomRight'

        return classObj
      }
    },

    methods: {
      toggle () {
        this.show = !this.show
      },

      /**
       * 设置tooltip坐标
       */
      resetPos () {
        let me = this
        const popup = me.$els.popup

        if (me.show && popup.offsetWidth === 0) {
          setTimeout(() => {
            me.resetPos()
          }, 0)
          return
        }

        const $trigger = me.$els.trigger.children[0]
        const offset = $trigger.getBoundingClientRect()
        const offsetLeft = document.documentElement.scrollLeft + document.body.scrollLeft + offset.left
        const offsetTop = document.documentElement.scrollTop + document.body.scrollTop + offset.top
        const offsetWidth = popup.offsetWidth
        const offsetHeight = popup.offsetHeight

        switch (me.placement) {
          case 'top' :
            me.position.left = offsetLeft - offsetWidth / 2 + $trigger.offsetWidth / 2
            me.position.top = offsetTop - offsetHeight
            break
          case 'topLeft' :
            me.position.left = offsetLeft - offsetWidth / 2 + $trigger.offsetWidth / 2 + offsetWidth / 4
            me.position.top = offsetTop - offsetHeight
            break
          case 'topRight' :
            me.position.left = offsetLeft - offsetWidth / 2 + $trigger.offsetWidth / 2 - offsetWidth / 4
            me.position.top = offsetTop - offsetHeight
            break
          case 'left':
            me.position.left = offsetLeft - offsetWidth
            me.position.top = offsetTop + $trigger.offsetHeight / 2 - offsetHeight / 2
            break
          case 'leftTop':
            me.position.left = offsetLeft - offsetWidth
            me.position.top = offsetTop + $trigger.offsetHeight / 4 - offsetHeight / 2 + offsetHeight / 4
            break
          case 'leftBottom':
            me.position.left = offsetLeft - offsetWidth
            me.position.top = offsetTop + $trigger.offsetHeight / 2 - offsetHeight / 2 - offsetHeight / 4 + $trigger.offsetHeight / 4
            break
          case 'right':
            me.position.left = offsetLeft + $trigger.offsetWidth
            me.position.top = offsetTop + $trigger.offsetHeight / 2 - offsetHeight / 2
            break
          case 'rightTop':
            me.position.left = offsetLeft + $trigger.offsetWidth
            me.position.top = offsetTop + $trigger.offsetHeight / 4 - offsetHeight / 2 + offsetHeight / 4
            break
          case 'rightBottom':
            me.position.left = offsetLeft + $trigger.offsetWidth
            me.position.top = offsetTop + $trigger.offsetHeight / 2 - offsetHeight / 2 - offsetHeight / 4 + $trigger.offsetHeight / 4
            break
          case 'bottom':
            me.position.left = offsetLeft - offsetWidth / 2 + $trigger.offsetWidth / 2
            me.position.top = offsetTop + $trigger.offsetHeight
            break
          case 'bottomLeft':
            me.position.left = offsetLeft - offsetWidth / 2 + $trigger.offsetWidth / 2 + offsetWidth / 4
            me.position.top = offsetTop + $trigger.offsetHeight
            break
          case 'bottomRight':
            me.position.left = offsetLeft - offsetWidth / 2 + $trigger.offsetWidth / 2 - offsetWidth / 4
            me.position.top = offsetTop + $trigger.offsetHeight
            break
          default:
            console.log('Wrong placement prop')
        }
        popup.style.top = this.position.top + 'px'
        popup.style.left = this.position.left + 'px'
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
      let popup = this.$els.popup

      if (popup && popup.nodeType) {
        popup.parentNode.removeChild(popup)
      }
    }
  }
</script>
