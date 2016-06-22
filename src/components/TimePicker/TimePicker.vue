<template>
  <div class="atui-time-picker">
    <span class="atui-time-picker-toggler">
      <v-input v-el:picker-toggler readonly @click="toggleMenus" :value="showValue" :placeholder="placeholder"></v-input>
    </span>
    <div v-el:picker-menus class="atui-time-picker-menus" v-show="show" transition="slide">
      <div class="time-picker-panel">
        <ul v-el:h class="time-hours" @mouseover="selection('H')">
          <li v-for="index in 24" v-if="disabledHours().indexOf(index) < 0" :class="{selected: hour === index}" @click="chooseHour(index, $event)">{{index | leftPad}}</li>
        </ul>
      </div>
      <div class="time-picker-panel">
        <ul v-el:m class="time-minute" @mouseover="selection('M')">
          <li v-for="index in 59" v-if="disabledMinutes().indexOf(index) < 0" :class="{selected: minute === index}" @click="chooseMinute(index, $event)">{{index | leftPad}}</li>
        </ul>
      </div>
      <div class="time-picker-panel" @mouseover="selection('S')">
        <ul v-el:s class="time-seconds">
          <li v-for="index in 59" v-if="disabledSeconds().indexOf(index) < 0" :class="{selected: second === index}" @click="chooseSecond(index, $event)">{{index | leftPad}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import EventListener from '../utils/EventListener'
  import Input from '../Input'
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
      vInput: Input
    },
    data () {
      const now = new Date()
      return {
        show: false,
        hour: now.getHours(),
        minute: now.getMinutes(),
        second: now.getSeconds()
      }
    },
    watch: {
      value (val) {
        if (val) {
          this.placeholder = ''
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
    computed: {
      showValue () {
        const showValue = this.leftPad(this.hour) + ':' + this.leftPad(this.minute) + ':' + this.leftPad(this.second)
        const time = new Date()
        time.setHours(this.hour)
        time.setMinutes(this.minute)
        time.setSeconds(this.second)
        this.$dispatch('change', time, showValue)
        return showValue
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
      }
      // this.originPlaceHolder = this.placeholder
    },
    attached () {
      document.body.appendChild(this.$els.pickerMenus)
    },
    ready () {
      let me = this
      let menus = me.$els.pickerMenus
      let toggler = me.$els.pickerToggler

      me._closeEvent = EventListener.listen(window, 'click', (e) => {
        if (!menus.contains(e.target) && !toggler.contains(e.target)) {
          me.show = false
        }
      })
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
      toggleMenus () {
        let me = this
        me.show = !me.show
        if (me.show) {
          let toggler = me.$els.pickerToggler
          let menus = me.$els.pickerMenus
          const offset = toggler.getBoundingClientRect()
          menus.style.top = offset.top + document.body.scrollTop + document.documentElement.scrollTop + toggler.offsetHeight + 'px'
          menus.style.left = offset.left + 'px'
          me.$nextTick(() => {
            me.selectChoosed('h', me.hour, 1)
            me.selectChoosed('m', me.minute, 1)
            me.selectChoosed('s', me.second, 1)
          })
        }
      }
    }
  }
</script>
