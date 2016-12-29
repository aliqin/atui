<template>
  <li :class="[prefixCls + '-menu-submenu', prefixCls + '-menu-submenu-' + mode, open && (prefixCls + '-menu-submenu-open')]">
    <div :class="[prefixCls + '-menu-submenu-title']" @click="triggerSub">
      {{title}}
      <icon v-if="$children.length" type="down" :class="[prefixCls + '-menu-icon']"></icon>
    </div>
    <ul :class="[prefixCls + '-menu', prefixCls + '-menu-sub', prefixCls + '-menu-'+ mode]" v-show="open" transition="collapse">
      <slot></slot>
    </ul>
  </li>
</template>

<script>
import Icon from '../Icon'
export default {
  name: 'SubMenu',
  props: {
    title: String,
    show: Boolean,
    prefixCls: {
      type: String,
      default: 'atui'
    },
    type: Boolean,
    disabled: Boolean,
    uuid: [String, Number]
  },
  components: {
    Icon
  },
  data () {
    return {
      mode: this.$parent.mode,
      open: this.show
    }
  },
  mounted () {
    this.$forceUpdate()
  },
  watch: {
    open (val) {
      if (val) {
        let me = this
        if (!me.$parent.openOne) {
          return
        }
        let sibling = me.$parent.$children
        sibling.forEach((item) => {
          if (me !== item) {
            item.open = false
          }
        })
      }
    }
  },
  methods: {
    triggerSub () {
      this.open = !this.open
    }
  },
  events: {
    // 当子menu选中时，自动打开父菜单
    open () {
      this.open = true
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
