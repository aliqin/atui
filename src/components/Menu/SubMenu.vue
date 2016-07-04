<template>
  <div class="atui-menu-submenu-title" @click="triggerSub">{{title}}</div>
  <ul class="atui-menu-sub" v-show="show" transition="slide">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  props: {
    title: String,
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    triggerSub () {
      this.show = !this.show
    }
  }
}
</script>
