<template>
  <div class="bs-docs-section" id="buttons">
    <h3 class="page-header"><a href="#buttons" class="anchor">Buttons 组合切换按钮</a></h3>
    <div class="bs-example">
      <h4>基础组合切换按钮样式使用</h4>
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
      <!-- <h4>Checkbox</h4>
      <checkbox-group :value.sync="checkboxValue">
        <checkbox value="left">Left</checkbox>
        <checkbox value="middle" checked>Middle</checkbox>
        <checkbox value="right">Right</checkbox>
      </checkbox-group>
      <p>
        <pre>
Checkbox value: {{checkboxValue | json}}
        </pre>
      </p>
      <hr>
      <h4>Radio</h4>
      <radio-group :value.sync="radioValue" size="large">
        <radio value="left">Left</radio>
        <radio value="middle" checked>Middle</radio>
        <radio value="right">Right</radio>
      </radio-group>

      <radio-group :value.sync="radioValue" size="small">
        <radio value="left">Left</radio>
        <radio value="middle" checked>Middle</radio>
        <radio value="right">Right</radio>
      </radio-group>
      <p>
        <pre>
Radio value: {{radioValue}}
        </pre>
      </p> -->
    </div>

    <pre><code class="language-markup"><script type="language-mark-up">
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

<script>
  import {radioGroup,radio,checkboxGroup,checkbox} from 'src/'

  export default {
    components: {
      radio,
      radioGroup,
      checkboxGroup,
      checkbox
    },
    data() {
      return {
        checkboxValue: [],
        radioValue: ''
      }
    }
  }
</script>
