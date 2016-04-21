<template>
  <div class="bs-docs-section" id="upload">
    <h3 class="page-header"><a href="#upload" class="anchor">Uploader 文件上传 </a></h3>
    <div class="bs-example">
      <h4>Uploader 文件上传</h4>
      <h5>1、点击上传</h5>
      <form id="upload1" method="post" action="{{ajaxUrl}}">
        <file-upload
          id="file-upload-click-test"
          form-id="upload1"
          upload-type="click"
          :ajax="ajaxUrl"
          :multiple="multiple"
          name="files1"
          :auto-submit="true"
          :hide-button="true"
          :file-list.sync="fileList1">
        </file-upload>
      </form>
      <h5>2、支持拖拽上传</h5>
      <form id="upload2" method="post" action="{{ajaxUrl}}">
        <file-upload
          id="file-upload-drag-test"
          form-id="upload2"
          upload-type="drag"
          :ajax="ajaxUrl"
          :multiple="multiple"
          name="files2"
          :auto-submit="autoSubmit"
          :hide-button="hideButton"
          :file-list.sync="fileList2">
        </file-upload>
      </form>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
upload文件上传
1、点击上传调用方式
<form id="upload1" method="post" action="upload.do">
  <file-upload id="file-upload-click-test" form-id="upload1" upload-type="click" :ajax="upload.do" :multiple="true" name="files1" :auto-submit="true" :hide-button="true" :file-list.sync="fileList1">
  </file-upload>
</form>
2、支持拖拽上传调用方式
<form id="upload2" method="post" action="upload.do">
  <file-upload id="file-upload-drag-test" form-id="upload2" upload-type="drag" :ajax="upload.do" :multiple="true" name="files2" :auto-submit="false" :hide-button="false" :file-list.sync="fileList2">
  </file-upload>
</form>
    </script></code></pre>
    <h4>参数</h4>
    <table class="atui-table table-bordered">
      <thead>
        <tr>
          <th>参数名</th>
          <th>类型</th>
          <th>默认值</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>id</td>
          <td><code>String</code></td>
          <td><code>空</code></td>
          <td>唯一标识</td>
        </tr>
        <tr>
          <td>form-id</td>
          <td><code>String</code></td>
          <td><code>空</code></td>
          <td>如需上传后自动提交，请确保以该值为id的form存在，否则，无需设置</td>
        </tr>
        <tr>
          <td>upload-type</td>
          <td><code>String</code></td>
          <td><code>click</code></td>
          <td>取值有<code>click</code>和<code>drop</code>两种，分别代表点击上传和支持拖拽上传</td>
        </tr>
        <tr>
          <td>accept</td>
          <td><code>String</code></td>
          <td><code>空</code></td>
          <td>上传的文件类型指定，详细可查看MIME类型</td>
        </tr>
        <tr>
          <td>ajax</td>
          <td><code>String</code></td>
          <td><code>空</code></td>
          <td>文件上传的地址</td>
        </tr>
        <tr>
          <td>multiple</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>是否支持多文件上传</td>
        </tr>
        <tr>
          <td>name</td>
          <td><code>String</code></td>
          <td><code>空</code></td>
          <td>名称</td>
        </tr>
        <tr>
          <td>auto-submit</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>上传后是否自动提交</td>
        </tr>
        <tr>
          <td>hide-button</td>
          <td><code>Boolean</code></td>
          <td><code>false</code></td>
          <td>是否隐藏upload按钮</td>
        </tr>
        <tr>
          <td>file-list</td>
          <td><code>Array</code></td>
          <td><code>空数组</code></td>
          <td>上传的文件列表</td>
        </tr>
        <tr>
          <td>method</td>
          <td><code>String</code></td>
          <td><code>POST</code></td>
          <td>上传文件请求类型</td>
        </tr>
        <tr>
          <td>completed::file-upload</td>
          <td><code>Function</code></td>
          <td></td>
          <td>上传请求执行完成后的回调，需要在events中捕获。</td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
  import UploadFile from 'src/'

  export default {
    components: {
      FileUpload: UploadFile
    },
    data() {
      return {
        uploadTime: 0,
        fileList1: [],
        fileList2: [],
        multiple: true,
        hideButton: false,
        autoSubmit: false,
        ajaxUrl: 'http://localhost:8080/upload'
      }
    },
    events: {
      'completed::file-upload'(res) {
        if(typeof(res) == 'string') {
          console.log('错误信息是：'+res);
        } else {
          console.log(res);
        }
      }
    }
  }
</script>

