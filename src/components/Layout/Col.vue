<template>
<div :class="className"><slot></slot></div>
</template>

<script>
export default {
  props: {
    span:{
      type: String,
      default: '1'
    },
    type:{
      type: String,
      default: 'md'
    }
  },
  data () {
    return {
      className: ['col', this.type, this.span].join('-')
    }
  }
}
</script>
