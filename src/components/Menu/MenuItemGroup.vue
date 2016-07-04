<template>
  <li class="atui-menu-item-group">
    <div class="atui-menu-submenu-title"></div>
    <slot></slot>
  </li>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>
