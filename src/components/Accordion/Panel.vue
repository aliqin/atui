<template>
<div :class="[prefixCls + '-panel', prefixCls + '-panel-default']">
    <div :class="[prefixCls + '-panel-heading']"
      @click="clicked()">
      <slot name="panel-header"></slot>
    </div>
    <div :class="[prefixCls + '-panel-collapse']"
      ref="panel"
      v-show="openState"
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
  name: 'Panel',
  props: {
    open: Boolean,
    onToggle: {
      type: Function,
      default: () => {}
    },
    prefixCls: {
      type: String,
      default: 'atui'
    }
  },
  data () {
    return {
      height: 0,
      openState: this.open
    }
  },
  methods: {
    clicked () {
      this.openState = !this.openState
      this.onToggle(this)
      this.$emit('click', this)
    }
  },
  mounted () {
    const panel = this.$refs.panel
    panel.style.display = 'block'
    this.height = panel.offsetHeight
    if (!this.openState) panel.style.display = 'none'
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
