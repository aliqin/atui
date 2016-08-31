<template>
  <div :class="[prefixCls + '-carousel-item']">
    <slot></slot>
  </div>
</template>

<script>
  export default {
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
    ready () {
      this.$dispatch('scaleItemsWidth', this.scaleItemWidth)
      this.$dispatch('addChildrenLength')
    }
  }
</script>
