---
order: 4
title:
  zh-CN: 使用脚本调用
  en-US: Type
---

## zh-CN

可以直接使用组件实例调用方法,比如：

- `message.success(content, duration)`
- `message.error(content, duration)`
- `message.info(content, duration)`
- `message.warning(content, duration)`
- `message.loading(content, duration)`

## en-US


````jsx
<v-button @click="showMessage">
  点我会弹出提示
</v-button>
````


````vue-script
new Vue({
  el: 'body',
  components: {
    vButton: atui.Button
  },
  methods: {
    showMessage () {
      atui.Message.success('成功啦')
    }
  }

})
````
