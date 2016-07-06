<template>
<div :class="[prefixCls + '-panel', prefixCls + '-panel-default']">
    <div :class="[prefixCls + '-panel-heading']" @click="toggleIsOpen()">
      <slot name="panel-header"></slot>
    </div>
    <div :class="[prefixCls + '-panel-collapse']"
      v-el:panel
      v-show="isOpen"
      transition="slide"
    >
      <div :class="[prefixCls + '-panel-body']">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
import coerceBoolean from '../utils/coerceBoolean.js'

export default {
  props: {
    isOpen: {
      type: Boolean,
      coerce: coerceBoolean,
      default: false
    },
    header: {
      type: String
    },
    onToggle: {
      type: Function,
      default: () => {}
    },
    index: {
      type: Number
    },
    prefixCls: {
      type: String,
      default: 'atui'
    }
  },
  data () {
    return {
      height: 0
    }
  },
  methods: {
    toggleIsOpen () {
      this.isOpen = !this.isOpen
      this.onToggle(this)
      this.$dispatch('isOpenEvent', this)
    }
  },
  ready () {
    const panel = this.$els.panel
    panel.style.display = 'block'
    this.height = panel.offsetHeight
    // panel.style.maxHeight = this.height + 'px'
    if (!this.isOpen) panel.style.display = 'none'
  }
}
</script>
