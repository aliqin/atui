<template>

  <div class="bs-docs-section" id="form">
    <h3 class="page-header"><a href="#form" class="anchor">form 表单 </a></h3>
    <div class="bs-example">
      <v-form :submit="formSubmitFun">
        <form-item required label="联系人电话：" label-col="4">
          <v-input type="text" placeholder="电话号码"></v-input>
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
      <!-- <form class="container form" v-form name="myform" @submit.prevent="onSubmit">
        <div class="errors" v-if="myform.$submitted">
            <p v-if="myform.name.$error.required">Name is required.</p>
            <p v-if="myform.email.$error.email">Email is not valid.</p>
        </div>

        <div class="row">
          <div class="col-lg-7 form-label">
            <label><span class="required">*</span>姓名：</label>
          </div>
          <div class="col-lg-7">
            <input class="input" v-model="model.name" v-form-ctrl required name="name" />
          </div>
        </div>

        <div class="row">
          <div class="col-lg-7 form-label">
            <label><span class="required">*</span>邮箱：</label>
          </div>
          <div class="col-lg-17">
            <input class="input" v-model="model.email" v-form-ctrl name="email" type="email" required />
          </div>
        </div>

        <div class="row">
          <div class="col-lg-7 form-label">
            <label>性别：</label>
          </div>
          <div class="col-lg-17">
            <label>
              <input v-form-ctrl name="sexy" type="radio" />
              女
            </label>
            <label>
              <input v-form-ctrl name="sexy" type="radio" checked />
              男
            </label>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-7 form-label">
            <label>多选框：</label>
          </div>
          <div class="col-lg-17">
            <label>
              <input v-form-ctrl name="cb1" type="checkbox" />
              未选中状态
            </label>
            <label>
              <input v-form-ctrl name="cb2" type="checkbox" checked />
              选中状态
            </label>
            <label>
              <input v-form-ctrl name="cb3" type="checkbox" disabled />
              未选中不可点击状态
            </label>
            <label>
              <input v-form-ctrl name="cb4" type="checkbox" checked disabled />
              选中不可点击状态
            </label>
          </div>
        </div>

        <div class="row">
          <label>
            <div class="col-lg-7 form-label">
              <span>Contact details <span v-if="model.contactRequired">*</span></span>
            </div>
            <div class="col-lg-17">
              <textarea class="textarea" v-model="model.contact" :required="model.contactRequired" v-form-ctrl name="comments"></textarea>
            </div>
          </label>
        </div>

        <div class="row" v-if="model.contactRequired">
          <label>
            <div class="col-lg-7 form-label">
              <span>3 digit code *</span>
            </div>
            <div class="col-lg-17">
              <input class="input" v-model="model.code" v-form-ctrl name="code" type="text" pattern="[A-Za-z]{3}" required />
            </div>
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
      <pre>{{ myform | json }}</pre> -->
      <!-- <Form>
        <FromItem label="姓名：" :labelCol="7" :validStatus="valid.nameStatus">
          <FromInput type="text" placeholder="请输入姓名" defaultValue="" ></FromInput>
        </FromItem>
      </Form>
      <Form arragement="vertical">
        <FromItem label="姓名：" :rules="" :validStatus="">
          <Input placeholder="请输入姓名" defaultValue=""></Input>
        </FromItem>
      </Form> -->
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
checkbox复选框
使用方式与原生的一样 <input type="checkbox" id="cb" checked disabled />

radio单选框
使用方式与原生的一样 <input type="radio" id="radio" checked disabled />
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
      }
    }
  },
  methods: {
    onSubmit: function () {
      console.log(this.myform.$valid);
    }
  }
}
</script>
