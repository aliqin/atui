webpackJsonp([57,161],{425:function(n,a){"use strict";n.exports={content:{"zh-CN":[],"en-US":[]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Type"},filename:"src/components/Select/demo/basic.md",id:"src-components-Select-demo-basic"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>v-select</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Cherry<span class="token punctuation" >"</span></span> <span class="token attr-name" >width</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>200px<span class="token punctuation" >"</span></span> <span class="token attr-name" >@change</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>onSlectChange<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>v-option</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Apple<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u82f9\u679c<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>v-option</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>v-option</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Banana<span class="token punctuation" >"</span></span> <span class="token attr-name" >disabled</span><span class="token punctuation" >></span></span>Banana<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>v-option</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>v-option</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Cherry<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Cherry<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>v-option</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>v-option</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Orange<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>OrangeText<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>v-option</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>v-option</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Grape<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Grape<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>v-option</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>v-select</span><span class="token punctuation" >></span></span>'}],preview:'<v-select value="Cherry" width="200px" @change="onSlectChange">\n  <v-option value="Apple">\u82f9\u679c</v-option>\n  <v-option value="Banana" disabled>Banana</v-option>\n  <v-option value="Cherry">Cherry</v-option>\n  <v-option value="Orange">OrangeText</v-option>\n  <v-option value="Grape">Grape</v-option>\n</v-select>',vueScript:"new Vue({\n  el: 'body',\n  components: {\n    vSelect: atui.Select,\n    vOption: atui.Select.Option\n  },\n  data() {\n    return {\n      single: ''\n    }\n  },\n  methods: {\n    onSlectChange (obj) {\n      this.single = obj.value;\n    }\n  }\n})"}}});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvU2VsZWN0L2RlbW8vYmFzaWMubWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VsZWN0L2RlbW8vYmFzaWMubWQiXSwibmFtZXMiOlsid2VicGFja0pzb25wIiwiNDI1IiwibW9kdWxlIiwiZXhwb3J0cyIsImNvbnRlbnQiLCJ6aC1DTiIsImVuLVVTIiwibWV0YSIsIm9yZGVyIiwidGl0bGUiLCJmaWxlbmFtZSIsImlkIiwidG9jIiwiaHJlZiIsImhpZ2hsaWdodGVkQ29kZSIsImxhbmciLCJoaWdobGlnaHRlZCIsInByZXZpZXciLCJ2dWVTY3JpcHQiXSwibWFwcGluZ3MiOiJBQUFBQSxjQUFjLEdBQUcsTUFFWEMsSUFDQSxTQUFTQyxFQUFRQyxHQUV0QixZQ0xERCxHQUFPQyxTQUNMQyxTQUNFQyxXQUNBQyxZQUVGQyxNQUNFQyxNQUFTLEVBQ1RDLE9BQ0VKLFFBQVMsZUFDVEMsUUFBUyxRQUVYSSxTQUFZLHNDQUNaQyxHQUFNLG9DQUVSQyxLQUNFLE1BRUUsTUFFRSxLQUVFQyxLQUFRLFVBRVYsV0FJRixNQUVFLEtBRUVBLEtBQVEsVUFFVixXQUlOQyxpQkFDRSxPQUVFQyxLQUFRLE1BQ1JDLFlBQWUseW5IQUduQkMsUUFBVyxxVUFDWEMsVUFBYSIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9TZWxlY3QvZGVtby9iYXNpYy5tZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIndlYnBhY2tKc29ucChbNTcsMTYxXSx7XG5cbi8qKiovIDQyNTpcbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSB7XG5cdCAgXCJjb250ZW50XCI6IHtcblx0ICAgIFwiemgtQ05cIjogW10sXG5cdCAgICBcImVuLVVTXCI6IFtdXG5cdCAgfSxcblx0ICBcIm1ldGFcIjoge1xuXHQgICAgXCJvcmRlclwiOiAwLFxuXHQgICAgXCJ0aXRsZVwiOiB7XG5cdCAgICAgIFwiemgtQ05cIjogXCLln7rmnKxcIixcblx0ICAgICAgXCJlbi1VU1wiOiBcIlR5cGVcIlxuXHQgICAgfSxcblx0ICAgIFwiZmlsZW5hbWVcIjogXCJzcmMvY29tcG9uZW50cy9TZWxlY3QvZGVtby9iYXNpYy5tZFwiLFxuXHQgICAgXCJpZFwiOiBcInNyYy1jb21wb25lbnRzLVNlbGVjdC1kZW1vLWJhc2ljXCJcblx0ICB9LFxuXHQgIFwidG9jXCI6IFtcInVsXCIsIFtcImxpXCIsIFtcImFcIiwge1xuXHQgICAgXCJocmVmXCI6IFwiI3poLUNOXCJcblx0ICB9LCBcInpoLUNOXCJdXSwgW1wibGlcIiwgW1wiYVwiLCB7XG5cdCAgICBcImhyZWZcIjogXCIjZW4tVVNcIlxuXHQgIH0sIFwiZW4tVVNcIl1dXSxcblx0ICBcImhpZ2hsaWdodGVkQ29kZVwiOiBbXCJwcmVcIiwge1xuXHQgICAgXCJsYW5nXCI6IFwianN4XCIsXG5cdCAgICBcImhpZ2hsaWdodGVkXCI6IFwiPHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4mbHQ7PC9zcGFuPnYtc2VsZWN0PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci1uYW1lXFxcIiA+dmFsdWU8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItdmFsdWVcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID49PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPlxcXCI8L3NwYW4+Q2hlcnJ5PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XFxcIjwvc3Bhbj48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLW5hbWVcXFwiID53aWR0aDwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci12YWx1ZVxcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPj08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XFxcIjwvc3Bhbj4yMDBweDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPlxcXCI8L3NwYW4+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci1uYW1lXFxcIiA+QGNoYW5nZTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci12YWx1ZVxcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPj08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XFxcIjwvc3Bhbj5vblNsZWN0Q2hhbmdlPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XFxcIjwvc3Bhbj48L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Pjwvc3Bhbj48L3NwYW4+XFxuICA8c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiZsdDs8L3NwYW4+di1vcHRpb248L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLW5hbWVcXFwiID52YWx1ZTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci12YWx1ZVxcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPj08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XFxcIjwvc3Bhbj5BcHBsZTxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPlxcXCI8L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPj48L3NwYW4+PC9zcGFuPuiLueaenDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Jmx0Oy88L3NwYW4+di1vcHRpb248L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Pjwvc3Bhbj48L3NwYW4+XFxuICA8c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiZsdDs8L3NwYW4+di1vcHRpb248L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLW5hbWVcXFwiID52YWx1ZTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci12YWx1ZVxcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPj08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XFxcIjwvc3Bhbj5CYW5hbmE8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5cXFwiPC9zcGFuPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItbmFtZVxcXCIgPmRpc2FibGVkPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPj48L3NwYW4+PC9zcGFuPkJhbmFuYTxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Jmx0Oy88L3NwYW4+di1vcHRpb248L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Pjwvc3Bhbj48L3NwYW4+XFxuICA8c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiZsdDs8L3NwYW4+di1vcHRpb248L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLW5hbWVcXFwiID52YWx1ZTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci12YWx1ZVxcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPj08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XFxcIjwvc3Bhbj5DaGVycnk8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5cXFwiPC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4+PC9zcGFuPjwvc3Bhbj5DaGVycnk8c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiZsdDsvPC9zcGFuPnYtb3B0aW9uPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPj48L3NwYW4+PC9zcGFuPlxcbiAgPHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4mbHQ7PC9zcGFuPnYtb3B0aW9uPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci1uYW1lXFxcIiA+dmFsdWU8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItdmFsdWVcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID49PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPlxcXCI8L3NwYW4+T3JhbmdlPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XFxcIjwvc3Bhbj48L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Pjwvc3Bhbj48L3NwYW4+T3JhbmdlVGV4dDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Jmx0Oy88L3NwYW4+di1vcHRpb248L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Pjwvc3Bhbj48L3NwYW4+XFxuICA8c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiZsdDs8L3NwYW4+di1vcHRpb248L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLW5hbWVcXFwiID52YWx1ZTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci12YWx1ZVxcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPj08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XFxcIjwvc3Bhbj5HcmFwZTxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPlxcXCI8L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPj48L3NwYW4+PC9zcGFuPkdyYXBlPHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4mbHQ7Lzwvc3Bhbj52LW9wdGlvbjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4+PC9zcGFuPjwvc3Bhbj5cXG48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiZsdDsvPC9zcGFuPnYtc2VsZWN0PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPj48L3NwYW4+PC9zcGFuPlwiXG5cdCAgfV0sXG5cdCAgXCJwcmV2aWV3XCI6IFwiPHYtc2VsZWN0IHZhbHVlPVxcXCJDaGVycnlcXFwiIHdpZHRoPVxcXCIyMDBweFxcXCIgQGNoYW5nZT1cXFwib25TbGVjdENoYW5nZVxcXCI+XFxuICA8di1vcHRpb24gdmFsdWU9XFxcIkFwcGxlXFxcIj7oi7nmnpw8L3Ytb3B0aW9uPlxcbiAgPHYtb3B0aW9uIHZhbHVlPVxcXCJCYW5hbmFcXFwiIGRpc2FibGVkPkJhbmFuYTwvdi1vcHRpb24+XFxuICA8di1vcHRpb24gdmFsdWU9XFxcIkNoZXJyeVxcXCI+Q2hlcnJ5PC92LW9wdGlvbj5cXG4gIDx2LW9wdGlvbiB2YWx1ZT1cXFwiT3JhbmdlXFxcIj5PcmFuZ2VUZXh0PC92LW9wdGlvbj5cXG4gIDx2LW9wdGlvbiB2YWx1ZT1cXFwiR3JhcGVcXFwiPkdyYXBlPC92LW9wdGlvbj5cXG48L3Ytc2VsZWN0PlwiLFxuXHQgIFwidnVlU2NyaXB0XCI6IFwibmV3IFZ1ZSh7XFxuICBlbDogJ2JvZHknLFxcbiAgY29tcG9uZW50czoge1xcbiAgICB2U2VsZWN0OiBhdHVpLlNlbGVjdCxcXG4gICAgdk9wdGlvbjogYXR1aS5TZWxlY3QuT3B0aW9uXFxuICB9LFxcbiAgZGF0YSgpIHtcXG4gICAgcmV0dXJuIHtcXG4gICAgICBzaW5nbGU6ICcnXFxuICAgIH1cXG4gIH0sXFxuICBtZXRob2RzOiB7XFxuICAgIG9uU2xlY3RDaGFuZ2UgKG9iaikge1xcbiAgICAgIHRoaXMuc2luZ2xlID0gb2JqLnZhbHVlO1xcbiAgICB9XFxuICB9XFxufSlcIlxuXHR9O1xuXG4vKioqLyB9XG5cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1NlbGVjdC9kZW1vL2Jhc2ljLm1kLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiY29udGVudFwiOiB7XG4gICAgXCJ6aC1DTlwiOiBbXSxcbiAgICBcImVuLVVTXCI6IFtdXG4gIH0sXG4gIFwibWV0YVwiOiB7XG4gICAgXCJvcmRlclwiOiAwLFxuICAgIFwidGl0bGVcIjoge1xuICAgICAgXCJ6aC1DTlwiOiBcIuWfuuacrFwiLFxuICAgICAgXCJlbi1VU1wiOiBcIlR5cGVcIlxuICAgIH0sXG4gICAgXCJmaWxlbmFtZVwiOiBcInNyYy9jb21wb25lbnRzL1NlbGVjdC9kZW1vL2Jhc2ljLm1kXCIsXG4gICAgXCJpZFwiOiBcInNyYy1jb21wb25lbnRzLVNlbGVjdC1kZW1vLWJhc2ljXCJcbiAgfSxcbiAgXCJ0b2NcIjogW1xuICAgIFwidWxcIixcbiAgICBbXG4gICAgICBcImxpXCIsXG4gICAgICBbXG4gICAgICAgIFwiYVwiLFxuICAgICAgICB7XG4gICAgICAgICAgXCJocmVmXCI6IFwiI3poLUNOXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJ6aC1DTlwiXG4gICAgICBdXG4gICAgXSxcbiAgICBbXG4gICAgICBcImxpXCIsXG4gICAgICBbXG4gICAgICAgIFwiYVwiLFxuICAgICAgICB7XG4gICAgICAgICAgXCJocmVmXCI6IFwiI2VuLVVTXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJlbi1VU1wiXG4gICAgICBdXG4gICAgXVxuICBdLFxuICBcImhpZ2hsaWdodGVkQ29kZVwiOiBbXG4gICAgXCJwcmVcIixcbiAgICB7XG4gICAgICBcImxhbmdcIjogXCJqc3hcIixcbiAgICAgIFwiaGlnaGxpZ2h0ZWRcIjogXCI8c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiZsdDs8L3NwYW4+di1zZWxlY3Q8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLW5hbWVcXFwiID52YWx1ZTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci12YWx1ZVxcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPj08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XFxcIjwvc3Bhbj5DaGVycnk8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5cXFwiPC9zcGFuPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItbmFtZVxcXCIgPndpZHRoPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLXZhbHVlXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+PTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5cXFwiPC9zcGFuPjIwMHB4PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XFxcIjwvc3Bhbj48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLW5hbWVcXFwiID5AY2hhbmdlPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLXZhbHVlXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+PTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5cXFwiPC9zcGFuPm9uU2xlY3RDaGFuZ2U8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5cXFwiPC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4+PC9zcGFuPjwvc3Bhbj5cXG4gIDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Jmx0Ozwvc3Bhbj52LW9wdGlvbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItbmFtZVxcXCIgPnZhbHVlPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLXZhbHVlXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+PTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5cXFwiPC9zcGFuPkFwcGxlPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XFxcIjwvc3Bhbj48L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Pjwvc3Bhbj48L3NwYW4+6Iu55p6cPHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4mbHQ7Lzwvc3Bhbj52LW9wdGlvbjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4+PC9zcGFuPjwvc3Bhbj5cXG4gIDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Jmx0Ozwvc3Bhbj52LW9wdGlvbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItbmFtZVxcXCIgPnZhbHVlPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLXZhbHVlXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+PTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5cXFwiPC9zcGFuPkJhbmFuYTxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPlxcXCI8L3NwYW4+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci1uYW1lXFxcIiA+ZGlzYWJsZWQ8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Pjwvc3Bhbj48L3NwYW4+QmFuYW5hPHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4mbHQ7Lzwvc3Bhbj52LW9wdGlvbjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4+PC9zcGFuPjwvc3Bhbj5cXG4gIDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Jmx0Ozwvc3Bhbj52LW9wdGlvbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItbmFtZVxcXCIgPnZhbHVlPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLXZhbHVlXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+PTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5cXFwiPC9zcGFuPkNoZXJyeTxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPlxcXCI8L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPj48L3NwYW4+PC9zcGFuPkNoZXJyeTxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Jmx0Oy88L3NwYW4+di1vcHRpb248L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Pjwvc3Bhbj48L3NwYW4+XFxuICA8c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiZsdDs8L3NwYW4+di1vcHRpb248L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLW5hbWVcXFwiID52YWx1ZTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci12YWx1ZVxcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPj08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XFxcIjwvc3Bhbj5PcmFuZ2U8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5cXFwiPC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4+PC9zcGFuPjwvc3Bhbj5PcmFuZ2VUZXh0PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4mbHQ7Lzwvc3Bhbj52LW9wdGlvbjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4+PC9zcGFuPjwvc3Bhbj5cXG4gIDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Jmx0Ozwvc3Bhbj52LW9wdGlvbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItbmFtZVxcXCIgPnZhbHVlPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLXZhbHVlXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+PTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5cXFwiPC9zcGFuPkdyYXBlPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XFxcIjwvc3Bhbj48L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Pjwvc3Bhbj48L3NwYW4+R3JhcGU8c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiZsdDsvPC9zcGFuPnYtb3B0aW9uPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPj48L3NwYW4+PC9zcGFuPlxcbjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Jmx0Oy88L3NwYW4+di1zZWxlY3Q8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Pjwvc3Bhbj48L3NwYW4+XCJcbiAgICB9XG4gIF0sXG4gIFwicHJldmlld1wiOiBcIjx2LXNlbGVjdCB2YWx1ZT1cXFwiQ2hlcnJ5XFxcIiB3aWR0aD1cXFwiMjAwcHhcXFwiIEBjaGFuZ2U9XFxcIm9uU2xlY3RDaGFuZ2VcXFwiPlxcbiAgPHYtb3B0aW9uIHZhbHVlPVxcXCJBcHBsZVxcXCI+6Iu55p6cPC92LW9wdGlvbj5cXG4gIDx2LW9wdGlvbiB2YWx1ZT1cXFwiQmFuYW5hXFxcIiBkaXNhYmxlZD5CYW5hbmE8L3Ytb3B0aW9uPlxcbiAgPHYtb3B0aW9uIHZhbHVlPVxcXCJDaGVycnlcXFwiPkNoZXJyeTwvdi1vcHRpb24+XFxuICA8di1vcHRpb24gdmFsdWU9XFxcIk9yYW5nZVxcXCI+T3JhbmdlVGV4dDwvdi1vcHRpb24+XFxuICA8di1vcHRpb24gdmFsdWU9XFxcIkdyYXBlXFxcIj5HcmFwZTwvdi1vcHRpb24+XFxuPC92LXNlbGVjdD5cIixcbiAgXCJ2dWVTY3JpcHRcIjogXCJuZXcgVnVlKHtcXG4gIGVsOiAnYm9keScsXFxuICBjb21wb25lbnRzOiB7XFxuICAgIHZTZWxlY3Q6IGF0dWkuU2VsZWN0LFxcbiAgICB2T3B0aW9uOiBhdHVpLlNlbGVjdC5PcHRpb25cXG4gIH0sXFxuICBkYXRhKCkge1xcbiAgICByZXR1cm4ge1xcbiAgICAgIHNpbmdsZTogJydcXG4gICAgfVxcbiAgfSxcXG4gIG1ldGhvZHM6IHtcXG4gICAgb25TbGVjdENoYW5nZSAob2JqKSB7XFxuICAgICAgdGhpcy5zaW5nbGUgPSBvYmoudmFsdWU7XFxuICAgIH1cXG4gIH1cXG59KVwiXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvU2VsZWN0L2RlbW8vYmFzaWMubWRcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9