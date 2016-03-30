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
      const el = this.$el
      const toggle = el.querySelector('[data-toggle="dropdown"]')
      if (toggle) {
        const event = this.trigger === 'click' ? 'click' : 'mouseenter'
        toggle.addEventListener(event, this.toggleDropdown)
      }
      if(this.trigger === 'hover') {
        var me = this;
        me.$el.addEventListener('mouseleave',()=>{
          setTimeout(()=>{
            me.open = false
          },300)
          
        })
      }
      let self = this;
      this._closeEvent = EventListener.listen(window, 'click', (e)=> {
        if (!el.contains(e.target)) { 
          self.open = false
        }
      })
    },
    beforeDestroy() {
      if (this._closeEvent) this._closeEvent.remove()
    }
  }
</script>
