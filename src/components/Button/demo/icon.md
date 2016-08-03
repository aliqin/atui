---
order: 3
title:
  zh-CN: 带Icon的按钮
  en-US: Type
---

## zh-CN
带有icon的按钮


## en-US


````jsx
<v-button>
  <icon type="close"></icon>关闭
</v-button>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    vButton: atui.Button,
    icon: atui.Icon
  }
})
````
