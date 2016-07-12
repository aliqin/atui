<template>
  <div :class="[prefixCls + '-dropdown', open && (prefixCls + '-dropdown-open')]">
    <slot></slot>
    <slot name="dropdown-menu"></slot>
  </div>
</template>

<script type="text/babel">
  import EventListener from '../utils/EventListener'
  import coerceBoolean from '../utils/coerceBoolean.js'

  export default {
    props: {
      trigger: {
        type: String,
        default: 'click'
      },
      open: {
        type: Boolean,
        coerce: coerceBoolean,
        default: false
      },
      prefixCls: {
        type: String,
        default: 'atui'
      }
    },
    methods: {
      toggleDropdown (e) {
        e.preventDefault()
        this.open = !this.open
      }
    },
    ready () {
      const me = this
      const el = me.$el
      const toggle = el.querySelector('[data-toggle="dropdown"]')
      let self = this

      if (!toggle) {
        return
      }

      const event = me.trigger === 'click' ? 'click' : 'mouseenter'

      toggle.addEventListener(event, () => {
        clearTimeout(me.timeout)
        me.open = true
      })

      if (me.trigger === 'hover') {
        me.$el.addEventListener('mouseleave', () => {
          me.timeout = setTimeout(() => {
            me.open = false
          }, 300)
        })

        me.$el.addEventListener('mouseenter', () => {
          if (me.timeout) {
            clearTimeout(me.timeout)
            me.timeout = null
          }
        })
      }

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
