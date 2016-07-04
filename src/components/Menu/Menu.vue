<template>
  <ul :class="['atui-menu','atui-menu-'+ mode]">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      default: 'vertical'
    }
  }
}
</script>
