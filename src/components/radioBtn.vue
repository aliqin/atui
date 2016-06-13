<template>
  <label class="button"
  :class="{
    'active':active,
    'large': size == 'large',
    'small': size == 'small'
  }">
    <input type="radio" autocomplete="off"
      :checked="checked"
      @click="handleClick"
    />
    <slot></slot>
  </label>
</template>

<script>
import coerceBoolean from './utils/coerceBoolean.js'

export default {
  name: 'radio-btn',
  props: {
    value: {
      type: String
    },
    checked: {
      type: Boolean,
      coerce: coerceBoolean,
      default: false
    },
    size: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    active () {
      return this.$parent.value === this.value
    }
  },
  methods: {
    handleClick () {
      this.$parent.value = this.value
    }
  },
  created () {
    if (this.$parent.value === this.value) {
      this.checked = true
    } else if (!this.$parent.value.length && this.checked) {
      this.$parent.value = this.value
    }
  }
}
</script>
