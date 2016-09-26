---
order: 0
title:
  zh-CN: 标签
  en-US: Type
---

## zh-CN

tags(输入回车时变成一个tag)

## en-US


````jsx

<v-select tags placeholder="请输入" value="Banana" style="width:100%;">
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
