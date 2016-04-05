<template>
  <button type="{{type}}" class="btn" :class="btnClassObj">
    <slot>{{value}}</slot>
  </button>
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
        default: ''
      },
      primary: null,
      secondary: null,
      tertiary: null,
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
          'text': typeof(this.text) !== "undefined"
        }
      }
    }
  }
</script>
