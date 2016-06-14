<template>
  <span :class="wrapClasses" @click="changeHandler" :style="{borderColor: this.disabled? '#f2f2f2' : (this.checked) ? color : '#bfbfbf', backgroundColor: this.disabled? '#f2f2f2' : (this.checked) ? color : '#bfbfbf'}">
    <span class="switch-content">
      <slot v-if="checked && !small" name="checkedPart"></slot>
      <slot v-if="!checked && !small" name="unCheckedPart"></slot>
    </span>
  </span>
</template>

<script>
export default {
  props: {
    checked: {
      type: Boolean
    },
    value: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    small: {
      type: Boolean
    },
    color: {
      type: String
    }
  },
  computed: {
    wrapClasses () {
      return {
        'switch': true,
        'small': this.small,
        'switch-checked': this.checked,
        'switch-disabled': this.disabled
      }
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
