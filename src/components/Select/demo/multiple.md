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
<v-select multiple style="width:100%">
  <v-option value="Apple">Apple</v-option>
  <v-option value="Banana">Banana</v-option>
  <v-option value="Cherry">Cherry</v-option>
  <v-option value="Orange">Orange</v-option>
  <v-option value="Grape">Grape</v-option>
</v-select>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    vSelect: atui.Select,
    vOption: atui.Select.Option
  }
})
````
