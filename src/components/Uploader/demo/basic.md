---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN



## en-US


````jsx
upload文件上传
1、点击上传调用方式
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
2、支持拖拽上传调用方式
<form id="upload2" method="post" action="{{ajaxUrl}}">
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
    data: function() {
        return {
            ajaxUrl: '/upload'
        }
    },
    components: {
        uploader: atui.Uploader
    }
})
````
