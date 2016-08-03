---
order: 0
title:
  zh-CN: 自定义内容
  en-US: Type
---

## zh-CN
自定义开关文字或图标


## en-US


````jsx
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
    vSwitch: atui.Switch,
    vIcon: atui.Icon
  }
})
````
