---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN

点击上传调用方式

## en-US


````jsx

<form id="upload1" method="post" action="{{ajaxUrl}}">
  <uploader
    id="file-upload-click-test"
    form-id="upload1"
    upload-type="click"
    :ajax="ajaxUrl"
    :multiple="multiple"
    name="files1"
    :auto-submit="true"
    :hide-button="true"
    :file-list.sync="fileList1">
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
