<template>
  <div :class="[prefixCls + '-tooltip-trigger']" v-el:trigger>
    <slot>
    </slot>
  </div>
  <div :class="tooltipClassObj"
    v-el:popover
    v-show="show"
    :transition="effect"
    role="tooltip">
    <div :class="[prefixCls + '-tooltip-arrow']" v-el:arrow></div>
    <div :class="[prefixCls + '-tooltip-inner']">
      {{{content}}}
    </div>
  </div>
</template>

<script>
import PopoverMixin from '../popoverMixins.js'

export default {
  mixins: [PopoverMixin],
  props: {
    trigger: {
      type: String,
      default: 'hover'
    },
    prefixCls: {
      type: String,
      default: 'atui'
    }
  },
  computed: {
    tooltipClassObj () {
      let { prefixCls, placement } = this
      let tooltipClass = {
        'top': placement === 'top',
        'top-left': placement === 'topLeft',
        'top-right': placement === 'topRight',
        'left': placement === 'left',
        'left-top': placement === 'leftTop',
        'left-bottom': placement === 'leftBottom',
        'right': placement === 'right',
        'right-top': placement === 'rightTop',
        'right-bottom': placement === 'rightBottom',
        'bottom': placement === 'bottom',
        'bottom-left': placement === 'bottomLeft',
        'bottom-right': placement === 'bottomRight'
      }

      tooltipClass[prefixCls + '-tooltip'] = true

      return tooltipClass
    }
  }
}
</script>
