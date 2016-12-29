<template>
  <span :class="switchClassObj"
        :style="{borderColor: this.isDisabled? '#f2f2f2' : (this.isChecked) ? color : '#bfbfbf', backgroundColor: this.isDisabled? '#f2f2f2' : (this.isChecked) ? color : '#bfbfbf'}"
        @click="changeHandler">
    <span :class="[prefixCls + '-switch-content']">
      <slot v-if="isChecked && !small" name="checkedPart"></slot>
      <slot v-if="!isChecked && !small" name="unCheckedPart"></slot>
    </span>
  </span>
</template>

<script>
export default {
  name: 'Switch',
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
  data () {
    return {
      isChecked: this.checked,
      isDisabled: this.disabled
    }
  },
  watch: {
    checked: function (val, oldVal) {
      this.isChecked = this.checked
    },
    isChecked: function (val, oldVal) {
      this.$emit('check-change', val)
    },
    disabled: function (val, oldVal) {
      this.isDisabled = val
    }
  },
  computed: {
    switchClassObj () {
      let { prefixCls, small, isChecked, isDisabled } = this
      let classObj = {}

      classObj[prefixCls + '-switch'] = true
      classObj[prefixCls + '-switch-small'] = small
      classObj[prefixCls + '-switch-checked'] = isChecked
      classObj[prefixCls + '-switch-disabled'] = isDisabled

      return classObj
    }
  },
  methods: {
    changeHandler () {
      if (this.isDisabled) {
        return
      }
      this.isChecked = !this.isChecked
      this.$emit('change', this)
    }
  }
}
</script>
