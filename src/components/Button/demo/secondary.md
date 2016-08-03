---
order: 1
title:
  zh-CN: 次要按钮
  en-US: Type
---

## zh-CN

二级按钮

## en-US


````jsx
<v-button large secondary value="大号+次按钮"></v-button>
<v-button secondary value="中号+次按钮"></v-button>
<v-button small secondary value="小号+次按钮"></v-button>
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
