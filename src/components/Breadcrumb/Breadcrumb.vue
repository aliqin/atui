<template>
<div :class="[prefixCls + '-breadcrumbs']">
  <slot></slot>
</div>
</template>

<script type="text/babel">
export default {
  props: {
    slash: {
      type: String,
      default: '/'
    },
    prefixCls: {
      type: String,
      default: 'atui'
    }
  },
  ready () {
    const me = this
    me.$children.forEach((child) => {
      child.slash = me.slash
    })
  }
}
</script>
