<template>
  <ul :class="[prefixCls + '-menu', prefixCls + '-menu-root', prefixCls + '-menu-'+ mode]">
    <slot></slot>
  </ul>
</template>

<script type="text/babel">
export default {
  name: 'Menu',
  props: {
    mode: {
      type: String,
      default: 'inline'
    },
    prefixCls: {
      type: String,
      default: 'atui'
    },
    openOne: Boolean,
    selectedKey: String
  },
  created () {
    this.$bus = new Vue({})
  },
  mounted () {
    let me = this
    if (me.selectedKey) {
      me.$bus.$emit('Menu-searchItem', me.selectedKey)
    }
    me.$bus.$on('Menu-itemClicked', (item, uuid) => {
      me.$bus.$emit('Menu-searchItem', uuid)
      me.$emit('click', item, uuid)
    })
  }
}
</script>
