---
order: 2
title:
  zh-CN: 三级按钮
  en-US: Type
---

## zh-CN
三级按钮

## en-US

````jsx
<h4>普通按钮使用，三级按钮</h4>
<v-button large tertiary value="大号+三级按钮"></v-button>
<v-button tertiary value="中号+三级按钮"></v-button>
<v-button small tertiary value="小号+三级按钮"></v-button>

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
