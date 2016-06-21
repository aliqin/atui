<template>
  <div class="atui-time-picker">
    <span class="atui-time-picker-toggler">
      <v-input v-el:picker-toggler readonly @click="toggleMenus" :value="showValue" :placeholder="placeholder"></v-input>
    </span>
    <div v-el:picker-menus class="atui-time-picker-menus" v-show="show" transition="slide">
      <div class="time-picker-panel">
        <ul class="time-hours" @mouseover="selection('H')">
          <li v-for="index in 24" v-if="disabledHours().indexOf(index) < 0" :class="{selected: selectedH === index}" @click="chooseHour(index, $event)">{{index | leftPad}}</li>
        </ul>
      </div>
      <div class="time-picker-panel">
        <ul class="time-minute" @mouseover="selection('M')">
          <li v-for="index in 59" v-if="disabledMinutes().indexOf(index) < 0" :class="{selected: selectedM === index}" @click="chooseMinute(index, $event)">{{index | leftPad}}</li>
        </ul>
      </div>
      <div class="time-picker-panel" @mouseover="selection('S')">
        <ul class="time-seconds">
          <li v-for="index in 59" v-if="disabledSeconds().indexOf(index) < 0" :class="{selected: selectedS === index}" @click="chooseSecond(index, $event)">{{index | leftPad}}</li>
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
      defaultValue: String,
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
        second: now.getSeconds(),
        selectedH: null,
        selectedM: null,
        selectedS: null
      }
    },
    watch: {
      value (val) {
        if (val) {
          this.placeholder = ''
        } else {
          this.placeholder = this.originPlaceHolder
        }
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
      this.originPlaceHolder = this.placeholder
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
      selectChoosed (index, event) {
        const target = event.target.parentNode.parentNode
        scrollTo(target, index * event.target.offsetHeight, 100)
      },
      chooseHour (index, event) {
        this.hour = index
        this.selectedH = index
        this.selectChoosed(index, event)
      },
      chooseMinute (index, event) {
        this.minute = index
        this.selectedM = index
        this.selectChoosed(index, event)
      },
      chooseSecond (index, event) {
        this.second = index
        this.selectedS = index
        this.selectChoosed(index, event)
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
        }
      }
    }
  }
</script>
