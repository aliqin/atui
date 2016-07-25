<template>
  <div class="bs-docs-section" id="datepicker">
    <h1 class="page-header"><a href="#datepicker" class="anchor">DatePicker 日期选择</a></h1>
    <div class="bs-example">
      <p>
        <pre>
选择日期是: {{value}}
        </pre>
      </p>
      <date-picker v-ref:dp
      :format="format.toString()" :disabled-date="disabledDate" @change="selectChange"></date-picker>

      <date-picker disabled :format="format" @change="selectChange"></date-picker>

      <h4>格式化</h4>
      <v-select :value.sync="format" >
        <v-option value="yyyy,MM,dd">yyyy,MM,dd</v-option>
        <v-option value="yyyy-MM-dd">yyyy-MM-dd</v-option>
        <v-option value="yyyy.MM.dd">yyyy.MM.dd</v-option>
        <v-option value="MMM/dd/yyyy">MMM/dd/yyyy</v-option>
        <v-option value="MMMM/dd/yyyy">MMMM/dd/yyyy</v-option>
      </v-select>

      <h4>日期范围选择（rangePicker）</h4>

      <range-picker @change="rangePickerChange"></range-picker>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<date-picker v-ref:dp
:format="format.toString()"
:disabled-date="disabledDate"
@change="selectChange">
</date-picker>

<h4>日期范围选择（rangePicker）</h4>
<range-picker></range-picker>

// script
import {DatePicker, Select} from 'atui'
const RangePicker = DatePicker.RangePicker
const Option = Select.Option;

export default {
  components: {
    DatePicker,
    RangePicker,
    vSelect:Select,
    vOption:Option
  },
  data() {
    return {
      disabled: [],
      value: 'Oct/06/2015',
      format: 'MMM/dd/yyyy',
      reset: true
    }
  },
  methods:{
    selectChange(value) {
      this.value = value
    },
    disabledDate(date) {
      return date.getTime() <= new Date().getTime()
    },
    rangePickerChange(start,end) {
      console.log('rangepicker',start,end)
    }
  }
}


</script></code></pre>
    <h2>Option</h2>
    <table class="atui-table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>value</td>
          <td><code>String</code></td>
          <td></td>
          <td>输入框里的默认值</td>
        </tr>
        <tr>
          <td>Width</td>
          <td><code>String</code></td>
          <td>200px</td>
          <td>输入框的宽度</td>
        </tr>
        <tr>
          <td>format</td>
          <td><code>String</code></td>
          <td><code>MMMM/dd/yyyy</code></td>
          <td>显示格式， 可按照d, dd, M, MM ,MMM , MMMM, yyyy格式化.</td>
        </tr>
        <tr>
          <td>disabledDate</td>
          <td><code>Function</code></td>
          <td></td>
          <td>禁用某些时间</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import {DatePicker,Select} from 'src/'
  const RangePicker = DatePicker.RangePicker
  const Option = Select.Option;

  export default {
    components: {
      DatePicker,
      RangePicker,
      vSelect:Select,
      vOption:Option
    },
    data() {
      return {
        disabled: [],
        value: 'Oct/06/2015',
        format: 'MMM/dd/yyyy',
        reset: true
      }
    },
    methods:{
      selectChange(value) {
        this.value = value
      },
      disabledDate(date) {
        return date.getTime() <= new Date().getTime()
      },
      rangePickerChange(start,end) {
        console.log('rangepicker',start,end)
      }
    }
  }
</script>
