<template>
  <li>
    <a :title="model.name" @click="toggle">
      <span v-if="isFolder" :class="[prefixCls + '-tree-switcher', open && prefixCls + '-tree-switcher-open']">
        <icon type="jiantou"></icon>
      </span>
      <span :class="[prefixCls + '-tree-title']">
        {{model.name}}
      </span>
    </a>
    <ul v-show="open" v-if="isFolder" transition="slide" :class="[open && prefixCls + '-tree-child-tree-open']">
      <tree-node
        v-for="model in model.children"
        :model="model">
      </tree-node>
    </ul>
  </li>
</template>

<script>
import Icon from '../Icon/'
export default {
  name: 'tree-node',
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
      this.$dispatch('expand', status, this.model)
    }
  },
  computed: {
    isFolder () {
      return this.model.children &&
        this.model.children.length
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
