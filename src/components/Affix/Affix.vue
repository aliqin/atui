<template>
<div>
  <div v-bind:class="[prefixCls + '-affix', affixed ? 'vue-affix' : '' ]"
    v-bind:style="styles">
    <slot></slot>
  </div>
</div>
</template>

<script>
import EventListener from '../_utils/EventListener.js'
import getScroll from '../_utils/getScroll.js'

export default {
  name: 'Affix',
  props: {
    offset: {
      type: Number,
      default: 0
    },
    target: {
      type: Function,
      default: () => window
    },
    prefixCls: {
      type: String,
      default: 'atui'
    }
  },
  data () {
    return {
      affixed: false,
      styles: {}
    }
  },
  methods: {
    scrolling () {
      const target = this.target()
      const scrollTop = getScroll(target, true)
      const affixNode = this.$el
      const elementOffset = this.getOffset(affixNode, target)
      const targetRect = this.getTargetRect(target)
      if (!this.affixed && scrollTop > elementOffset.top) {
        this.affixed = true
        this.styles = {
          top: this.offset + targetRect.top + 'px',
          left: elementOffset.left + targetRect.left + 'px',
          width: this.$el.offsetWidth + 'px'
        }

        this.$emit('change', this.affixed)
      }
      if (this.affixed && scrollTop < elementOffset.top) {
        this.affixed = false
        this.styles = {}

        this.$emit('change', this.affixed)
      }
    },
    // reffered from antd
    getTargetRect (target) {
      return target !== window
        ? target.getBoundingClientRect()
        : { top: 0, left: 0, bottom: 0 }
    },
    // reffered from antd
    getOffset (element, target) {
      const elemRect = element.getBoundingClientRect()
      const targetRect = this.getTargetRect(target)

      const scrollTop = getScroll(target, true)
      const scrollLeft = getScroll(target, false)

      const docElem = window.document.body
      const clientTop = docElem.clientTop || 0
      const clientLeft = docElem.clientLeft || 0

      return {
        top: elemRect.top - targetRect.top +
          scrollTop - clientTop,
        left: elemRect.left - targetRect.left +
          scrollLeft - clientLeft,
        width: elemRect.width,
        height: elemRect.height
      }
    }
  },
  mounted () {
    let target = this.target()
    this._scrollEvent = EventListener.listen(target, 'scroll', this.scrolling)
    this._resizeEvent = EventListener.listen(target, 'resize', this.scrolling)
  },
  beforeDestroy () {
    if (this._scrollEvent) {
      this._scrollEvent.remove()
    }
    if (this._resizeEvent) {
      this._resizeEvent.remove()
    }
  }
}
</script>

<style>
  .vue-affix {
    position: fixed;
  }
</style>
