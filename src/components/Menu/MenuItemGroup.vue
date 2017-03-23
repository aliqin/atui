<template>
  <li :class="[prefixCls + '-menu-item-group']">
    <div :class="[prefixCls + '-menu-item-group-title']" v-html="title"></div>
    <ul :class="[prefixCls + '-menu-item-group-list']">
      <slot></slot>
      <template v-if="value.length" v-for="item in value">
        <v-menu-item v-if="item.type == 'MenuItem'" :uuid="item.uuid" :disabled="item.disabled" :selected="item.selected">
          <span v-html="item.content"></span>
        </v-menu-item>
      </template>
    </ul>
  </li>
</template>

<script>
import vMenuItem from './MenuItem.vue'

export default {
  name: 'MenuItemGroup',
  props: {
    title: String,
    value: {
      type: Array,
      default () {
        return []
      }
    },
    prefixCls: {
      type: String,
      default: 'atui'
    }
  },
  components: {
    vMenuItem
  }
}
</script>
