<template>
  <form :class="formClassObj">
    <v-row>
      <slot></slot>
    </v-row>
  </form>
</template>

<script type="text/babel">
import Layout from '../Layout/'
const vRow = Layout.Row

export default {
  props: {
    // 表单元素排列方式，有纵向和横向两种 horizontal、vertical
    horizontal: Boolean,
    vertical: Boolean,
    prefixCls: {
      type: String,
      default: 'atui'
    }
  },
  computed: {
    formClassObj () {
      let { prefixCls, horizontal, vertical } = this
      let classObj = {}

      classObj[prefixCls + '-form'] = true
      classObj[prefixCls + '-form-horizontal'] = horizontal
      classObj[prefixCls + '-form-vertical'] = vertical

      return classObj
    }
  },
  components: {
    vRow
  }
}
</script>
