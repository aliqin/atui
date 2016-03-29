<template>
<i class="iconfont icon-{{type}}">
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