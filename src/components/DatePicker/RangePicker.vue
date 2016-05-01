<template>
<div class="range-picker">
  <date-picker placeholder="开始日期"></date-picker>
  <span class="range-picker-separator"> </span>
  <date-picker placeholder="结束日期"></date-picker>
  <div class="range-picker-content">
    <!-- <date-picker v-show="showEndPicker"></date-picker> -->
  </div>
</div>
</template>
<script>
  import DatePicker from './DatePicker.vue'
  import coerceBoolean from '../utils/coerceBoolean.js'
  export default {
    props:{
      trigger:{
        type: String,
        default: 'click'
      },
      open:{
        type: Boolean,
        coerce: coerceBoolean,
        default: false
      }
    },
    data() {
      return {
        showStartPicker:false,
        showEndPicker:false
      }
    },
    components: {
      DatePicker
    },
    methods: {
      triggerStart() {
        this.showStartPicker = !this.showStartPicker
      },
      triggerEnd() {
        this.showEndPicker = !this.showEndPicker
      }
    }
  }
</script>
