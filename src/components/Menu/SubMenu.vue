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
  watch: {
    show (val) {
      if (val) {
        let me = this
        if (!me.$parent.openOne) {
          return
        }
        let sibling = me.$parent.$children
        sibling.forEach((item) => {
          if (me !== item) {
            item.show = false
          }
        })
      }
    }
  },
  methods: {
    triggerSub () {
      let me = this
      me.show = !me.show
    }
  },
  events: {
    // 当子menu选中时，自动打开父菜单
    open () {
      this.show = true
    }
  },
  transitions: {
    collapse: {
      afterEnter (el) {
        el.style.maxHeight = ''
      },
      beforeLeave (el) {
        el.style.maxHeight = el.offsetHeight + 'px'
        return el.offsetHeight
      }
    }
  }
}
</script>
