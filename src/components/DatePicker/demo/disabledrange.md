---
order: 3
title:
  zh-CN: 禁用部分日期的时间范围选择器
  en-US: Type
---

## zh-CN

`RangePicker`可以通过设置`disabledStart`，`disabledEnd` 来禁用部分日期

## en-US


````jsx
<range-picker @change="change" format="yyyyMMdd" :disabled-end="(date) => { return date.getMonth() < 3 }" :disabled-start="(date) => { return date.getMonth() >= 2 }"></range-picker>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    rangePicker: atui.DatePicker.RangePicker
  },
  methods:{
    change(start,end)  {
      console.log(start,end)
    }
  }
})
````
