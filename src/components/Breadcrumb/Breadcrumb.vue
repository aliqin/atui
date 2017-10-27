<template>
<div :class="[prefixCls + '-breadcrumbs']">
  <slot></slot>
</div>
</template>

<script type="text/babel">
export default {
  name: 'Breadcrumb',
  props: {
    symbol: {
      type: String,
      default: '/'
    },
    prefixCls: {
      type: String,
      default: 'atui'
    }
  },
  mounted () {
    const me = this
    me.$children.forEach((child) => {
      child.symbol = me.symbol
    })
  }
}
</script>
