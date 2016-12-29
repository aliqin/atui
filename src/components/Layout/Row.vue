<template>
<div :class="[prefixCls + '-row']"><slot></slot></div>
</template>

<script>
  export default {
    name: 'Row',
    props: {
      prefixCls: {
        type: String,
        default: 'atui'
      }
    }
  }
</script>
