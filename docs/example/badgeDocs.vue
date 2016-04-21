<template>
  <div class="bs-docs-section" id="badge">
    <h3 class="page-header"><a href="#badge" class="anchor">Badge 徽标数</a></h3>
    <div class="bs-example">
      <h4 class="example-title">基础型</h4>
      <badge :count="6">
        <a href="javascript:;" class="badge-count-example"></a>
      </badge>
      <h4 class="example-title">大数字型</h4>
      <badge :count="99">
        <a href="javascript:;" class="badge-count-example"></a>
      </badge>

      <badge :count="1000" >
        <a href="javascript:;" class="badge-count-example"></a>
      </badge>
      <h4 class="example-title">小红点型</h4>
        <badge :dot="true" >
          <a href="javascript:;" class="badge-count-example"></a>
        </badge>

        <badge :dot="true" >
          <a href="javascript:;" >这是一个文字链接</a>
        </badge>
    </div>
<pre>
<code class="language-markup"><script type="language-mark-up">
<badge :count="6">
  <a href="javascript:;" class="badge-count-example"></a>
</badge>

<badge :count="99">
  <a href="javascript:;" class="badge-count-example"></a>
</badge>

<badge :count="1000">
  <a href="javascript:;" class="badge-count-example"></a>
</badge>

<badge :dot="true">
  <a href="javascript:;" class="badge-count-example"></a>
</badge>

<badge :dot="true">
  <a href="javascript:;" >这是一个文字链接</a>
</badge>

</script></code></pre>
  </div>
  <h2>Options</h2>
  <table class="atui-table table-bordered">
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
        <td>count</td>
        <td><code>Number</code></td>
        <td></td>
        <td>展示的数字，当大于99时展示99+</td>
      </tr>
      <tr>
        <td>dot</td>
        <td><code>Boolean</code></td>
        <td></td>
        <td>展示的红点</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import {Badge} from 'src/'
  export default {
    data () {
      return {

      }
    },
    components: {
      Badge
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
