<template>
  <div class="bs-docs-section" id="timepicker">
    <h3 class="page-header"><a href="#timepicker" class="anchor">TimePicker 时间选择</a></h3>
    <div class="bs-example">
      <h4>时间范围选择（timePicker）</h4>
      <time-picker @change="timePickerChange"></time-picker>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">

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
          <td>disabledDaysOfWeek</td>
          <td><code>Array</code></td>
          <td></td>
          <td>禁用一周的某一天. 按 0 到 6 .
             禁用多天可用<code>逗号</code>分隔</td>
        </tr>

      </tbody>
    </table>
  </div>
</template>

<script>
  import {TimePicker} from 'src/'


  export default {
    components: {
      TimePicker
    },
    data() {
      return {

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
      }
    },
    methods: {
      timePickerChange(date,timeString) {
        console.log('rangepicker',date, timeString)
      }
    }
  }
</script>
