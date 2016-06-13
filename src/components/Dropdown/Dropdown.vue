<template>
  <div :class="{dropdown:true,open:open}">
    <slot></slot>
    <slot name="dropdown-menu"></slot>
  </div>
</template>
<script>
  import EventListener from '../utils/EventListener'
  import coerceBoolean from '../utils/coerceBoolean.js'

  export default {
    props:{
      trigger:{
        type: String,
        default: 'click'
      },
      open:{
        type: Boolean,
        coerce: coerceBoolean,
        default: false
      }
    },
    methods: {
      toggleDropdown(e) {
        e.preventDefault()
        this.open = !this.open
      }
    },
    ready() {
      const me = this
      const el = me.$el
      const toggle = el.querySelector('[data-toggle="dropdown"]')
      if(!toggle) {
        return
      }
      const event = me.trigger === 'click' ? 'click' : 'mouseenter'
      toggle.addEventListener(event, () => {
        clearTimeout(me.timeout)
        me.open = true
      })

      if(me.trigger === 'hover') {
        me.$el.addEventListener('mouseleave',() => {
          me.timeout = setTimeout(() => {
            me.open = false
          },300)
        })
      }
      let self = this;
      this._closeEvent = EventListener.listen(window, 'click', (e) => {
        if (!el.contains(e.target)) {
          self.open = false
        }
      })
    },
    beforeDestroy () {
      if (this._closeEvent) this._closeEvent.remove()
    }
  }
</script>
