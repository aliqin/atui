<template>
  <form class="form" :class="classObj">
    <v-row>
      <slot></slot>
    </v-row>
  </form>
</template>
<style>
.form-horizontal {}
.form-vertical {}
</style>
<script>
import Layout from '../Layout/'
const vRow = Layout.Row
export default {
  props: {
    // 表单元素排列方式，有纵向和横向两种 horizontal、vertical
    horizontal: Boolean,
    vertical: Boolean
  },
  data () {
    return {
      classObj: {
        'form-horizontal': this.horizontal,
        'form-vertical': this.vertical
      }
    }
  },
  components: {
    vRow
  }
}
</script>
