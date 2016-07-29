---
order: 2
title:
  zh-CN: 触发事件
  en-US: Type
---

## zh-CN

默认为hover事件，也可以使用其它dom事件，比如`click`,`focus`

## en-US


````jsx
<tooltip content="Focus时我才显示" trigger="focus">
  <v-input type="text" placeholder="Focus me"></v-input>
</tooltip>

````

````vue-script
new Vue({
  el: 'body',
  components: {
    tooltip: atui.Tooltip,
    vInput: atui.Input
  }
})
````
