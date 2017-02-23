<template>
<div :class="[prefixCls + '-datepicker-rangepicker']">
  <date-picker ref="startDate" :value="selectedStartDate" :disabled="disabled" :format="format" placeholder="开始日期" @change="onStartDateChange"  :disabled-date="disabledStartDate"></date-picker>
  <span :class="[prefixCls + '-datepicker-rangepicker-separator']"> - </span>
  <date-picker ref="endDate" :value="selectedEndDate" :disabled="disabled" :format="format" placeholder="结束日期" :disabled-date="disabledEndDate" @change="onEndDateChange"></date-picker>
</div>
</template>
<script>
  import DatePicker from './DatePicker.vue'

  export default {
    name: 'RangePicker',
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
      disabled: Boolean,
      disabledStart: {
        type: Function,
        default () {
          return (date) => { return false }
        }
      },
      disabledEnd: {
        type: Function,
        default () {
          return (date) => { return false }
        }
      },
      prefixCls: {
        type: String,
        default: 'atui'
      }
    },
    components: {
      DatePicker
    },
    data () {
      return {
        selectedStartDate: this.startDate,
        selectedEndDate: this.endDate,
        disabledEndDate: this.disabledEnd,
        disabledStartDate: this.disabledStart
      }
    },
    methods: {
      onStartDateChange (value) {
        let me = this
        me.setDisabledEndDate(value)
        me.selectedStartDate = value
        if (me.selectedStartDate) {
          me.$emit('change', me.selectedStartDate, me.selectedEndDate)
        }
      },
      onEndDateChange (value) {
        let me = this
        me.setDisabledStartDate(value)
        me.selectedEndDate = value
        if (me.selectedStartDate) {
          me.$emit('change', me.selectedStartDate, me.selectedEndDate)
        }
      },
      setDisabledEndDate (value) { // value: "2016-07-07"
        // let endDate = this.$refs.endDate
        let me = this
        this.disabledEndDate = (date) => { // date: "Thu Jul 07 2016 00:00:00 GMT+0800 (CST)"
          // new Date(value) 得到的值是早上8点0分0秒 如：2016-07-07 08:00:00
          // new Date(date) 得到的值是零晨0点0分0秒 如：2016-07-07 00:00:00
          // 通过对比发现，相同的年月日进行getTime()，下面代码一定返回true，即选择时间段结束时间的当天会被 disabled
          // return date.getTime() <= new Date(value).getTime()

          // 改造代码
          return date.getTime() < new Date(value + ' 00:00:00').getTime() || me.disabledEnd(date)
        }
      },
      setDisabledStartDate (value) {
        // let startDate = this.$refs.startDate
        let me = this
        this.disabledStartDate = (date) => {
          // 注释代码，原因同上
          // return date.getTime() >= new Date(value).getTime()

          // 改造代码
          return date.getTime() > new Date(value + ' 00:00:00').getTime() || me.disabledEnd(date)
        }
      }
    }
  }
</script>
