<template>
  <div>{{title}}</div>
  <ul class="vue-sub-menu">
    <slot></slot>
  </ul>
</template>

<script>
import coerceBoolean from '../utils/coerceBoolean.js'

  export default {
    props: {
      title:String,
      isOpen: {
        type: Boolean,
        coerce: coerceBoolean,
        default: false
      }
    },
    created() {
      
    }
  }
</script>