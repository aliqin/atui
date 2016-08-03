<template>
  <span :class="switchClassObj"
        :style="{borderColor: this.disabled? '#f2f2f2' : (this.checked) ? color : '#bfbfbf', backgroundColor: this.disabled? '#f2f2f2' : (this.checked) ? color : '#bfbfbf'}"
        @click="changeHandler">
    <span :class="[prefixCls + '-switch-content']">
      <slot v-if="checked && !small" name="checkedPart"></slot>
      <slot v-if="!checked && !small" name="unCheckedPart"></slot>
    </span>
  </span>
</template>

<script>
export default {
  props: {
    checked: Boolean,
    value: String,
    disabled: Boolean,
    small: Boolean,
    color: String,
    prefixCls: {
      type: String,
      default: 'atui'
    }
  },
  computed: {
    switchClassObj () {
      let { prefixCls, small, checked, disabled } = this
      let classObj = {}

      classObj[prefixCls + '-switch'] = true
      classObj[prefixCls + '-switch-small'] = small
      classObj[prefixCls + '-switch-checked'] = checked
      classObj[prefixCls + '-switch-disabled'] = disabled

      return classObj
    }
  },
  methods: {
    changeHandler () {
      if (this.disabled) {
        return
      }
      this.checked = !this.checked
      this.$dispatch('change', this)
    }
  }
}
</script>
