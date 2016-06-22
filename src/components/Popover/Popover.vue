<template>
  <span v-el:trigger>
    <slot>
    </slot>
  </span>
  <div class="popover"
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
    :transition="effect">
      <div class="arrow"></div>
      <h3 class="popover-title" v-show="title">{{title}}</h3>
      <div class="popover-content">
        {{content}}
      </div>
  </div>
</template>

<script>
import PopoverMixin from '../popoverMixins.js'
export default {
  mixins: [PopoverMixin]
}
</script>
