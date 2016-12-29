<template>
  <div :class="[prefixCls + '-datepicker']">
    <trigger trigger="click" effect="slide"
    placement="bottomLeft"
    :disabled="disabled"
    ref="trigger"
    popup-hide-when-click-outside>
      <div slot="trigger"
           :class="[prefixCls + '-datepicker-toggle']">
        <v-input v-bind="{disabled: disabled, large: large, small: small}"
        type="text"
        :value="selectedValue"
        :placeholder="placeholder"
        readonly></v-input>
        <!-- <input :class="[prefixCls + '-datepicker-input']"
        v-bind="{disabled: disabled}"
        type="text"
        :value="value"
        :placeholder="placeholder"
        readonly /> -->
        <icon type="calendar" :color="iconColor"></icon>
      </div>
      <div slot="popup" :class="[prefixCls + '-datepicker-calendar']">
        <calendar ref="calendar"
          @change="selectChange"
          :value="selectedValue"
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
        type: String
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
        default: (date) => {}
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
        selectedValue: this.value
      }
    },

    watch: {
      value (val) {
        if (val) {
          this.iconColor = '#666'
          return
        }
        this.iconColor = '#BFBFBF'
      }
    },

    methods: {
      selectChange (value) {
        this.selectedValue = value
        this.$refs.trigger.showPopup = false
        // 冒泡给上一层使用，比如rangePicker
        this.$emit('change', value)
      }
    }
  }
</script>
