---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN

datePicker抽像出来的日历组件，目前只有一种样式

## en-US


````jsx
<calendar :value="currDate" format="yyyyMMdd" @change="onChange"></calendar>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    calendar: atui.Calendar
  },
  data: {
    currDate: new Date('2017-03-31')
  },
  methods: {
    onChange (dateStr, date) {
      console.log(arguments)
    }
  }
})
````
