<template>
<div class="range-picker">
  <input type="text" placeholder="开始日期" @click="triggerStart" />
  <span class="range-picker-separator"> </span>
  <input type="text" placeholder="结束日期" @click="triggerEnd" />
  <div class="range-picker-content">
    <date-picker v-show="showEndPicker"></date-picker>
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
