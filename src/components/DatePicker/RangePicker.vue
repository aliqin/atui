<template>
<div class="range-picker">
  <date-picker v-ref:start-date :value="startDate" :disabled="disabled" :format="format" placeholder="开始日期" @change="onStartDateChange"></date-picker>
  <span class="range-picker-separator"> - </span>
  <date-picker v-ref:end-date :value="endDate" :disabled="disabled" :format="format" placeholder="结束日期" :disabled-date="disabledEndDate" @change="onEndDateChange"></date-picker>
</div>
</template>
<script>
  import DatePicker from './DatePicker.vue'
  export default {
    props:{
      showTime:{
        type: Boolean
      },
      startDate:{
        type:String
      },
      endDate:{
        type:String
      },
      format: {
        default: 'yyyy-MM-dd'
      },
      disabled:Boolean
    },
    components: {
      DatePicker
    },
    methods: {
      onStartDateChange(value) {
        let me = this
        me.setDisabledEndDate(value)
        if(me.endDate) {
          me.$dispatch('change', me.startDate, me.endDate)
        }
      },
      onEndDateChange(value) {
        let me = this
        me.setDisabledStartDate(value)
        if(me.startDate) {
          me.$dispatch('change', me.startDate, me.endDate)
        }
      },
      setDisabledEndDate(value) {
        let endDate = this.$refs.endDate
        endDate.disabledDate = function(date) {
          return date.getTime() <= new Date(value).getTime()
        }
      },
      setDisabledStartDate(value) {
        let startDate = this.$refs.startDate
        startDate.disabledDate = function(date) {
          return date.getTime() >= new Date(value).getTime()
        }
      }
    }
  }
</script>
