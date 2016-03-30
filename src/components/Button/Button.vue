<template>
  <button type="{{type}}" class="btn" :class="btnClassObj">{{{value}}}</button>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'button'
      },
      large: null,
      small: null,
      value: {
        type: String,
        default: '确定'
      },
      primary: null,
      secondary: null,
      tertiary: null,
      disabled: null,
      text: null
    },
    computed: {
      btnClassObj () {
        return {
          'large': typeof(this.large) !== "undefined",
          'small': typeof(this.small) !== "undefined",
          'primary': typeof(this.primary) !== "undefined",
          'secondary': typeof(this.secondary) !== "undefined",
          'tertiary': typeof(this.tertiary) !== "undefined",
          'disabled': typeof(this.disabled) !== "undefined",
          'text': typeof(this.text) !== "undefined"
        }
      }
    }
  }
</script>
