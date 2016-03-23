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
          <label for="cb1">未选中状态</label>
          <br>
          <input type="checkbox" id="cb2" checked />
          <label for="cb2">选中状态</label>
          <br>
          <input type="checkbox" id="cb3" disabled />
          <label for="cb3">未选中不可点击状态</label>
          <br>
          <input type="checkbox" id="cb4" checked disabled />
          <label for="cb4">选中不可点击状态</label>
          <br>
          <h4>radio 单选框</h4>
          <input type="radio" id="radio1" />
          <label for="radio1">未选中状态</label>
          <br>
          <input type="radio" id="radio2" checked />
          <label for="radio2">选中状态</label>
          <br>
          <input type="radio" id="radio3" disabled />
          <label for="radio3">未选中不可点击状态</label>
          <br>
          <input type="radio" id="radio4" checked disabled />
          <label for="radio4">选中不可点击状态</label>
          <br>
          <h4>Upload 文件上传</h4>
          <h5>1、点击上传</h5>
          <form id="upload1" method="post" action="{{ajaxUrl}}">
            <file-upload
              id="file-upload-click-test"
              form-id="upload1"
              model="model"
              upload-type="click"
              :ajax="ajaxUrl"
              :multiple="multiple"
              name="files1"
              :auto-submit="true"
              :hide-button="true"
              :file-list.sync="fileList">
            </file-upload>
           </form>
           <h5>2、支持拖拽上传</h5>
           <form id="upload2" method="post" action="{{ajaxUrl}}">
            <file-upload
              id="file-upload-drag-test"
              form-id="upload2"
              model="model"
              upload-type="drag"
              :ajax="ajaxUrl"
              :multiple="multiple"
              name="files2"
              :auto-submit="autoSubmit"
              :hide-button="hideButton"
              :file-list.sync="fileList">
            </file-upload>
           </form>
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

<script>
  import uploadFile from 'src/components/upload.vue'

  export default {
    components: {
      fileUpload: uploadFile
    },
    data() {
      return {
        uploadTime: 0,
        model: null,
        fileList: [],
        multiple: true,
        hideButton: false,
        autoSubmit: false,
        ajaxUrl: 'http://mosquito.ie:3004/upload'
      }
    }
  }
</script>

