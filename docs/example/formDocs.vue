<template>

  <div class="bs-docs-section" id="form">
    <h3 class="page-header"><a href="#form" class="anchor">Form 表单 </a></h3>
    <div class="bs-example">
      <h4>纵向排列</h4>
      <v-form action="aaa.do" method="post">
        <form-item class="name123456" required label="姓名：" :valid-status="form1.nameStatus" label-col="4" has-icon :tips="form1.nameTips">
          <v-input type="text" placeholder="请输入您的姓名"  :value.sync="username" required required-tips="用户名为必填项" maxlength="12" minlength="2" minlength-tips="用户名不能少于2个字符" :valid-status.sync="form1.nameStatus" :tips.sync="form1.nameTips" :valid-result.sync="form1.nameValidResult"></v-input>
        </form-item>
        <form-item required label="电话：" :valid-status="form1.telStatus" label-col="4" has-icon :tips="form1.telTips">
          <v-input type="tel" placeholder="请输入您的电话号码" :valid-status.sync="form1.telStatus" :value.sync="tel" :valid-result.sync="form1.telValidResult" :rules="['isNumber','isPhone']" :tips.sync="form1.telTips"></v-input>
        </form-item>
        <form-item required label="性别" label-col="4">
          <label><input type="radio" name="sexy" checked />男</label>
          <label><input type="radio" name="sexy" />女</label>
        </form-item>
        <form-item required label="性取向" label-col="4">
          <label><input type="checkbox" name="sexy" checked />男</label>
          <label><input type="checkbox" name="sexy" />女</label>
        </form-item>
        <form-item required label="行业：" label-col="4">
          <v-select :value.sync="arr" :options="industry" :close-on-select="true"></v-select>
        </form-item>
        <form-item label-col="4">
          <v-button type="submit" primary>确定</v-button>
          <v-button type="reset" tertiary value="重置条件"></v-button>
        </form-item>
      </v-form>
      <h4>横向排列</h4>
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
        <form-item label="联系人电话：" item-col="8" label-col="10">
          <v-input type="text" placeholder="电话号码"></v-input>
        </form-item>
        <form-item required label="应用名/网站名：" item-col="8" label-col="10">
          <v-input type="text" placeholder="若还未上线可填无"></v-input>
        </form-item>
        <form-item required label="行业：" item-col="8" label-col="10">
          <v-select :default-value.sync="arr" :options="industry" :close-on-select="true"></v-select>
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
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
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
    </script></code></pre>
    </script>
    </code>
    <h4>FormItem组件参数</h4>
    <table class="atui-table table-bordered">
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
          <td>item-col</td>
          <td><code>String</code></td>
          <td><code>24</code></td>
          <td>以24格为准，当前FormItem组件占的栅格列数</td>
        </tr>
        <tr>
          <td>label</td>
          <td><code>String</code></td>
          <td><code>空</code></td>
          <td>label域文案</td>
        </tr>
        <tr>
          <td>label-col</td>
          <td><code>String</code></td>
          <td><code>7</code></td>
          <td>以当前的FormItem组件为准，label域占的列数</td>
        </tr>
        <tr>
          <td>wrapper-col</td>
          <td></td>
          <td><code>24-（label-col属性值）</code></td>
          <td>以当前的FormItem组件为准，非label域占的列数</td>
        </tr>
        <tr>
          <td>required</td>
          <td></td>
          <td></td>
          <td>是否是必填项，配置后，会在label文案前加’*‘标识</td>
        </tr>
        <tr>
          <td>tips</td>
          <td><code>String</code></td>
          <td><code>空</code></td>
          <td>各种状态下的提示文案</td>
        </tr>
        <tr>
          <td>valid-status</td>
          <td><code>String</code></td>
          <td><code>空</code></td>
          <td>当前验证状态，有空,success,warning,error,validating</td>
        </tr>
        <tr>
          <td>has-icon</td>
          <td></td>
          <td></td>
          <td>配合validateStatus属性使用，是否展示校验状态图标</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import Form from 'src/components/Form.vue';
// import FromItem from 'src/components/FormItem.vue';
// import FromInput from 'src/components/FormInput.vue';
// import fromValid from 'src/plugins/form-valid.js';
// Vue.use(fromValid);
import {Input,Button,Select,Form,Layout} from 'src/'

const Option = Select.Option;
const FormItem = Form.FormItem;
const Col = Layout.Col;
const Row = Layout.Row;

export default {
  components: {
    vCol:Col,
    vRow:Row,
    vInput:Input,
    vButton:Button,
    vSelect:Select,
    vOption:Option,
    vForm:Form,
    FormItem
    // FormInput
  },
  data() {
    return {
      arr: [],
      industry: [
        {value:'1', label:'计算机'},
        {value:'2', label:'网络'},
        {value:'3', label:'电子信息'},
        {value:'4', label:'材料工程'},
        {value:'5', label:'医学'},
      ],
      username: '',
      tel: '',
      form1: {
        nameValidResult: {},
        nameStatus: '',
        nameTips: '',
        telValidResult: {},
        telStatus: '',
        telTips:'输入手机号码格式错误',
      }
    }
  },
  watch: {
    'form1.nameValidResult' (val) {
      console.log('======');
      console.log(val);
      console.log('======');
    }
  },
  methods: {
    clickFun () {
      alert('click');
    },
    validFun() {}
  }
}
</script>
