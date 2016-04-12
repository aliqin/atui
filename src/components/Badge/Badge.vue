<template>
  <span v-if="dot" class="badge" :class="wrapClasses">
    <slot></slot>
    <sup class="badge-dot"></sup>
  </span>
  <span v-else  class="badge" :class="wrapClasses">
    <slot></slot>
    <sup v-if='count > 0' class="badge-count">
      {{count | short}}
    </sup>
  </span>
</template>

<script>
  export default {
    props: {
      count: {
        type: Number
      },
      dot: {
        type: Boolean,
        default: false
      },
      class: {
        type: String
      }
    },
    filters: {
      short: (value) => {
        return value >= 100 ? '99+' : value
      }
    },
    computed: {
      wrapClasses () {
        return ['badge'].concat(this.class.split(' '))
      }
    }
  }
</script>
