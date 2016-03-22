<template>
<i :class="{iconfont:true,type:type}">
  <slot></slot>
</i>
</template>

<script>

export default {
  props: {
    type: {
      type: String,
      require: true
    }
  }
}

</script>