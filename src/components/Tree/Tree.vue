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
  name: 'Tree',
  props: {
    checkable: Boolean,
    dataSource: Object,
    prefixCls: {
      type: String,
      default: 'atui'
    }
  },
  components: {
    TreeNode
  },
  created () {
    this.isTree = true
  }
}
</script>
