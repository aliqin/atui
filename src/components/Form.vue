<template>
<form class="form-{{arragement}}">
  <solt></solt>
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
      arragement: {
        type: String,
        default: 'horizontal'
      }
    }
  }
</script>
