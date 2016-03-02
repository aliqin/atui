<template>

  <div class="bs-docs-section" id="form">
    <h3 class="page-header"><a href="#form" class="anchor">form 表单 </a></h3>
    <div class="bs-example">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">邮件地址</label>
          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="请输入邮箱">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">密码</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="请输入密码">
        </div>
        <div class="form-group">
          <label for="exampleInputFile">文件上传</label>
          <input type="file" id="exampleInputFile">
          <p class="help-block">block-level提示文字</p>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox"> 选中框
          </label>
        </div>
        <button type="submit" class="btn btn-default">提交</button>
      </form>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">邮件地址</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="请输入邮箱">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">密码</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="请输入密码">
  </div>
  <div class="form-group">
    <label for="exampleInputFile">文件上传</label>
    <input type="file" id="exampleInputFile">
    <p class="help-block">block-level提示文字</p>
  </div>
  <div class="checkbox">
    <label>
      <input type="checkbox"> 选中框
    </label>
  </div>
  <button type="submit" class="btn btn-default">提交</button>
</form>
    </script></code></pre>
    </script>
    </code>
  </div>
</template>


