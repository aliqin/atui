<template>
  <div class="datepicker">
    <input class="form-control datepicker-input" :class="{'with-reset-button': showResetButton}" type="text"
        v-bind:style="{width:width}"
        @click="inputClick"
        v-model="value"/>
    <icon type="calendar"></icon>
  </div>
</template>

<script>
import EventListener from '../utils/EventListener.js'
import Icon from 'src/components/Icon/';

export default {
  name:'date-picker',
  props: {
    value: {
      type: String,
      twoWay: true
    },
    format: {
      default: 'yyyy-MMMM-dd'
    },
    locale:{
      default : 'zh_CN'
    },
    disabledDaysOfWeek: {
      type: Array,
      default() {
        return []
      }
    },
    width: {
      type: String,
      default: '200px'
    },
    showResetButton: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      inputClick () {

      }
    }
  },
  methods:{

  },
  components: {
    Icon
  }
}
</script>
