<template>
  <div class="atui-time-picker">
    <span class="time-picker">
      <v-input readonly @click="toggleMenus" :value="value" :placeholder="placeholder"></v-input>
    </span>
    <div class="time-menus" v-show="isOpen" transition="slide">
      <ul class="time-hours">
        <li class="time-hour" :class="{}" v-for="index in 12" @click="chooseHour(index)">{{index | leftPad}}</li>
      </ul>
      <ul class="time-minute">
        <li v-for="index in 59" @click="chooseMinute">{{index | leftPad}}</li>
      </ul>
      <ul class="time-seconds">
        <li v-for="index in 59" @click="chooseSecond">{{index | leftPad}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import EventListener from '../utils/EventListener'
  import Input from '../Input'
  // import Selection from './selection'

  export default {
    props: {
      placeholder: {
        type: String,
        default: '请选择'
      },
      size: {
        type: String,
        default: 'default'
      },
      value: {
        type: [Date, String]
      }
    },
    filters: {
      leftPad (value) {
        if (+value < 10) {
          return '0' + value
        }
        return value
      }
    },
    components: {
      vInput: Input
    },
    data () {
      return {
        menus: [],
        value: '',
        isOpen: false
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
      selectedValue () {

      }
    },
    created () {
      this.originPlaceHolder = this.placeholder
    },
    ready () {
      const el = this.$el
      let me = this
      me._closeEvent = EventListener.listen(window, 'click', (e) => {
        if (!el.contains(e.target)) {
          me.isOpen = false
        }
      })
    },
    methods: {
      chooseHour (index) {
        // this.value =
      },
      chooseMinute () {

      },
      chooseSecond () {

      },
      toggleMenus () {
        this.isOpen = !this.isOpen
      }
    }
  }
</script>
