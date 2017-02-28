<template>
  <div :class="[prefixCls + '-carousel-item']">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'CSlide',
    props: {
      prefixCls: {
        type: String,
        default: 'atui'
      }
    },
    methods: {
      scaleItemWidth (width) {
        this.$el.style.width = `${width}px`
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.$parent.$parent.$emit('scaleItemsWidth', this.scaleItemWidth)
        this.$parent.$parent.$emit('addItem', this.$el)
      })
    }
  }
</script>
