<template>
<li
  role="menuitem"
  :style="style"
  :title="title"
  @click="onSelect">
  <slot></slot>
</li>
</template>

<script>
export default {
  props: {
    active: Boolean,
    selected: Boolean,
    disabled: Boolean,
    title: String,
    onSelect: Function
  },
  computed: {

  },
  methods: {

  }
}
</script>
