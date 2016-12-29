---
order: 2
title:
  zh-CN: 日期范围
  en-US: Type
---

## zh-CN

DatePicker提供了一个子组件：`RangePicker`,使用`DatePicker.RangePicker`调用即可

## en-US


````jsx
<range-picker @change="change"></range-picker>
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
