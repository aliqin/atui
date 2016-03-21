<template>

  <div class="bs-docs-section" id="form">
    <h3 class="page-header"><a href="#form" class="anchor">form 表单 </a></h3>
    <div class="bs-example">
      <form>
        <!-- <div class="form-group">
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
        </div> -->
        <div class="checkbox">
          <h4>checkbox 复选框</h4>
          <input type="checkbox" id="cb1" />
          <label for="cb1">复选框</label>
          <br>
          <input type="checkbox" id="cb2" checked />
          <label for="cb2">默认选中的复选框</label>
          <br>
          <input type="checkbox" id="cb3" disabled />
          <label for="cb3">禁用的复选框</label>
          <br>
          <input type="checkbox" id="cb4" checked disabled />
          <label for="cb4">禁用的复选框</label>
          <h4>radio 单选框</h4>
          <input type="radio" name="hobby" id="radio1" />
          <label for="radio1">画画</label>
          <input type="radio" name="hobby" checked id="radio2" />
          <label for="radio2">游泳</label>
          <input type="radio" name="hobby" id="radio3" />
          <label for="radio3">跳舞</label>
          <input type="radio" name="hobby" id="radio4" />
          <label for="radio4">诗朗诵</label>
          <br>
          <input type="radio" id="radio5" disabled />
          <label for="radio5">被禁用的单选框</label>
          <br>
          <input type="radio" id="radio5" checked disabled />
          <label for="radio5">被禁用的单选框</label>
        </div>
        <button type="submit" class="btn">提交</button>
      </form>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
checkbox复选框

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


