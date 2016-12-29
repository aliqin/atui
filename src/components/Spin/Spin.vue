<template>
  <div :class="spinClassObj">
    <div v-show="visible" v-if="isSupportAnimation || !tip" :class="[prefixCls + '-sping-point']">
        <div></div>
        <div></div>
        <div></div>
    </div>
    <p v-else :class="[prefixCls + '-sping-text']">{{ tip || '加载中...' }}</p>
    <div :class="[prefixCls + '-sping-content']">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import isSupportAnimation from '../_utils/cssAnimationSupported'

export default {
  name: 'Spin',
  props: {
    show: Boolean,
    sping: Boolean,
    tip: String,
    size: {
      type: String,
      default: 'default'
    },
    prefixCls: {
      type: String,
      default: 'atui'
    }
  },
  data () {
    return {
      visible: this.show,
      isSupportAnimation: isSupportAnimation
    }
  },
  computed: {
    spinClassObj () {
      let { prefixCls, size, sping } = this
      let classObj = {}
      classObj[prefixCls + '-spin'] = true
      classObj[prefixCls + '-spin-' + size] = true
      classObj[prefixCls + '-sping'] = sping
      return classObj
    }
  },
  created () {
    if (this.sping) {
      this.visible = true
    }
  },
  watch: {
    sping (val) {
      this.visible = val
    },
    show (newVal, oldVal) {
      this.visible = newVal
    },
    visible (newVal, oldVal) {
      this.$emit('toggle', newVal)
    }
  }
}
</script>
