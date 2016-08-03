<template>
  <div :class="[prefixCls + '-time-picker']">
    <trigger trigger="click"
             placement="bottomLeft"
             effect="slide"
             popup-hide-when-click-outside
             popup-cover-trigger
             @toggolePopup="togglePopupHandler"
             v-ref:trigger>
      <div slot="trigger" :class="[prefixCls + '-time-picker-toggler']">
        <v-input readonly
                 :value="value"
                 :placeholder="placeholder"></v-input>
        <icon type="time"></icon>
      </div>
      <div slot="popup"
           :class="[prefixCls + '-time-picker-menus']">
        <icon type="clear" @click="closePopup"></icon>
        <div>
          <v-input readonly
                   v-el:picker-toggler
                   :class="[prefixCls + '-time-picker-input']"
                   :value="value"
                   :placeholder="placeholder"></v-input>
        </div>
        <div :class="[prefixCls + '-time-picker-panel']">
          <ul v-el:h
            :class="time-hours" @mouseover="selection('H')">
            <li v-for="index in 24"
              v-if="disabledHours().indexOf(index) < 0"
              :class="{selected: hour === index}"
              @click="chooseHour(index, $event)">{{index | leftPad}}
            </li>
          </ul>
        </div>
        <div :class="[prefixCls + '-time-picker-panel']">
          <ul v-el:m class="time-minute" @mouseover="selection('M')">
            <li v-for="index in 59"
              v-if="disabledMinutes().indexOf(index) < 0"
              :class="{selected: minute === index}"
              @click="chooseMinute(index, $event)">{{index | leftPad}}
            </li>
          </ul>
        </div>
        <div :class="[prefixCls + '-time-picker-panel']" @mouseover="selection('S')">
          <ul v-el:s class="time-seconds">
            <li v-for="index in 59" v-if="disabledSeconds().indexOf(index) < 0"
              :class="{selected: second === index}"
              @click="chooseSecond(index, $event)">{{index | leftPad}}
            </li>
          </ul>
        </div>
      </div>
    </trigger>
  </div>
</template>
<script type="text/babel">
  import GlobalMixin from '../_utils/GlobalMixin.js'
  import Input from '../Input'
  import Trigger from '../Trigger'
  import Icon from '../Icon'
  import Selection from './selection'

  const scrollTo = (element, to, duration) => {
    const requestAnimationFrame = window.requestAnimationFrame || function () {
      return setTimeout(arguments[0], 10)
    }
    if (duration <= 0) {
      element.scrollTop = to
      return
    }
    const difference = to - element.scrollTop
    const perTick = difference / duration * 10
    requestAnimationFrame(() => {
      element.scrollTop = element.scrollTop + perTick
      if (element.scrollTop === to) return
      scrollTo(element, to, duration - 10)
    })
  }

  export default {
    mixins: [GlobalMixin],

    props: {
      placeholder: {
        type: String,
        default: '请选择时间'
      },
      // defaultValue: [Date, String],
      size: {
        type: String,
        default: 'default'
      },
      value: {
        type: [Date, String]
      },
      hideDisabledOptions: Boolean,
      disabledHours: {
        type: Function,
        default () {
          return []
        }
      },
      disabledMinutes: {
        type: Function,
        default () {
          return []
        }
      },
      disabledSeconds: {
        type: Function,
        default () {
          return []
        }
      }
    },
    filters: {
      leftPad (value) {
        return this.leftPad(value)
      }
    },
    components: {
      vInput: Input,
      trigger: Trigger,
      icon: Icon
    },
    data () {
      const now = new Date()
      return {
        hour: now.getHours(),
        minute: now.getMinutes(),
        second: now.getSeconds()
      }
    },
    watch: {
      value (val) {
        if (val) {
          this.placeholder = ''
          const time = new Date()
          time.setHours(this.hour)
          time.setMinutes(this.minute)
          time.setSeconds(this.second)
          this.$dispatch('change', time, this.value)
        } else {
          this.placeholder = this.originPlaceHolder
        }
      },
      hour (index) {
        this.selectChoosed('h', index)
      },
      minute (index) {
        this.selectChoosed('m', index)
      },
      second (index) {
        this.selectChoosed('s', index)
      }
    },

    created () {
      if (this.value && this.value.constructor === Date) {
        this.hour = this.value.getHours()
        this.minute = this.value.getMinutes()
        this.second = this.value.getSeconds()
      } else if (this.value && typeof this.value === 'string') {
        const arr = this.value.split(':')
        this.hour = +arr[0]
        this.minute = +arr[1]
        this.second = +arr[2]
      } else {
        this.value = this.leftPad(this.hour) + ':' + this.leftPad(this.minute) + ':' + this.leftPad(this.second)
      }
    },
    methods: {
      leftPad (value) {
        if (+value < 10) {
          return '0' + value
        }
        return value
      },
      selection (choosed) {
        let start
        let end
        if (choosed === 'H') {
          start = 0
        } else if (choosed === 'M') {
          start = 3
        } else if (choosed === 'S') {
          start = 6
        }
        end = start + 2
        Selection(this.$els.pickerToggler, start, end)
      },
      selectChoosed (type, index, duration) {
        let me = this
        let target = me.$els[type]
        if (target) {
          scrollTo(target.parentNode, index * target.children[0].offsetHeight, duration || 100)
        }
        this.value = this.leftPad(this.hour) + ':' + this.leftPad(this.minute) + ':' + this.leftPad(this.second)
      },
      chooseHour (index) {
        this.hour = index
      },
      chooseMinute (index) {
        this.minute = index
      },
      chooseSecond (index) {
        this.second = index
      },
      togglePopupHandler (show) {
        if (show) {
          this.$nextTick(() => {
            this.selectChoosed('h', this.hour, 1)
            this.selectChoosed('m', this.minute, 1)
            this.selectChoosed('s', this.second, 1)
          })
        }
      },
      closePopup () {
        this.$refs.trigger.show = false
      }
    }
  }
</script>
