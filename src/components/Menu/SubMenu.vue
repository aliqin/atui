<template>
  <li :class="['atui-menu-submenu', 'atui-menu-submenu-' + mode, show ? 'atui-menu-submenu-open' : '' ]">
    <div class="atui-menu-submenu-title" @click="triggerSub">
      {{title}}
      <icon type="down" :class="['atui-menu-icon']"></icon>
    </div>
    <ul :class="['atui-menu', 'atui-menu-sub', 'atui-menu-'+ mode]" v-show="show" transition="slide">
      <slot></slot>
    </ul>
  </li>
</template>

<script>
import Icon from '../Icon'
export default {
  props: {
    title: String,
    show: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Icon
  },
  data () {
    return {
      mode: this.$parent.mode
    }
  },
  methods: {
    triggerSub () {
      this.show = !this.show
    }
  }
}
</script>
