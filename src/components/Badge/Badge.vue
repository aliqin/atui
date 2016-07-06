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

<script>
  export default {
    name: 'badge',
    props: {
      count: {
        type: Number
      },
      dot: {
        type: Boolean
      }
    },
    data () {
      return {
        prefixCls: 'atui'
      }
    },
    filters: {
      short: (value) => {
        return value >= 100 ? '99+' : value
      }
    }
  }
</script>
