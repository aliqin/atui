<template>
  <div class="btn-group" data-toggle="buttons" :class="{
    'large': size == 'large',
    'small': size == 'small'
  }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name:'radio-group',
    props: {
      value: {
        type: String,
        twoWay: true
      },
      type: {
        type: String,
        default: 'default'
      },
      size: {
        type: String,
        default: 'default'
      }
    }
  }
</script>
