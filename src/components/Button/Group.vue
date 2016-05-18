<template>
  <div class="at-btn-group" :class="btnGroupClassObj">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      large: null,
      small: null
    },
    computed: {
      btnGroupClassObj () {
        return {
          'large': typeof(this.large) !== "undefined",
          'small': typeof(this.small) !== "undefined"
        }
      }
    }
  }
</script>
