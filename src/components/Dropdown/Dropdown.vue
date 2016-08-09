<template>
  <div :class="[prefixCls + '-dropdown-cont', open && (prefixCls + '-dropdown-open')]">
    <trigger :trigger="trigger"
             effect="slide"
             popup-cls="dropdown"
             placement="bottomLeft"
             :popup-hide-delay="200"
             popup-hide-when-click-outside
             :show.sync="open">
      <slot slot="trigger"></slot>
      <div slot="popup" :class="[prefixCls + '-dropdown-menu-cont']">
        <slot name="dropdown-menu" role="dropdown"></slot>
      </div>
    </trigger>
  </div>
</template>

<script type="text/babel">
  import GlobalMixin from '../_utils/GlobalMixin'
  import Trigger from '../Trigger'

  export default {
    mixins: [
      GlobalMixin
    ],

    components: {
      Trigger
    },

    props: {
      trigger: {
        type: String,
        default: 'click'
      },
      open: {
        type: Boolean
      }
    },
    events: {
      closeDropdown () {
        this.open = false
      }
    }
  }
</script>
