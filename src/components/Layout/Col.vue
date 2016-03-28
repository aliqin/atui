<template>
<div :class="className"><slot></slot></div>
</template>

<script>
export default {
  props: {
    span:Number,
    type:{
      type:String,
      default:'lg'
    }
  },
  data() {
    return {
      className:['col',type,span].join('-')
    }
  }
}
</script>