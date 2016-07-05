<template>
  <li>
    <span v-if="isFolder" :class="['atui-tree-switcher',{'atui-tree-switcher-open':open}]">
      <icon type="jiantou"></icon>
    </span>
    <a :title="model.name" @click="toggle">
      <span class="atui-tree-title">
        {{model.name}}
      </span>
    </a>
    <ul v-show="open" v-if="isFolder" transition="slide" :class="{'ant-tree-child-tree-open': open}">
      <tree-node
        class="item"
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
