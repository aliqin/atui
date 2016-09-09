<template>
  <vue-html5-editor 
    :content.sync="content" 
    :height="height" 
    :z-index="zIndex" 
    :auto-height="autoHeight">
  </vue-html5-editor>
</template>

<script>
import VueHtml5Editor from 'vue-html5-editor'

Vue.use(VueHtml5Editor)

export default {
  props: {
    content: {
      type: String,
      default: ''
    },
    height: Number,
    zIndex: Number,
    autoHeight: {
      type: Boolean,
      default: true
    }
  }
}
</script>

