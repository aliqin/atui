<template>
  <div :class="[prefixCls + '-datepicker']">
    <trigger trigger="click" effect="slide"
    placement="bottomLeft"
    :disabled="disabled"
    :offset="[0,0]"
    ref="trigger"
    popup-hide-when-click-outside>
      <div slot="trigger"
           :class="[prefixCls + '-datepicker-toggle']">
        <v-input v-bind="{disabled: disabled, large: large, small: small}"
        type="text"
        :value="currDateText"
        :placeholder="placeholder"
        readonly></v-input>
        <icon type="calendar" :color="iconColor"></icon>
      </div>
      <div slot="popup" :class="[prefixCls + '-datepicker-calendar']">
        <calendar ref="calendar"
          @change="selectChange"
          :value="currDate"
          :format="format"
          :locale="locale"
          :disabled-date="disabledDate">
        </calendar>
      </div>
    </trigger>
  </div>
</template>

<script type="text/babel">
  import GlobalMixin from '../_utils/GlobalMixin'
  import Trigger from '../Trigger'
  import Calendar from '../Calendar/'
  import Icon from '../Icon/'
  import VInput from '../Input/'

  export default {
    name: 'DatePicker',
    mixins: [
      GlobalMixin
    ],
    props: {
      value: {
        type: Date,
        default: () => { return null }
      },
      placeholder: {
        type: String,
        default: '请选择日期'
      },
      format: {
        default: 'yyyy-MM-dd'
      },
      locale: {
        default: 'zh_CN'
      },
      disabledDate: {
        type: Function,
        default: (date) => { return false }
      },
      disabled: Boolean,
      large: Boolean,
      small: Boolean
    },

    components: {
      Icon, Calendar, Trigger, VInput
    },

    data () {
      return {
        iconColor: '#BFBFBF',
        show: false,
        currDate: this.value,
        currDateText: this.value && this.value.toString('yyyy-MM-dd') || this.placeholder
      }
    },

    mounted () {
      this.currDateText = this.$refs.calendar.stringify(this.currDate, this.format)
    },

    watch: {
      value (newVal, oldVal) {
        if (+newVal === +oldVal) {
          return
        }
        if (newVal) {
          this.iconColor = '#666'
        } else {
          this.iconColor = '#BFBFBF'
        }
        this.currDate = newVal
      },
      currDate (val) {
        this.currDateText = this.$refs.calendar.stringify(this.currDate, this.format)
        this.$emit('input', val)
      }
    },

    methods: {
      selectChange (text, date) {
        this.currDate = date
        this.$refs.trigger.showPopup = false
        // 冒泡给上一层使用，比如rangePicker
        this.$emit('change', date)
      }
    }
  }
</script>
