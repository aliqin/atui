<template>

  <div class="bs-docs-section" id="form">
    <h3 class="page-header"><a href="#form" class="anchor">form 表单 </a></h3>
    <div class="bs-example">
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
      </form> -->
      <Form :onSubmit="onSubmit">
        <FromItem label="姓名：" :rules="" :validStatus="valid.nameStatus">
          <Input placeholder="请输入姓名" defaultValue=""></Input>
        </FromItem>
      </Form>
      <!-- <Form arragement="vertical">
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
import Form from 'src/components/Form.vue';
import FromItem from 'src/components/FormItem.vue';

export default {
  components: {
    Form
  },
  data() {
    return {
      myform: {},
      valid: {
        nameStatus: '',
      },
      onSubmit: function() {
        alert('验证成功');
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
