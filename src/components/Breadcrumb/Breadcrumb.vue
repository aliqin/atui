<template>
<div class="breadcrumbs">
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
  ready () {
    const me = this
    me.$children.forEach((child) => {
      child.slash = me.slash
    })
  }
}
</script>
