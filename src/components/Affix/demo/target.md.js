webpackJsonp([147,194],{411:function(n,a){"use strict";n.exports={content:{"zh-CN":[["p","\u7528 ",["code","target"]," \u8bbe\u7f6e ",["code","Affix"]," \u9700\u8981\u76d1\u542c\u5176\u6eda\u52a8\u4e8b\u4ef6\u7684\u5143\u7d20\uff0c\u9ed8\u8ba4\u4e3a ",["code","window"],"\u3002"]],"en-US":[["p","Set a ",["code","target"]," for 'Affix', which is listen to scroll event of target element (default is ",["code","window"],")."]]},meta:{order:1,title:{"zh-CN":"\u6eda\u52a8\u5bb9\u5668","en-US":"Container to scroll"},filename:"src/components/Affix/demo/target.md",id:"src-components-Affix-demo-target"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>affixTarget<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">100%</span><span class="token punctuation">;</span> <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">100</span>px<span class="token punctuation">;</span> <span class="token property">background</span><span class="token punctuation">:</span> <span class="token hexcode">#ccc</span><span class="token punctuation">;</span> <span class="token property">overflow-y</span><span class="token punctuation">:</span> scroll<span class="token punctuation">;</span> <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">30</span>px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">300</span>px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-affix</span> <span class="token attr-name">:target</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>getTarget<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-button</span><span class="token punctuation">></span></span>affix<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-affix</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>'}],preview:'<div id="affixTarget" style="width: 100%; height: 100px; background: #ccc; overflow-y: scroll; padding: 30px;">\n  <div style="height: 300px;">\n    <v-affix :target="getTarget">\n      <v-button>affix</v-button>\n    </v-affix>\n  </div>\n</div>',vueScript:"new Vue({\n  el: 'body',\n  components: {\n    vButton: atui.Button,\n    vAffix: atui.Affix\n  },\n  data() {\n    return {\n      \n    }\n  },\n  methods: {\n    getTarget () {\n      return document.getElementById('affixTarget')\n    }\n  }\n})"}}});