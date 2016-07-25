---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN



## en-US


````jsx
<v-textarea disabled :limit-words="10" placeholder="这里只能输入10个字"></v-textarea>
<v-textarea placeholder="请输入描述信息" :words-count="true" count-tips="您输入的字数是："></v-textarea>
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
