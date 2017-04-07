---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN
基本的用法，使用`v-model`


## en-US


````jsx
<v-time-picker v-model="time"></v-time-picker>
<v-button @click.native="setTime">setTime to 11:00:00</v-button>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    vTimePicker: atui.TimePicker,
    vButton: atui.Button
  },
  data() {
    var d = new Date()
    d.setHours(10)
    d.setMinutes(0)
    d.setSeconds(0)

    return {
      time: d
    }
  },
  methods: {
    setTime() {
      this.time = '11:00:00'
    }
  }
})
````
