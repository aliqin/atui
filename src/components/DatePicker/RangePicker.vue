<template>
<div class="range-picker">
  <date-picker v-ref:start-date :value.sync="startDate" :disabled="disabled" :format="format" placeholder="开始日期" @change="onStartDateChange"></date-picker>
  <span class="range-picker-separator"> - </span>
  <date-picker v-ref:end-date :value.sync="endDate" :disabled="disabled" :format="format" placeholder="结束日期" :disabled-date="disabledEndDate" @change="onEndDateChange"></date-picker>
</div>
</template>
<script>
  import DatePicker from './DatePicker.vue'
  export default {
    props: {
      showTime: {
        type: Boolean
      },
      startDate: {
        type: String
      },
      endDate: {
        type: String
      },
      format: {
        default: 'yyyy-MM-dd'
      },
      disabled: Boolean
    },
    components: {
      DatePicker
    },
    methods: {
      onStartDateChange (value) {
        let me = this
        me.setDisabledEndDate(value)
        if (me.endDate) {
          me.$dispatch('change', me.startDate, me.endDate)
        }
      },
      onEndDateChange (value) {
        let me = this
        me.setDisabledStartDate(value)
        if (me.startDate) {
          me.$dispatch('change', me.startDate, me.endDate)
        }
      },
      setDisabledEndDate (value) { // value: "2016-07-07"
        let endDate = this.$refs.endDate
        endDate.disabledDate = (date) => { // date: "Thu Jul 07 2016 00:00:00 GMT+0800 (CST)"
          // new Date(value) 得到的值是早上8点0分0秒 如：2016-07-07 08:00:00
          // new Date(date) 得到的值是零晨0点0分0秒 如：2016-07-07 00:00:00
          // 通过对比发现，相同的年月日进行getTime()，下面代码一定返回true，即选择时间段结束时间的当天会被 disabled
          // return date.getTime() <= new Date(value).getTime()

          // 改造代码
          return date.getTime() < new Date(value + ' 00:00:00').getTime()
        }
      },
      setDisabledStartDate (value) {
        let startDate = this.$refs.startDate
        startDate.disabledDate = (date) => {
          // 注释代码，原因同上
          // return date.getTime() >= new Date(value).getTime()

          // 改造代码
          return date.getTime() > new Date(value + ' 00:00:00').getTime()
        }
      }
    }
  }
</script>
