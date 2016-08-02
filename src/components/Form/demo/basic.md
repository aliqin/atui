---
order: 0
title:
  zh-CN: 横向排列
  en-US: Type
---

## zh-CN



## en-US


````jsx
纵向排列
<v-form action="aaa.do" method="post">
  <form-item required label="姓名：" :valid-status="form1.nameStatus" label-col="4" has-icon :tips="form1.nameTips">
    <v-input type="text" placeholder="请输入您的姓名"  :value.sync="username" required required-tips="用户名为必填项" maxlength="12" minlength="2" minlength-tips="用户名不能少于2个字符" :valid-status.sync="form1.nameStatus" :tips.sync="form1.nameTips" :valid-result.sync="form1.nameValidResult"></v-input>
  </form-item>
  <form-item required label="电话：" :valid-status="form1.telStatus" label-col="4" has-icon tips="form1.telTips">
    <v-input type="text" placeholder="请输入您的电话号码" :valid-status.sync="form1.telStatus" :value.sync="tel"></v-input>
  </form-item>
  <form-item required label="性别" label-col="4">
    <label><input type="checkbox" name="sexy" checked />男</label>
    <label><input type="checkbox" name="sexy" />女</label>
  </form-item>
  <form-item required label="行业：" label-col="4">
    <v-select :default-value.sync="arr" :options="industry" :close-on-select="true"></v-select>
  </form-item>
  <form-item label-col="4">
    <v-button type="submit" primary @click="validFun">确定</v-button>
    <v-button type="reset" tertiary value="重置条件"></v-button>
  </form-item>
</v-form>
横向排列
<v-form action="aaa.do" method="post">
  <form-item label="联系人电话：" item-col="8" label-col="10">
    <v-input type="text" placeholder="电话号码"></v-input>
  </form-item>
  <form-item label="联系人电话：" item-col="8" label-col="10">
    <v-input type="text" placeholder="电话号码"></v-input>
  </form-item>
  <form-item label="联系人电话：" item-col="8" label-col="10">
    <v-input type="text" placeholder="电话号码"></v-input>
  </form-item>
  <form-item label="联系人电话：" item-col="8" label-col="10">
    <v-input type="text" placeholder="电话号码"></v-input>
  </form-item>
  <form-item label="联系人电话：" item-col="8" label-col="10">
    <v-input type="text" placeholder="电话号码"></v-input>
  </form-item>
  <form-item label="联系人电话：" item-col="8" label-col="10">
    <v-input type="text" placeholder="电话号码"></v-input>
  </form-item>
  <form-item required label="联系人电话：" :valid-status="telStatus" item-col="8" label-col="10" has-icon tips="123">
    <v-input type="text" placeholder="电话号码" :valid-status="telStatus" :value.sync="tel" @click="clickFun"></v-input>
  </form-item>
  <form-item required label="应用名/网站名：" item-col="8" label-col="10">
    <v-input type="text" placeholder="若还未上线可填无"></v-input>
  </form-item>
  <form-item required label="行业：" item-col="8" label-col="10">
    <v-select :value.sync="arr" :options="industry" :close-on-select="true"></v-select>
  </form-item>
  <form-item required label="电话号码：" item-col="8" label-col="10">
    <v-input placeholder="请输入电话号码"></v-input>
  </form-item>
  <form-item required label="电话号码：" valid-status="error" has-icon item-col="8" label-col="10" tips="请输入有效的电话号码">
    <v-input valid-status="error" placeholder="请输入电话号码"></v-input>
  </form-item>
  <form-item required label="电话号码：" valid-status="success" has-icon item-col="8" label-col="10" tips="请输入有效的电话号码">
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
