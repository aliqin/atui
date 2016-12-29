<template>
  <div :class="[prefixCls + '-dropdown-cont', isOpen && (prefixCls + '-dropdown-open')]">
    <trigger :trigger="trigger"
             effect="slide"
             popup-cls="dropdown"
             placement="bottomLeft"
             :popup-hide-delay="200"
             popup-hide-when-click-outside
             popup-use-trigger-width
             @toggle-popup="onTogglePopup"
             :show="isOpen">
      <template slot="trigger">
        <slot></slot>
      </template>
      <div slot="popup" :class="[prefixCls + '-dropdown-menu-cont','atui-dropdown-menu']">
        <slot name="dropdown-menu" role="dropdown"></slot>
      </div>
    </trigger>
  </div>
</template>

<script type="text/babel">
  import GlobalMixin from '../_utils/GlobalMixin'
  import Trigger from '../Trigger'

  export default {
    name: 'Dropdown',
    mixins: [
      GlobalMixin
    ],
    props: {
      trigger: {
        type: String,
        default: 'click'
      },
      open: {
        type: Boolean
      }
    },
    components: {
      Trigger
    },
    data () {
      return {
        isOpen: this.open
      }
    },
    created () {
      this.$on('closeDropdown', () => {
        this.isOpen = false
      })
    },
    methods: {
      onTogglePopup: function (val) {
        this.isOpen = val
      }
    }
  }
</script>
