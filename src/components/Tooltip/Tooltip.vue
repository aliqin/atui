<template xmlns:v-el="http://www.w3.org/1999/xhtml">
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
      let tooltipClass = {}

      tooltipClass[prefixCls + '-tooltip'] = true
      tooltipClass[prefixCls + '-tooltip-top'] = placement === 'top'
      tooltipClass[prefixCls + '-tooltip-top-left'] = placement === 'topLeft'
      tooltipClass[prefixCls + '-tooltip-top-right'] = placement === 'topRight'
      tooltipClass[prefixCls + '-tooltip-left'] = placement === 'left'
      tooltipClass[prefixCls + '-tooltip-left-top'] = placement === 'leftTop'
      tooltipClass[prefixCls + '-tooltip-left-bottom'] = placement === 'leftBottom'
      tooltipClass[prefixCls + '-tooltip-right'] = placement === 'right'
      tooltipClass[prefixCls + '-tooltip-right-top'] = placement === 'rightTop'
      tooltipClass[prefixCls + '-tooltip-right-bottom'] = placement === 'rightBottom'
      tooltipClass[prefixCls + '-tooltip-bottom'] = placement === 'bottom'
      tooltipClass[prefixCls + '-tooltip-bottom-left'] = placement === 'bottomLeft'
      tooltipClass[prefixCls + '-tooltip-bottom-right'] = placement === 'bottomRight'

      return tooltipClass
    }
  }
}
</script>
