<template>
  <ul :class="[prefixCls + '-menu', prefixCls + '-menu-root', prefixCls + '-menu-'+ mode]">
    <slot></slot>
    <template v-if="value.length">
      <v-sub-menu v-for="item in value" :uuid="item.uuid" :title="item.title" :show="item.show" v-model="item.children">
      </v-sub-menu>
    </template>
  </ul>
</template>

<script type="text/babel">
import Vue from 'vue'
import vSubMenu from './SubMenu.vue'
import vMenuItemGroup from './MenuItemGroup.vue'
import vMenuItem from './MenuItem.vue'

export default {
  name: 'Menu',
  props: {
    mode: {
      type: String,
      default: 'inline'
    },
    prefixCls: {
      type: String,
      default: 'atui'
    },
    value: {
      type: Array,
      default () {
        return []
      }
    },
    openOne: Boolean,
    defaultSelectedKey: String
  },
  data () {
    return {
      selectedKey: this.defaultSelectedKey
    }
  },
  components: {
    vSubMenu,
    vMenuItemGroup,
    vMenuItem
  },
  created () {
    this.$bus = new Vue({})
  },
  mounted () {
    let me = this
    if (me.defaultSelectedKey) {
      me.$bus.$emit('Menu-searchItem', me.selectedKey)
    }
    me.$bus.$on('Menu-itemClicked', (item, uuid) => {
      me.$bus.$emit('Menu-searchItem', uuid)
      me.selectedKey = uuid
      me.$emit('click', item, uuid)
    })
  }
}
</script>
