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
      validStatus: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        classObj: {
          'large': typeof(this.large) !== "undefined",
          'small': typeof(this.small) !== "undefined",
          'error': this.validStatus == 'error',
          'success': this.validStatus == 'success',
          'warn': this.validStatus == 'warn',
        },
        isDisabled: this.validStatus == 'disabled'
      }
    }
  }
</script>
