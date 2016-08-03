webpackJsonp([38,161],{444:function(n,a){"use strict";n.exports={content:{"zh-CN":[],"en-US":[]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Type"},filename:"src/components/Table/demo/basic.md",id:"src-components-Table-demo-basic"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>grid</span> <span class="token attr-name" >:data-source</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>gridData<span class="token punctuation" >"</span></span> <span class="token attr-name" >:columns</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>gridColumns<span class="token punctuation" >"</span></span> <span class="token attr-name" >row-key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>key<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>grid</span><span class="token punctuation" >></span></span>'}],preview:'<grid :data-source="gridData" :columns="gridColumns" row-key="key"></grid>',vueScript:"var columns = [{\n  title: '\u59d3\u540d',\n  dataIndex: 'name',\n  width:150\n}, {\n  title: '\u5e74\u9f84',\n  dataIndex: 'age',\n  width:250\n}, {\n  title: '\u5730\u5740',\n  dataIndex: 'address',\n  filterMultiple: false,\n  width:250\n\n},{\n    title: '\u64cd\u4f5c',\n    key: 'operation',\n    render: function(text, record) {\n      if(record) {\n        return '<icon type=\"info\"></icon><a href=\"'+ record.key+'.html\" target=\"_blank\">\u8be6\u60c5</a>'\n      }\n    }\n  }\n];\n\nvar data = [{\n  key: '1',\n  name: '\u80e1\u658c',\n  age: 32,\n  address: '\u5357\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7',\n}, {\n  key: '2',\n  name: '\u80e1\u5f66\u7956',\n  age: 42,\n  address: '\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed12\u53f7',\n}, {\n  key: '3',\n  name: '\u674e\u5927\u5634',\n  age: 32,\n  address: '\u5357\u6e56\u533a\u6e56\u5e95\u516c\u56ed123\u53f7',\n}, {\n  key: '4',\n  name: '\u674e\u79c0\u83b2\u5927\u5634\u54e5',\n  age: 32,\n  address: '\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed123\u53f7',\n},\n{\n  key: '5',\n  name: '\u5218\u5fb7\u534e',\n  age: 54,\n  address: '\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed999\u53f7',\n},\n{\n  key: '6',\n  name: '\u6d2a\u91d1\u5b9d',\n  age: 66,\n  address: '\u9999\u6e2f\u5f25\u6566\u90531',\n}];\n\n\n\nnew Vue({\n  el: 'body',\n  components: {\n    grid: atui.Table,\n    icon: atui.Icon,\n    row: atui.Layout.Row\n  },\n  data () {\n    return {\n      size:'default',\n      fixedHeader:false,\n      loading:false,\n      gridData:data,\n      gridColumns: columns,\n      rowSelection:rowSelection\n    }\n  }\n})"}}});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVGFibGUvZGVtby9iYXNpYy5tZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UYWJsZS9kZW1vL2Jhc2ljLm1kIl0sIm5hbWVzIjpbIndlYnBhY2tKc29ucCIsIjQ0NCIsIm1vZHVsZSIsImV4cG9ydHMiLCJjb250ZW50IiwiemgtQ04iLCJlbi1VUyIsIm1ldGEiLCJvcmRlciIsInRpdGxlIiwiZmlsZW5hbWUiLCJpZCIsInRvYyIsImhyZWYiLCJoaWdobGlnaHRlZENvZGUiLCJsYW5nIiwiaGlnaGxpZ2h0ZWQiLCJwcmV2aWV3IiwidnVlU2NyaXB0Il0sIm1hcHBpbmdzIjoiQUFBQUEsY0FBYyxHQUFHLE1BRVhDLElBQ0EsU0FBU0MsRUFBUUMsR0FFdEIsWUNMREQsR0FBT0MsU0FDTEMsU0FDRUMsV0FDQUMsWUFFRkMsTUFDRUMsTUFBUyxFQUNUQyxPQUNFSixRQUFTLGVBQ1RDLFFBQVMsUUFFWEksU0FBWSxxQ0FDWkMsR0FBTSxtQ0FFUkMsS0FDRSxNQUVFLE1BRUUsS0FFRUMsS0FBUSxVQUVWLFdBSUYsTUFFRSxLQUVFQSxLQUFRLFVBRVYsV0FJTkMsaUJBQ0UsT0FFRUMsS0FBUSxNQUNSQyxZQUFlLG84QkFHbkJDLFFBQVcsNkVBQ1hDLFVBQWEiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvVGFibGUvZGVtby9iYXNpYy5tZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIndlYnBhY2tKc29ucChbMzgsMTYxXSx7XG5cbi8qKiovIDQ0NDpcbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSB7XG5cdCAgXCJjb250ZW50XCI6IHtcblx0ICAgIFwiemgtQ05cIjogW10sXG5cdCAgICBcImVuLVVTXCI6IFtdXG5cdCAgfSxcblx0ICBcIm1ldGFcIjoge1xuXHQgICAgXCJvcmRlclwiOiAwLFxuXHQgICAgXCJ0aXRsZVwiOiB7XG5cdCAgICAgIFwiemgtQ05cIjogXCLln7rmnKxcIixcblx0ICAgICAgXCJlbi1VU1wiOiBcIlR5cGVcIlxuXHQgICAgfSxcblx0ICAgIFwiZmlsZW5hbWVcIjogXCJzcmMvY29tcG9uZW50cy9UYWJsZS9kZW1vL2Jhc2ljLm1kXCIsXG5cdCAgICBcImlkXCI6IFwic3JjLWNvbXBvbmVudHMtVGFibGUtZGVtby1iYXNpY1wiXG5cdCAgfSxcblx0ICBcInRvY1wiOiBbXCJ1bFwiLCBbXCJsaVwiLCBbXCJhXCIsIHtcblx0ICAgIFwiaHJlZlwiOiBcIiN6aC1DTlwiXG5cdCAgfSwgXCJ6aC1DTlwiXV0sIFtcImxpXCIsIFtcImFcIiwge1xuXHQgICAgXCJocmVmXCI6IFwiI2VuLVVTXCJcblx0ICB9LCBcImVuLVVTXCJdXV0sXG5cdCAgXCJoaWdobGlnaHRlZENvZGVcIjogW1wicHJlXCIsIHtcblx0ICAgIFwibGFuZ1wiOiBcImpzeFwiLFxuXHQgICAgXCJoaWdobGlnaHRlZFwiOiBcIjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Jmx0Ozwvc3Bhbj5ncmlkPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci1uYW1lXFxcIiA+OmRhdGEtc291cmNlPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLXZhbHVlXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+PTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5cXFwiPC9zcGFuPmdyaWREYXRhPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XFxcIjwvc3Bhbj48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLW5hbWVcXFwiID46Y29sdW1uczwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci12YWx1ZVxcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPj08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XFxcIjwvc3Bhbj5ncmlkQ29sdW1uczxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPlxcXCI8L3NwYW4+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci1uYW1lXFxcIiA+cm93LWtleTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci12YWx1ZVxcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPj08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XFxcIjwvc3Bhbj5rZXk8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5cXFwiPC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4+PC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiZsdDsvPC9zcGFuPmdyaWQ8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Pjwvc3Bhbj48L3NwYW4+XCJcblx0ICB9XSxcblx0ICBcInByZXZpZXdcIjogXCI8Z3JpZCA6ZGF0YS1zb3VyY2U9XFxcImdyaWREYXRhXFxcIiA6Y29sdW1ucz1cXFwiZ3JpZENvbHVtbnNcXFwiIHJvdy1rZXk9XFxcImtleVxcXCI+PC9ncmlkPlwiLFxuXHQgIFwidnVlU2NyaXB0XCI6IFwidmFyIGNvbHVtbnMgPSBbe1xcbiAgdGl0bGU6ICflp5PlkI0nLFxcbiAgZGF0YUluZGV4OiAnbmFtZScsXFxuICB3aWR0aDoxNTBcXG59LCB7XFxuICB0aXRsZTogJ+W5tOm+hCcsXFxuICBkYXRhSW5kZXg6ICdhZ2UnLFxcbiAgd2lkdGg6MjUwXFxufSwge1xcbiAgdGl0bGU6ICflnLDlnYAnLFxcbiAgZGF0YUluZGV4OiAnYWRkcmVzcycsXFxuICBmaWx0ZXJNdWx0aXBsZTogZmFsc2UsXFxuICB3aWR0aDoyNTBcXG5cXG59LHtcXG4gICAgdGl0bGU6ICfmk43kvZwnLFxcbiAgICBrZXk6ICdvcGVyYXRpb24nLFxcbiAgICByZW5kZXI6IGZ1bmN0aW9uKHRleHQsIHJlY29yZCkge1xcbiAgICAgIGlmKHJlY29yZCkge1xcbiAgICAgICAgcmV0dXJuICc8aWNvbiB0eXBlPVxcXCJpbmZvXFxcIj48L2ljb24+PGEgaHJlZj1cXFwiJysgcmVjb3JkLmtleSsnLmh0bWxcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj7or6bmg4U8L2E+J1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbl07XFxuXFxudmFyIGRhdGEgPSBbe1xcbiAga2V5OiAnMScsXFxuICBuYW1lOiAn6IOh5paMJyxcXG4gIGFnZTogMzIsXFxuICBhZGRyZXNzOiAn5Y2X5rmW5Yy65rmW5bqV5YWs5ZutMeWPtycsXFxufSwge1xcbiAga2V5OiAnMicsXFxuICBuYW1lOiAn6IOh5b2m56WWJyxcXG4gIGFnZTogNDIsXFxuICBhZGRyZXNzOiAn6KW/5rmW5Yy65rmW5bqV5YWs5ZutMTLlj7cnLFxcbn0sIHtcXG4gIGtleTogJzMnLFxcbiAgbmFtZTogJ+adjuWkp+WYtCcsXFxuICBhZ2U6IDMyLFxcbiAgYWRkcmVzczogJ+WNl+a5luWMuua5luW6leWFrOWbrTEyM+WPtycsXFxufSwge1xcbiAga2V5OiAnNCcsXFxuICBuYW1lOiAn5p2O56eA6I6y5aSn5Zi05ZOlJyxcXG4gIGFnZTogMzIsXFxuICBhZGRyZXNzOiAn6KW/5rmW5Yy65rmW5bqV5YWs5ZutMTIz5Y+3JyxcXG59LFxcbntcXG4gIGtleTogJzUnLFxcbiAgbmFtZTogJ+WImOW+t+WNjicsXFxuICBhZ2U6IDU0LFxcbiAgYWRkcmVzczogJ+ilv+a5luWMuua5luW6leWFrOWbrTk5OeWPtycsXFxufSxcXG57XFxuICBrZXk6ICc2JyxcXG4gIG5hbWU6ICfmtKrph5Hlrp0nLFxcbiAgYWdlOiA2NixcXG4gIGFkZHJlc3M6ICfpppnmuK/lvKXmlabpgZMxJyxcXG59XTtcXG5cXG5cXG5cXG5uZXcgVnVlKHtcXG4gIGVsOiAnYm9keScsXFxuICBjb21wb25lbnRzOiB7XFxuICAgIGdyaWQ6IGF0dWkuVGFibGUsXFxuICAgIGljb246IGF0dWkuSWNvbixcXG4gICAgcm93OiBhdHVpLkxheW91dC5Sb3dcXG4gIH0sXFxuICBkYXRhICgpIHtcXG4gICAgcmV0dXJuIHtcXG4gICAgICBzaXplOidkZWZhdWx0JyxcXG4gICAgICBmaXhlZEhlYWRlcjpmYWxzZSxcXG4gICAgICBsb2FkaW5nOmZhbHNlLFxcbiAgICAgIGdyaWREYXRhOmRhdGEsXFxuICAgICAgZ3JpZENvbHVtbnM6IGNvbHVtbnMsXFxuICAgICAgcm93U2VsZWN0aW9uOnJvd1NlbGVjdGlvblxcbiAgICB9XFxuICB9XFxufSlcIlxuXHR9O1xuXG4vKioqLyB9XG5cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1RhYmxlL2RlbW8vYmFzaWMubWQuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJjb250ZW50XCI6IHtcbiAgICBcInpoLUNOXCI6IFtdLFxuICAgIFwiZW4tVVNcIjogW11cbiAgfSxcbiAgXCJtZXRhXCI6IHtcbiAgICBcIm9yZGVyXCI6IDAsXG4gICAgXCJ0aXRsZVwiOiB7XG4gICAgICBcInpoLUNOXCI6IFwi5Z+65pysXCIsXG4gICAgICBcImVuLVVTXCI6IFwiVHlwZVwiXG4gICAgfSxcbiAgICBcImZpbGVuYW1lXCI6IFwic3JjL2NvbXBvbmVudHMvVGFibGUvZGVtby9iYXNpYy5tZFwiLFxuICAgIFwiaWRcIjogXCJzcmMtY29tcG9uZW50cy1UYWJsZS1kZW1vLWJhc2ljXCJcbiAgfSxcbiAgXCJ0b2NcIjogW1xuICAgIFwidWxcIixcbiAgICBbXG4gICAgICBcImxpXCIsXG4gICAgICBbXG4gICAgICAgIFwiYVwiLFxuICAgICAgICB7XG4gICAgICAgICAgXCJocmVmXCI6IFwiI3poLUNOXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJ6aC1DTlwiXG4gICAgICBdXG4gICAgXSxcbiAgICBbXG4gICAgICBcImxpXCIsXG4gICAgICBbXG4gICAgICAgIFwiYVwiLFxuICAgICAgICB7XG4gICAgICAgICAgXCJocmVmXCI6IFwiI2VuLVVTXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJlbi1VU1wiXG4gICAgICBdXG4gICAgXVxuICBdLFxuICBcImhpZ2hsaWdodGVkQ29kZVwiOiBbXG4gICAgXCJwcmVcIixcbiAgICB7XG4gICAgICBcImxhbmdcIjogXCJqc3hcIixcbiAgICAgIFwiaGlnaGxpZ2h0ZWRcIjogXCI8c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiZsdDs8L3NwYW4+Z3JpZDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItbmFtZVxcXCIgPjpkYXRhLXNvdXJjZTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci12YWx1ZVxcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPj08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XFxcIjwvc3Bhbj5ncmlkRGF0YTxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPlxcXCI8L3NwYW4+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci1uYW1lXFxcIiA+OmNvbHVtbnM8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItdmFsdWVcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID49PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPlxcXCI8L3NwYW4+Z3JpZENvbHVtbnM8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5cXFwiPC9zcGFuPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItbmFtZVxcXCIgPnJvdy1rZXk8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItdmFsdWVcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID49PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPlxcXCI8L3NwYW4+a2V5PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XFxcIjwvc3Bhbj48L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Pjwvc3Bhbj48L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4mbHQ7Lzwvc3Bhbj5ncmlkPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPj48L3NwYW4+PC9zcGFuPlwiXG4gICAgfVxuICBdLFxuICBcInByZXZpZXdcIjogXCI8Z3JpZCA6ZGF0YS1zb3VyY2U9XFxcImdyaWREYXRhXFxcIiA6Y29sdW1ucz1cXFwiZ3JpZENvbHVtbnNcXFwiIHJvdy1rZXk9XFxcImtleVxcXCI+PC9ncmlkPlwiLFxuICBcInZ1ZVNjcmlwdFwiOiBcInZhciBjb2x1bW5zID0gW3tcXG4gIHRpdGxlOiAn5aeT5ZCNJyxcXG4gIGRhdGFJbmRleDogJ25hbWUnLFxcbiAgd2lkdGg6MTUwXFxufSwge1xcbiAgdGl0bGU6ICflubTpvoQnLFxcbiAgZGF0YUluZGV4OiAnYWdlJyxcXG4gIHdpZHRoOjI1MFxcbn0sIHtcXG4gIHRpdGxlOiAn5Zyw5Z2AJyxcXG4gIGRhdGFJbmRleDogJ2FkZHJlc3MnLFxcbiAgZmlsdGVyTXVsdGlwbGU6IGZhbHNlLFxcbiAgd2lkdGg6MjUwXFxuXFxufSx7XFxuICAgIHRpdGxlOiAn5pON5L2cJyxcXG4gICAga2V5OiAnb3BlcmF0aW9uJyxcXG4gICAgcmVuZGVyOiBmdW5jdGlvbih0ZXh0LCByZWNvcmQpIHtcXG4gICAgICBpZihyZWNvcmQpIHtcXG4gICAgICAgIHJldHVybiAnPGljb24gdHlwZT1cXFwiaW5mb1xcXCI+PC9pY29uPjxhIGhyZWY9XFxcIicrIHJlY29yZC5rZXkrJy5odG1sXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+6K+m5oOFPC9hPidcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5dO1xcblxcbnZhciBkYXRhID0gW3tcXG4gIGtleTogJzEnLFxcbiAgbmFtZTogJ+iDoeaWjCcsXFxuICBhZ2U6IDMyLFxcbiAgYWRkcmVzczogJ+WNl+a5luWMuua5luW6leWFrOWbrTHlj7cnLFxcbn0sIHtcXG4gIGtleTogJzInLFxcbiAgbmFtZTogJ+iDoeW9puellicsXFxuICBhZ2U6IDQyLFxcbiAgYWRkcmVzczogJ+ilv+a5luWMuua5luW6leWFrOWbrTEy5Y+3JyxcXG59LCB7XFxuICBrZXk6ICczJyxcXG4gIG5hbWU6ICfmnY7lpKflmLQnLFxcbiAgYWdlOiAzMixcXG4gIGFkZHJlc3M6ICfljZfmuZbljLrmuZblupXlhazlm60xMjPlj7cnLFxcbn0sIHtcXG4gIGtleTogJzQnLFxcbiAgbmFtZTogJ+adjuengOiOsuWkp+WYtOWTpScsXFxuICBhZ2U6IDMyLFxcbiAgYWRkcmVzczogJ+ilv+a5luWMuua5luW6leWFrOWbrTEyM+WPtycsXFxufSxcXG57XFxuICBrZXk6ICc1JyxcXG4gIG5hbWU6ICfliJjlvrfljY4nLFxcbiAgYWdlOiA1NCxcXG4gIGFkZHJlc3M6ICfopb/muZbljLrmuZblupXlhazlm605OTnlj7cnLFxcbn0sXFxue1xcbiAga2V5OiAnNicsXFxuICBuYW1lOiAn5rSq6YeR5a6dJyxcXG4gIGFnZTogNjYsXFxuICBhZGRyZXNzOiAn6aaZ5riv5byl5pWm6YGTMScsXFxufV07XFxuXFxuXFxuXFxubmV3IFZ1ZSh7XFxuICBlbDogJ2JvZHknLFxcbiAgY29tcG9uZW50czoge1xcbiAgICBncmlkOiBhdHVpLlRhYmxlLFxcbiAgICBpY29uOiBhdHVpLkljb24sXFxuICAgIHJvdzogYXR1aS5MYXlvdXQuUm93XFxuICB9LFxcbiAgZGF0YSAoKSB7XFxuICAgIHJldHVybiB7XFxuICAgICAgc2l6ZTonZGVmYXVsdCcsXFxuICAgICAgZml4ZWRIZWFkZXI6ZmFsc2UsXFxuICAgICAgbG9hZGluZzpmYWxzZSxcXG4gICAgICBncmlkRGF0YTpkYXRhLFxcbiAgICAgIGdyaWRDb2x1bW5zOiBjb2x1bW5zLFxcbiAgICAgIHJvd1NlbGVjdGlvbjpyb3dTZWxlY3Rpb25cXG4gICAgfVxcbiAgfVxcbn0pXCJcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9UYWJsZS9kZW1vL2Jhc2ljLm1kXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==