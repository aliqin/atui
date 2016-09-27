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
  <form-item required label="姓名:" :valid-status="form1.nameStatus" label-col="4" wrapper-col="12" has-icon :tips="form1.nameTips" tips-mode="popup" description="请在此区域正确输入您的姓名哦">
    <v-input type="text" placeholder="请输入您的姓名"  :value.sync="username" required required-tips="用户名为必填项" maxlength="12" minlength="2" minlength-tips="用户名不能少于2个字符" :valid-status.sync="form1.nameStatus" :tips.sync="form1.nameTips" :valid-result.sync="form1.nameValidResult"></v-input>
  </form-item>
  <form-item required label="电话:" :valid-status="form1.telStatus" label-col="4" wrapper-col="12" has-icon tips="form1.telTips">
    <v-input type="text" placeholder="请输入您的电话号码" :valid-status.sync="form1.telStatus" :value.sync="tel"></v-input>
  </form-item>
  <form-item required label="性别:" label-col="4" wrapper-col="12">
    <label><input type="radio" name="sexy" checked />男</label>
    <label><input type="radio" name="sexy" />女</label>
  </form-item>
  <form-item required label="喜好:" label-col="4" wrapper-col="12">
    <label><input type="checkbox" name="tw" checked />跳舞</label>
    <label><input type="checkbox" name="hh" />画画</label>
    <label><input type="checkbox" name="tq" />弹琴</label>
  </form-item>
  <form-item required label="行业:" label-col="4" wrapper-col="12">
    <v-select :default-value.sync="arr" :close-on-select="true">
      <v-option value="computer">计算机</v-option>
      <v-option value="networdk">网络</v-option>
      <v-option value="math">数学</v-option>
    </v-select>
  </form-item>
  <form-item required label="模板内容" label-col="4" wrapper-col="12" tips-mode="popup" :description="testDescription" description-width="500" description-space="500">
    <v-textarea placeholder="变量格式：${name}; 示例：尊敬的${name}，您的快递已在飞奔的路上，将在今天$[time]送达您的手里，请留意查收。"></v-textarea>
  </form-item>
  <form-item label-col="4" wrapper-col="12">
    <v-button type="submit" primary @click="validFun">确定</v-button>
    <v-button type="reset" tertiary value="重置条件"></v-button>
  </form-item>
</v-form>
````

````vue-script
new Vue({
  el: 'body',
  data() {
    return {
      testDescription: '短信签名建议为用户真实应用名/网站名/公司名。若签名/模板内容侵犯到第三方权益须获得第三方的真实授权,授权委托书等凭证上传管理中心 单个签名长度介于2到8个字符之间 可以包含汉字、数字、英文，不能为纯数字、纯英文、数字英文组合 无须添加【】、()、[]符号，短信发送会自带【】、()、[]符号，避免重复 签名/模板申请规范详见 http://tb.cn/OKCGyWx'
    }
  },
  components: {
    vForm: atui.Form,
    formItem: atui.Form.FormItem,
    vInput: atui.Input,
    vTextarea: atui.Textarea,
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
