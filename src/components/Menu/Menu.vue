<template>
  <ul class="vue-menu">
    <slot></slot>
  </ul>
</template>

<script>
import coerceBoolean from '../utils/coerceBoolean.js'

  export default {
    props: {
      oneAtATime: {
        type: Boolean,
        coerce: coerceBoolean,
        default: false
      }
    },
    created() {
      this.$on('isOpenEvent', (child)=> {
        if (this.oneAtATime) {
          this.$children.forEach((item) => {
            if (child !== item ) {
              item.isOpen = false
            }
          })
        }
      })
    }
  }
</script>
