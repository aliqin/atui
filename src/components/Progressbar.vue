<template>
  <div role="progressbar"
    :class="{
    'progress-bar' : true,
    'progress-bar-success':type == 'success',
    'progress-bar-warning':type == 'warning',
    'progress-bar-info':type == 'info',
    'progress-bar-danger':type == 'danger',
    'progress-bar-striped':striped,
    'active':animated
    }"
    v-bind:style="{width: now + '%'}">
    {{label ? now + '%': '' }}
  </div>
</template>

<script>

export default {
  props: {
    now: {
      type: Number,
      require: true
    },
    label: {
      type: Boolean
    },
    type: {
      type: String
    },
    striped: {
      type: Boolean
    },
    animated: {
      type: Boolean
    }
  }
}
</script>
