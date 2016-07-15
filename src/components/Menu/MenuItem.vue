<template>
<li role="menuitem"
  :class="[prefixCls + '-menu-item', disabled && (prefixCls + '-menu-item-disabled')]"
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
    }
  },
  methods: {
    selectItem (event) {

    }
  }
}
</script>
