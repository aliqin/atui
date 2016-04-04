<template>
  <div class="bs-docs-section" id="breadcrumb">
    <h3 class="page-header"><a href="#breadcrumb" class="anchor">Breadcrumb 面包屑</a></h3>
    <div class="bs-example">
      <h4 class="example-title">基本样式</h4>
      <breadcrumb>
        <breadcrumb-item :href="href">一级类目</breadcrumb-item>
        <breadcrumb-item :href="href">二级类目</breadcrumb-item>
        <breadcrumb-item>三级类目</breadcrumb-item>
      </breadcrumb>
      <h4 class="example-title">分隔符样式（选用）</h4>
      <breadcrumb slash="&gt;">
        <breadcrumb-item :href="href">一级类目</breadcrumb-item>
        <breadcrumb-item :href="href">二级类目</breadcrumb-item>
        <breadcrumb-item :href="href">三级类目</breadcrumb-item>
        <breadcrumb-item>四级类目</breadcrumb-item>
      </breadcrumb>
    </div>
<pre>
<code class="language-markup"><script type="language-mark-up">
<breadcrumb>
  <breadcrumb-item :href="href">一级类目</breadcrumb-item>
  <breadcrumb-item :href="href">二级类目</breadcrumb-item>
  <breadcrumb-item>三级类目</breadcrumb-item>
</breadcrumb>
<breadcrumb slash="&gt;">
  <breadcrumb-item :href="href">一级类目</breadcrumb-item>
  <breadcrumb-item :href="href">二级类目</breadcrumb-item>
  <breadcrumb-item :href="href">三级类目</breadcrumb-item>
  <breadcrumb-item>四级类目</breadcrumb-item>
</breadcrumb>
</script></code></pre>
  </div>
  <h2>Options</h2>
  <h4 style="margin: 20px 0;">Breadcrumb</h4>
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
        <td>slash</td>
        <td>String</td>
        <td>/</td>
        <td>每一级类目之间的分隔符</td>
      </tr>
    </tbody>
  </table>
  <h4 style="margin: 20px 0;">BreadcrumbItem</h4>
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
        <td>href</td>
        <td>String</td>
        <td>无</td>
        <td>链接，如果不传则不可点击</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import {Breadcrumb}  from 'src/'
  const {BreadcrumbItem} = Breadcrumb

  export default {
    data () {
      return {
        href: 'http://www.taobao.com'
      }
    },
    components: {
      Breadcrumb,
      BreadcrumbItem
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
