<template>
<div :class="[prefixCls + '-panel', prefixCls + '-panel-default']">
    <div :class="[prefixCls + '-panel-heading']"
      @click="toggleIsOpen()">
      <slot name="panel-header"></slot>
    </div>
    <div :class="[prefixCls + '-panel-collapse']"
      v-el:panel
      v-show="open"
      transition="collapse"
    >
      <div :class="[prefixCls + '-panel-body']">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
export default {
  props: {
    open: Boolean,
    header: String,
    onToggle: {
      type: Function,
      default: () => {}
    },
    index: Number,
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
      this.open = !this.open
      this.onToggle(this)
      this.$dispatch('isOpenEvent', this)
    }
  },
  ready () {
    const panel = this.$els.panel
    panel.style.display = 'block'
    this.height = panel.offsetHeight
    if (!this.open) panel.style.display = 'none'
  },
  transitions: {
    collapse: {
      afterEnter (el) {
        el.style.maxHeight = ''
      },
      beforeLeave (el) {
        el.style.maxHeight = el.offsetHeight + 'px'
        return el.offsetHeight
      }
    }
  }
}
</script>
