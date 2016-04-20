<template>
  <div class="bs-docs-section" id="input">
    <h3 class="page-header"><a href="#input" class="anchor">Input 输入框</a></h3>
    <div class="bs-example">
    <div>
      <v-input large type="text" placeholder="输入框－大尺寸"></v-input>
    </div>
    <br>
    <div>
      <v-input type="text" placeholder="输入框－默认尺寸"></v-input>
    </div>
    <br>
    <div>
      <v-input small type="text" placeholder="输入框－小尺寸"></v-input>
    </div>
    <br>
    <div>
      <v-input disabled type="text" placeholder="禁用输入框－默认尺寸"></v-input>
    </div>
    <br>
    <div>
      <v-input error type="text" placeholder="error输入框－默认尺寸"></v-input>
    </div>
    <br>
    <div>
      <v-input success type="text" placeholder="success输入框－默认尺寸"></v-input>
    </div>
    <h4>带有验证功能的输入框</h4>
    <v-form action="aaa.do" method="post">
      <form-item required label="姓名：" :valid-status="form1.nameStatus" label-col="4" has-icon :tips="form1.nameTips">
        <v-input type="text" placeholder="请输入您的姓名"  :value.sync="username" required required-tips="用户名为必填项" maxlength="12" minlength="2" minlength-tips="用户名不能少于2个字符" :valid-status.sync="form1.nameStatus" :tips.sync="form1.nameTips" :valid-result.sync="form1.nameValidResult"></v-input>
      </form-item>
      <form-item required label="电话：" :valid-status="form1.telStatus" label-col="4" has-icon :tips="form1.telTips">
        <v-input type="tel" placeholder="请输入您的电话号码" :valid-status.sync="form1.telStatus" :value.sync="tel" :valid-result.sync="form1.telValidResult" :rules="['isNumber','isPhone']" :tips.sync="form1.telTips"></v-input>
      </form-item>
    </v-form>
<pre><code class="language-markup"><script type="language-mark-up">
<!-- input输入框，使用封装的Input组件，通过添加属性，呈现样式 -->
<!-- 大号（large）、中号（默认）、小号（small）、禁用（disabled）、错误提示（error）、成功提示（success）-->
<!-- 有主按钮（primary）、次按钮（secondary）、三级按钮（tertiary）、失效按钮（disabled）和文字型按钮（text）-->
<!-- 通过属性placeholder控制输入框预期值的提示信息 -->
<!-- 通过属性type控制输入框类型，radio和checkbox不在该组件处理范围，会单独处理，请关注Radio组件和Checkbox组件 -->
<v-input large type="email" placeholder="输入框－大尺寸"></v-input>
</script></code></pre>
    <h4>参数</h4>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>参数名</th>
          <th>类型</th>
          <th>默认值</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>placeholder</td>
          <td><code>String</code></td>
          <td><code>空</code></td>
          <td>输入框预期值的提示信息</td>
        </tr>
        <tr>
          <td>large</td>
          <td></td>
          <td></td>
          <td>输入框尺寸，大</td>
        </tr>
        <tr>
          <td>small</td>
          <td></td>
          <td></td>
          <td>输入框尺寸，小</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td></td>
          <td></td>
          <td>输入框状态，禁用</td>
        </tr>
        <tr>
          <td>error</td>
          <td></td>
          <td></td>
          <td>输入框状态，输入验证失败</td>
        </tr>
        <tr>
          <td>success</td>
          <td></td>
          <td></td>
          <td>输入框状态，输入验证成功</td>
        </tr>
        <tr>
          <td>required</td>
          <td></td>
          <td></td>
          <td>验证非空，也可放在rules参数中</td>
        </tr>
        <tr>
          <td>maxlength</td>
          <td><code>String</code></td>
          <td></td>
          <td>输入字符最大长度</td>
        </tr>
        <tr>
          <td>maxlength-tips</td>
          <td><code>String</code></td>
          <td></td>
          <td>最大长度验证失败时提示文案</td>
        </tr>
        <tr>
          <td>minlength</td>
          <td><code>String</code></td>
          <td></td>
          <td>输入字符最小长度</td>
        </tr>
        <tr>
          <td>minlength-tips</td>
          <td><code>String</code></td>
          <td></td>
          <td>最小长度验证失败时提示文案</td>
        </tr>
        <tr>
          <td>rules</td>
          <td><code>Array</code></td>
          <td></td>
          <td>输入框验证规则，内部现已集成required|isPhone|isNumber|isTelephone|isEmail</td>
        </tr>
        <tr>
          <td>valid-status</td>
          <td><code>String</code></td>
          <td></td>
          <td>实时获取当前验证状态</td>
        </tr>
        <tr>
          <td>tips</td>
          <td><code>String</code></td>
          <td></td>
          <td>实时获取当前验证提示</td>
        </tr>
        <tr>
          <td>valid-result</td>
          <td><code>Object</code></td>
          <td></td>
          <td>实时获取当前所有验证条件的验证结果</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {Input,Form} from 'src/';
const FormItem = Form.FormItem;
export default{
  components: {
    vInput:Input,
    vForm:Form,
    FormItem
  },

  data () {
    return {
      form1: {
        nameValidResult: {},
        nameStatus: '',
        nameTips: '',
        telValidResult: {},
        telStatus: '',
        telTips:'输入手机号码格式错误',
      }
    }
  }
}
</script>

