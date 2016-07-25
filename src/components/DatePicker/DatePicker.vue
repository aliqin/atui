<template>
  <div :class="[prefixCls + '-datepicker']">
    <trigger trigger="click" effect="slide" placement="bottomLeft" :show.sync="show">
      <div slot="trigger"
           :class="[prefixCls + '-datepicker-toggle']">
        <input :class="[prefixCls + '-datepicker-input']" v-bind="{disabled:disabled}" type="text" :value="value" :placeholder="placeholder" readonly/>
        <icon type="calendar"></icon>
      </div>
      <div slot="popup"
           :class="[prefixCls + '-datepicker-calendar']">
        <calendar v-ref:calendar
                  @change="selectChange"
                  :value="value"
                  :format="format"
                  :locale="locale"
                  :disabled-date="disabledDate"></calendar>
      </div>
    </trigger>
  </div>
</template>

<script type="text/babel">
  import GlobalMixin from '../_utils/GlobalMixin'
  import Trigger from '../Trigger'
  import Calendar from '../Calendar/'
  import Icon from '../Icon/'

  export default {
    name: 'date-picker',

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
      show: Boolean,
      disabledDate: {
        type: Function,
        default: (date) => {}
      },
      disabled: Boolean
    },

    components: {
      Icon, Calendar, Trigger
    },

    methods: {
      selectChange (value) {
        this.value = value
        this.show = false

        // 冒泡给上一层使用，比如rangePicker
        return true
      }
    }
  }
</script>
