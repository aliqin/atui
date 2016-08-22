---
order: 0
title:
  zh-CN: 横向排列
  en-US: Type
---

## zh-CN



## en-US


````jsx
<v-form action="aaa.do" method="post">
  <form-item label="联系人电话:" item-col="8" label-col="10">
    <v-input type="text" placeholder="电话号码"></v-input>
  </form-item>
  <form-item label="联系人电话:" item-col="8" label-col="10">
    <v-input type="text" placeholder="电话号码"></v-input>
  </form-item>
  <form-item label="联系人电话:" item-col="8" label-col="10">
    <v-input type="text" placeholder="电话号码"></v-input>
  </form-item>
  <form-item label="联系人电话:" item-col="8" label-col="10">
    <v-input type="text" placeholder="电话号码"></v-input>
  </form-item>
  <form-item label="联系人电话:" item-col="8" label-col="10">
    <v-input type="text" placeholder="电话号码"></v-input>
  </form-item>
  <form-item label="联系人电话:" item-col="8" label-col="10">
    <v-input type="text" placeholder="电话号码"></v-input>
  </form-item>
  <form-item required label="联系人电话:" :valid-status="telStatus" item-col="8" label-col="10" has-icon tips="123">
    <v-input type="text" placeholder="电话号码" :valid-status="telStatus" :value.sync="tel" @click="clickFun"></v-input>
  </form-item>
  <form-item required label="应用名/网站名:" item-col="8" label-col="10">
    <v-input type="text" placeholder="若还未上线可填无"></v-input>
  </form-item>
  <form-item required label="行业:" item-col="8" label-col="10">
    <v-select :value.sync="arr" :options="industry" :close-on-select="true"></v-select>
  </form-item>
  <form-item required label="电话号码:" item-col="8" label-col="10">
    <v-input placeholder="请输入电话号码"></v-input>
  </form-item>
  <form-item required label="电话号码:" valid-status="error" has-icon item-col="8" label-col="10" tips="请输入有效的电话号码">
    <v-input valid-status="error" placeholder="请输入电话号码"></v-input>
  </form-item>
  <form-item required label="电话号码:" valid-status="success" has-icon item-col="8" label-col="10" tips="请输入有效的电话号码">
    <v-input valid-status="success" placeholder="请输入电话号码"></v-input>
  </form-item>
  <form-item required label-col="0">
    <label><input type="checkbox" />阅读并接受《用户协议》</label>
  </form-item>
  <form-item required label-col="4">
    <v-button type="submit" primary @click="validFun">确定</v-button>
    <v-button type="reset" tertiary value="重置条件"></v-button>
  </form-item>
</v-form>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    vForm: atui.Form,
    formItem: atui.Form.FormItem,
    vInput: atui.Input,
    vSelect: atui.Select,
    vButton: atui.Button,
    vButton: atui.Button,
    datePicker: atui.DatePicker
  }
})
````
