---
order: 0
title:
  zh-CN: 可关闭的
  en-US: Type
---

## zh-CN

closable属性会添加一个关闭按钮，点击关闭可触发一个close事件

## en-US


````jsx
<v-tag closable @close="closeTag">标签（回调）</v-tag>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    vTag: atui.Tag
  },
  methods: {
    closeTag () {
      alert('我要关闭了')
    }
  }
})
````
