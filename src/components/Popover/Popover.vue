<template>
  <div :class="[prefixCls + '-popover-cont']">
    <trigger :trigger="trigger" :effect="effect" :placement="placement" popup-cls="popover">
      <slot slot="trigger"></slot>
      <slot slot="popup" name="popup">
        <div :class="[prefixCls + '-popover-arrow']"></div>
        <h3 :class="[prefixCls + '-popover-title']" v-show="header && title">{{title}}</h3>
        <div :class="[prefixCls + '-popover-content']">
          {{content}}
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
        type: String
      },
      title: {
        type: String
      },
      content: [String, Number],
      header: {
        type: Boolean,
        default: true
      }
    }
  }
</script>
