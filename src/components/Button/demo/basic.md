---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN



## en-US


````jsx
<v-button large primary value="大号+主按钮"></v-button>
<v-button large primary>大号+主按钮</v-button>
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
