<template>
  <form class="form" :class="classObj" @submit="{{submit}}">
    <slot></slot>
  </form>
</template>
<style>
.form-horizontal {}
.form-vertical {}
</style>
<script>
  export default {
    props: {
      //表单元素排列方式，有纵向和横向两种 horizontal、vertical
      horizontal: null,
      vertical: null,
      submit: Function
    },

    data () {
      return {
        classObj: {
          'form-horizontal' : typeof(this.horizontal) !== 'undefined',
          'form-vertical': typeof(this.vertical) !== 'undefined'
        }
      }
    }
  }
</script>
