<template>
  <input v-if="isDisabled" type="{{type}}" class="input" :class="classObj" placeholder="{{placeholder}}" disabled v-model="value" />
  <input v-else type="{{type}}" class="input" :class="classObj" placeholder="{{placeholder}}" v-model="value" />
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
      },
      value: {
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
