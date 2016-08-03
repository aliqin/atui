---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN



## en-US


````jsx
<div>
  <v-input large type="text" placeholder="输入框－大尺寸"></v-input>
</div>
<br>
<div>
  <v-input type="text" placeholder="输入框－默认尺寸"></v-input>
</div>
<br>
<div>
  <v-input small type="text" placeholder="输入框－小尺寸"></v-input>
</div>
<br>
<div>
  <v-input disabled type="text" placeholder="禁用输入框－默认尺寸"></v-input>
</div>
<br>
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
