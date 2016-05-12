<template>
<div class="range-picker">
  <date-picker v-ref:start-date :value.sync="startDate" :disabled="disabled" placeholder="开始日期" @change="onStartDateChange"></date-picker>
  <span class="range-picker-separator"> - </span>
  <date-picker v-ref:end-date :value.sync="endDate" :disabled="disabled" placeholder="结束日期" :disabled-date="disabledEndDate" @change="onEndDateChange"></date-picker>
</div>
</template>
<script>
  import DatePicker from './DatePicker.vue'
  export default {
    props:{
      open:{
        type: Boolean
      },
      startDate:{
        type:String
      },
      endDate:{
        type:String
      },
      format: {
        default: 'yyyy-MMMM-dd'
      },
      disabled:Boolean
    },
    data() {
      return {

      }
    },
    components: {
      DatePicker
    },
    methods: {
      onStartDateChange(value) {
        let me = this
        me.setDisabledEndDate(value)
        if(me.endDate && new Date(me.endDate).getTime() > new Date(me.endDate).getTime()) {
          me.$dispatch('change',me.startDate,me.endDate)
        }
      },
      onEndDateChange(value) {
        let me = this
        if(me.startDate) {
          me.$dispatch('change',me.startDate,me.endDate)
        }
      },
      setDisabledEndDate(value) {
        let endDate = this.$refs.endDate
        endDate.disabledDate = function(date) {
          return date.getTime() <= new Date(value).getTime();
        }
      }
    }
  }
</script>
