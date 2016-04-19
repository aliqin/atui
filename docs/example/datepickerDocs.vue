<template>
  <div class="bs-docs-section" id="datepicker">
    <h1 class="page-header"><a href="#datepicker" class="anchor">DatePicker 日期选择</a></h1>
    <div class="bs-example">
      <p>
        <pre>
选择日期是: {{new Date(value).toString().slice(0, -23)}}
        </pre>
      </p>
      <date-picker v-ref:dp :value.sync="value" :disabled-days-of-Week="disabled"
      :format="format.toString()" :show-reset-button="reset" @change="selectChange"></date-picker>
      <h4>禁用一周的某日</h4>

      <v-select multiple :default-value.sync="disabled">
  <v-option value="0">0</v-option>
  <v-option value="1">1</v-option>
  <v-option value="2">2</v-option>
  <v-option value="3">3</v-option>
  <v-option value="4">4</v-option>
  <v-option value="5">5</v-option>
  <v-option value="6">6</v-option>
      </v-select>

      <h4>格式化</h4>
      <v-select :default-value.sync="format" >
        <v-option value="yyyy,MM,dd">yyyy,MM,dd</v-option>
        <v-option value="yyyy-MM-dd">yyyy-MM-dd</v-option>
        <v-option value="yyyy.MM.dd">yyyy.MM.dd</v-option>
        <v-option value="MMM/dd/yyyy">MMM/dd/yyyy</v-option>
        <v-option value="MMMM/dd/yyyy">MMMM/dd/yyyy</v-option>
      </v-select>

      <h4>重置按钮</h4>
      <label><input type="checkbox" v-model="reset">打开或关闭重置功能</label>

      <range-picker></range-picker>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<date-picker v-ref:dp :value.sync="value" :disabled-days-of-Week="disabled"
      :format="format.toString()" :show-reset-button="reset" @change="selectChange"></DatePicker>

<v-select multiple :default-value.sync="disabled" size=5>
  <v-option value="0">0</v-option>
  <v-option value="1">1</v-option>
  <v-option value="2">2</v-option>
  <v-option value="3">3</v-option>
  <v-option value="4">4</v-option>
  <v-option value="5">5</v-option>
  <v-option value="6">6</v-option>
</v-select>
<v-select  :default-value.sync="format">
  <v-option value="yyyy,MM,dd">yyyy,MM,dd</v-option>
  <v-option value="yyyy-MM-dd">yyyy-MM-dd</v-option>
  <v-option value="yyyy.MM.dd">yyyy.MM.dd</v-option>
  <v-option value="MMM/dd/yyyy">MMM/dd/yyyy</v-option>
  <v-option value="MMMM/dd/yyyy">MMMM/dd/yyyy</v-option>
</v-select>
    </script></code></pre>
    <h2>Option</h2>
    <table class="table table-bordered">
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
          <td>disabledDaysOfWeek</td>
          <td><code>Array</code></td>
          <td></td>
          <td>禁用一周的某一天. 按 0 到 6 .
             禁用多天可用<code>逗号</code>分隔</td>
        </tr>
        <tr>
          <td>showResetButton</td>
          <td><code>Boolean</code></td>
          <td>false</td>
          <td>是否显示清除日期按钮</td>
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
        format: ['MMM/dd/yyyy'],
        reset: true
      }
    },
    watch: {
      disabled() {
        this.$refs.dp.getDateRange()
      },
      watch:{
        value(val) {
          console.log(val)
        }
      },
      format(newV) {
        this.value = this.$refs.dp.stringify(new Date(this.value))
      }
    },
    methods:{
      selectChange(value) {
        alert(value)
      }
    }
  }
</script>
