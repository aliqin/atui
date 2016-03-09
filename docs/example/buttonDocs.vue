<template>
  <div class="bs-docs-section" id="buttons">
    <h3 class="page-header"><a href="#buttons" class="anchor">Button 按钮</a></h3>
    <div class="bs-example">
      <h4>基础按钮</h4>
      <button type="button" class="btn btn-large btn-primary">大号+主按钮</button>
      <button type="button" class="btn btn-large btn-secondary">大号+次按钮</button>
      <button type="button" class="btn btn-large btn-tertiary">大号+三级按钮</button>
      <button type="button" class="btn btn-large btn-disabled">大号+失效按钮</button>
      <button type="button" class="btn btn-large btn-text">大号+文字型按钮</button>
      <br><br>
      <button type="button" class="btn btn-primary">中号+主按钮</button>
      <button type="button" class="btn btn-secondary">中号+次按钮</button>
      <button type="button" class="btn btn-tertiary">中号+三级按钮</button>
      <button type="button" class="btn btn-disabled">中号+失效按钮</button>
      <button type="button" class="btn btn-text">中号+文字型按钮</button>
      <br><br>
      <button type="button" class="btn btn-small btn-primary">小号+主按钮</button>
      <button type="button" class="btn btn-small btn-secondary">小号+次按钮</button>
      <button type="button" class="btn btn-small btn-tertiary">小号+三级按钮</button>
      <button type="button" class="btn btn-small btn-disabled">小号+失效按钮</button>
      <button type="button" class="btn btn-small btn-text">小号+文字型按钮</button>
      <h4>组合切换按钮</h4>
      <div class="btn-group group-large">
        <button type="button" class="active">总计</button>
        <button type="button">语音验证码统计</button>
        <button type="button">短信验证码统计</button>
      </div>
      <br><br>
      <div class="btn-group">
        <button type="button">总计</button>
        <button type="button" class="active">语音验证码统计</button>
        <button type="button">短信验证码统计</button>
        <button type="button">流量验证码统计</button>
      </div>
      <br><br>
      <div class="btn-group group-small">
        <button type="button">总计</button>
        <button type="button">语音验证码统计</button>
        <button type="button" class="active">短信验证码统计</button>
        <button type="button">流量验证码统计</button>
        <button type="button">通话</button>
      </div>
    </div>

<pre><code class="language-markup"><script type="language-mark-up">
<!-- 基础按钮，样式采用名称组合的形式 -->
<!-- 用样式btn，标识是个按钮，且具有默认样式 -->
<!-- 按钮尺寸，有大号（btn-large）、中号（btn-default，可以不写）和小号（btn-small）-->
<!-- 按钮类型，有主按钮（btn-primary）、次按钮（btn-secondary）、三级按钮（btn-tertiary）、失效按钮（btn-disabled）和文字型按钮（btn-text）-->
<button type="button" class="btn btn-large btn-primary">大号+主按钮</button>
<button type="button" class="btn btn-large btn-secondary">大号+次按钮</button>
<button type="button" class="btn btn-large btn-tertiary">大号+三级按钮</button>
<button type="button" class="btn btn-large btn-disabled">大号+失效按钮</button>
<button type="button" class="btn btn-large btn-text">大号+文字型按钮</button>
<button type="button" class="btn btn-default btn-primary">中号+主按钮</button>
<button type="button" class="btn btn-default btn-secondary">中号+次按钮</button>
<button type="button" class="btn btn-default btn-tertiary">中号+三级按钮</button>
<button type="button" class="btn btn-default btn-disabled">中号+失效按钮</button>
<button type="button" class="btn btn-default btn-text">中号+文字型按钮</button>
<button type="button" class="btn btn-small btn-primary">小号+主按钮</button>
<button type="button" class="btn btn-small btn-secondary">小号+次按钮</button>
<button type="button" class="btn btn-small btn-tertiary">小号+三级按钮</button>
<button type="button" class="btn btn-small btn-disabled">小号+失效按钮</button>
<button type="button" class="btn btn-small btn-text">小号+文字型按钮</button>
<!-- 组合切换按钮，样式采用名称组合的形式 -->
<!-- 按钮组可包含多个按钮 -->
<!-- 用样式btn-group，标识是个按钮组 -->
<!-- 按钮组尺寸，有大号（group-large）、中号（group-default，可以不写）和小号（group-small）-->
<!-- 通过增加active样式，默认选中按钮 -->
<div class="btn-group group-large">
  <button type="button" class="active">总计</button>
  <button type="button">语音验证码统计</button>
  <button type="button">短信验证码统计</button>
</div>
<div class="btn-group">
  <button type="button">总计</button>
  <button type="button" class="active">语音验证码统计</button>
  <button type="button">短信验证码统计</button>
  <button type="button">流量验证码统计</button>
</div>
<div class="btn-group group-small">
  <button type="button">总计</button>
  <button type="button">语音验证码统计</button>
  <button type="button" class="active">短信验证码统计</button>
  <button type="button">流量验证码统计</button>
  <button type="button">通话</button>
</div>
</script></code></pre>
  </div>
</template>

