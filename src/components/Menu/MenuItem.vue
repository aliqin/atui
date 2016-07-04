<template>
<li role="menuitem" :class="['atui-menu-item',{'atui-menu-item-disabled':disabled}]">
  <slot></slot>
</li>
</template>

<script>
export default {
  props: {
    disabled: Boolean
  }
}
</script>
