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
<v-tag>标签一</v-tag>
<v-tag closable @close="closeTag">标签（回调）</v-tag>
<v-tag :href="href">标签（链接）</v-tag>
<v-tag color="green">标签</v-tag>
<v-tag color="orange" closable @close="closeTag">标签</v-tag>
<v-tag color="red" size="20">标签</v-tag>
````

````vue-script
new Vue({
    el: 'body',
    components: {
        vTag: atui.Tag
    }
})
````