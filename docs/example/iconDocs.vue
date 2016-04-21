<template>
  <div class="bs-docs-section" id="icon">
    <h3 class="page-header"><a href="#icon" class="anchor">Icon 图标</a></h3>
    <div class="bs-example">
      <icon type="head">页首</icon>
      <icon type="tail">页尾</icon>
      <icon type="clear">清除</icon>
      <icon type="close">关闭</icon>
      <icon type="search">搜索</icon>
      <icon type="up">向上</icon>
      <icon type="down">向下</icon>
      <icon type="prev">上一页</icon>
      <icon type="next">下一页</icon>
      <icon type="warning" color="red" size="20">警告</icon>
      <icon type="error">错误</icon>
      <icon type="info">信息</icon>
      <icon type="help">帮助</icon>
      <icon type="success">成功</icon>
      <icon type="filter">过滤</icon>
      <icon type="doc">附件</icon>
      <icon type="calendar">日历</icon>
      <icon type="tick">对勾</icon>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<!--更多icon请看这里 http://iconfont.cn/users/project?pid=77664 -->
<icon type="head">页首</icon>
<icon type="tail">页尾</icon>
<icon type="clear">清除</icon>
<icon type="close">关闭</icon>
<icon type="search">搜索</icon>
<icon type="up">向上</icon>
<icon type="down">向下</icon>
<icon type="prev">上一页</icon>
<icon type="next">下一页</icon>
<icon type="warning" color="red" size="36">警告</icon>
<icon type="error">错误</icon>
<icon type="info">信息</icon>
<icon type="help">帮助</icon>
<icon type="success">成功</icon>
<icon type="filter">过滤</icon>
<icon type="doc">附件</icon>
<icon type="calendar">日历</icon>
<icon type="tick">对勾</icon>
  </script></code></pre>
  <h2>Options</h2>
  </div>
</template>

<script>
  import {Icon} from 'src/'
  export default {
    components: { Icon }
  }
</script>

<style>
  #icon .iconfont {
    display: inline-block;
    margin:8px;
  }
</style>
