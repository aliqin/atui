webpackJsonp([66,168],{423:function(n,a){"use strict";n.exports={content:{"zh-CN":[],"en-US":[]},meta:{order:2,title:{"zh-CN":"\u7b80\u5355\u7248","en-US":"Type"},filename:"src/components/Pagination/demo/simple.md",id:"src-components-Pagination-demo-simple"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>pagination</span> <span class="token attr-name" >:curr-page.sync</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>currPage<span class="token punctuation" >"</span></span> <span class="token attr-name" >:total</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>total<span class="token punctuation" >"</span></span> <span class="token attr-name" >simple</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>pagination</span><span class="token punctuation" >></span></span>'}],preview:'<pagination :curr-page.sync="currPage" :total="total" simple></pagination>',vueScript:"new Vue({\n  el: 'body',\n  components: {\n    pagination: atui.Pagination\n  },\n  data: function() {\n    return {\n      totalPage: 10,\n      currPage: 2,\n      total: 273\n    }\n  }\n})"}}});