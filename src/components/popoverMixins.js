import EventListener from './utils/EventListener.js'
import coerceBoolean from './utils/coerceBoolean.js'

const PopoverMixin = {
  props: {
    trigger: {
      type: String,
      default: 'click'
    },
    effect: {
      type: String,
      default: 'zoom'
    },
    title: {
      type: String
    },
    content: [String, Number],
    header: {
      type: Boolean,
      coerce: coerceBoolean,
      default: true
    },
    placement: {
      type: String
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

  methods: {
    toggle () {
      this.show = !this.show
    },

    /**
     * 设置tooltip坐标
       */
    resetPos () {
      let me = this
      const popover = me.$els.popover
      if (me.show && popover.offsetWidth === 0) {
        setTimeout(() => {
          me.resetPos()
        })
        return
      }
      const triger = me.$els.trigger.children[0]
      const offset = triger.getBoundingClientRect()
      const offsetLeft = document.documentElement.scrollLeft + document.body.scrollLeft + offset.left
      const offsetTop = document.documentElement.scrollTop + document.body.scrollTop + offset.top
      const offsetWidth = popover.offsetWidth + 10
      const offsetHeight = popover.offsetHeight + 5 // 减去5像素的padding
      switch (me.placement) {
        case 'top' :
          me.position.left = offsetLeft - offsetWidth / 2 + triger.offsetWidth / 2
          me.position.top = offsetTop - offsetHeight
          break
        case 'topLeft' :
          me.position.left = offsetLeft - offsetWidth / 2 + triger.offsetWidth / 2 + offsetWidth / 4
          me.position.top = offsetTop - offsetHeight
          break
        case 'topRight' :
          me.position.left = offsetLeft - offsetWidth / 2 + triger.offsetWidth / 2 - offsetWidth / 4
          me.position.top = offsetTop - offsetHeight
          break
        case 'left':
          me.position.left = offsetLeft - offsetWidth
          me.position.top = offsetTop + triger.offsetHeight / 2 - offsetHeight / 2
          break
        case 'leftTop':
          me.position.left = offsetLeft - offsetWidth
          me.position.top = offsetTop + triger.offsetHeight / 4 - offsetHeight / 2 + offsetHeight / 4
          break
        case 'leftBottom':
          me.position.left = offsetLeft - offsetWidth
          me.position.top = offsetTop + triger.offsetHeight / 2 - offsetHeight / 2 - offsetHeight / 4 + triger.offsetHeight / 4
          break
        case 'right':
          me.position.left = offsetLeft + triger.offsetWidth
          me.position.top = offsetTop + triger.offsetHeight / 2 - offsetHeight / 2
          break
        case 'rightTop':
          me.position.left = offsetLeft + triger.offsetWidth
          me.position.top = offsetTop + triger.offsetHeight / 4 - offsetHeight / 2 + offsetHeight / 4
          break
        case 'rightBottom':
          me.position.left = offsetLeft + triger.offsetWidth
          me.position.top = triger.offsetTop + triger.offsetHeight / 2 - offsetHeight / 2 - offsetHeight / 4 + triger.offsetHeight / 4
          break
        case 'bottom':
          me.position.left = offsetLeft - offsetWidth / 2 + triger.offsetWidth / 2
          me.position.top = offsetTop + triger.offsetHeight
          break
        case 'bottomLeft':
          me.position.left = offsetLeft - offsetWidth / 2 + triger.offsetWidth / 2 + offsetWidth / 4
          me.position.top = offsetTop + triger.offsetHeight
          break
        case 'bottomRight':
          me.position.left = offsetLeft - offsetWidth / 2 + triger.offsetWidth / 2 - offsetWidth / 4
          me.position.top = offsetTop + triger.offsetHeight
          break
        default:
          console.log('Wrong placement prop')
      }
      popover.style.top = this.position.top + 'px'
      popover.style.left = this.position.left + 'px'
    }
  },
  attached () {
    if (this.$els.popover) {
      document.body.appendChild(this.$els.popover)
    }
  },
  ready () {
    if (!this.$els.popover) return console.error("Couldn't find popover v-el in your component that uses popoverMixin.")

    const me = this
    // const popover = this.$els.popover
    const triger = this.$els.trigger.children[0]

    if (this.trigger === 'hover') {
      this._mouseenterEvent = EventListener.listen(triger, 'mouseenter', () => {
        me.show = true
        me.resetPos()
      })
      this._mouseleaveEvent = EventListener.listen(triger, 'mouseleave', () => this.show = false)
    } else if (this.trigger === 'focus') {
      this._focusEvent = EventListener.listen(triger, 'focus', () => {
        me.show = true
        me.resetPos()
      })
      this._blurEvent = EventListener.listen(triger, 'blur', () => this.show = false)
    } else {
      this._clickEvent = EventListener.listen(triger, 'click', () => {
        me.show = !me.show
        me.resetPos()
      })
    }
  },

  beforeDestroy () {
    if (this._blurEvent) {
      this._blurEvent.remove()
      this._focusEvent.remove()
    }
    if (this._mouseenterEvent) {
      this._mouseenterEvent.remove()
      this._mouseleaveEvent.remove()
    }
    if (this._clickEvent) this._clickEvent.remove()
  }
}

export default PopoverMixin
