<template>

  <div class="bs-docs-section" id="form">
    <h3 class="page-header"><a href="#form" class="anchor">form 表单 </a></h3>
    <div class="bs-example">
      <form class="form">
        <div class="form-item row">
          <label class="form-label col-lg-4"><span class="required-icon">*</span>联系人电话：</label>
          <div class="col-lg-20">
            <div class="form-input">
              <v-input type="text" placeholder="电话号码"></v-input>
            </div>
          </div>
        </div>
        <div class="form-item row">
          <label class="form-label col-lg-4"><span class="required-icon">*</span>验证码：</label>
          <div class="col-lg-20">
            <div class="form-input">
              <v-input type="text" placeholder="请输入验证码"></v-input>
              <v-button tertiary value="获取验证码"></v-button>
            </div>
          </div>
        </div>
        <div class="form-item row">
          <label class="form-label col-lg-4"><span class="required-icon">*</span>应用名/网站名：</label>
          <div class="col-lg-20">
            <div class="form-input">
              <v-input type="text" placeholder="若还未上线可填无"></v-input>
            </div>
          </div>
        </div>
        <div class="form-item row">
          <label class="form-label col-lg-4"><span class="required-icon">*</span>行业：</label>
          <div class="col-lg-20">
            <div class="form-input">
              <v-select :value.sync="arr" :options="industry" :close-on-select="true"></v-select>
            </div>
          </div>
        </div>
        <div class="form-item row">
          <label class="form-label col-lg-4"></label>
          <div class="col-lg-20">
            <div class="form-input">
              <input type="checkbox" />
              <label>阅读并接受《用户协议》</label>
            </div>
          </div>
        </div>
        <div class="form-item row">
          <label class="form-label col-lg-4"></label>
          <div class="col-lg-20">
            <div class="form-input">
              <v-button primary></v-button>
              <v-button tertiary value="重置条件"></v-button>
            </div>
          </div>
        </div>



        <div class="form-item row form-item-with-help">
          <label class="form-label col-lg-4"><span class="required-icon">*</span>用户名：</label>
          <div class="col-lg-20">
            <div class="form-input">
              <input type="text" class="input" placeholder="电话号码" />
              <i class="iconfont status-icon">&#xe600;</i>
            </div>
            <div class="status-info">请输入有效的电话号码</div>
          </div>
        </div>
        <div class="form-item row form-item-with-help has-error">
          <label class="form-label col-lg-4"><span class="required-icon">*</span>用户名：</label>
          <div class="col-lg-20">
            <div class="form-input">
              <input type="text" class="input error" placeholder="电话号码" />
              <i class="iconfont status-icon">&#xe600;</i>
            </div>
            <div class="status-info">请输入有效的电话号码</div>
          </div>
        </div>
        <div class="form-item row form-item-with-help has-success">
          <label class="form-label col-lg-4"><span class="required-icon">*</span>用户名：</label>
          <div class="col-lg-20">
            <div class="form-input">
              <input type="text" class="input success" placeholder="电话号码" />
              <i class="iconfont status-icon">&#xe600;</i>
            </div>
            <div class="status-info">请输入有效的电话号码</div>
          </div>
        </div>
      </form>
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
import Input from 'src/components/Input/';
import Button from 'src/components/Button/';
import vSelect from 'src/components/Select.vue';
import vOption from 'src/components/Option.vue';

const vInput = Input;
const vButton = Button;

export default {
  components: {
    vInput,
    vButton,
    vSelect,
    vOption
    // Form,
    // FromItem,
    // FromInput
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
