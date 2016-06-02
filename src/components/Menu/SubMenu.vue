<template>
  <div class="vue-sub-menu-title" @click="triggerSub">{{title}}</div>
  <ul class="vue-sub-menu panel-collapse collapse-transition" v-show="isOpen">
    <slot></slot>
  </ul>
</template>

<script>
import coerceBoolean from '../../utils/coerceBoolean.js'

  export default {
    props: {
      title:String,
      isOpen: {
        type: Boolean,
        coerce: coerceBoolean,
        default: true
      }
    },
    created() {

    },
    methods:{
      triggerSub(){
        this.isOpen = !this.isOpen
      }
    }
  }
</script>
