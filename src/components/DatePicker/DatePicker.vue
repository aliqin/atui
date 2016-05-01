<template>
  <div class="atui-datepicker">
    <div class="atui-datepicker-toggle" @click="inputClick" >
      <input class="datepicker-input" type="text" :value="value" :placeholder="placeholder" />
      <icon type="calendar"></icon>
    </div>
    <div class="atui-datepicker-calendar">
      <calendar :show="showCalendar" @change="selectChange" :value="value" :format="format" :locale="locale" :disabled-date="disabledDate"></calendar>
    </div>
  </div>
</template>

<script>
import EventListener from '../utils/EventListener.js'
import Calendar from '../Calendar/'
import Icon from '../Icon/'


export default {
  name:'date-picker',
  props: {
    value: {
      type: String
    },
    placeholder:{
      type:String,
      default:'请选择日期'
    },
    format: {
      default: 'yyyy-MMMM-dd'
    },
    locale:{
      default : 'zh_CN'
    },
    showCalendar:Boolean,
    disabledDate:{
      type:Function,
      default:function () {}
    }
  },
  components: {
    icon:Icon,
    calendar:Calendar
  },
  data() {
    return {
      disabledDate(date) {
        if (!date) {
          return false;
        }
        return date.getTime() >= new Date(2016, 11, 17).getTime();
      }
    }
  },
  methods:{
    inputClick() {
      this.showCalendar = !this.showCalendar
    },
    selectChange(value) {
      this.value = value
      this.showCalendar = false
    }
  }

}
</script>
