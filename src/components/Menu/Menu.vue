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
    },
    selectedKey: String
  },
  ready () {
    let me = this
    if (me.selectedKey) {
      this.$broadcast('searchItem', me.selectedKey)
    }
  },
  events: {
    itemClicked (item, key) {
      this.selectedKey = key
      this.$broadcast('searchItem', key)
      // 触发事件给调用上级组件
      this.$dispatch('click', item, key)
    }
  }
}
</script>
