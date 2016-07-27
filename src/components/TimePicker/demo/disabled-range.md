---
order: 0
title:
  zh-CN: 禁用部分时间
  en-US: Type
---

## zh-CN



## en-US


````jsx
<time-picker @change="timePickerChange" :disabled-minutes="disabledMinutes" :disabled-seconds="disabledSeconds"></time-picker>
````

````vue-script
new Vue({
    el: 'body',
    components: {
      timePicker: atui.TimePicker
    },
    methods: {
      disabledMinutes: function() {
          return [...Array(60).keys()].filter(value => value % 10 !== 0)
      },
      disabledSeconds: function() {
          return [...Array(60).keys()].filter(value => value % 30 !== 0)
      },
      timePickerChange: function(date,timeString) {
          console.log('timepicker',date, timeString)
      }
    }
})
````
