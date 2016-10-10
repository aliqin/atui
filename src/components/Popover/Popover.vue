<template>
  <div :class="[prefixCls + '-popover-cont']">
    <trigger v:ref="trigger" :trigger="trigger" :effect="effect" :placement="placement" popup-cls="popover" :popup-always-show="alwaysShow" :show.sync="visible">
      <slot slot="trigger"></slot>
      <slot slot="popup" name="popup" role="popover">
        <div :class="[prefixCls + '-popover-arrow']"></div>
        <h3 :class="[prefixCls + '-popover-title']" v-show="showHeader && title">{{title}}</h3>
        <div :class="[prefixCls + '-popover-content']">
          <slot name="content">{{{content}}}</slot>
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
      trigger: String,
      effect: String,
      visible: {
        type: Boolean
      },
      placement: String,
      title: String,
      content: String,
      showHeader: {
        type: Boolean,
        default: true
      },
      alwaysShow: Boolean
    }
  }
</script>
