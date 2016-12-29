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
      me.$parent.$emit('before', me)
      me.$el.style.transform = `translateX(${position * -this.width}px)`
      function endCall () {
        me.$el.removeEventListener('transitionend', endCall)
        me.$parent.$emit('after', me)
      }
      me.$el.addEventListener('transitionend', endCall, false)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.$parent.$emit('scaleSliderWidth', this.scaleWidth)
    })
  }
}
</script>
