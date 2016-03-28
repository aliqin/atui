<template>
  <input v-if="isDisabled" type="{{type}}" class="input" :class="classObj" placeholder="{{placeholder}}" disabled />
  <input v-else type="{{type}}" class="input" :class="classObj" placeholder="{{placeholder}}" />
</template>
<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'text'
      },
      placeholder: {
        type: String,
        default: ''
      },
      large: null,
      small: null,
      disabled: null,
      error: null,
      success: null
    },
    data () {
      return {
        classObj: {
          'large': typeof(this.large) !== "undefined",
          'small': typeof(this.small) !== "undefined",
          'error': typeof(this.error) !== "undefined",
          'success': typeof(this.success) !== "undefined"
        },
        isDisabled: typeof(this.disabled) !== "undefined"
      }
    }
  }
</script>
