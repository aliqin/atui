<template>
<li role="menuitem"
  :class="[prefixCls + '-menu-item', disabled && (prefixCls + '-menu-item-disabled') , selectedStatus && (prefixCls + '-menu-item-selected')]"
  style="padding-left:48px"
  @click="selectItem($event)"
>
  <span>
    <slot></slot>
  </span>
</li>
</template>

<script>
import EventBus from 'src/components/eventbus'
export default {
  name: 'MenuItem',
  props: {
    disabled: Boolean,
    prefixCls: {
      type: String,
      default: 'atui'
    },
    uuid: String,
    selected: Boolean
  },
  mixins: [EventBus],
  data () {
    return {
      selectedStatus: this.selected
    }
  },
  methods: {
    selectItem () {
      this.$bus.$emit('Menu-itemClicked', this, this.uuid)
    }
  },
  mounted () {
    this.$bus.$on('Menu-searchItem', (uuid) => {
      this.selectedStatus = this.uuid === uuid
      if (this.selectedStatus) {
        this.$bus.$emit('Menu-open', this, this.uuid)
      }
    })
  }
}
</script>
