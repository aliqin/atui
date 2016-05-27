<template>
  <span v-el:trigger>
    <slot>
    </slot>
  </span>
  <div class="popover"
    :class="[placement]"
    v-el:popover
    v-show="show"
    :transition="effect">
      <div class="arrow"></div>
      <h3 class="popover-title" v-show="title">{{title}}</h3>
      <div class="popover-content">
        {{{content}}}
      </div>
  </div>
</template>

<script>
import PopoverMixin from '../popoverMixins.js'
  export default {
    mixins: [PopoverMixin]
  }
</script>
