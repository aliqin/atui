<template>
  <div class="bs-docs-section" id="buttons">
    <h3 class="page-header"><a href="#buttons" class="anchor">Input 输入框</a></h3>
    <div class="bs-example">
    <h4>文本输入框</h4>
    <div class="form-group">
        <input placeholder="输入框－大" type="text" class="form-control input-lg"/>
    </div>
    <div class="form-group">
        <input placeholder="输入框－中" type="text" class="form-control"/>
    </div>
    <div class="form-group">
        <input placeholder="输入框－小" type="text" class="form-control input-sm"/>
    </div>
    <h4>验证状态</h4>
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
    </div>

<pre><code class="language-markup"><script type="language-mark-up">

</script></code></pre>
  </div>
</template>

