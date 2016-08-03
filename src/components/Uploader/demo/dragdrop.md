---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN

支持拖拽上传调用方式

## en-US


````jsx
<form id="upload2" method="post" action="/upload">
  <uploader
    id="file-upload-drag-test"
    form-id="upload2"
    upload-type="drag"
    :ajax="ajaxUrl"
    :multiple="multiple"
    name="files2"
    :auto-submit="autoSubmit"
    :hide-button="hideButton"
    :file-list.sync="fileList2">
  </uploader>
</form>

````

````vue-script
new Vue({
  el: 'body',
  components: {
    uploader: atui.Uploader
  }
})
````
