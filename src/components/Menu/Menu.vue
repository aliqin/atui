<template>
  <ul :class="[prefixCls + '-menu', prefixCls + '-menu-root', prefixCls + '-menu-'+ mode]">
    <slot></slot>
  </ul>
</template>

<script type="text/babel">
export default {
  props: {
    mode: {
      type: String,
      default: 'inline'
    },
    prefixCls: {
      type: String,
      default: 'atui'
    }
  },
  ready () {
    let me = this
    let items = me.$el.querySelectorAll('.' + me.prefixCls + '-menu-item')

    for (let i = 0; i < items.length; i++) {
      let item = items[i]
      item.addEventListener('click', () => {
        let className = me.prefixCls + '-menu-selected'
        let selectedItem = me.$el.querySelector('.' + className)

        if (selectedItem) {
          Vue.util.removeClass(me.$el.querySelector('.' + className), className)
        }

        Vue.util.addClass(item, className)
      }, false)
    }
  },
  beforeDestroy () {
    // TOTO GC
  }
}
</script>
