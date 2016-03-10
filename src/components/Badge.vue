<template>
  <span v-if="dot" class="badge">
    <slot></slot>
    <sup class="badge-dot"></sup>
  </span>
  <span v-else class="badge">
    <slot></slot>
    <sup v-if='count' class="badge-count">
      {{count | short}}
    </sup>
  </span>
</template>

<script >
  export default {
    props: {
      count: {
        type: Number
      },
      dot: {
        type: Boolean
      }
    },
    filters: {
      short: (value) => {
        return value >= 100 ? '99+' : value;
      }
    }
  }
</script>