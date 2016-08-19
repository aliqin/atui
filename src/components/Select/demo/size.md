---
order: 0
title:
  zh-CN: 不同尺寸
  en-US: Type
---

## zh-CN
给出三种已知尺寸


## en-US


````jsx
<p>large</p>
<v-select value="Cherry" large style="width:200px" @change="onSlectChange">
  <v-option value="Apple">苹果</v-option>
  <v-option value="Banana" disabled>Banana</v-option>
  <v-option value="Cherry">Cherry</v-option>
  <v-option value="Orange">OrangeText</v-option>
  <v-option value="Grape">Grape</v-option>
</v-select>
<p>default</p>
<v-select value="Cherry" style="width:200px" @change="onSlectChange">
  <v-option value="Apple">苹果</v-option>
  <v-option value="Banana" disabled>Banana</v-option>
  <v-option value="Cherry">Cherry</v-option>
  <v-option value="Orange">OrangeText</v-option>
  <v-option value="Grape">Grape</v-option>
</v-select>
<p>small</p>
<v-select value="Cherry" small style="width:200px" @change="onSlectChange">
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
