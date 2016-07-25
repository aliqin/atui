---
order: 0
title:
  zh-CN: 按钮类型
  en-US: Type
---

## zh-CN

按钮有四种类型：主按钮、次按钮、幽灵按钮、虚线按钮。

通过设置 `type` 为 `primary` `ghost` `dashed` 可分别创建主按钮、幽灵按钮、虚线按钮，若不设置 `type` 值则为次按钮。不同的样式可以用来区别其重要程度。

主按钮和次按钮可独立使用，幽灵按钮用于和主按钮组合。需要强引导用主按钮，切记主按钮在同一个操作区域最多出现一次。

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