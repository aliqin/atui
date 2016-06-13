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
      large: Boolean,
      small: Boolean,
      value: {
        type: String,
        default: ''
      },
      primary: Boolean,
      secondary: Boolean,
      tertiary: Boolean,
      text: Boolean
    },
    computed: {
      btnClassObj () {
        let { large, small, primary, secondary, tertiary, text } = this
        return {
          large,
          small,
          primary,
          secondary,
          tertiary,
          text
        }
      }
    }
  }
</script>
