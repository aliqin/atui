<template>
  <div :class="[prefixCls + '-popover-trigger']" v-el:trigger>
    <slot>
    </slot>
  </div>
  <div v-el:popover
       v-show="show"
       :class="popoverClassObj"
       :transition="effect">
      <div :class="[prefixCls + '-popover-arrow']"></div>
      <h3 :class="[prefixCls + '-popover-title']" v-show="title">{{title}}</h3>
      <div :class="[prefixCls + '-popover-content']">
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
