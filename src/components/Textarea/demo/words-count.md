---
order: 2
title:
  zh-CN: 字数统计
  en-US: Type
---

## zh-CN

增加统计字数的功能

## en-US


````jsx
<v-textarea placeholder="请输入描述信息" :words-count="true" count-tips="您输入的字数是："></v-textarea>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    vTextarea: atui.Textarea
  }
})
````
