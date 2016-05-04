<template>
<div class="range-picker">
  <date-picker v-ref:startDate :value.sync="startDate" placeholder="开始日期" @change="setDisabledEndDate"></date-picker>
  <span class="range-picker-separator"> - </span>
  <date-picker v-ref:end-date :value.sync="endDate" placeholder="结束日期" :disabled-date="disabledEndDate"></date-picker>
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
      }
    },
    data() {
      return {

      }
    },
    components: {
      DatePicker
    },
    methods: {
      setDisabledEndDate(value) {
        let endDate = this.$refs.endDate
        endDate.disabledDate = function(date){
          return date.getTime() <= new Date(value).getTime();
        }
        // endDate.getDateRange()
      }
    }
  }
</script>
