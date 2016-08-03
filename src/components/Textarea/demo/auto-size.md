---
order: 3
title:
  zh-CN: 自动高度
  en-US: Type
---

## zh-CN
设置`max-rows`和`min-rows`可限制最小和最大行数，超过会自动增加滚动条

## en-US


````jsx
<v-textarea placeholder="高度无限增大" autosize></v-textarea>
<v-textarea placeholder="有最大高度" autosize max-rows="10"></v-textarea>
<v-textarea placeholder="有最小高度" autosize min-rows="5"></v-textarea>
<v-textarea placeholder="有最大和最小高度" autosize min-rows="5" max-rows="10"></v-textarea>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    vTextarea: atui.Textarea
  }
})
````
