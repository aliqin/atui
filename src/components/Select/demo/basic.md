---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN



## en-US


````jsx

<pre>
  选中值 : {{single}}
</pre>
<v-select :value="single" :placeholder="placeholder" style="width:200px;" @change="onSlectChange">
  <v-option value="Apple">苹果</v-option>
  <v-option value="Banana" disabled>Banana</v-option>
  <v-option value="Cherry">Cherry</v-option>
  <v-option value="Orange">OrangeText</v-option>
  <v-option value="Grape">Grape</v-option>
</v-select>
<hr>
<h4>多选下拉(只能选已有的)</h4>

<v-select multiple @change="onSlectChange">
  <v-option value="Apple">Apple</v-option>
  <v-option value="Banana">Banana</v-option>
  <v-option value="Cherry">Cherry</v-option>
  <v-option value="Orange">Orange</v-option>
  <v-option value="Grape">Grape</v-option>
</v-select>

<hr>
<h4>tags(输入回车时变成一个tag)</h4>

<v-select tags :value="Banana">
  <v-option value="Apple">Apple</v-option>
  <v-option value="Banana">Banana</v-option>
  <v-option value="Cherry">Cherry</v-option>
  <v-option value="Orange">Orange</v-option>
  <v-option value="Grape">Grape</v-option>
</v-select>
<hr />


<h4>下拉出自定义类容</h4>
<v-select placeholder="选择类别" style="width:200px;">
<v-option>
  <tabs>
    <tab header="系统短信签名"></tab>
    <tab header="系统短信签名"></tab>
    <tab header="系统短信签名"></tab>
  </tabs>
</v-option>
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
        onSlectChange: function(obj) {
            this.single = obj.value;
        }
}
})
````
