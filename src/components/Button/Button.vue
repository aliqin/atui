<template>
  <button :type="type" :class="btnClassObj">
    <span v-if="loading" :class="[prefixCls + '-btn-loadingWrap']">
      <span :class="[prefixCls + '-loading-bounce1']"></span>
      <span :class="[prefixCls + '-loading-bounce2']"></span>
      <span :class="[prefixCls + '-loading-bounce3']"></span>
    </span>
    <slot>{{value}}</slot>
  </button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      type: {
        type: String,
        default: 'button'
      },
      large: Boolean,
      small: Boolean,
      loading: Boolean,
      value: {
        type: String,
        default: ''
      },
      primary: Boolean,
      secondary: Boolean,
      tertiary: Boolean,
      text: Boolean,
      prefixCls: {
        type: String,
        default: 'atui'
      }
    },
    computed: {
      btnClassObj () {
        let { prefixCls, large, small, primary, secondary, tertiary, text, loading } = this
        let btnClass = {}
        btnClass[prefixCls + '-btn'] = true
        btnClass[prefixCls + '-btn-large'] = large
        btnClass[prefixCls + '-btn-small'] = small
        btnClass[prefixCls + '-btn-primary'] = primary
        btnClass[prefixCls + '-btn-secondary'] = secondary
        btnClass[prefixCls + '-btn-tertiary'] = tertiary
        btnClass[prefixCls + '-btn-text'] = text
        btnClass[prefixCls + '-btn-loading'] = loading

        return btnClass
      }
    }
  }
</script>
