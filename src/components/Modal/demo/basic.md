---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN



## en-US


````jsx
<v-button @click.native="show = true">
  显示弹窗
</v-button>
<modal :show="show" ref="dialog" @close="show = false">
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
  },
  methods: {
    showModel: function () {
      this.show = true
    }
  }
})
````