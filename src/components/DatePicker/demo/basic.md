---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN
基本的使用方法


## en-US


````jsx
<date-picker style="width: 219px" value="2017-03-02" format="yyyyMMdd" :disabled-date="(date) => { return date.getMonth() === 1 }"></date-picker>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    datePicker: atui.DatePicker
  }
})
````
