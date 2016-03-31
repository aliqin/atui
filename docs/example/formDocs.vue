<template>

  <div class="bs-docs-section" id="form">
    <h3 class="page-header"><a href="#form" class="anchor">Form 表单 </a></h3>
    <div class="bs-example">
      <v-form :submit="formSubmitFun">
        <form-item required label="联系人电话：" :valid-status="telStatus" label-col="4" has-icon :tip="123">
          <v-input type="text" placeholder="电话号码" :valid-status="telStatus" :value.sync="tel" @click="clickFun"></v-input>
        </form-item>
        <form-item required label="验证码：" label-col="4">
          <v-col span="20">
            <v-input disabled type="text" placeholder="请输入验证码"></v-input>
          </v-col>
          <v-col span="4"><v-button tertiary value="获取验证码"></v-button></v-col>
        </form-item>
        <form-item required label="应用名/网站名：" label-col="4">
          <v-input type="text" placeholder="若还未上线可填无"></v-input>
        </form-item>
        <form-item required label="行业：" label-col="4">
          <v-select :value.sync="arr" :options="industry" :close-on-select="true"></v-select>
        </form-item>
        <form-item required label="电话号码：" label-col="4">
          <v-input placeholder="请输入电话号码"></v-input>
        </form-item>
        <form-item required label="电话号码：" valid-status="error" has-icon label-col="4" :tip="请输入有效的电话号码">
          <v-input valid-status="error" placeholder="请输入电话号码"></v-input>
        </form-item>
        <form-item required label="电话号码：" valid-status="success" has-icon label-col="4" :tip="请输入有效的电话号码">
          <v-input valid-status="success" placeholder="请输入电话号码"></v-input>
        </form-item>
        <form-item required label-col="4">
          <label><input type="checkbox" />阅读并接受《用户协议》</label>
        </form-item>
        <form-item required label-col="4">
          <v-button primary @click="validFun"></v-button>
          <v-button tertiary value="重置条件"></v-button>
        </form-item>
      </v-form>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<v-form :submit="formSubmitFun">
  <form-item required label="联系人电话：" label-col="4" has-icon :tip="123">
    <v-input type="text" placeholder="电话号码" :value.sync="tel"></v-input>
  </form-item>
  <form-item required label="验证码：" label-col="4">
    <v-col span="20">
      <v-input type="text" placeholder="请输入验证码"></v-input>
    </v-col>
    <v-col span="4"><v-button tertiary value="获取验证码"></v-button></v-col>
  </form-item>
  <form-item required label="应用名/网站名：" label-col="4">
    <v-input type="text" placeholder="若还未上线可填无"></v-input>
  </form-item>
  <form-item required label="行业：" label-col="4">
    <v-select :value.sync="arr" :options="industry" :close-on-select="true"></v-select>
  </form-item>
  <form-item required label="电话号码：" has-icon label-col="4">
    <v-input placeholder="请输入电话号码"></v-input>
  </form-item>
  <form-item required label="电话号码：" valid-status="error" has-icon label-col="4" tip="请输入有效的电话号码">
    <v-input error placeholder="请输入电话号码"></v-input>
  </form-item>
  <form-item required label="电话号码：" valid-status="success" has-icon label-col="4" tip="请输入有效的电话号码">
    <v-input success placeholder="请输入电话号码"></v-input>
  </form-item>
  <form-item required label-col="4">
    <label><input type="checkbox" />阅读并接受《用户协议》</label>
  </form-item>
  <form-item required label-col="4">
    <v-button primary></v-button>
    <v-button tertiary value="重置条件"></v-button>
  </form-item>
</v-form>
    </script></code></pre>
    </script>
    </code>
  </div>
</template>

<script>
// import Form from 'src/components/Form.vue';
// import FromItem from 'src/components/FormItem.vue';
// import FromInput from 'src/components/FormInput.vue';
// import fromValid from 'src/plugins/form-valid.js';
// Vue.use(fromValid);
import vInput from 'src/components/Input/';
import vButton from 'src/components/Button/';
import vSelect from 'src/components/Select/';
import vForm from 'src/components/Form/';
import Layout from 'src/components/Layout/';

const vOption = vSelect.Option;
const FormItem = vForm.FormItem;
const vCol = Layout.Col;
const vRow = Layout.Row;

export default {
  components: {
    vCol,
    vRow,
    vInput,
    vButton,
    vSelect,
    vOption,
    vForm,
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
      myform: {},
      valid: {
        nameStatus: '',
      },
      formSubmitFun() {
        alert(1);
      },
      tel: '',
      telStatus: ''
    }
  },
  watch: {
    tel(newVal, oldVal) {
      alert(newVal);
    }
  },
  methods: {
    validFun () {
      if(!this.tel) {
        this.telStatus = 'error';
      }
    },
    clickFun () {
      alert('click');
    }
  }
}
</script>
