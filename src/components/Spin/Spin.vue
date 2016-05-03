<template>
<div :class="['atui-spin',size,{sping:sping}]" v-show="show">
  <div class="atui-sping-point">
    <div></div>
    <div></div>
    <div></div>
  </div>
  <div class="sping-content">
    <slot></slot>
  </div>

</div>
</template>
<script>
export default {
  name: 'spin',
  props:{
    show:{
      type:Boolean
    },
    sping:{
      type:Boolean
    },
    size:{
      type:String,
      default:'default'
    }
  },
  methods: {
    show () {
      this.show = true
    },
    hide () {
      this.show = false
    }
  },
  created () {

  }
}
