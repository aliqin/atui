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
<v-switch small color="#000"></v-switch>
<v-switch small checked @change="changeHandler"></v-switch>
<v-switch small disabled></v-switch>
<v-switch></v-switch>
<v-switch checked @change="changeHandler"></v-switch>
<v-switch disabled></v-switch>
<v-switch>
  <span slot="checkedPart">开</span>
  <span slot="unCheckedPart">关</span>
</v-switch>
<v-switch :disabled="disabled" checked>
  <span slot="checkedPart">开</span>
  <span slot="unCheckedPart">关</span>
</v-switch>
<v-switch :disabled="disabled">
  <span slot="checkedPart">开</span>
  <span slot="unCheckedPart">关</span>
</v-switch>
<v-switch>
  <span slot="checkedPart"><v-icon type="tick" size="16"></v-icon></span>
  <span slot="unCheckedPart"><v-icon type="close" size="12"></v-icon></span>
</v-switch>
````

````vue-script
new Vue({
    el: 'body',
    components: {
        vSwitch: atui.Switch
    }
})
````