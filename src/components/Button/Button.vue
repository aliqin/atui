<template>
  <button :type="type" :class="btnClassObj">
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
    data () {
      return {
        prefixCls: 'atui'
      }
    },
    computed: {
      btnClassObj () {
        let { prefixCls, large, small, primary, secondary, tertiary, text } = this
        let btnClass = {}

        btnClass[prefixCls + '-btn'] = true
        btnClass[prefixCls + '-btn-large'] = large
        btnClass[prefixCls + '-btn-small'] = small
        btnClass[prefixCls + '-btn-primary'] = primary
        btnClass[prefixCls + '-btn-secondary'] = secondary
        btnClass[prefixCls + '-btn-tertiary'] = tertiary
        btnClass[prefixCls + '-btn-text'] = text

        return btnClass
      }
    }
  }
</script>
