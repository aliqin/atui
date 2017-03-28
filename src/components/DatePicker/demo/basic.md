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
<v-date-picker style="width: 219px" v-model="date" format="yyyyMMdd" :disabled-date="(date) => { return date.getMonth() === 1 }"></v-date-picker>
<v-button @click.native="setDate">setDate</v-button>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    vDatePicker: atui.DatePicker,
    vButton: atui.Button
  },
  data: {
    date: new Date('2017-03-02')
  },
  methods: {
    setDate () {
      this.date = new Date('2017-03-10')
    }
  }
})
````
