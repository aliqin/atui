---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN



## en-US


````jsx
<v-tag>标签一</v-tag>
<v-tag closable @close="closeTag">标签（回调）</v-tag>
<v-tag :href="href">标签（链接）</v-tag>
<v-tag color="green">标签</v-tag>
<v-tag color="orange" closable @close="closeTag">标签</v-tag>
<v-tag color="red" size="20">标签</v-tag>
````

````vue-script
new Vue({
    el: 'body',
    components: {
        vTag: atui.Tag
    }
})
````
