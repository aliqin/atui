<template>
  <div :class="[prefixCls + '-popover-cont']">
    <trigger :trigger="trigger" :effect="effect" :placement="placement" :popup-cls="popupCls">
      <template slot="trigger">
        <slot></slot>
      </template>
      <template slot="popup">
        <slot role="tooltip" name="popup">
          <div :class="[prefixCls + '-tooltip-arrow']"></div>
          <div :class="[prefixCls + '-tooltip-inner']" v-html="content">
          </div>
        </slot>
      </template>
    </trigger>
  </div>
</template>

<script>
  import GlobalMixin from '../_utils/GlobalMixin'
  import Trigger from '../Trigger'

  export default {
    name: 'Tooltip',
    mixins: [
      GlobalMixin
    ],

    components: {
      Trigger
    },

    props: {
      trigger: {
        type: String,
        default: 'hover'
      },
      effect: {
        type: String
      },
      placement: {
        type: String,
        default: 'top'
      },
      content: [String, Number],
      popupCls: {
        type: String,
        default: 'tooltip'
      }
    },

    methods: {
    }
  }
</script>
