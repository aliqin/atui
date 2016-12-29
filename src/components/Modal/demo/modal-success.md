---
order: 5
title:
  zh-CN: Modal.success({title,content,onOk}) 显示操作成功提示对话框
  en-US: Type
---

## zh-CN
可以使用atui.Modal.success方法方便的显示确认操作成功提示对话框,并在用点击确认后执行回调函数


## en-US


````jsx
<v-button @click.native="showSuccess">显示操作成功提示对话框</v-button>
````

````vue-script
new Vue({
  el: 'body',
  data () {
    return {
    }
  },
  methods: {
    showSuccess () {
      atui.Modal.success({
        title: '操作成功', 
        content: '保存成功,点击确认返回列表页面?', 
        onOk () {
          console.log('即将返回列表页面!')
        }})
    }
  },
  components: {
    vButton: atui.Button
  }
})
````
