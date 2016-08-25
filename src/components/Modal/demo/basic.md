---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN



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
