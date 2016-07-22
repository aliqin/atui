<template>
  <div :class="[prefixCls + '-panel-group']">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'accordion',
    props: {
      openOne: Boolean,
      prefixCls: {
        type: String,
        default: 'atui'
      }
    },
    created () {
      this.$on('isOpenEvent', (child) => {
        if (this.openOne) {
          this.$children.forEach((item, index) => {
            item.index = index
            if (child !== item) {
              item.isOpen = false
            }
          })
        }
      })
    },
    ready () {
      const me = this
      me.$children.forEach((item, index) => {
        item.index = index
      })
    }
  }
</script>
