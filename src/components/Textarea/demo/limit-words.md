---
order: 1
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN

字数限制

## en-US


````jsx
<v-textarea :limit-words="10" placeholder="这里只能输入10个字"></v-textarea>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    vTextarea: atui.Textarea
  }
})
````
