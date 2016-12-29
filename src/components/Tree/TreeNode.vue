<template>
  <li>
    <a :title="model.name" @click="toggle">
      <span v-if="isFolder" :class="[prefixCls + '-tree-switcher', open && prefixCls + '-tree-switcher-open']">
        <icon type="caretup"></icon>
      </span>
      <span :class="[prefixCls + '-tree-title']">
        {{model.name}}
      </span>
    </a>
    <transition name="expand">
      <ul v-show="open" v-if="isFolder" :class="[open && prefixCls + '-tree-child-tree-open']">
        <tree-node
          v-for="model in model.children"
          :model="model">
        </tree-node>
      </ul>
    </transition>
  </li>
</template>

<script>
import Icon from '../Icon/'
export default {
  name: 'TreeNode',
  props: {
    disableCheckbox: {
      type: Boolean
    },
    model: {
      type: Object
    },
    prefixCls: {
      type: String,
      default: 'atui'
    }
  },
  data () {
    return {
      open: false
    }
  },
  watch: {
    open (status) {
      this.tree.$emit('expand', status, this.model)
    }
  },
  computed: {
    isFolder () {
      return this.model.children &&
        this.model.children.length
    }
  },
  created () {
    let parent = this.$parent
    if (parent.isTree) {
      this.tree = parent
    } else {
      this.tree = parent.tree
    }
  },
  methods: {
    toggle () {
      if (this.isFolder) {
        this.open = !this.open
      }
    }
  },
  components: {
    icon: Icon
  }
}
</script>