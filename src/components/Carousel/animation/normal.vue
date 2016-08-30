<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
      width: ''
    }
  },

  methods: {
    scaleWidth (width, childrenLen) {
      let totalWidth = width * childrenLen

      this.width = width
      this.$el.style.width = `${totalWidth}px`
    },
    animation (position) {
      let me = this
      me.$dispatch('beforeChange', me)
      me.$el.style.transform = `translateX(${position * -this.width}px)`
      function endCall() {
        me.$el.removeEventListener('transitionend', endCall)
        me.$dispatch('afterChange', me)
      }
      me.$el.addEventListener('transitionend', endCall, false)
    }
  },

  ready () {
    this.$dispatch('scaleSliderWidth', this.scaleWidth)
  }
}
</script>
