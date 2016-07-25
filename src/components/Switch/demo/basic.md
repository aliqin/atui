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