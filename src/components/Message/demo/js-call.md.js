webpackJsonp([77,168],{412:function(n,s){"use strict";n.exports={content:{"zh-CN":[["p","\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u7ec4\u4ef6\u5b9e\u4f8b\u8c03\u7528\u65b9\u6cd5,\u6bd4\u5982\uff1a"],["ul",["li",["p",["code","message.success(content, duration)"]]],["li",["p",["code","message.error(content, duration)"]]],["li",["p",["code","message.info(content, duration)"]]],["li",["p",["code","message.warning(content, duration)"]]],["li",["p",["code","message.loading(content, duration)"]]]]],"en-US":[]},meta:{order:4,title:{"zh-CN":"\u4f7f\u7528\u811a\u672c\u8c03\u7528","en-US":"Type"},filename:"src/components/Message/demo/js-call.md",id:"src-components-Message-demo-js-call"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token operator" >&lt;</span>v<span class="token operator" >-</span>button @click<span class="token operator" >=</span><span class="token string" >"showMessage"</span><span class="token operator" >></span>\n  \u70b9\u6211\u4f1a\u5f39\u51fa\u63d0\u793a\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>v-button</span><span class="token punctuation" >></span></span>'}],preview:'<v-button @click="showMessage">\n  \u70b9\u6211\u4f1a\u5f39\u51fa\u63d0\u793a\n</v-button>',vueScript:"new Vue({\n  el: 'body',\n  components: {\n    vButton: atui.Button\n  },\n  methods: {\n    showMessage () {\n      atui.Message.success('\u6210\u529f\u5566')\n    }\n  }\n\n})"}}});