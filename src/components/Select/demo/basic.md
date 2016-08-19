---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN
基本使用方式


## en-US


````jsx
<v-select value="Cherry" style="width:200px" @change="onSlectChange">
  <v-option value="Apple">苹果</v-option>
  <v-option value="Banana" disabled>Banana</v-option>
  <v-option value="Cherry">Cherry</v-option>
  <v-option value="Orange">OrangeText</v-option>
  <v-option value="Grape">Grape</v-option>
</v-select>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    vSelect: atui.Select,
    vOption: atui.Select.Option
  },
  data() {
    return {
      single: ''
    }
  },
  methods: {
    onSlectChange (obj) {
      this.single = obj.value;
    }
  }
})
````
