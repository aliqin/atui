import EventListener from '../utils/EventListener.js'
import coerceBoolean from '../utils/coerceBoolean.js'

const PopoverMixin = {
  props: {
    trigger: {
      type: String,
      default: 'click'
    },
    effect: {
      type: String,
      default: 'fadein'
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

  data() {
    return {
      position: {
        top: 0,
        left: 0
      },
      show: true
    }
  },

  methods: {
    toggle() {
      this.show = !this.show;

      if(this.show) {
        this.resetPos()
      }
    },

    /**
     * 设置tooltip坐标
     * @param initial
       */
    resetPos (initial) {
      const popover = this.$els.popover
      const triger  = this.$els.trigger.children[0]
      const offset = triger.getBoundingClientRect()
      const offsetLeft = document.body.scrollLeft + offset.left
      const offsetTop = document.body.scrollTop + offset.top
      switch (this.placement) {
        case 'top' :
          this.position.left = offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2
          this.position.top = offsetTop  - popover.offsetHeight
          break
        case 'topLeft' :
          this.position.left = offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2 + popover.offsetWidth / 4
          this.position.top = offsetTop  - popover.offsetHeight
          break
        case 'topRight' :
          this.position.left = offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2 - popover.offsetWidth / 4
          this.position.top = offsetTop  - popover.offsetHeight
          break
        case 'left':
          this.position.left = offsetLeft - popover.offsetWidth
          this.position.top = offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2
          break
        case 'leftTop':
          this.position.left = offsetLeft - popover.offsetWidth
          this.position.top = offsetTop + triger.offsetHeight / 4 - popover.offsetHeight / 2 + popover.offsetHeight / 4
          break
        case 'leftBottom':
          this.position.left = offsetLeft - popover.offsetWidth
          this.position.top = offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2 - popover.offsetHeight / 4 + triger.offsetHeight / 4
          break
        case 'right':
          this.position.left = offsetLeft + triger.offsetWidth
          this.position.top = offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2
          break
        case 'rightTop':
          this.position.left = offsetLeft + triger.offsetWidth
          this.position.top = offsetTop + triger.offsetHeight / 4 - popover.offsetHeight / 2 + popover.offsetHeight / 4
          break
        case 'rightBottom':
          this.position.left = offsetLeft + triger.offsetWidth
          this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2 - popover.offsetHeight / 4 + triger.offsetHeight / 4
          break
        case 'bottom':
          this.position.left = offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2
          this.position.top = offsetTop + triger.offsetHeight
          break
        case 'bottomLeft':
          this.position.left = offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2 + popover.offsetWidth / 4
          this.position.top = offsetTop + triger.offsetHeight
          break
        case 'bottomRight':
          this.position.left = offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2 - popover.offsetWidth / 4
          this.position.top = offsetTop + triger.offsetHeight
          break
        default:
          console.log('Wrong placement prop')
      }

      //如果popover没有大小,则重新设置一次
      if (popover.offsetWidth == 0 && popover.offsetHeight == 0) {
        setTimeout(() => this.resetPos(initial))
        return
      }

      popover.style.width  = popover.offsetWidth + 'px'
      popover.style.height = popover.offsetHeight + 'px'
      popover.style.top    = this.position.top + 'px'
      popover.style.left   = this.position.left + 'px'

      if (initial) {
        popover.style.display = 'none'
        this.show             = !this.show
      }

      //使用transform:translate定位,会影响到transform:scale动画效果
      //this.position.top = this.position.top - triger.offsetHeight - 5
      //this.position.left -= 5
      //popover.style.transform = 'translate(' + this.position.left + 'px, ' + this.position.top + 'px)'
    },
  },
  attached() {
    if(this.$els.popover) {
      document.body.appendChild(this.$els.popover)
    }
  },
  ready() {
    if (!this.$els.popover) return console.error("Couldn't find popover v-el in your component that uses popoverMixin.");

    const me      = this
    const popover = this.$els.popover
    const triger  = this.$els.trigger.children[0]

    if (this.trigger === 'hover') {
      this._mouseenterEvent = EventListener.listen(triger, 'mouseenter', ()=> {
        me.show = true
        me.resetPos()
      })
      this._mouseleaveEvent = EventListener.listen(triger, 'mouseleave', ()=> this.show = false)
    } else if (this.trigger === 'focus') {
      this._focusEvent = EventListener.listen(triger, 'focus', ()=> {
        me.show = true
        me.resetPos()
      })
      this._blurEvent = EventListener.listen(triger, 'blur', ()=> this.show = false)
    } else {
      this._clickEvent = EventListener.listen(triger, 'click', this.toggle)
    }

    this.resetPos(true)
  },

  beforeDestroy() {
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
