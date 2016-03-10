<template>
  <div class="dropdown">
    <slot></slot>
    <slot name="dropdown-menu"></slot>
  </div>
</template>
<script>
  import EventListener from './utils/EventListener'
  export default {
    props:{
      trigger:{
        type: String,
        default: 'click'
      }
    },
    methods: {
      toggleDropdown(e) {
        e.preventDefault()
        this.$el.classList.toggle('open')
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
            me.$el.classList.remove('open')
          },300)
          
        })
      }
      this._closeEvent = EventListener.listen(window, 'click', (e)=> {
        if (!el.contains(e.target)) el.classList.remove('open')
      })
    },
    beforeDestroy() {
      if (this._closeEvent) this._closeEvent.remove()
    }
  }
</script>
