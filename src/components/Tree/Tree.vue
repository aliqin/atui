<template>
<ul :class="[prefixCls + '-tree']">
  <tree-node
    :model="dataSource">
  </tree-node>
</ul>
</template>

<script>
import TreeNode from './TreeNode.vue'
export default {
  props: {
    checkable: {
      type: Boolean
    },
    dataSource: {
      type: Object
    },
    prefixCls: {
      type: String,
      default: 'atui'
    }
  },
  components: {
    TreeNode
  }
}
</script>
