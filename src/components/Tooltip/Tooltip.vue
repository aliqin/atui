<template>
  <div :class="[prefixCls + '-popover-cont']">
    <trigger :trigger="trigger" :effect="effect" :placement="placement" :popup-cls="popupCls" @reset-pos="resetPosHandler">
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
      resetPosHandler (data) {
        const { prefixCls, popupCls } = this
        const { $trigger, $popup, placement } = data
        const $arrow = $popup.querySelector(`.${prefixCls}-${popupCls}-arrow`)
        const triggerOffset = $trigger.getBoundingClientRect()

        // 修正箭头坐标
        if (placement.endsWith('Left')) {
          $arrow.style.left = `${triggerOffset.width / 2}px`
        } else if (placement.endsWith('Right')) {
          $arrow.style.right = `${triggerOffset.width / 2}px`
        } else if (placement.endsWith('Top')) {
          $arrow.style.top = `${triggerOffset.height / 2}px`
        } else if (placement.endsWith('Bottom')) {
          $arrow.style.bottom = `${triggerOffset.height / 2}px`
        }
      }
    }
  }
</script>
