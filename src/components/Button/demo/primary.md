---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN

一级按钮，可以设置按钮大小

## en-US

````jsx
<v-button large primary value="大号+主按钮"></v-button>
<v-button primary value="中号+主按钮"></v-button>
<v-button small primary value="小号+主按钮"></v-button>
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
