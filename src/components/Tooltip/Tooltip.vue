<template>
  <div class="atui-tooltip-trigger" v-el:trigger>
    <slot>
    </slot>
  </div>
  <div class="atui-tooltip"
    :class="{
    'top':    placement === 'top',
    'top-left':    placement === 'topLeft',
    'top-right':    placement === 'topRight',
    'left':   placement === 'left',
    'left-top':   placement === 'leftTop',
    'left-bottom':   placement === 'leftBottom',
    'right':  placement === 'right',
    'right-top':  placement === 'rightTop',
    'right-bottom':  placement === 'rightBottom',
    'bottom': placement === 'bottom',
    'bottom-left': placement === 'bottomLeft',
    'bottom-right': placement === 'bottomRight'
    }"
    v-el:popover
    v-show="show"
    :transition="effect"
    role="tooltip">
    <div class="tooltip-arrow" v-el:arrow></div>
    <div class="tooltip-inner">
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
    }
  }
}
</script>
