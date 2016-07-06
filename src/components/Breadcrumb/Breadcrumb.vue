<template>
<div :class="[prefixCls + '-breadcrumbs']">
  <slot></slot>
</div>
</template>

<script>
export default {
  props: {
    slash: {
      type: String,
      default: '/'
    }
  },
  data () {
    return {
      prefixCls: 'atui'
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
