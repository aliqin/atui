webpackJsonp([35,163],{449:function(n,s){"use strict";n.exports={content:{"zh-CN":[["p","row-selection\u5c5e\u6027\u53ef\u589e\u52a0\u9009\u62e9\u529f\u80fd"],["pre",{lang:"js",highlighted:'<span class="token keyword" >const</span> rowSelection <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n  getCheckboxProps <span class="token punctuation" >(</span>record<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      disabled<span class="token punctuation" >:</span> record<span class="token punctuation" >.</span>name <span class="token operator" >===</span> <span class="token string" >\'\u80e1\u5f66\u7956\'</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  onChange <span class="token punctuation" >(</span>selectedRowKeys<span class="token punctuation" >,</span> selectedRows<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'rowSelection.onChange\'</span><span class="token punctuation" >,</span>selectedRowKeys<span class="token punctuation" >,</span> selectedRows<span class="token punctuation" >)</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  onSelect <span class="token punctuation" >(</span>record<span class="token punctuation" >,</span> selected<span class="token punctuation" >,</span> selectedRows<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'rowSelection.onSelect\'</span><span class="token punctuation" >,</span>record<span class="token punctuation" >,</span> selected<span class="token punctuation" >,</span> selectedRows<span class="token punctuation" >)</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  onSelectAll <span class="token punctuation" >(</span>selected<span class="token punctuation" >,</span> selectedRows<span class="token punctuation" >,</span> changeRows<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'rowSelection.onSelectAll\'</span><span class="token punctuation" >,</span>selected<span class="token punctuation" >,</span> selectedRows<span class="token punctuation" >,</span> changeRows<span class="token punctuation" >)</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>'},["code","const rowSelection = {\n  getCheckboxProps (record) {\n    return {\n      disabled: record.name === '\u80e1\u5f66\u7956'\n    }\n  },\n  onChange (selectedRowKeys, selectedRows) {\n    console.log('rowSelection.onChange',selectedRowKeys, selectedRows)\n  },\n  onSelect (record, selected, selectedRows) {\n    console.log('rowSelection.onSelect',record, selected, selectedRows)\n  },\n  onSelectAll (selected, selectedRows, changeRows) {\n    console.log('rowSelection.onSelectAll',selected, selectedRows, changeRows)\n  }\n}"]]],"en-US":[]},meta:{order:1,title:{"zh-CN":"\u53ef\u9009\u62e9","en-US":"Type"},filename:"src/components/Table/demo/row-selection.md",id:"src-components-Table-demo-row-selection"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>v-table</span> <span class="token attr-name" >:data-source</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>gridData<span class="token punctuation" >"</span></span> <span class="token attr-name" >:columns</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>gridColumns<span class="token punctuation" >"</span></span> <span class="token attr-name" >:row-selection</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>rowSelection<span class="token punctuation" >"</span></span> <span class="token attr-name" >row-key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>key<span class="token punctuation" >"</span></span> <span class="token attr-name" >:loading</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>loading<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>v-table</span><span class="token punctuation" >></span></span>'}],preview:'<v-table :data-source="gridData" :columns="gridColumns" :row-selection="rowSelection" row-key="key" :loading="loading"></v-table>',vueScript:"var columns = [{\n  title: '\u59d3\u540d',\n  dataIndex: 'name',\n  filters: [{\n    text: '\u59d3\u674e\u7684\u7684',\n    value: '\u674e',\n  }, {\n    text: '\u59d3\u80e1\u7684',\n    value: '\u80e1',\n  }],\n  sorter:true,\n  width:150\n}, {\n  title: '\u5e74\u9f84',\n  dataIndex: 'age',\n  sorter: function(a, b) { return a.age - b.age },\n  render: function(text, record, index) {\n    return '<input v-model=\"gridData['+ index +'].age\"/>'\n  },\n  width:250\n}, {\n  title: '\u5730\u5740',\n  dataIndex: 'address',\n  filters: [{\n    text: '\u5357\u6e56',\n    value: '\u5357\u6e56',\n  }, {\n    text: '\u897f\u6e56',\n    value: '\u897f\u6e56',\n  }],\n  filterMultiple: false,\n  width:250\n\n},{\n    title: '\u64cd\u4f5c',\n    key: 'operation',\n    render: function(text, record) {\n      if(record) {\n        return '<icon type=\"info\"></icon><a href=\"'+ record.key+'.html\" target=\"_blank\">\u8be6\u60c5</a>'\n      }\n    }\n  }\n];\n\nvar data = [{\n  key: '1',\n  name: '\u80e1\u658c',\n  age: 32,\n  address: '\u5357\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7',\n}, {\n  key: '2',\n  name: '\u80e1\u5f66\u7956',\n  age: 42,\n  address: '\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed12\u53f7',\n}, {\n  key: '3',\n  name: '\u674e\u5927\u5634',\n  age: 32,\n  address: '\u5357\u6e56\u533a\u6e56\u5e95\u516c\u56ed123\u53f7',\n}, {\n  key: '4',\n  name: '\u674e\u79c0\u83b2\u5927\u5634\u54e5',\n  age: 32,\n  address: '\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed123\u53f7',\n},\n{\n  key: '5',\n  name: '\u5218\u5fb7\u534e',\n  age: 54,\n  address: '\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed999\u53f7',\n},\n{\n  key: '6',\n  name: '\u6d2a\u91d1\u5b9d',\n  age: 66,\n  address: '\u9999\u6e2f\u5f25\u6566\u90534',\n}];\n\n// \u914d\u7f6e\u9009\u62e9\u6570\u636e\u7684\u9009\u9879\n\nvar rowSelection = {\n  getCheckboxProps: function(record) {\n    return {\n      disabled: record.name === '\u80e1\u5f66\u7956'    // \u914d\u7f6e\u65e0\u6cd5\u52fe\u9009\u7684\u5217\n    };\n  },\n  onChange: function(selectedRowKeys, selectedRows) {\n    console.log('rowSelection.onChange',selectedRowKeys, selectedRows);\n  },\n  onSelect: function(record, selected, selectedRows) {\n    console.log('rowSelection.onSelect',record, selected, selectedRows);\n  },\n  onSelectAll: function(selected, selectedRows, changeRows) {\n    console.log('rowSelection.onSelectAll',selected, selectedRows, changeRows);\n  }\n};\n\n\nnew Vue({\n  el: 'body',\n  components: {\n    vTable: atui.Table,\n    icon: atui.Icon,\n    row: atui.Layout.Row\n  },\n  data () {\n    return {\n      loading:false,\n      gridData:data,\n      gridColumns: columns,\n      rowSelection: rowSelection\n    }\n  }\n})"}}});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVGFibGUvZGVtby9yb3ctc2VsZWN0aW9uLm1kLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RhYmxlL2RlbW8vcm93LXNlbGVjdGlvbi5tZCJdLCJuYW1lcyI6WyJ3ZWJwYWNrSnNvbnAiLCI0NDkiLCJtb2R1bGUiLCJleHBvcnRzIiwiY29udGVudCIsInpoLUNOIiwibGFuZyIsImhpZ2hsaWdodGVkIiwiZW4tVVMiLCJtZXRhIiwib3JkZXIiLCJ0aXRsZSIsImZpbGVuYW1lIiwiaWQiLCJ0b2MiLCJocmVmIiwiaGlnaGxpZ2h0ZWRDb2RlIiwicHJldmlldyIsInZ1ZVNjcmlwdCJdLCJtYXBwaW5ncyI6IkFBQUFBLGNBQWMsR0FBRyxNQUVYQyxJQUNBLFNBQVNDLEVBQVFDLEdBRXRCLFlDTERELEdBQU9DLFNBQ0xDLFNBQ0VDLFVBRUksSUFDQSx3RUFHQSxPQUVFQyxLQUFRLEtBQ1JDLFlBQWUsZ3dGQUdmLE9BQ0Esb2hCQUlOQyxZQUVGQyxNQUNFQyxNQUFTLEVBQ1RDLE9BQ0VOLFFBQVMscUJBQ1RHLFFBQVMsUUFFWEksU0FBWSw2Q0FDWkMsR0FBTSwyQ0FFUkMsS0FDRSxNQUVFLE1BRUUsS0FFRUMsS0FBUSxVQUVWLFdBSUYsTUFFRSxLQUVFQSxLQUFRLFVBRVYsV0FJTkMsaUJBQ0UsT0FFRVYsS0FBUSxNQUNSQyxZQUFlLHE0Q0FHbkJVLFFBQVcsb0lBQ1hDLFVBQWEiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvVGFibGUvZGVtby9yb3ctc2VsZWN0aW9uLm1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2VicGFja0pzb25wKFszNSwxNjNdLHtcblxuLyoqKi8gNDQ5OlxuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IHtcblx0ICBcImNvbnRlbnRcIjoge1xuXHQgICAgXCJ6aC1DTlwiOiBbW1wicFwiLCBcInJvdy1zZWxlY3Rpb27lsZ7mgKflj6/lop7liqDpgInmi6nlip/og71cIl0sIFtcInByZVwiLCB7XG5cdCAgICAgIFwibGFuZ1wiOiBcImpzXCIsXG5cdCAgICAgIFwiaGlnaGxpZ2h0ZWRcIjogXCI8c3BhbiBjbGFzcz1cXFwidG9rZW4ga2V5d29yZFxcXCIgPmNvbnN0PC9zcGFuPiByb3dTZWxlY3Rpb24gPHNwYW4gY2xhc3M9XFxcInRva2VuIG9wZXJhdG9yXFxcIiA+PTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+ezwvc3Bhbj5cXG4gIGdldENoZWNrYm94UHJvcHMgPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+KDwvc3Bhbj5yZWNvcmQ8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4pPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID57PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwidG9rZW4ga2V5d29yZFxcXCIgPnJldHVybjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+ezwvc3Bhbj5cXG4gICAgICBkaXNhYmxlZDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPjo8L3NwYW4+IHJlY29yZDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPi48L3NwYW4+bmFtZSA8c3BhbiBjbGFzcz1cXFwidG9rZW4gb3BlcmF0b3JcXFwiID49PT08L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBzdHJpbmdcXFwiID4n6IOh5b2m56WWJzwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+fTwvc3Bhbj5cXG4gIDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPn08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+LDwvc3Bhbj5cXG4gIG9uQ2hhbmdlIDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPig8L3NwYW4+c2VsZWN0ZWRSb3dLZXlzPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+LDwvc3Bhbj4gc2VsZWN0ZWRSb3dzPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+KTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+ezwvc3Bhbj5cXG4gICAgY29uc29sZTxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPi48L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIGZ1bmN0aW9uXFxcIiA+bG9nPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPig8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHN0cmluZ1xcXCIgPidyb3dTZWxlY3Rpb24ub25DaGFuZ2UnPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiw8L3NwYW4+c2VsZWN0ZWRSb3dLZXlzPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+LDwvc3Bhbj4gc2VsZWN0ZWRSb3dzPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+KTwvc3Bhbj5cXG4gIDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPn08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+LDwvc3Bhbj5cXG4gIG9uU2VsZWN0IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPig8L3NwYW4+cmVjb3JkPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+LDwvc3Bhbj4gc2VsZWN0ZWQ8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4sPC9zcGFuPiBzZWxlY3RlZFJvd3M8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4pPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID57PC9zcGFuPlxcbiAgICBjb25zb2xlPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Ljwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gZnVuY3Rpb25cXFwiID5sb2c8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+KDwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gc3RyaW5nXFxcIiA+J3Jvd1NlbGVjdGlvbi5vblNlbGVjdCc8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+LDwvc3Bhbj5yZWNvcmQ8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4sPC9zcGFuPiBzZWxlY3RlZDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiw8L3NwYW4+IHNlbGVjdGVkUm93czxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPik8L3NwYW4+XFxuICA8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID59PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiw8L3NwYW4+XFxuICBvblNlbGVjdEFsbCA8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4oPC9zcGFuPnNlbGVjdGVkPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+LDwvc3Bhbj4gc2VsZWN0ZWRSb3dzPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+LDwvc3Bhbj4gY2hhbmdlUm93czxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPik8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPns8L3NwYW4+XFxuICAgIGNvbnNvbGU8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4uPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBmdW5jdGlvblxcXCIgPmxvZzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4oPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBzdHJpbmdcXFwiID4ncm93U2VsZWN0aW9uLm9uU2VsZWN0QWxsJzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4sPC9zcGFuPnNlbGVjdGVkPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+LDwvc3Bhbj4gc2VsZWN0ZWRSb3dzPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+LDwvc3Bhbj4gY2hhbmdlUm93czxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPik8L3NwYW4+XFxuICA8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID59PC9zcGFuPlxcbjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPn08L3NwYW4+XCJcblx0ICAgIH0sIFtcImNvZGVcIiwgXCJjb25zdCByb3dTZWxlY3Rpb24gPSB7XFxuICBnZXRDaGVja2JveFByb3BzIChyZWNvcmQpIHtcXG4gICAgcmV0dXJuIHtcXG4gICAgICBkaXNhYmxlZDogcmVjb3JkLm5hbWUgPT09ICfog6HlvabnpZYnXFxuICAgIH1cXG4gIH0sXFxuICBvbkNoYW5nZSAoc2VsZWN0ZWRSb3dLZXlzLCBzZWxlY3RlZFJvd3MpIHtcXG4gICAgY29uc29sZS5sb2coJ3Jvd1NlbGVjdGlvbi5vbkNoYW5nZScsc2VsZWN0ZWRSb3dLZXlzLCBzZWxlY3RlZFJvd3MpXFxuICB9LFxcbiAgb25TZWxlY3QgKHJlY29yZCwgc2VsZWN0ZWQsIHNlbGVjdGVkUm93cykge1xcbiAgICBjb25zb2xlLmxvZygncm93U2VsZWN0aW9uLm9uU2VsZWN0JyxyZWNvcmQsIHNlbGVjdGVkLCBzZWxlY3RlZFJvd3MpXFxuICB9LFxcbiAgb25TZWxlY3RBbGwgKHNlbGVjdGVkLCBzZWxlY3RlZFJvd3MsIGNoYW5nZVJvd3MpIHtcXG4gICAgY29uc29sZS5sb2coJ3Jvd1NlbGVjdGlvbi5vblNlbGVjdEFsbCcsc2VsZWN0ZWQsIHNlbGVjdGVkUm93cywgY2hhbmdlUm93cylcXG4gIH1cXG59XCJdXV0sXG5cdCAgICBcImVuLVVTXCI6IFtdXG5cdCAgfSxcblx0ICBcIm1ldGFcIjoge1xuXHQgICAgXCJvcmRlclwiOiAxLFxuXHQgICAgXCJ0aXRsZVwiOiB7XG5cdCAgICAgIFwiemgtQ05cIjogXCLlj6/pgInmi6lcIixcblx0ICAgICAgXCJlbi1VU1wiOiBcIlR5cGVcIlxuXHQgICAgfSxcblx0ICAgIFwiZmlsZW5hbWVcIjogXCJzcmMvY29tcG9uZW50cy9UYWJsZS9kZW1vL3Jvdy1zZWxlY3Rpb24ubWRcIixcblx0ICAgIFwiaWRcIjogXCJzcmMtY29tcG9uZW50cy1UYWJsZS1kZW1vLXJvdy1zZWxlY3Rpb25cIlxuXHQgIH0sXG5cdCAgXCJ0b2NcIjogW1widWxcIiwgW1wibGlcIiwgW1wiYVwiLCB7XG5cdCAgICBcImhyZWZcIjogXCIjemgtQ05cIlxuXHQgIH0sIFwiemgtQ05cIl1dLCBbXCJsaVwiLCBbXCJhXCIsIHtcblx0ICAgIFwiaHJlZlwiOiBcIiNlbi1VU1wiXG5cdCAgfSwgXCJlbi1VU1wiXV1dLFxuXHQgIFwiaGlnaGxpZ2h0ZWRDb2RlXCI6IFtcInByZVwiLCB7XG5cdCAgICBcImxhbmdcIjogXCJqc3hcIixcblx0ICAgIFwiaGlnaGxpZ2h0ZWRcIjogXCI8c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiZsdDs8L3NwYW4+di10YWJsZTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItbmFtZVxcXCIgPjpkYXRhLXNvdXJjZTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci12YWx1ZVxcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPj08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XFxcIjwvc3Bhbj5ncmlkRGF0YTxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPlxcXCI8L3NwYW4+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci1uYW1lXFxcIiA+OmNvbHVtbnM8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItdmFsdWVcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID49PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPlxcXCI8L3NwYW4+Z3JpZENvbHVtbnM8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5cXFwiPC9zcGFuPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItbmFtZVxcXCIgPjpyb3ctc2VsZWN0aW9uPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLXZhbHVlXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+PTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5cXFwiPC9zcGFuPnJvd1NlbGVjdGlvbjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPlxcXCI8L3NwYW4+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci1uYW1lXFxcIiA+cm93LWtleTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci12YWx1ZVxcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPj08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XFxcIjwvc3Bhbj5rZXk8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5cXFwiPC9zcGFuPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItbmFtZVxcXCIgPjpsb2FkaW5nPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLXZhbHVlXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+PTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5cXFwiPC9zcGFuPmxvYWRpbmc8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5cXFwiPC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4+PC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiZsdDsvPC9zcGFuPnYtdGFibGU8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Pjwvc3Bhbj48L3NwYW4+XCJcblx0ICB9XSxcblx0ICBcInByZXZpZXdcIjogXCI8di10YWJsZSA6ZGF0YS1zb3VyY2U9XFxcImdyaWREYXRhXFxcIiA6Y29sdW1ucz1cXFwiZ3JpZENvbHVtbnNcXFwiIDpyb3ctc2VsZWN0aW9uPVxcXCJyb3dTZWxlY3Rpb25cXFwiIHJvdy1rZXk9XFxcImtleVxcXCIgOmxvYWRpbmc9XFxcImxvYWRpbmdcXFwiPjwvdi10YWJsZT5cIixcblx0ICBcInZ1ZVNjcmlwdFwiOiBcInZhciBjb2x1bW5zID0gW3tcXG4gIHRpdGxlOiAn5aeT5ZCNJyxcXG4gIGRhdGFJbmRleDogJ25hbWUnLFxcbiAgZmlsdGVyczogW3tcXG4gICAgdGV4dDogJ+Wnk+adjueahOeahCcsXFxuICAgIHZhbHVlOiAn5p2OJyxcXG4gIH0sIHtcXG4gICAgdGV4dDogJ+Wnk+iDoeeahCcsXFxuICAgIHZhbHVlOiAn6IOhJyxcXG4gIH1dLFxcbiAgc29ydGVyOnRydWUsXFxuICB3aWR0aDoxNTBcXG59LCB7XFxuICB0aXRsZTogJ+W5tOm+hCcsXFxuICBkYXRhSW5kZXg6ICdhZ2UnLFxcbiAgc29ydGVyOiBmdW5jdGlvbihhLCBiKSB7IHJldHVybiBhLmFnZSAtIGIuYWdlIH0sXFxuICByZW5kZXI6IGZ1bmN0aW9uKHRleHQsIHJlY29yZCwgaW5kZXgpIHtcXG4gICAgcmV0dXJuICc8aW5wdXQgdi1tb2RlbD1cXFwiZ3JpZERhdGFbJysgaW5kZXggKyddLmFnZVxcXCIvPidcXG4gIH0sXFxuICB3aWR0aDoyNTBcXG59LCB7XFxuICB0aXRsZTogJ+WcsOWdgCcsXFxuICBkYXRhSW5kZXg6ICdhZGRyZXNzJyxcXG4gIGZpbHRlcnM6IFt7XFxuICAgIHRleHQ6ICfljZfmuZYnLFxcbiAgICB2YWx1ZTogJ+WNl+a5licsXFxuICB9LCB7XFxuICAgIHRleHQ6ICfopb/muZYnLFxcbiAgICB2YWx1ZTogJ+ilv+a5licsXFxuICB9XSxcXG4gIGZpbHRlck11bHRpcGxlOiBmYWxzZSxcXG4gIHdpZHRoOjI1MFxcblxcbn0se1xcbiAgICB0aXRsZTogJ+aTjeS9nCcsXFxuICAgIGtleTogJ29wZXJhdGlvbicsXFxuICAgIHJlbmRlcjogZnVuY3Rpb24odGV4dCwgcmVjb3JkKSB7XFxuICAgICAgaWYocmVjb3JkKSB7XFxuICAgICAgICByZXR1cm4gJzxpY29uIHR5cGU9XFxcImluZm9cXFwiPjwvaWNvbj48YSBocmVmPVxcXCInKyByZWNvcmQua2V5KycuaHRtbFxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiPuivpuaDhTwvYT4nXFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXTtcXG5cXG52YXIgZGF0YSA9IFt7XFxuICBrZXk6ICcxJyxcXG4gIG5hbWU6ICfog6HmlownLFxcbiAgYWdlOiAzMixcXG4gIGFkZHJlc3M6ICfljZfmuZbljLrmuZblupXlhazlm60x5Y+3JyxcXG59LCB7XFxuICBrZXk6ICcyJyxcXG4gIG5hbWU6ICfog6HlvabnpZYnLFxcbiAgYWdlOiA0MixcXG4gIGFkZHJlc3M6ICfopb/muZbljLrmuZblupXlhazlm60xMuWPtycsXFxufSwge1xcbiAga2V5OiAnMycsXFxuICBuYW1lOiAn5p2O5aSn5Zi0JyxcXG4gIGFnZTogMzIsXFxuICBhZGRyZXNzOiAn5Y2X5rmW5Yy65rmW5bqV5YWs5ZutMTIz5Y+3JyxcXG59LCB7XFxuICBrZXk6ICc0JyxcXG4gIG5hbWU6ICfmnY7np4DojrLlpKflmLTlk6UnLFxcbiAgYWdlOiAzMixcXG4gIGFkZHJlc3M6ICfopb/muZbljLrmuZblupXlhazlm60xMjPlj7cnLFxcbn0sXFxue1xcbiAga2V5OiAnNScsXFxuICBuYW1lOiAn5YiY5b635Y2OJyxcXG4gIGFnZTogNTQsXFxuICBhZGRyZXNzOiAn6KW/5rmW5Yy65rmW5bqV5YWs5ZutOTk55Y+3JyxcXG59LFxcbntcXG4gIGtleTogJzYnLFxcbiAgbmFtZTogJ+a0qumHkeWunScsXFxuICBhZ2U6IDY2LFxcbiAgYWRkcmVzczogJ+mmmea4r+W8peaVpumBkzQnLFxcbn1dO1xcblxcbi8vIOmFjee9rumAieaLqeaVsOaNrueahOmAiemhuVxcblxcbnZhciByb3dTZWxlY3Rpb24gPSB7XFxuICBnZXRDaGVja2JveFByb3BzOiBmdW5jdGlvbihyZWNvcmQpIHtcXG4gICAgcmV0dXJuIHtcXG4gICAgICBkaXNhYmxlZDogcmVjb3JkLm5hbWUgPT09ICfog6HlvabnpZYnICAgIC8vIOmFjee9ruaXoOazleWLvumAieeahOWIl1xcbiAgICB9O1xcbiAgfSxcXG4gIG9uQ2hhbmdlOiBmdW5jdGlvbihzZWxlY3RlZFJvd0tleXMsIHNlbGVjdGVkUm93cykge1xcbiAgICBjb25zb2xlLmxvZygncm93U2VsZWN0aW9uLm9uQ2hhbmdlJyxzZWxlY3RlZFJvd0tleXMsIHNlbGVjdGVkUm93cyk7XFxuICB9LFxcbiAgb25TZWxlY3Q6IGZ1bmN0aW9uKHJlY29yZCwgc2VsZWN0ZWQsIHNlbGVjdGVkUm93cykge1xcbiAgICBjb25zb2xlLmxvZygncm93U2VsZWN0aW9uLm9uU2VsZWN0JyxyZWNvcmQsIHNlbGVjdGVkLCBzZWxlY3RlZFJvd3MpO1xcbiAgfSxcXG4gIG9uU2VsZWN0QWxsOiBmdW5jdGlvbihzZWxlY3RlZCwgc2VsZWN0ZWRSb3dzLCBjaGFuZ2VSb3dzKSB7XFxuICAgIGNvbnNvbGUubG9nKCdyb3dTZWxlY3Rpb24ub25TZWxlY3RBbGwnLHNlbGVjdGVkLCBzZWxlY3RlZFJvd3MsIGNoYW5nZVJvd3MpO1xcbiAgfVxcbn07XFxuXFxuXFxubmV3IFZ1ZSh7XFxuICBlbDogJ2JvZHknLFxcbiAgY29tcG9uZW50czoge1xcbiAgICB2VGFibGU6IGF0dWkuVGFibGUsXFxuICAgIGljb246IGF0dWkuSWNvbixcXG4gICAgcm93OiBhdHVpLkxheW91dC5Sb3dcXG4gIH0sXFxuICBkYXRhICgpIHtcXG4gICAgcmV0dXJuIHtcXG4gICAgICBsb2FkaW5nOmZhbHNlLFxcbiAgICAgIGdyaWREYXRhOmRhdGEsXFxuICAgICAgZ3JpZENvbHVtbnM6IGNvbHVtbnMsXFxuICAgICAgcm93U2VsZWN0aW9uOiByb3dTZWxlY3Rpb25cXG4gICAgfVxcbiAgfVxcbn0pXCJcblx0fTtcblxuLyoqKi8gfVxuXG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9UYWJsZS9kZW1vL3Jvdy1zZWxlY3Rpb24ubWQuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJjb250ZW50XCI6IHtcbiAgICBcInpoLUNOXCI6IFtcbiAgICAgIFtcbiAgICAgICAgXCJwXCIsXG4gICAgICAgIFwicm93LXNlbGVjdGlvbuWxnuaAp+WPr+WinuWKoOmAieaLqeWKn+iDvVwiXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBcInByZVwiLFxuICAgICAgICB7XG4gICAgICAgICAgXCJsYW5nXCI6IFwianNcIixcbiAgICAgICAgICBcImhpZ2hsaWdodGVkXCI6IFwiPHNwYW4gY2xhc3M9XFxcInRva2VuIGtleXdvcmRcXFwiID5jb25zdDwvc3Bhbj4gcm93U2VsZWN0aW9uIDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBvcGVyYXRvclxcXCIgPj08L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPns8L3NwYW4+XFxuICBnZXRDaGVja2JveFByb3BzIDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPig8L3NwYW4+cmVjb3JkPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+KTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+ezwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcInRva2VuIGtleXdvcmRcXFwiID5yZXR1cm48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPns8L3NwYW4+XFxuICAgICAgZGlzYWJsZWQ8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID46PC9zcGFuPiByZWNvcmQ8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4uPC9zcGFuPm5hbWUgPHNwYW4gY2xhc3M9XFxcInRva2VuIG9wZXJhdG9yXFxcIiA+PT09PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gc3RyaW5nXFxcIiA+J+iDoeW9puellic8L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPn08L3NwYW4+XFxuICA8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID59PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiw8L3NwYW4+XFxuICBvbkNoYW5nZSA8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4oPC9zcGFuPnNlbGVjdGVkUm93S2V5czxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiw8L3NwYW4+IHNlbGVjdGVkUm93czxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPik8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPns8L3NwYW4+XFxuICAgIGNvbnNvbGU8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4uPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBmdW5jdGlvblxcXCIgPmxvZzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4oPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBzdHJpbmdcXFwiID4ncm93U2VsZWN0aW9uLm9uQ2hhbmdlJzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4sPC9zcGFuPnNlbGVjdGVkUm93S2V5czxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiw8L3NwYW4+IHNlbGVjdGVkUm93czxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPik8L3NwYW4+XFxuICA8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID59PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiw8L3NwYW4+XFxuICBvblNlbGVjdCA8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4oPC9zcGFuPnJlY29yZDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiw8L3NwYW4+IHNlbGVjdGVkPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+LDwvc3Bhbj4gc2VsZWN0ZWRSb3dzPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+KTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+ezwvc3Bhbj5cXG4gICAgY29uc29sZTxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPi48L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIGZ1bmN0aW9uXFxcIiA+bG9nPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPig8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHN0cmluZ1xcXCIgPidyb3dTZWxlY3Rpb24ub25TZWxlY3QnPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiw8L3NwYW4+cmVjb3JkPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+LDwvc3Bhbj4gc2VsZWN0ZWQ8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4sPC9zcGFuPiBzZWxlY3RlZFJvd3M8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4pPC9zcGFuPlxcbiAgPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+fTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4sPC9zcGFuPlxcbiAgb25TZWxlY3RBbGwgPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+KDwvc3Bhbj5zZWxlY3RlZDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiw8L3NwYW4+IHNlbGVjdGVkUm93czxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiw8L3NwYW4+IGNoYW5nZVJvd3M8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4pPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID57PC9zcGFuPlxcbiAgICBjb25zb2xlPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Ljwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gZnVuY3Rpb25cXFwiID5sb2c8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+KDwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gc3RyaW5nXFxcIiA+J3Jvd1NlbGVjdGlvbi5vblNlbGVjdEFsbCc8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+LDwvc3Bhbj5zZWxlY3RlZDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiw8L3NwYW4+IHNlbGVjdGVkUm93czxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiw8L3NwYW4+IGNoYW5nZVJvd3M8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4pPC9zcGFuPlxcbiAgPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+fTwvc3Bhbj5cXG48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID59PC9zcGFuPlwiXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBcImNvZGVcIixcbiAgICAgICAgICBcImNvbnN0IHJvd1NlbGVjdGlvbiA9IHtcXG4gIGdldENoZWNrYm94UHJvcHMgKHJlY29yZCkge1xcbiAgICByZXR1cm4ge1xcbiAgICAgIGRpc2FibGVkOiByZWNvcmQubmFtZSA9PT0gJ+iDoeW9puellidcXG4gICAgfVxcbiAgfSxcXG4gIG9uQ2hhbmdlIChzZWxlY3RlZFJvd0tleXMsIHNlbGVjdGVkUm93cykge1xcbiAgICBjb25zb2xlLmxvZygncm93U2VsZWN0aW9uLm9uQ2hhbmdlJyxzZWxlY3RlZFJvd0tleXMsIHNlbGVjdGVkUm93cylcXG4gIH0sXFxuICBvblNlbGVjdCAocmVjb3JkLCBzZWxlY3RlZCwgc2VsZWN0ZWRSb3dzKSB7XFxuICAgIGNvbnNvbGUubG9nKCdyb3dTZWxlY3Rpb24ub25TZWxlY3QnLHJlY29yZCwgc2VsZWN0ZWQsIHNlbGVjdGVkUm93cylcXG4gIH0sXFxuICBvblNlbGVjdEFsbCAoc2VsZWN0ZWQsIHNlbGVjdGVkUm93cywgY2hhbmdlUm93cykge1xcbiAgICBjb25zb2xlLmxvZygncm93U2VsZWN0aW9uLm9uU2VsZWN0QWxsJyxzZWxlY3RlZCwgc2VsZWN0ZWRSb3dzLCBjaGFuZ2VSb3dzKVxcbiAgfVxcbn1cIlxuICAgICAgICBdXG4gICAgICBdXG4gICAgXSxcbiAgICBcImVuLVVTXCI6IFtdXG4gIH0sXG4gIFwibWV0YVwiOiB7XG4gICAgXCJvcmRlclwiOiAxLFxuICAgIFwidGl0bGVcIjoge1xuICAgICAgXCJ6aC1DTlwiOiBcIuWPr+mAieaLqVwiLFxuICAgICAgXCJlbi1VU1wiOiBcIlR5cGVcIlxuICAgIH0sXG4gICAgXCJmaWxlbmFtZVwiOiBcInNyYy9jb21wb25lbnRzL1RhYmxlL2RlbW8vcm93LXNlbGVjdGlvbi5tZFwiLFxuICAgIFwiaWRcIjogXCJzcmMtY29tcG9uZW50cy1UYWJsZS1kZW1vLXJvdy1zZWxlY3Rpb25cIlxuICB9LFxuICBcInRvY1wiOiBbXG4gICAgXCJ1bFwiLFxuICAgIFtcbiAgICAgIFwibGlcIixcbiAgICAgIFtcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBcImhyZWZcIjogXCIjemgtQ05cIlxuICAgICAgICB9LFxuICAgICAgICBcInpoLUNOXCJcbiAgICAgIF1cbiAgICBdLFxuICAgIFtcbiAgICAgIFwibGlcIixcbiAgICAgIFtcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBcImhyZWZcIjogXCIjZW4tVVNcIlxuICAgICAgICB9LFxuICAgICAgICBcImVuLVVTXCJcbiAgICAgIF1cbiAgICBdXG4gIF0sXG4gIFwiaGlnaGxpZ2h0ZWRDb2RlXCI6IFtcbiAgICBcInByZVwiLFxuICAgIHtcbiAgICAgIFwibGFuZ1wiOiBcImpzeFwiLFxuICAgICAgXCJoaWdobGlnaHRlZFwiOiBcIjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Jmx0Ozwvc3Bhbj52LXRhYmxlPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci1uYW1lXFxcIiA+OmRhdGEtc291cmNlPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLXZhbHVlXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+PTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5cXFwiPC9zcGFuPmdyaWREYXRhPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XFxcIjwvc3Bhbj48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLW5hbWVcXFwiID46Y29sdW1uczwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci12YWx1ZVxcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPj08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XFxcIjwvc3Bhbj5ncmlkQ29sdW1uczxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPlxcXCI8L3NwYW4+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci1uYW1lXFxcIiA+OnJvdy1zZWxlY3Rpb248L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItdmFsdWVcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID49PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPlxcXCI8L3NwYW4+cm93U2VsZWN0aW9uPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XFxcIjwvc3Bhbj48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLW5hbWVcXFwiID5yb3cta2V5PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLXZhbHVlXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+PTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5cXFwiPC9zcGFuPmtleTxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPlxcXCI8L3NwYW4+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci1uYW1lXFxcIiA+OmxvYWRpbmc8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItdmFsdWVcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID49PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPlxcXCI8L3NwYW4+bG9hZGluZzxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPlxcXCI8L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPj48L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Jmx0Oy88L3NwYW4+di10YWJsZTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4+PC9zcGFuPjwvc3Bhbj5cIlxuICAgIH1cbiAgXSxcbiAgXCJwcmV2aWV3XCI6IFwiPHYtdGFibGUgOmRhdGEtc291cmNlPVxcXCJncmlkRGF0YVxcXCIgOmNvbHVtbnM9XFxcImdyaWRDb2x1bW5zXFxcIiA6cm93LXNlbGVjdGlvbj1cXFwicm93U2VsZWN0aW9uXFxcIiByb3cta2V5PVxcXCJrZXlcXFwiIDpsb2FkaW5nPVxcXCJsb2FkaW5nXFxcIj48L3YtdGFibGU+XCIsXG4gIFwidnVlU2NyaXB0XCI6IFwidmFyIGNvbHVtbnMgPSBbe1xcbiAgdGl0bGU6ICflp5PlkI0nLFxcbiAgZGF0YUluZGV4OiAnbmFtZScsXFxuICBmaWx0ZXJzOiBbe1xcbiAgICB0ZXh0OiAn5aeT5p2O55qE55qEJyxcXG4gICAgdmFsdWU6ICfmnY4nLFxcbiAgfSwge1xcbiAgICB0ZXh0OiAn5aeT6IOh55qEJyxcXG4gICAgdmFsdWU6ICfog6EnLFxcbiAgfV0sXFxuICBzb3J0ZXI6dHJ1ZSxcXG4gIHdpZHRoOjE1MFxcbn0sIHtcXG4gIHRpdGxlOiAn5bm06b6EJyxcXG4gIGRhdGFJbmRleDogJ2FnZScsXFxuICBzb3J0ZXI6IGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIGEuYWdlIC0gYi5hZ2UgfSxcXG4gIHJlbmRlcjogZnVuY3Rpb24odGV4dCwgcmVjb3JkLCBpbmRleCkge1xcbiAgICByZXR1cm4gJzxpbnB1dCB2LW1vZGVsPVxcXCJncmlkRGF0YVsnKyBpbmRleCArJ10uYWdlXFxcIi8+J1xcbiAgfSxcXG4gIHdpZHRoOjI1MFxcbn0sIHtcXG4gIHRpdGxlOiAn5Zyw5Z2AJyxcXG4gIGRhdGFJbmRleDogJ2FkZHJlc3MnLFxcbiAgZmlsdGVyczogW3tcXG4gICAgdGV4dDogJ+WNl+a5licsXFxuICAgIHZhbHVlOiAn5Y2X5rmWJyxcXG4gIH0sIHtcXG4gICAgdGV4dDogJ+ilv+a5licsXFxuICAgIHZhbHVlOiAn6KW/5rmWJyxcXG4gIH1dLFxcbiAgZmlsdGVyTXVsdGlwbGU6IGZhbHNlLFxcbiAgd2lkdGg6MjUwXFxuXFxufSx7XFxuICAgIHRpdGxlOiAn5pON5L2cJyxcXG4gICAga2V5OiAnb3BlcmF0aW9uJyxcXG4gICAgcmVuZGVyOiBmdW5jdGlvbih0ZXh0LCByZWNvcmQpIHtcXG4gICAgICBpZihyZWNvcmQpIHtcXG4gICAgICAgIHJldHVybiAnPGljb24gdHlwZT1cXFwiaW5mb1xcXCI+PC9pY29uPjxhIGhyZWY9XFxcIicrIHJlY29yZC5rZXkrJy5odG1sXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+6K+m5oOFPC9hPidcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5dO1xcblxcbnZhciBkYXRhID0gW3tcXG4gIGtleTogJzEnLFxcbiAgbmFtZTogJ+iDoeaWjCcsXFxuICBhZ2U6IDMyLFxcbiAgYWRkcmVzczogJ+WNl+a5luWMuua5luW6leWFrOWbrTHlj7cnLFxcbn0sIHtcXG4gIGtleTogJzInLFxcbiAgbmFtZTogJ+iDoeW9puellicsXFxuICBhZ2U6IDQyLFxcbiAgYWRkcmVzczogJ+ilv+a5luWMuua5luW6leWFrOWbrTEy5Y+3JyxcXG59LCB7XFxuICBrZXk6ICczJyxcXG4gIG5hbWU6ICfmnY7lpKflmLQnLFxcbiAgYWdlOiAzMixcXG4gIGFkZHJlc3M6ICfljZfmuZbljLrmuZblupXlhazlm60xMjPlj7cnLFxcbn0sIHtcXG4gIGtleTogJzQnLFxcbiAgbmFtZTogJ+adjuengOiOsuWkp+WYtOWTpScsXFxuICBhZ2U6IDMyLFxcbiAgYWRkcmVzczogJ+ilv+a5luWMuua5luW6leWFrOWbrTEyM+WPtycsXFxufSxcXG57XFxuICBrZXk6ICc1JyxcXG4gIG5hbWU6ICfliJjlvrfljY4nLFxcbiAgYWdlOiA1NCxcXG4gIGFkZHJlc3M6ICfopb/muZbljLrmuZblupXlhazlm605OTnlj7cnLFxcbn0sXFxue1xcbiAga2V5OiAnNicsXFxuICBuYW1lOiAn5rSq6YeR5a6dJyxcXG4gIGFnZTogNjYsXFxuICBhZGRyZXNzOiAn6aaZ5riv5byl5pWm6YGTNCcsXFxufV07XFxuXFxuLy8g6YWN572u6YCJ5oup5pWw5o2u55qE6YCJ6aG5XFxuXFxudmFyIHJvd1NlbGVjdGlvbiA9IHtcXG4gIGdldENoZWNrYm94UHJvcHM6IGZ1bmN0aW9uKHJlY29yZCkge1xcbiAgICByZXR1cm4ge1xcbiAgICAgIGRpc2FibGVkOiByZWNvcmQubmFtZSA9PT0gJ+iDoeW9puellicgICAgLy8g6YWN572u5peg5rOV5Yu+6YCJ55qE5YiXXFxuICAgIH07XFxuICB9LFxcbiAgb25DaGFuZ2U6IGZ1bmN0aW9uKHNlbGVjdGVkUm93S2V5cywgc2VsZWN0ZWRSb3dzKSB7XFxuICAgIGNvbnNvbGUubG9nKCdyb3dTZWxlY3Rpb24ub25DaGFuZ2UnLHNlbGVjdGVkUm93S2V5cywgc2VsZWN0ZWRSb3dzKTtcXG4gIH0sXFxuICBvblNlbGVjdDogZnVuY3Rpb24ocmVjb3JkLCBzZWxlY3RlZCwgc2VsZWN0ZWRSb3dzKSB7XFxuICAgIGNvbnNvbGUubG9nKCdyb3dTZWxlY3Rpb24ub25TZWxlY3QnLHJlY29yZCwgc2VsZWN0ZWQsIHNlbGVjdGVkUm93cyk7XFxuICB9LFxcbiAgb25TZWxlY3RBbGw6IGZ1bmN0aW9uKHNlbGVjdGVkLCBzZWxlY3RlZFJvd3MsIGNoYW5nZVJvd3MpIHtcXG4gICAgY29uc29sZS5sb2coJ3Jvd1NlbGVjdGlvbi5vblNlbGVjdEFsbCcsc2VsZWN0ZWQsIHNlbGVjdGVkUm93cywgY2hhbmdlUm93cyk7XFxuICB9XFxufTtcXG5cXG5cXG5uZXcgVnVlKHtcXG4gIGVsOiAnYm9keScsXFxuICBjb21wb25lbnRzOiB7XFxuICAgIHZUYWJsZTogYXR1aS5UYWJsZSxcXG4gICAgaWNvbjogYXR1aS5JY29uLFxcbiAgICByb3c6IGF0dWkuTGF5b3V0LlJvd1xcbiAgfSxcXG4gIGRhdGEgKCkge1xcbiAgICByZXR1cm4ge1xcbiAgICAgIGxvYWRpbmc6ZmFsc2UsXFxuICAgICAgZ3JpZERhdGE6ZGF0YSxcXG4gICAgICBncmlkQ29sdW1uczogY29sdW1ucyxcXG4gICAgICByb3dTZWxlY3Rpb246IHJvd1NlbGVjdGlvblxcbiAgICB9XFxuICB9XFxufSlcIlxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL1RhYmxlL2RlbW8vcm93LXNlbGVjdGlvbi5tZFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=