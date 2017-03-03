---
order: 0
title:
  zh-CN: 多选
  en-US: Type
---

## zh-CN
多选下拉(只能选已有的)


## en-US


````jsx
<v-select multiple v-model="selectedValue" placeholder="请输入" style="width:100%">
  <v-option value="Apple">AppleText</v-option>
  <v-option value="Banana">BananaText</v-option>
  <v-option value="Cherry">CherryText</v-option>
  <v-option value="Orange">OrangeText</v-option>
  <v-option value="Grape">GrapeText</v-option>
</v-select>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    vSelect: atui.Select,
    vOption: atui.Select.Option
  },
  data: {
    selectedValue: ['Apple','Banana']
  }
})
````
