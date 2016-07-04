<template>
  <div class="atui-sub-menu-title" @click="triggerSub">{{title}}</div>
  <ul class="atui-sub-menu" v-show="show" transition="slide">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  props: {
    title: String,
    show: {
      type: Boolean,
      default: true
    }
  },
  created () {

  },
  methods: {
    triggerSub () {
      this.show = !this.show
    }
  }
}
</script>
