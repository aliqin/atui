<template>
  <li :class="[prefixCls + '-menu-item-group']">
    <div :class="[prefixCls + '-menu-item-group-title']">{{title}}</div>
    <ul :class="[prefixCls + '-menu-item-group-list']">
      <slot></slot>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    title: String,
    prefixCls: {
      type: String,
      default: 'atui'
    }
  }
}
</script>
