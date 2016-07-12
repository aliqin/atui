<template>
  <ul :class="['atui-menu','atui-menu-root','atui-menu-'+ mode]">
    <slot></slot>
  </ul>
</template>

<script>
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
    me.$el.querySelectorAll('.' + me.prefixCls + '-menu-item').forEach((item) => {
      item.addEventListener('click', () => {
        let className = me.prefixCls + '-menu-selected'
        let selectedItem = me.$el.querySelector('.' + className)
        if (selectedItem) {
          Vue.util.removeClass(me.$el.querySelector('.' + className), className)
        }
        Vue.util.addClass(item, className)
      }, false)
    })
  },
  beforeDestroy () {
    // TOTO
  }
}
</script>
