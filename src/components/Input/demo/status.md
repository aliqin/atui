---
order: 0
title:
  zh-CN: 验证状态
  en-US: Type
---

## zh-CN

有三个状态可选：`error`,`success`,`warn`

## en-US


````jsx
<div>
  <v-input valid-status="error" type="text" placeholder="error输入框－默认尺寸"></v-input>
</div>
<br>
<div>
  <v-input valid-status="success" type="text" placeholder="success输入框－默认尺寸"></v-input>
</div>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    vInput: atui.Input
  }
})
````
