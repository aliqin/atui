<template>
  <div class="atui-time-picker">
    <span class="time-picker">
      <v-input readonly @click="toggleMenus" :value="displayValue" :placeholder="placeholder"></v-input>
    </span>
    <div class="time-menus" v-show="isOpen" transition="slide">
      <ul class="time-hours">
        <li class="time-hour" :class="{}" v-for="index in 12" @click="chooseHour">{{index | leftPad}}</li>
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
      defaultValue: {
        type: Array
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
        displayValue: '',
        isOpen: false
      }
    },
    computed: {
      selectedValue () {

      }
    },
    created () {
      // let me = this
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
      chooseHour () {

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
