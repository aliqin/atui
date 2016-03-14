<template>
  <div class="bs-docs-section" id="input">
    <h3 class="page-header"><a href="#input" class="anchor">input 输入框</a></h3>
    <div class="bs-example">
    <h4>输入框尺寸</h4>
    <div>
      <input type="text" placeholder="输入框－大尺寸" class="input large"></input>
    </div>
    <br>
    <div>
      <input type="text" placeholder="输入框－默认尺寸" class="input"></input>
    </div>
    <br>
    <div>
      <input type="text" placeholder="输入框－小尺寸" class="input small"></input>
    </div>
    <h4>输入框状态</h4>
    <div>
      <input type="text" placeholder="禁用输入框－默认尺寸" class="input" disabled></input>
    </div>
    <br>
    <div>
      <input type="text" placeholder="error输入框－默认尺寸" class="input error"></input>
    </div>
    <br>
    <div>
      <input type="text" placeholder="success输入框－默认尺寸" class="input success"></input>
    </div>

    <!-- <h4>验证状态</h4>
    <div class="form-group has-success">
      <label class="control-label" for="inputSuccess1">成功</label>
      <input type="text" class="form-control" id="inputSuccess1" aria-describedby="helpBlock2">
      <span id="helpBlock2" class="help-block">提示文字</span>
    </div>
    <div class="form-group has-warning">
      <label class="control-label" for="inputWarning1">警告</label>
      <input type="text" class="form-control" id="inputWarning1">
    </div>
    <div class="form-group has-error">
      <label class="control-label" for="inputError1">错误</label>
      <input type="text" class="form-control" id="inputError1">
    </div>
    <div class="has-success">
      <div class="checkbox">
        <label>
          <input type="checkbox" id="checkboxSuccess" value="option1">
          选择OK
        </label>
      </div>
    </div>
    <div class="has-warning">
      <div class="checkbox">
        <label>
          <input type="checkbox" id="checkboxWarning" value="option1">
          选择警告
        </label>
      </div>
    </div>
    <div class="has-error">
      <div class="checkbox">
        <label>
          <input type="checkbox" id="checkboxError" value="option1">
          选择错误
        </label>
      </div>
    </div>
    <h4>文本域</h4>
    <div class="form-group">
        <textarea class="form-control" placeholder="文本域"></textarea>
    </div>
    </div> -->

<pre><code class="language-markup"><script type="language-mark-up">
<!-- input输入框，样式采用名称组合的形式 -->
<!-- 用样式input，标识是个input输入框，且具有默认的样式 -->
<!-- 输入框尺寸，有大号（large）、中号（default，可省略）和小号（small）-->
<!-- 输入框状态，有错误（error）、正确（success）、禁用（标签加disabled属性即可）-->
<input type="text" placeholder="输入框－默认尺寸" class="input"></input>
<input type="text" placeholder="输入框－大尺寸" class="input large"></input>
<input type="text" placeholder="输入框－小尺寸" class="input small"></input>
<input type="text" placeholder="禁用输入框－默认尺寸" class="input" disabled></input>
<input type="text" placeholder="错误输入框－默认尺寸" class="input error"></input>
<input type="text" placeholder="成功输入框－默认尺寸" class="input success"></input>
</script></code></pre>
  </div>
</template>

