<template>
  <li class="atui-menu-item-group">
    <div class="atui-menu-item-group-title">{{title}}</div>
    <ul class="atui-menu-item-group-list">
      <slot></slot>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>
