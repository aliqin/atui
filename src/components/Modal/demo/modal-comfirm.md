---
order: 4
title:
  zh-CN: Modal.confirm({title,content,onOk,btnOkText='确定',btnCancelText='取消'}) 显示确认对话框
  en-US: Type
---

## zh-CN
可以使用atui.Modal.confirm方法方便的显示确认对话框,并在用户选择‘确认’执行回调函数


## en-US


````jsx
<v-button @click.native="showConfirm">显示确认对话框</v-button>
````

````vue-script
new Vue({
  el: 'body',
  data () {
    return {
    }
  },
  methods: {
    showConfirm () {
      atui.Modal.confirm({
        title: '操作确认', 
        content: '您确认要删除选择记录?', 
        onOk () {
          console.log('您确认了删除操作')
        }, 
        btnOkText: '删除', 
        btnCancelText: '再想想' })
    }
  },
  components: {
    vButton: atui.Button
  }
})
````
