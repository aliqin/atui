<template>
  <div class="bs-docs-section" id="tag">
    <h3 class="page-header"><a href="#tag" class="anchor">Tag 标签</a></h3>
    <div class="bs-example">
      <h4 class="example-title">基本标签</h4>
      <tag>标签一</tag>
      <tag closable :on-close="closeTag">标签（回调）</tag>
      <tag :href="href">标签（链接）</tag>
      <h4 class="example-title">三种颜色的标签</h4>
      <tag color="green">标签</tag>
      <tag color="orange" closable :on-close="closeTag">标签</tag>
      <tag color="red">标签</tag>
    </div>
<pre><code class="language-markup"><script type="language-mark-up"><tag>标签一</tag>
<tag closable :on-close="closeTag">标签（回调）</tag>
<tag :href="href">标签（链接）</tag>
<tag color="green">标签</tag>
<tag color="orange" closable :on-close="closeTag">标签</tag>
<tag color="red">标签</tag>
</script></code></pre>
  <h2>Options</h2>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>closable</td>
        <td><code>Boolean</code></td>
        <td></td>
        <td>是否显示关闭按钮</td>
      </tr>
      <tr>
        <td>color</td>
        <td><code>String</code></td>
        <td></td>
        <td>Tag的颜色，默认为#f2f2f2</td>
      </tr>
      <tr>
        <td>href</td>
        <td><code>String</code></td>
        <td></td>
        <td>给tag加上链接地址，作为一个超链接</td>
      </tr>
      <tr>
        <td>on-close</td>
        <td><code>Function</code></td>
        <td></td>
        <td>点击关闭按钮之后所执行的回调函数</td>
      </tr>

    </tbody>
  </table>
  </div>
</template>

<script>
  import tag from 'src/components/Tag.vue'
  export default {
    data () {
      return {
        href: 'http://www.aliqin.cn'
      }
    },
    methods: {
      closeTag () {
        alert('这里是关闭标签之后的回调函数哦！！！');
      }
    },
    components: {
      tag
    }
  }
</script>

<style lang="less">
  .example-title {
    margin: 20px 0;
  }
</style>
