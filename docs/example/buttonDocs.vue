<template>
  <div class="bs-docs-section" id="buttons">
    <h3 class="page-header"><a href="#buttons" class="anchor">Button 按钮</a></h3>
    <div class="bs-example">
      <h4>基础按钮</h4>
      <button type="button" class="btn large primary">大号+主按钮</button>
      <button type="button" class="btn large secondary">大号+次按钮</button>
      <button type="button" class="btn large tertiary">大号+三级按钮</button>
      <button type="button" class="btn large disabled">大号+失效按钮</button>
      <button type="button" class="btn large text">大号+文字型按钮</button>
      <br><br>
      <button type="button" class="btn primary">中号+主按钮</button>
      <button type="button" class="btn secondary">中号+次按钮</button>
      <button type="button" class="btn tertiary">中号+三级按钮</button>
      <button type="button" class="btn disabled">中号+失效按钮</button>
      <button type="button" class="btn text">中号+文字型按钮</button>
      <br><br>
      <button type="button" class="btn small primary">小号+主按钮</button>
      <button type="button" class="btn small secondary">小号+次按钮</button>
      <button type="button" class="btn small tertiary">小号+三级按钮</button>
      <button type="button" class="btn small disabled">小号+失效按钮</button>
      <button type="button" class="btn small text">小号+文字型按钮</button>
      <h4>组合切换按钮</h4>
      <div class="btn-group large">
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
      <div class="btn-group small">
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
<!-- 按钮尺寸，有大号（large）、中号（default，可以不写）和小号（small）-->
<!-- 按钮类型，有主按钮（primary）、次按钮（secondary）、三级按钮（tertiary）、失效按钮（disabled）和文字型按钮（text）-->
<button type="button" class="btn large primary">大号+主按钮</button>
<button type="button" class="btn large secondary">大号+次按钮</button>
<button type="button" class="btn large tertiary">大号+三级按钮</button>
<button type="button" class="btn large disabled">大号+失效按钮</button>
<button type="button" class="btn large text">大号+文字型按钮</button>
<button type="button" class="btn default primary">中号+主按钮</button>
<button type="button" class="btn default secondary">中号+次按钮</button>
<button type="button" class="btn default tertiary">中号+三级按钮</button>
<button type="button" class="btn default disabled">中号+失效按钮</button>
<button type="button" class="btn default text">中号+文字型按钮</button>
<button type="button" class="btn small primary">小号+主按钮</button>
<button type="button" class="btn small secondary">小号+次按钮</button>
<button type="button" class="btn small tertiary">小号+三级按钮</button>
<button type="button" class="btn small disabled">小号+失效按钮</button>
<button type="button" class="btn small text">小号+文字型按钮</button>
<!-- 组合切换按钮，样式采用名称组合的形式 -->
<!-- 按钮组可包含多个按钮 -->
<!-- 用样式btn-group，标识是个按钮组 -->
<!-- 按钮组尺寸，有大号（large）、中号（default，可以不写）和小号（small）-->
<!-- 通过增加active样式，默认选中按钮 -->
<div class="btn-group large">
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
<div class="btn-group small">
  <button type="button">总计</button>
  <button type="button">语音验证码统计</button>
  <button type="button" class="active">短信验证码统计</button>
  <button type="button">流量验证码统计</button>
  <button type="button">通话</button>
</div>
</script></code></pre>
  </div>
</template>

