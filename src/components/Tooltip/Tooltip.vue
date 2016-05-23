<template>
  <span v-el:trigger>
    <slot>
    </slot>
  </span>
  <div class="tooltip"
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
    props : {
      trigger: {
        type   : String,
        default: 'hover'
      },
      effect : {
        type   : String,
        default: 'scale'
      }
    }
  }
</script>

<style>
  .tooltip {
    opacity: .9
  }
.fadein-enter {
  animation:fadein-in 0.3s ease-in;
}
.fadein-leave {
  animation:fadein-out 0.3s ease-out;
}
@keyframes fadein-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadein-out {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

</style>
