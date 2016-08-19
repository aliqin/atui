---
order: 0
title:
  zh-CN: 纵向排列
  en-US: Type
---

## zh-CN



## en-US


````jsx
<v-form action="aaa.do" method="post">
  <form-item required label="姓名:" :valid-status="form1.nameStatus" label-col="4" has-icon :tips="form1.nameTips">
    <v-input type="text" placeholder="请输入您的姓名"  :value.sync="username" required required-tips="用户名为必填项" maxlength="12" minlength="2" minlength-tips="用户名不能少于2个字符" :valid-status.sync="form1.nameStatus" :tips.sync="form1.nameTips" :valid-result.sync="form1.nameValidResult"></v-input>
  </form-item>
  <form-item required label="电话:" :valid-status="form1.telStatus" label-col="4" has-icon tips="form1.telTips">
    <v-input type="text" placeholder="请输入您的电话号码" :valid-status.sync="form1.telStatus" :value.sync="tel"></v-input>
  </form-item>
  <form-item required label="性别:" label-col="4">
    <label><input type="radio" name="sexy" checked />男</label>
    <label><input type="radio" name="sexy" />女</label>
  </form-item>
  <form-item required label="喜好:" label-col="4">
    <label><input type="checkbox" name="tw" checked />跳舞</label>
    <label><input type="checkbox" name="hh" />画画</label>
    <label><input type="checkbox" name="tq" />弹琴</label>
  </form-item>
  <form-item required label="行业:" label-col="4">
    <v-select :default-value.sync="arr" :close-on-select="true">
      <v-option value="computer">计算机</v-option>
      <v-option value="networdk">网络</v-option>
      <v-option value="math">数学</v-option>
    </v-select>
  </form-item>
  <form-item label-col="4">
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
    vOption: atui.Select.Option,
    vButton: atui.Button,
    datePicker: atui.DatePicker
  },
  methods: {
    validFun () {}
  }
})
````
