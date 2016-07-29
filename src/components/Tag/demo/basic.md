---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN

可以使用color属性展示想要显示的颜色，默认为#f2f2f2，href属性为跳转链接

## en-US


````jsx
<v-tag>标签一</v-tag>
<v-tag href="http://www.taobao.com" color="orange">淘宝</v-tag>

````

````vue-script
new Vue({
  el: 'body',
  components: {
    vTag: atui.Tag
  }
})
````
