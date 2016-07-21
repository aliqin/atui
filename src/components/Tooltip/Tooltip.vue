<template>
  <div :class="[prefixCls + '-popover-cont']">
    <trigger :trigger="trigger" :effect="effect" :placement="placement" popup-cls="tooltip">
      <slot slot="trigger"></slot>
      <slot slot="popup" name="popup" role="tooltip">
        <div :class="[prefixCls + '-tooltip-arrow']"></div>
        <div :class="[prefixCls + '-tooltip-inner']">
          {{{content}}}
        </div>
      </slot>
    </trigger>
  </div>
</template>

<script>
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
        type: String
      },
      effect: {
        type: String
      },
      placement: {
        type: String,
        default: 'top'
      },
      content: [String, Number]
    }
  }
</script>
