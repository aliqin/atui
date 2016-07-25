---
order: 0
title:
  zh-CN: 按钮类型
  en-US: Type
---

## zh-CN

按钮有四种类型：主按钮、次按钮、幽灵按钮、虚线按钮。

通过设置 `type` 为 `primary` `ghost` `dashed` 可分别创建主按钮、幽灵按钮、虚线按钮，若不设置 `type` 值则为次按钮。不同的样式可以用来区别其重要程度。

主按钮和次按钮可独立使用，幽灵按钮用于和主按钮组合。需要强引导用主按钮，切记主按钮在同一个操作区域最多出现一次。

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