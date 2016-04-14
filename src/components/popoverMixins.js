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
      default: 'fadein'
    },
    title: {
      type: String
    },
    content: {
      type: String
    },
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
    },

    /**
     * 设置tooltip坐标
     * @param cb
       */
    setTooltipPos (cb) {
      const popover = this.$els.popover
      const triger  = this.$els.trigger.children[0]

      switch (this.placement) {
        case 'top' :
          this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2
          this.position.top = triger.offsetTop  - popover.offsetHeight
          break
        case 'topLeft' :
          this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2 + popover.offsetWidth / 4
          this.position.top = triger.offsetTop  - popover.offsetHeight
          break
        case 'topRight' :
          this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2 - popover.offsetWidth / 4
          this.position.top = triger.offsetTop  - popover.offsetHeight
          break
        case 'left':
          this.position.left = triger.offsetLeft - popover.offsetWidth
          this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2
          break
        case 'leftTop':
          this.position.left = triger.offsetLeft - popover.offsetWidth
          this.position.top = triger.offsetTop + triger.offsetHeight / 4 - popover.offsetHeight / 2 + popover.offsetHeight / 4
          break
        case 'leftBottom':
          this.position.left = triger.offsetLeft - popover.offsetWidth
          this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2 - popover.offsetHeight / 4 + triger.offsetHeight / 4
          break
        case 'right':
          this.position.left = triger.offsetLeft + triger.offsetWidth
          this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2
          break
        case 'rightTop':
          this.position.left = triger.offsetLeft + triger.offsetWidth
          this.position.top = triger.offsetTop + triger.offsetHeight / 4 - popover.offsetHeight / 2 + popover.offsetHeight / 4
          break
        case 'rightBottom':
          this.position.left = triger.offsetLeft + triger.offsetWidth
          this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2 - popover.offsetHeight / 4 + triger.offsetHeight / 4
          break
        case 'bottom':
          this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2
          this.position.top = triger.offsetTop + triger.offsetHeight
          break
        case 'bottomLeft':
          this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2 + popover.offsetWidth / 4
          this.position.top = triger.offsetTop + triger.offsetHeight
          break
        case 'bottomRight':
          this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2 - popover.offsetWidth / 4
          this.position.top = triger.offsetTop + triger.offsetHeight
          break
        default:
          console.log('Wrong placement prop')
      }

      popover.style.top = this.position.top + 'px'
      popover.style.left = this.position.left + 'px'

      //使用transform:translate定位,会影响到transform:scale动画效果
      //this.position.top = this.position.top - triger.offsetHeight - 5
      //this.position.left -= 5
      //popover.style.transform = 'translate(' + this.position.left + 'px, ' + this.position.top + 'px)'

      cb()
    },

    /**
     * 校准tooltip坐标
     */
    ajustTooltipPos () {
      const me      = this
      const popover = this.$els.popover
      const triger  = this.$els.trigger.children[0]
      let w         = popover.offsetWidth
      let h         = popover.offsetHeight

      this.setTooltipPos(() => {
        //修改绝对定位元素的坐标，元素的宽度和高度也会变化,故在修改坐标后,需要重新检查
        //目前看,检查1次即可保证定位精准
        if ((popover.offsetWidth == w && popover.offsetHeight == h) || ++this.ajustTimes > 2) {
          popover.style.display = 'none'
          me.show               = !me.show
        }
        else {
          me.ajustTooltipPos()
        }
      })
    }
  },

  ready() {
    if (!this.$els.popover) return console.error("Couldn't find popover v-el in your component that uses popoverMixin.");
    const popover = this.$els.popover
    const triger  = this.$els.trigger.children[0]

    if (this.trigger === 'hover') {
      this._mouseenterEvent = EventListener.listen(triger, 'mouseenter', ()=> this.show = true)
      this._mouseleaveEvent = EventListener.listen(triger, 'mouseleave', ()=> this.show = false)
    } else if (this.trigger === 'focus') {
      this._focusEvent = EventListener.listen(triger, 'focus', ()=> this.show = true)
      this._blurEvent = EventListener.listen(triger, 'blur', ()=> this.show = false)
    } else {
      this._clickEvent = EventListener.listen(triger, 'click', this.toggle)
    }

    this.ajustTimes = 0
    this.ajustTooltipPos()
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
