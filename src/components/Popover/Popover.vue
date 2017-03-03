<template>
  <div :class="[prefixCls + '-popover-cont']">
    <trigger 
      v:ref="trigger" 
      :trigger="trigger" 
      :effect="effect" 
      :placement="placement" 
      popup-cls="popover" 
      :popup-always-show="alwaysShow"
      :show="visible"
      :popup-z-index="popZIndex ? popZIndex : 0"
      :custom-popup-cls="popCls"
      @toggle-popup="onTogglePopup">
      <template slot="trigger">
        <slot></slot>
      </template>
      <template slot="popup">
        <slot name="popup" role="popover">
          <div :class="[prefixCls + '-popover-arrow']"></div>
          <h3 :class="[prefixCls + '-popover-title']" v-show="showHeader && title">{{title}}</h3>
          <div :class="[prefixCls + '-popover-content']">
            <slot name="content">
              <span v-html="content"></span>
            </slot>
          </div>
        </slot>
      </template>
  </div>
</template>

<script>
  import GlobalMixin from '../_utils/GlobalMixin'
  import Trigger from '../Trigger'

  export default {
    name: 'Popover',
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
      popCls: {
        type: String,
        default: ''
      },
      popZIndex: {
        type: Number,
        default: 0
      },
      placement: String,
      title: String,
      content: String,
      showHeader: {
        type: Boolean,
        default: true
      },
      alwaysShow: Boolean
    },
    methods: {
      onTogglePopup (show) {
        this.$emit('pop-change', show)
      }
    }
  }
</script>
