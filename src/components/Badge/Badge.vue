<template>
<span :class="[prefixCls + '-badge']">
  <slot></slot>
  <sup :class="[prefixCls + '-badge-dot']" v-if="dot"></sup>
  <template v-else>
    <sup v-if='count > 0' :class="[prefixCls + '-badge-count']">
      {{count | short}}
    </sup>
  </template>
</span>
</template>

<script type="text/babel">
  export default {
    name: 'badge',
    props: {
      count: {
        type: Number
      },
      dot: {
        type: Boolean
      },
      overflowCount: {
        type: Number,
        default: 99
      },
      prefixCls: {
        type: String,
        default: 'atui'
      }
    },
    filters: {
      short (value) {
        return value >= this.overflowCount ? this.overflowCount + '+' : value
      }
    }
  }
</script>
