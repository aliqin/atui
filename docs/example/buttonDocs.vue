<template>
  <div class="bs-docs-section" id="button">
    <h3 class="page-header"><a href="#buttons" class="anchor">Button 按钮</a></h3>
    <div class="bs-example">
      <h4>普通按钮使用，一级按钮，可以设置按钮大小</h4>
      <v-button large primary value="大号+主按钮"></v-button>
      <v-button primary value="中号+主按钮"></v-button>
      <v-button small primary value="小号+主按钮"></v-button>
      <br>
      <h4>普通按钮使用，二级按钮</h4>
      <v-button large secondary value="大号+次按钮"></v-button>
      <v-button secondary value="中号+次按钮"></v-button>
      <v-button small secondary value="小号+次按钮"></v-button>
      <br>
      <h4>普通按钮使用，三级按钮</h4>
      <v-button large tertiary value="大号+三级按钮"></v-button>
      <v-button tertiary value="中号+三级按钮"></v-button>
      <v-button small tertiary value="小号+三级按钮"></v-button>
      <br>
      <h4>普通按钮使用，禁用按钮</h4>
      <v-button large disabled value="大号+失效按钮"></v-button>
      <v-button disabled value="中号+失效按钮"></v-button>
      <v-button small disabled value="小号+失效按钮"></v-button>
      <br>
      <h4>普通按钮使用，文字型按钮</h4>
      <v-button large text value="大号+文字型按钮"></v-button>
      <v-button text value="中号+文字型按钮"></v-button>
      <v-button small text value="小号+文字型按钮"></v-button>
      <br>
      <h4>普通按钮使用，带有icon的按钮</h4>
      <v-button>
        <icon type="close"></icon>关闭
      </v-button>
      <br>
      <h4>按钮组使用</h4>
      <h5>Basic</h5>
      <button-group>
        <v-button secondary value="cancel"></v-button>
        <v-button primary value="ok"></v-button>
      </button-group>
      <button-group large>
        <v-button primary value="L"></v-button>
        <v-button secondary value="M"></v-button>
        <v-button tertiary value="M"></v-button>
      </button-group>
      <button-group small>
        <v-button disabled value="L"></v-button>
        <v-button disabled value="M"></v-button>
        <v-button disabled value="M"></v-button>
        <v-button disabled value="R"></v-button>
      </button-group>
      <h5>带有icon的按钮组</h5>
      <button-group>
        <v-button>
          <icon type="prev"></icon>上一页
        </v-button>
        <v-button>
          下一页<icon type="next"></icon>
        </v-button>
      </button-group>
      <button-group>
        <v-button>
          <icon type="head"></icon>
        </v-button>
        <v-button>
          <icon type="tail"></icon>
        </v-button>
      </button-group>
    </div>

<pre><code class="language-markup"><script type="language-mark-up">
<!-- 基础按钮，使用封装的Button组件，通过添加属性，呈现样式 -->
<!-- 大号（large）、中号（默认）和小号（small）-->
<!-- 有主按钮（primary）、次按钮（secondary）、三级按钮（tertiary）、失效按钮（disabled）和文字型按钮（text）-->
<!-- 可以通过属性value控制按钮文案或者组件调用中插入html代码 -->
<v-button large primary value="大号+主按钮"></v-button>
<v-button large primary>大号+主按钮</v-button>
<v-button>
  <icon type="close"></icon>关闭
</v-button>

<!-- 按钮组，使用封装的ButtonGroup组件 -->
<button-group>
  <v-button secondary value="cancel"></v-button>
  <v-button primary value="ok"></v-button>
</button-group>
<button-group large>
  <v-button primary value="L"></v-button>
  <v-button secondary value="M"></v-button>
  <v-button tertiary value="M"></v-button>
</button-group>
<button-group small>
  <v-button disabled value="L"></v-button>
  <v-button disabled value="M"></v-button>
  <v-button disabled value="M"></v-button>
  <v-button disabled value="R"></v-button>
</button-group>
<button-group>
  <v-button>
    <icon type="prev"></icon>上一页
  </v-button>
  <v-button>
    下一页<icon type="next"></icon>
  </v-button>
</button-group>
<button-group>
  <v-button>
    <icon type="head"></icon>
  </v-button>
  <v-button>
    <icon type="tail"></icon>
  </v-button>
</button-group>
</script></code></pre>
    <h4>参数</h4>
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
          <td>value</td>
          <td><code>String</code></td>
          <td><code>空</code></td>
          <td>按钮文案</td>
        </tr>
        <tr>
          <td>large</td>
          <td></td>
          <td></td>
          <td>按钮尺寸，大</td>
        </tr>
        <tr>
          <td>small</td>
          <td></td>
          <td></td>
          <td>按钮尺寸，小</td>
        </tr>
        <tr>
          <td>primary</td>
          <td></td>
          <td></td>
          <td>按钮类型，主按钮</td>
        </tr>
        <tr>
          <td>secondary</td>
          <td></td>
          <td></td>
          <td>按钮类型，次按钮</td>
        </tr>
        <tr>
          <td>tertiary</td>
          <td></td>
          <td></td>
          <td>按钮类型，三级按钮</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td></td>
          <td></td>
          <td>按钮类型，失效按钮</td>
        </tr>
        <tr>
          <td>text</td>
          <td></td>
          <td></td>
          <td>按钮类型，文字型按钮</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {Button, Icon} from 'src/';
const vButton = Button;
const ButtonGroup = Button.Group;
export default{
  components: {
    vButton,
    Icon,
    ButtonGroup
  }
}
</script>

