<template>
<div :class="['atui-spin',size,{sping: sping}]" v-show="show">
  <div v-if="isSupportAnimation || !tip" class="atui-sping-point">
      <div></div>
      <div></div>
      <div></div>
  </div>
  <p v-else class="atui-sping-text">{{ tip || '加载中...' }}</p>
  <div class="sping-content">
    <slot></slot>
  </div>
</div>
</template>
<script>
import isSupportAnimation from '../utils/cssAnimationSupported'
export default {
  name: 'spin',
  props: {
    show: Boolean,
    sping: Boolean,
    tip: String,
    size: {
      type: String,
      default: 'default'
    }
  },
  data () {
    return {
      isSupportAnimation: isSupportAnimation
    }
  },
  methods: {
    show () {
      this.show = true
    },
    hide () {
      this.show = false
    }
  }
}
