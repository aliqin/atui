<template>
<div :class="[prefixCls + '-col-' + type + '-' + span]">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'Col',
  props: {
    span: {
      type: String,
      default: '1'
    },
    type: {
      type: String,
      default: 'sm'
    },
    prefixCls: {
      type: String,
      default: 'atui'
    }
  }
}
</script>
