<template>
  <div class="bs-docs-section" id="timepicker">
    <h3 class="page-header"><a href="#timepicker" class="anchor">TimePicker 时间选择</a></h3>
    <div class="bs-example">
      <h4>时间范围选择（timePicker）</h4>
      <time-picker @change="timePickerChange" value="11:11:11"></time-picker>
       <h4>隐藏部分时间的选择</h4>
      <time-picker @change="timePickerChange" :disabled-minutes="disabledMinutes" :disabled-seconds="disabledSeconds"></time-picker>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<time-picker @change="timePickerChange" value="11:11:11"></time-picker>
<time-picker @change="timePickerChange" :disabled-minutes="disabledMinutes" :disabled-seconds="disabledSeconds"></time-picker>
// script
export default {
  components: {
    TimePicker
  },
  data() {
    return {
      defaultTime: new Date().set
    }
  },
  methods: {
    disabledMinutes () {
      return [...Array(60).keys()].filter(value => value % 10 !== 0)
    },
    disabledSeconds () {
      return [...Array(60).keys()].filter(value => value % 30 !== 0)
    },
    timePickerChange(date,timeString) {
      console.log('timepicker',date, timeString)
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
        defaultTime: new Date(11,11,11)
      }
    },
    methods: {
      disabledMinutes () {
        return [...Array(60).keys()].filter(value => value % 10 !== 0)
      },
      disabledSeconds () {
        return [...Array(60).keys()].filter(value => value % 30 !== 0)
      },
      timePickerChange(date,timeString) {
        console.log('timepicker',date, timeString)
      }
    }
  }
</script>
