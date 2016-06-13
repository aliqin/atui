<template>
  <label class="button"
  v-bind:class="{
    'active':checked,
    'large': size == 'large',
    'small': size == 'small'
  }">
    <input type="checkbox" autocomplete="off"
    :checked="checked"
    @click="handleClick"
    />

    <slot></slot>
  </label>
</template>
<script>
// 'btn-success':type == 'success',
// 'btn-warning':type == 'warning',
// 'btn-info':type == 'info',
// 'btn-danger':type == 'danger',
// 'btn-default':type == 'default',
// 'btn-primary':type == 'primary',
import coerceBoolean from './utils/coerceBoolean.js'

export default {
  props: {
    value: {
      type: String
    },
    checked: {
      type: Boolean,
      coerce: coerceBoolean,
      default: false
    },
    size: String
  },
  methods: {
    handleClick () {
      const parent = this.$parent
      const index = parent.value.indexOf(this.value)
      index === -1 ? parent.value.push(this.value) : parent.value.splice(index, 1)
      this.checked = !this.checked
    }
  },
  created () {
    if (this.$parent.value.length) {
      this.checked = this.$parent.value.indexOf(this.value) > -1
    } else if (this.checked) {
      this.$parent.value.push(this.value)
    }
  }
}
</script>
