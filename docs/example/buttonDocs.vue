<template>
  <div class="bs-docs-section" id="button">
    <h3 class="page-header"><a href="#buttons" class="anchor">Button 按钮</a></h3>
    <div class="bs-example">
      <v-button large primary value="大号+主按钮"></v-button>
      <v-button primary value="中号+主按钮"></v-button>
      <v-button small primary value="小号+主按钮"></v-button>
      <br>
      <v-button large secondary value="大号+次按钮"></v-button>
      <v-button secondary value="中号+次按钮"></v-button>
      <v-button small secondary value="小号+次按钮"></v-button>
      <br>
      <v-button large tertiary value="大号+三级按钮"></v-button>
      <v-button tertiary value="中号+三级按钮"></v-button>
      <v-button small tertiary value="小号+三级按钮"></v-button>
      <br>
      <v-button large disabled value="大号+失效按钮"></v-button>
      <v-button disabled value="中号+失效按钮"></v-button>
      <v-button small disabled value="小号+失效按钮"></v-button>
      <br>
      <v-button large text value="大号+文字型按钮"></v-button>
      <v-button text value="中号+文字型按钮"></v-button>
      <v-button small text value="小号+文字型按钮"></v-button>
      <br>
      <v-button>
        <icon type="close">关闭</icon>
      </v-button>
    </div>

<pre><code class="language-markup"><script type="language-mark-up">
<!-- 基础按钮，使用封装的Button组件，通过添加属性，呈现样式 -->
<!-- 大号（large）、中号（默认）和小号（small）-->
<!-- 有主按钮（primary）、次按钮（secondary）、三级按钮（tertiary）、失效按钮（disabled）和文字型按钮（text）-->
<!-- 可以通过属性value控制按钮文案或者组件调用中插入html代码 -->
<v-button large primary value="大号+主按钮"></v-button>
<v-button large primary>大号+主按钮</v-button>
<v-button>
  <icon type="close">关闭</icon>
</v-button>
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
export default{
  components: {
    vButton,
    Icon
  }
}
</script>

