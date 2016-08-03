---
order: 4
title:
  zh-CN: 文字按钮
  en-US: Type
---

## zh-CN

文字型按钮

## en-US

````jsx
<v-button large text value="大号+文字型按钮"></v-button>
<v-button text value="中号+文字型按钮"></v-button>
<v-button small text value="小号+文字型按钮"></v-button>
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
