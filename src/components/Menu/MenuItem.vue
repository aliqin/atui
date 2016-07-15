<template>
<li role="menuitem"
  :class="[prefixCls + '-menu-item', disabled && (prefixCls + '-menu-item-disabled') , selected && (prefixCls + '-menu-item-selected')]"
  style="padding-left:48px"
  @click="selectItem($event)"
>
  <slot></slot>
</li>
</template>

<script>
export default {
  props: {
    disabled: Boolean,
    prefixCls: {
      type: String,
      default: 'atui'
    },
    key: String,
    selected: Boolean
  },
  methods: {
    selectItem () {
      this.$dispatch('itemClicked', this, this.key)
    }
  },
  events: {
    // Menu 父组件传达查找子组件命令，指定选中状态
    searchItem (key) {
      this.selected = this.key === key
    }
  }
}
</script>
