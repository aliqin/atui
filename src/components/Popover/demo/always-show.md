---
order: 0
title:
  zh-CN: 默认显示，无法关闭
  en-US: Type
---

## zh-CN
增加`always-show`属性，会默认一直显示，而不是点击或者hover时显示


## en-US


````jsx
<popover
  effect="fade"
  placement="right"
  title="永远展示"
  content="怎么动都不会消失"
  always-show>
  <v-button>Popover always show</v-button>
</popover>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    popover: atui.Popover,
    vButton: atui.Button
  }
})
````
