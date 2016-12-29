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
  <v-uploader
    id="file-upload-drag-test"
    form-id="upload2"
    upload-type="drag"
    :ajax="ajaxUrl"
    :multiple="multiple"
    name="files2"
    :auto-submit="autoSubmit"
    :hide-button="hideButton"
    :file-list="fileList2">
  </v-uploader>
</form>

````

````vue-script
new Vue({
  el: 'body',
  components: {
    vUploader: atui.Uploader
  },
  data: {
    ajaxUrl:'about:blank',
    multiple: false,
    fileList2: [],
    hideButton: false,
    autoSubmit: false
  }
})
````
