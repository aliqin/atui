---
order: 0
title:
  zh-CN: 富文本编辑器
  en-US: Type
---

## zh-CN
基于vue-html5-editor封装，GitHub: https://github.com/PeakTai/vue-html5-editor

## en-US


````jsx
<v-editor :content.sync="content" :height="400" :z-index="100" :auto-height="true"></v-editor>
<br/>
<v-button large primary value="showContent" v-on:click="showContent"></v-button>
````

````vue-script
new Vue({
  el: 'body',
  data: {
  	content: 'xxx'
  },
  components: {
    vEditor: atuiWidget.Editor,
    vButton: atui.Button
  },
  methods: {
  	showContent: function(){
			alert(this.content);
		}
  }
})
````