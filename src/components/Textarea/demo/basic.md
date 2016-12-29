---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN
基础用法，给textarea绑定v-model，当输入框中的文本变化时会同步更新

## en-US


````jsx
<v-textarea placeholder="请在这里输入说明" v-model="text"></v-textarea>
<v-textarea disabled content="被禁用了"></v-textarea>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    vTextarea: atui.Textarea,
    vButton: atui.Button
  },
  data: {
    text: ''
  },
  methods: {
    clear() {
      this.text = ''
    }
  }
})
````
