<template>
  <li :class="[prefixCls + '-menu-submenu', prefixCls + '-menu-submenu-' + mode, show && (prefixCls + '-menu-submenu-open')]">
    <div :class="[prefixCls + '-menu-submenu-title']" @click="triggerSub">
      {{title}}
      <icon type="down" :class="[prefixCls + '-menu-icon']"></icon>
    </div>
    <ul :class="[prefixCls + '-menu', prefixCls + '-menu-sub', prefixCls + '-menu-'+ mode]" v-show="show" transition="collapse">
      <slot></slot>
    </ul>
  </li>
</template>

<script>
import Icon from '../Icon'

export default {
  props: {
    title: String,
    show: Boolean,
    prefixCls: {
      type: String,
      default: 'atui'
    },
    type: Boolean,
    disabled: Boolean,
    key: String
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
