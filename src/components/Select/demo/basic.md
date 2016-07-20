---
order: 0
title:
  zh-CN: 按钮类型
  en-US: Type
---

## zh-CN

按钮有四种类型：主按钮、次按钮、幽灵按钮、虚线按钮。

通过设置 `type` 为 `primary` `ghost` `dashed` 可分别创建主按钮、幽灵按钮、虚线按钮，若不设置 `type` 值则为次按钮。不同的样式可以用来区别其重要程度。

主按钮和次按钮可独立使用，幽灵按钮用于和主按钮组合。需要强引导用主按钮，切记主按钮在同一个操作区域最多出现一次。

## en-US

There are primary button, default button, ghost button and dashed button in antd.

`type` can be set as `primary` or `ghost` or `dashed`, in order to create primary button or ghost button or dashed button. If nothing is provided to `type`, we will get default button. Users can tell the significance of button from it's appearance.

Primary button and default button can be used without other button, but ghost button must be used with primary button.



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