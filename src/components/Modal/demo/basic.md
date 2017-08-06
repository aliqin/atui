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
    <v-select v-model="initValue" dropdown-class-name="aaaaa" :dropdown-z-index="9898"  style="width:200px" width="200px" @change="onSelectChange">
      <v-option value="Apple">苹果</v-option>
      <v-option value="Banana" disabled>Banana</v-option>
      <v-option value="10">Cherry</v-option>
      <v-option value="Orange">OrangeText</v-option>
      <v-option value="Grape">Grape</v-option>
      <v-option value="chestnut">栗子</v-option>
      <v-option value="pear">梨</v-option>
      <v-option value="cantaloupe">哈密瓜</v-option>
      <v-option value="peaches">水蜜桃</v-option>
      <v-option value="Cherry2">Cherry2</v-option>
      <v-option value="Orange2">OrangeText2</v-option>
      <v-option value="Grape2">Grape2</v-option>
      <v-option value="chestnut2">栗子2</v-option>
      <v-option value="pear2">梨2</v-option>
      <v-option value="cantaloupe2">哈密瓜2</v-option>
      <v-option value="peaches2">水蜜桃2</v-option>
    </v-select>
  </div>
</modal>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    modal: atui.Modal,
    vButton: atui.Button,
    vSelect: atui.Select,
    vOption: atui.Select.Option
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