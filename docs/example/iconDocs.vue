<template>
  <div class="bs-docs-section" id="icon">
    <h3 class="page-header"><a href="#icon" class="anchor">Icon 图标</a></h3>
    <div class="bs-example">
      <icon type="head"></icon>页首
      <icon type="tail"></icon>页尾
      <icon type="clear"></icon>清除
      <icon type="close"></icon>关闭
      <icon type="search"></icon>搜索
      <icon type="up"></icon>向上
      <icon type="down"></icon>向下
      <icon type="prev"></icon>上一页
      <icon type="next"></icon>下一页
      <icon type="warning" color="red" size="20"></icon>警告
      <icon type="error"></icon>错误
      <icon type="info"></icon>信息
      <icon type="help"></icon>帮助
      <icon type="success"></icon>成功
      <icon type="filter"></icon>过滤
      <icon type="doc"></icon>附件
      <icon type="calendar"></icon>日历
      <icon type="tick"></icon>对勾
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<!--更多icon请看这里 http://iconfont.cn/users/project?pid=77664 -->
<icon type="head"></icon>页首
<icon type="tail"></icon>页尾
<icon type="clear"></icon>清除
<icon type="close"></icon>关闭
<icon type="search"></icon>搜索
<icon type="up"></icon>向上
<icon type="down"></icon>向下
<icon type="prev"></icon>上一页
<icon type="next"></icon>下一页
<icon type="warning" color="red" size="20"></icon>警告
<icon type="error"></icon>错误
<icon type="info"></icon>信息
<icon type="help"></icon>帮助
<icon type="success"></icon>成功
<icon type="filter"></icon>过滤
<icon type="doc"></icon>附件
<icon type="calendar"></icon>日历
<icon type="tick"></icon>对勾
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
