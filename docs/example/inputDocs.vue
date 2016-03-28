<template>
  <div class="bs-docs-section" id="input">
    <h3 class="page-header"><a href="#input" class="anchor">input 输入框</a></h3>
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
      </tbody>
    </table>
  </div>
</template>

<script>
import vInput from '../../src/components/Input.vue';
export default{
  components: {
    vInput
  }
}
</script>

