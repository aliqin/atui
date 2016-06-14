<template>
  <div class="bs-docs-section" id="textarea">
    <h3 class="page-header"><a href="#textarea" class="anchor">Textarea 文本域</a></h3>
    <div class="bs-example">
    <h4>基础文本域</h4>
    <div>
      <v-textarea placeholder="请输入描述信息"></v-textarea>
    </div>
    <div>
      <v-textarea disabled content="文本框被禁用了"></v-textarea>
    </div>
    <div>
      <v-textarea error content="信息错误了"></v-textarea>
    </div>
    <h4>统计输入字数文本域</h4>
    <div>
      <v-textarea placeholder="请输入描述信息，有字数统计" :words-count="true"></v-textarea>
    </div>
    <div>
      <v-textarea placeholder="请输入描述信息" :words-count="true" count-tips="您输入的字数是："></v-textarea>
    </div>
    <h4>有字数限制文本域</h4>
    <div>
      <v-textarea :limit-words="50" placeholder="这里只能输入50个字" :error="validStatus == 'error'" name="ruohuan" v-ref:textarea-limit :content.sync="content"></v-textarea>
    </div>
    <div>
      <v-textarea disabled :limit-words="10" placeholder="这里只能输入10个字"></v-textarea>
    </div>
<pre><code class="language-markup"><script type="language-mark-up">
<v-textarea disabled :limit-words="10" placeholder="这里只能输入10个字"></v-textarea>
<v-textarea placeholder="请输入描述信息" :words-count="true" count-tips="您输入的字数是："></v-textarea>
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
          <td>content</td>
          <td><code>String</code></td>
          <td><code>空</code></td>
          <td>文本域内容</td>
        </tr>
        <tr>
          <td>placeholder</td>
          <td><code>String</code></td>
          <td><code>空</code></td>
          <td>文本域预期值的提示信息</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td></td>
          <td></td>
          <td>文本域状态，禁用</td>
        </tr>
       <tr>
          <td>error</td>
          <td></td>
          <td></td>
          <td>文本域状态，输入验证失败</td>
        </tr>
        <tr>
          <td>success</td>
          <td></td>
          <td></td>
          <td>文本域状态，输入验证成功</td>
        </tr>
        <tr>
          <td>limit-words</td>
          <td><code>Number</code></td>
          <td></td>
          <td>文本域限制字数</td>
        </tr>
        <tr>
          <td>words-count</td>
          <td><code>Boolean || 空</code></td>
          <td></td>
          <td>文本域字数统计功能</td>
        </tr>
        <tr>
          <td>count-tips</td>
          <td><code>String</code></td>
          <td><code>输入字数：</code></td>
          <td>文本域字数统计提示</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import {Textarea as vTextarea} from 'src/'

  export default {
    components: {
      vTextarea
    },

    data () {
      return {
        validStatus: '',
        content: '我是文本域内容，内容字数不能少于2个哦，否则会提示错误哦'
      }
    },

    watch: {
      content (val) {
        let len = val.length;

        if(len < 2) {
          this.validStatus = 'error';
        } else {
          this.validStatus = '';
        }
      }
    }
  }
</script>
