---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN

通常情况下默认显示在上方，需要特别指定的话请指定placement属性

## en-US


````jsx
<tooltip content="我是提示内容，我的位置会自适应。我是提示内容，我的位置会自适应。我是提示内容，我的位置会自适应。我是提示内容，我的位置会自适应。我是提示内容，我的位置会自适应。">
 <v-button>鼠标请移过来</v-button>
</tooltip>

````

````vue-script
new Vue({
  el: 'body',
  components: {
    tooltip: atui.Tooltip,
    vButton: atui.Button
  }
})
````
