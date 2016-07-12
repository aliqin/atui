<template>
<li role="menuitem"
  :class="['atui-menu-item',{'atui-menu-item-disabled':disabled}]"
  style="padding-left:48px"
  @click="selectItem($event)"
>
  <slot></slot>
</li>
</template>

<script>
export default {
  props: {
    disabled: Boolean
  },
  methods: {
    selectItem (event) {

    }
  }
}
</script>
