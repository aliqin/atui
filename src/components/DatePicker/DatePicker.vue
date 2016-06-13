<template>
  <div class="atui-datepicker">
    <div class="atui-datepicker-toggle" @click="inputClick" >
      <input class="datepicker-input" transition="slide" v-bind="{disabled:disabled}" type="text" :value="value" :placeholder="placeholder" readonly/>
      <icon type="calendar"></icon>
    </div>
    <div class="atui-datepicker-calendar">
      <calendar :show="show" transition="slide" @change="selectChange" v-ref:calendar :value="value" :format="format" :locale="locale" :disabled-date="disabledDate"></calendar>
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
      default: 'yyyy-MM-dd'
    },
    locale:{
      default : 'zh_CN'
    },
    show:Boolean,
    disabledDate:{
      type:Function,
      default: (date) => {

      }
    },
    disabled:Boolean
  },
  components: {
    icon:Icon,
    calendar:Calendar
  },
  methods:{
    inputClick() {
      if(this.disabled) {
        return
      }
      this.show = !this.show
    },
    selectChange(value) {
      this.value = value
      this.show = false
      // 冒泡给上一层使用，比如rangePicker
      return true
    }
  },
  ready() {
    this._closeEvent = EventListener.listen(window, 'click', (e)=> {
      if (!this.$el.contains(e.target)) {
        this.show = false
      }
    })
  },
  beforeDestroy() {
    if (this._closeEvent) this._closeEvent.remove()
  }

}
</script>
