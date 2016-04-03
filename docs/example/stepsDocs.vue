<template>
  <div class="bs-docs-section" id="steps">
    <h3 class="page-header"><a href="#steps" class="anchor">Steps 步骤条</a></h3>
    <div class="bs-example">
        <h4 class="example-title">基础型</h4>
        <v-steps :current="current">
            <v-step title="已完成"></v-step>
            <v-step title="进行中" ></v-step>
            <v-step title="有一个待运行"></v-step>
            <v-step title="待运行"></v-step>
        </v-steps>
        <br><br>
        <h4 class="example-title">带文字描述</h4>
        <v-steps :current="current">
            <v-step title="已完成" description="这里是多信息"></v-step>
            <v-step title="进行中" description="这里是多信息的耶哦"></v-step>
            <v-step title="有一个待运行" description="描述啊描述啊"></v-step>
            <v-step title="待运行" description="这里是多信息的描述啊"></v-step>
        </v-steps>
        <br>
        <button type="button" class="btn default primary" @click="_next">next</button>
    </div>
<pre>
<code class="language-markup"><script type="language-mark-up">
<v-steps :current="current">
    <v-step title="已完成"></v-step>
    <v-step title="进行中" ></v-step>
    <v-step title="有一个待运行"></v-step>
    <v-step title="待运行"></v-step>
</v-steps>
<v-steps :current="current">
    <v-step title="已完成" description="这里是多信息"></v-step>
    <v-step title="进行中" description="这里是多信息的耶哦"></v-step>
    <v-step title="有一个待运行" description="描述啊描述啊"></v-step>
    <v-step title="待运行" description="这里是多信息的描述啊"></v-step>
</v-steps>
</script></code></pre>
  </div>
  <h2>Options</h2>
  <h4 style="margin: 20px 0;">vSteps</h4>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>参数</th>
        <th>类型</th>
        <th>默认值</th>
        <th>说明</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>current</td>
        <td>Number</td>
        <td>0</td>
        <td>当前正在执行的步骤数，可以通过status属性覆盖状态</td>
      </tr>
    </tbody>
  </table>
  <h4 style="margin: 20px 0;">vSteps vStep</h4>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>参数</th>
        <th>类型</th>
        <th>默认值</th>
        <th>说明</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>title</td>
        <td>String</td>
        <td>无</td>
        <td>标题</td>
      </tr>
      <tr>
        <td>description</td>
        <td>String</td>
        <td>无</td>
        <td>步骤的详情描述</td>
      </tr>
      <tr>
        <td>status</td>
        <td>String</td>
        <td>无</td>
        <td>执行step的状态，当不设置此属性时，父组件Steps会自动根据current来设置对应status,（可选值wait, process, finish）</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import {Steps} from 'src/'
  const {Step} = Steps
  export default {
    data () {
      return {
        current: 0
      }
    },
    components: {
      vSteps:Steps,
      vStep:Step
    },
    methods: {
      _next () {
        if(this.current === 3) {
          this.current = 0;
          return
        }
        this.current++;
      }
    }
  }
</script>

<style lang="less">
  .badge-count-example, .badge-dot-example {
    width: 42px;
    height: 42px;
    background-color: #eee;
    display: inline-block;
    border-radius: 6px;
  }
  .example-title {
    margin: 20px 0;
  }
</style>
