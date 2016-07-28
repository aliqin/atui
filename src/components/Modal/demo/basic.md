---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN
需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
另外当需要一个简洁的确认框询问用户时，可以使用精心封装好的 `atui.Modal.confirm()` 等方法。


## en-US


````jsx
<v-button @click="show = true"
  >显示弹窗
</v-button>
<modal :show.sync="show">
  <div slot="modal-body" class="atui-modal-body">
    <textarea></textarea>
  </div>
</modal>

````

````vue-script
new Vue({
  el: 'body',
  components: {
    modal: atui.Modal,
    vButton: atui.Button
  },
  data: function() {
    return {
      show: false
    }
  }
})
````
