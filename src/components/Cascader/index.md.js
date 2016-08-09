webpackJsonp([99,163],{385:function(n,a){"use strict";n.exports={content:["section",["h2","\u4f7f\u7528\u51c6\u5907"],["p","\u9700\u8981\u4e00\u4e2a\u6570\u636e\u6e90\u6765\u7ed1\u5b9a,\u6bd4\u5982"],["pre",{lang:"js",highlighted:'<span class="token keyword" >var</span> options <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'zhejiang\'</span><span class="token punctuation" >,</span>\n  label<span class="token punctuation" >:</span> <span class="token string" >\'\u6d59\u6c5f\'</span><span class="token punctuation" >,</span>\n  children<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n    value<span class="token punctuation" >:</span> <span class="token string" >\'hangzhou\'</span><span class="token punctuation" >,</span>\n    label<span class="token punctuation" >:</span> <span class="token string" >\'\u676d\u5dde\'</span><span class="token punctuation" >,</span>\n    children<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n      value<span class="token punctuation" >:</span> <span class="token string" >\'xihu\'</span><span class="token punctuation" >,</span>\n      label<span class="token punctuation" >:</span> <span class="token string" >\'\u897f\u6e56\'</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'jiangsu\'</span><span class="token punctuation" >,</span>\n  label<span class="token punctuation" >:</span> <span class="token string" >\'\u6c5f\u82cf\'</span><span class="token punctuation" >,</span>\n  children<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n    value<span class="token punctuation" >:</span> <span class="token string" >\'nanjing\'</span><span class="token punctuation" >,</span>\n    label<span class="token punctuation" >:</span> <span class="token string" >\'\u5357\u4eac\'</span><span class="token punctuation" >,</span>\n    children<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n      value<span class="token punctuation" >:</span> <span class="token string" >\'zhonghuamen\'</span><span class="token punctuation" >,</span>\n      label<span class="token punctuation" >:</span> <span class="token string" >\'\u4e2d\u534e\u95e8\'</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >]</span>\n\n<span class="token keyword" >var</span> defaultValue <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token string" >\'zhejiang\'</span><span class="token punctuation" >,</span> <span class="token string" >\'hangzhou\'</span><span class="token punctuation" >,</span> <span class="token string" >\'xihu\'</span><span class="token punctuation" >]</span>\n\n<span class="token keyword" >new</span> <span class="token class-name" >Vue</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  el<span class="token punctuation" >:</span> <span class="token string" >\'body\'</span><span class="token punctuation" >,</span>\n  components<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n    cascader<span class="token punctuation" >:</span> atui<span class="token punctuation" >.</span>Cascader\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  data <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      options<span class="token punctuation" >:</span> options<span class="token punctuation" >,</span>\n      defaultValue<span class="token punctuation" >:</span> defaultValue\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  methods<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n    <span class="token function" >selectChange</span><span class="token punctuation" >(</span>selectedValue<span class="token punctuation" >,</span> option<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>selectedValue<span class="token punctuation" >)</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>'},["code","var options = [{\n  value: 'zhejiang',\n  label: '\u6d59\u6c5f',\n  children: [{\n    value: 'hangzhou',\n    label: '\u676d\u5dde',\n    children: [{\n      value: 'xihu',\n      label: '\u897f\u6e56',\n    }],\n  }],\n}, {\n  value: 'jiangsu',\n  label: '\u6c5f\u82cf',\n  children: [{\n    value: 'nanjing',\n    label: '\u5357\u4eac',\n    children: [{\n      value: 'zhonghuamen',\n      label: '\u4e2d\u534e\u95e8',\n    }],\n  }],\n}]\n\nvar defaultValue = ['zhejiang', 'hangzhou', 'xihu']\n\nnew Vue({\n  el: 'body',\n  components: {\n    cascader: atui.Cascader\n  },\n  data () {\n    return {\n      options: options,\n      defaultValue: defaultValue\n    }\n  },\n  methods: {\n    selectChange(selectedValue, option) {\n      console.log(selectedValue)\n    }\n  }\n})"]]],meta:{category:"Components",type:"Form Controls",title:"Cascader",subtitle:"\u7ea7\u8054\u9009\u62e9\u5668",filename:"src/components/Cascader/index.md"},toc:["ul",["li",["a",{href:"#\u4f7f\u7528\u51c6\u5907"},"\u4f7f\u7528\u51c6\u5907"]],["li",["a",{href:"#API"},"API"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","options"],["td","\u663e\u793a\u7684\u6781\u8054\u6570\u636e\u9009\u9879\uff0c\u5fc5\u4f20"],["td","Array"],["td","[]"]],["tr",["td","placeholder"],["td","\u5360\u4f4d\u7b26"],["td","String"],["td","\u8bf7\u9009\u62e9"]],["tr",["td","width"],["td","\u5bbd\u5ea6"],["td","String"]],["tr",["td","displayRender"],["td","\u663e\u793a\u683c\u5f0f\u5f0f\u5316\u51fd\u6570"],["td","Function"],["td","function(label) { return label.join(' / ') }"]],["tr",["td","defaultValue"],["td","\u9ed8\u8ba4\u663e\u793a\u7684\u6570\u636e"],["td","Array"],["td","[]"]]]]]}}});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQ2FzY2FkZXIvaW5kZXgubWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2FzY2FkZXIvaW5kZXgubWQiXSwibmFtZXMiOlsid2VicGFja0pzb25wIiwiMzg1IiwibW9kdWxlIiwiZXhwb3J0cyIsImNvbnRlbnQiLCJsYW5nIiwiaGlnaGxpZ2h0ZWQiLCJtZXRhIiwiY2F0ZWdvcnkiLCJ0eXBlIiwidGl0bGUiLCJzdWJ0aXRsZSIsImZpbGVuYW1lIiwidG9jIiwiaHJlZiIsImFwaSJdLCJtYXBwaW5ncyI6IkFBQUFBLGNBQWMsR0FBRyxNQUVYQyxJQUNBLFNBQVNDLEVBQVFDLEdBRXRCLFlDTERELEdBQU9DLFNBQ0xDLFNBQ0UsV0FFRSxLQUNBLDZCQUdBLElBQ0EsOEVBR0EsT0FFRUMsS0FBUSxLQUNSQyxZQUFlLDh3S0FHZixPQUNBLG94QkFJTkMsTUFDRUMsU0FBWSxhQUNaQyxLQUFRLGdCQUNSQyxNQUFTLFdBQ1RDLFNBQVksaUNBQ1pDLFNBQVksb0NBRWRDLEtBQ0UsTUFFRSxNQUVFLEtBRUVDLEtBQVEsNkJBRVYsOEJBSUYsTUFFRSxLQUVFQSxLQUFRLFFBRVYsU0FJTkMsS0FDRSxXQUVFLEtBQ0EsUUFHQSxTQUVFLFNBRUUsTUFFRSxLQUNBLGlCQUdBLEtBQ0EsaUJBR0EsS0FDQSxpQkFHQSxLQUNBLHlCQUtKLFNBRUUsTUFFRSxLQUNBLFlBR0EsS0FDQSw2RUFHQSxLQUNBLFVBR0EsS0FDQSxRQUlGLE1BRUUsS0FDQSxnQkFHQSxLQUNBLHVCQUdBLEtBQ0EsV0FHQSxLQUNBLHdCQUlGLE1BRUUsS0FDQSxVQUdBLEtBQ0EsaUJBR0EsS0FDQSxZQUlGLE1BRUUsS0FDQSxrQkFHQSxLQUNBLHFEQUdBLEtBQ0EsYUFHQSxLQUNBLGtEQUlGLE1BRUUsS0FDQSxpQkFHQSxLQUNBLCtDQUdBLEtBQ0EsVUFHQSxLQUNBIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL0Nhc2NhZGVyL2luZGV4Lm1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2VicGFja0pzb25wKFs5OSwxNjNdLHtcblxuLyoqKi8gMzg1OlxuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IHtcblx0ICBcImNvbnRlbnRcIjogW1wic2VjdGlvblwiLCBbXCJoMlwiLCBcIuS9v+eUqOWHhuWkh1wiXSwgW1wicFwiLCBcIumcgOimgeS4gOS4quaVsOaNrua6kOadpee7keWumizmr5TlpoJcIl0sIFtcInByZVwiLCB7XG5cdCAgICBcImxhbmdcIjogXCJqc1wiLFxuXHQgICAgXCJoaWdobGlnaHRlZFwiOiBcIjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBrZXl3b3JkXFxcIiA+dmFyPC9zcGFuPiBvcHRpb25zIDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBvcGVyYXRvclxcXCIgPj08L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPls8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+ezwvc3Bhbj5cXG4gIHZhbHVlPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Ojwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIHN0cmluZ1xcXCIgPid6aGVqaWFuZyc8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+LDwvc3Bhbj5cXG4gIGxhYmVsPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Ojwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIHN0cmluZ1xcXCIgPifmtZnmsZ8nPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiw8L3NwYW4+XFxuICBjaGlsZHJlbjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPjo8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPls8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+ezwvc3Bhbj5cXG4gICAgdmFsdWU8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID46PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gc3RyaW5nXFxcIiA+J2hhbmd6aG91Jzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4sPC9zcGFuPlxcbiAgICBsYWJlbDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPjo8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBzdHJpbmdcXFwiID4n5p2t5beeJzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4sPC9zcGFuPlxcbiAgICBjaGlsZHJlbjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPjo8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPls8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+ezwvc3Bhbj5cXG4gICAgICB2YWx1ZTxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPjo8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBzdHJpbmdcXFwiID4neGlodSc8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+LDwvc3Bhbj5cXG4gICAgICBsYWJlbDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPjo8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBzdHJpbmdcXFwiID4n6KW/5rmWJzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4sPC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID59PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPl08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+LDwvc3Bhbj5cXG4gIDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPn08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4sPC9zcGFuPlxcbjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPn08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+LDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+ezwvc3Bhbj5cXG4gIHZhbHVlPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Ojwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIHN0cmluZ1xcXCIgPidqaWFuZ3N1Jzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4sPC9zcGFuPlxcbiAgbGFiZWw8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID46PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gc3RyaW5nXFxcIiA+J+axn+iLjyc8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+LDwvc3Bhbj5cXG4gIGNoaWxkcmVuPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Ojwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Wzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID57PC9zcGFuPlxcbiAgICB2YWx1ZTxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPjo8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBzdHJpbmdcXFwiID4nbmFuamluZyc8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+LDwvc3Bhbj5cXG4gICAgbGFiZWw8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID46PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gc3RyaW5nXFxcIiA+J+WNl+S6rCc8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+LDwvc3Bhbj5cXG4gICAgY2hpbGRyZW48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID46PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5bPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPns8L3NwYW4+XFxuICAgICAgdmFsdWU8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID46PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gc3RyaW5nXFxcIiA+J3pob25naHVhbWVuJzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4sPC9zcGFuPlxcbiAgICAgIGxhYmVsPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Ojwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIHN0cmluZ1xcXCIgPifkuK3ljY7pl6gnPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiw8L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPn08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4sPC9zcGFuPlxcbiAgPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+fTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5dPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiw8L3NwYW4+XFxuPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+fTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5dPC9zcGFuPlxcblxcbjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBrZXl3b3JkXFxcIiA+dmFyPC9zcGFuPiBkZWZhdWx0VmFsdWUgPHNwYW4gY2xhc3M9XFxcInRva2VuIG9wZXJhdG9yXFxcIiA+PTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Wzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gc3RyaW5nXFxcIiA+J3poZWppYW5nJzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4sPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gc3RyaW5nXFxcIiA+J2hhbmd6aG91Jzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4sPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gc3RyaW5nXFxcIiA+J3hpaHUnPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPl08L3NwYW4+XFxuXFxuPHNwYW4gY2xhc3M9XFxcInRva2VuIGtleXdvcmRcXFwiID5uZXc8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBjbGFzcy1uYW1lXFxcIiA+VnVlPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPig8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+ezwvc3Bhbj5cXG4gIGVsPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Ojwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIHN0cmluZ1xcXCIgPidib2R5Jzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4sPC9zcGFuPlxcbiAgY29tcG9uZW50czxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPjo8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPns8L3NwYW4+XFxuICAgIGNhc2NhZGVyPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Ojwvc3Bhbj4gYXR1aTxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPi48L3NwYW4+Q2FzY2FkZXJcXG4gIDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPn08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+LDwvc3Bhbj5cXG4gIGRhdGEgPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+KDwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4pPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID57PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwidG9rZW4ga2V5d29yZFxcXCIgPnJldHVybjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+ezwvc3Bhbj5cXG4gICAgICBvcHRpb25zPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Ojwvc3Bhbj4gb3B0aW9uczxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiw8L3NwYW4+XFxuICAgICAgZGVmYXVsdFZhbHVlPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Ojwvc3Bhbj4gZGVmYXVsdFZhbHVlXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPn08L3NwYW4+XFxuICA8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID59PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiw8L3NwYW4+XFxuICBtZXRob2RzPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Ojwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+ezwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcInRva2VuIGZ1bmN0aW9uXFxcIiA+c2VsZWN0Q2hhbmdlPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPig8L3NwYW4+c2VsZWN0ZWRWYWx1ZTxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiw8L3NwYW4+IG9wdGlvbjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPik8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPns8L3NwYW4+XFxuICAgICAgY29uc29sZTxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPi48L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIGZ1bmN0aW9uXFxcIiA+bG9nPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPig8L3NwYW4+c2VsZWN0ZWRWYWx1ZTxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPik8L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPn08L3NwYW4+XFxuICA8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID59PC9zcGFuPlxcbjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPn08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+KTwvc3Bhbj5cIlxuXHQgIH0sIFtcImNvZGVcIiwgXCJ2YXIgb3B0aW9ucyA9IFt7XFxuICB2YWx1ZTogJ3poZWppYW5nJyxcXG4gIGxhYmVsOiAn5rWZ5rGfJyxcXG4gIGNoaWxkcmVuOiBbe1xcbiAgICB2YWx1ZTogJ2hhbmd6aG91JyxcXG4gICAgbGFiZWw6ICfmna3lt54nLFxcbiAgICBjaGlsZHJlbjogW3tcXG4gICAgICB2YWx1ZTogJ3hpaHUnLFxcbiAgICAgIGxhYmVsOiAn6KW/5rmWJyxcXG4gICAgfV0sXFxuICB9XSxcXG59LCB7XFxuICB2YWx1ZTogJ2ppYW5nc3UnLFxcbiAgbGFiZWw6ICfmsZ/oi48nLFxcbiAgY2hpbGRyZW46IFt7XFxuICAgIHZhbHVlOiAnbmFuamluZycsXFxuICAgIGxhYmVsOiAn5Y2X5LqsJyxcXG4gICAgY2hpbGRyZW46IFt7XFxuICAgICAgdmFsdWU6ICd6aG9uZ2h1YW1lbicsXFxuICAgICAgbGFiZWw6ICfkuK3ljY7pl6gnLFxcbiAgICB9XSxcXG4gIH1dLFxcbn1dXFxuXFxudmFyIGRlZmF1bHRWYWx1ZSA9IFsnemhlamlhbmcnLCAnaGFuZ3pob3UnLCAneGlodSddXFxuXFxubmV3IFZ1ZSh7XFxuICBlbDogJ2JvZHknLFxcbiAgY29tcG9uZW50czoge1xcbiAgICBjYXNjYWRlcjogYXR1aS5DYXNjYWRlclxcbiAgfSxcXG4gIGRhdGEgKCkge1xcbiAgICByZXR1cm4ge1xcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXFxuICAgICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0VmFsdWVcXG4gICAgfVxcbiAgfSxcXG4gIG1ldGhvZHM6IHtcXG4gICAgc2VsZWN0Q2hhbmdlKHNlbGVjdGVkVmFsdWUsIG9wdGlvbikge1xcbiAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkVmFsdWUpXFxuICAgIH1cXG4gIH1cXG59KVwiXV1dLFxuXHQgIFwibWV0YVwiOiB7XG5cdCAgICBcImNhdGVnb3J5XCI6IFwiQ29tcG9uZW50c1wiLFxuXHQgICAgXCJ0eXBlXCI6IFwiRm9ybSBDb250cm9sc1wiLFxuXHQgICAgXCJ0aXRsZVwiOiBcIkNhc2NhZGVyXCIsXG5cdCAgICBcInN1YnRpdGxlXCI6IFwi57qn6IGU6YCJ5oup5ZmoXCIsXG5cdCAgICBcImZpbGVuYW1lXCI6IFwic3JjL2NvbXBvbmVudHMvQ2FzY2FkZXIvaW5kZXgubWRcIlxuXHQgIH0sXG5cdCAgXCJ0b2NcIjogW1widWxcIiwgW1wibGlcIiwgW1wiYVwiLCB7XG5cdCAgICBcImhyZWZcIjogXCIj5L2/55So5YeG5aSHXCJcblx0ICB9LCBcIuS9v+eUqOWHhuWkh1wiXV0sIFtcImxpXCIsIFtcImFcIiwge1xuXHQgICAgXCJocmVmXCI6IFwiI0FQSVwiXG5cdCAgfSwgXCJBUElcIl1dXSxcblx0ICBcImFwaVwiOiBbXCJzZWN0aW9uXCIsIFtcImgyXCIsIFwiQVBJXCJdLCBbXCJ0YWJsZVwiLCBbXCJ0aGVhZFwiLCBbXCJ0clwiLCBbXCJ0aFwiLCBcIuWxnuaAp1wiXSwgW1widGhcIiwgXCLor7TmmI5cIl0sIFtcInRoXCIsIFwi57G75Z6LXCJdLCBbXCJ0aFwiLCBcIum7mOiupOWAvFwiXV1dLCBbXCJ0Ym9keVwiLCBbXCJ0clwiLCBbXCJ0ZFwiLCBcIm9wdGlvbnNcIl0sIFtcInRkXCIsIFwi5pi+56S655qE5p6B6IGU5pWw5o2u6YCJ6aG577yM5b+F5LygXCJdLCBbXCJ0ZFwiLCBcIkFycmF5XCJdLCBbXCJ0ZFwiLCBcIltdXCJdXSwgW1widHJcIiwgW1widGRcIiwgXCJwbGFjZWhvbGRlclwiXSwgW1widGRcIiwgXCLljaDkvY3nrKZcIl0sIFtcInRkXCIsIFwiU3RyaW5nXCJdLCBbXCJ0ZFwiLCBcIuivt+mAieaLqVwiXV0sIFtcInRyXCIsIFtcInRkXCIsIFwid2lkdGhcIl0sIFtcInRkXCIsIFwi5a695bqmXCJdLCBbXCJ0ZFwiLCBcIlN0cmluZ1wiXV0sIFtcInRyXCIsIFtcInRkXCIsIFwiZGlzcGxheVJlbmRlclwiXSwgW1widGRcIiwgXCLmmL7npLrmoLzlvI/lvI/ljJblh73mlbBcIl0sIFtcInRkXCIsIFwiRnVuY3Rpb25cIl0sIFtcInRkXCIsIFwiZnVuY3Rpb24obGFiZWwpIHsgcmV0dXJuIGxhYmVsLmpvaW4oJyAvICcpIH1cIl1dLCBbXCJ0clwiLCBbXCJ0ZFwiLCBcImRlZmF1bHRWYWx1ZVwiXSwgW1widGRcIiwgXCLpu5jorqTmmL7npLrnmoTmlbDmja5cIl0sIFtcInRkXCIsIFwiQXJyYXlcIl0sIFtcInRkXCIsIFwiW11cIl1dXV1dXG5cdH07XG5cbi8qKiovIH1cblxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvQ2FzY2FkZXIvaW5kZXgubWQuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJjb250ZW50XCI6IFtcbiAgICBcInNlY3Rpb25cIixcbiAgICBbXG4gICAgICBcImgyXCIsXG4gICAgICBcIuS9v+eUqOWHhuWkh1wiXG4gICAgXSxcbiAgICBbXG4gICAgICBcInBcIixcbiAgICAgIFwi6ZyA6KaB5LiA5Liq5pWw5o2u5rqQ5p2l57uR5a6aLOavlOWmglwiXG4gICAgXSxcbiAgICBbXG4gICAgICBcInByZVwiLFxuICAgICAge1xuICAgICAgICBcImxhbmdcIjogXCJqc1wiLFxuICAgICAgICBcImhpZ2hsaWdodGVkXCI6IFwiPHNwYW4gY2xhc3M9XFxcInRva2VuIGtleXdvcmRcXFwiID52YXI8L3NwYW4+IG9wdGlvbnMgPHNwYW4gY2xhc3M9XFxcInRva2VuIG9wZXJhdG9yXFxcIiA+PTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Wzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID57PC9zcGFuPlxcbiAgdmFsdWU8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID46PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gc3RyaW5nXFxcIiA+J3poZWppYW5nJzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4sPC9zcGFuPlxcbiAgbGFiZWw8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID46PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gc3RyaW5nXFxcIiA+J+a1meaxnyc8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+LDwvc3Bhbj5cXG4gIGNoaWxkcmVuPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Ojwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Wzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID57PC9zcGFuPlxcbiAgICB2YWx1ZTxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPjo8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBzdHJpbmdcXFwiID4naGFuZ3pob3UnPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiw8L3NwYW4+XFxuICAgIGxhYmVsPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Ojwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIHN0cmluZ1xcXCIgPifmna3lt54nPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiw8L3NwYW4+XFxuICAgIGNoaWxkcmVuPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Ojwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Wzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID57PC9zcGFuPlxcbiAgICAgIHZhbHVlPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Ojwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIHN0cmluZ1xcXCIgPid4aWh1Jzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4sPC9zcGFuPlxcbiAgICAgIGxhYmVsPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Ojwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIHN0cmluZ1xcXCIgPifopb/muZYnPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiw8L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPn08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4sPC9zcGFuPlxcbiAgPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+fTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5dPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiw8L3NwYW4+XFxuPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+fTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4sPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID57PC9zcGFuPlxcbiAgdmFsdWU8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID46PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gc3RyaW5nXFxcIiA+J2ppYW5nc3UnPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiw8L3NwYW4+XFxuICBsYWJlbDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPjo8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBzdHJpbmdcXFwiID4n5rGf6IuPJzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4sPC9zcGFuPlxcbiAgY2hpbGRyZW48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID46PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5bPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPns8L3NwYW4+XFxuICAgIHZhbHVlPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Ojwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIHN0cmluZ1xcXCIgPiduYW5qaW5nJzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4sPC9zcGFuPlxcbiAgICBsYWJlbDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPjo8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBzdHJpbmdcXFwiID4n5Y2X5LqsJzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4sPC9zcGFuPlxcbiAgICBjaGlsZHJlbjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPjo8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPls8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+ezwvc3Bhbj5cXG4gICAgICB2YWx1ZTxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPjo8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBzdHJpbmdcXFwiID4nemhvbmdodWFtZW4nPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiw8L3NwYW4+XFxuICAgICAgbGFiZWw8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID46PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gc3RyaW5nXFxcIiA+J+S4reWNjumXqCc8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+LDwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+fTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5dPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiw8L3NwYW4+XFxuICA8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID59PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPl08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+LDwvc3Bhbj5cXG48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID59PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPl08L3NwYW4+XFxuXFxuPHNwYW4gY2xhc3M9XFxcInRva2VuIGtleXdvcmRcXFwiID52YXI8L3NwYW4+IGRlZmF1bHRWYWx1ZSA8c3BhbiBjbGFzcz1cXFwidG9rZW4gb3BlcmF0b3JcXFwiID49PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5bPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBzdHJpbmdcXFwiID4nemhlamlhbmcnPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiw8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBzdHJpbmdcXFwiID4naGFuZ3pob3UnPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiw8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBzdHJpbmdcXFwiID4neGlodSc8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XTwvc3Bhbj5cXG5cXG48c3BhbiBjbGFzcz1cXFwidG9rZW4ga2V5d29yZFxcXCIgPm5ldzwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIGNsYXNzLW5hbWVcXFwiID5WdWU8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+KDwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID57PC9zcGFuPlxcbiAgZWw8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID46PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gc3RyaW5nXFxcIiA+J2JvZHknPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiw8L3NwYW4+XFxuICBjb21wb25lbnRzPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Ojwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+ezwvc3Bhbj5cXG4gICAgY2FzY2FkZXI8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID46PC9zcGFuPiBhdHVpPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Ljwvc3Bhbj5DYXNjYWRlclxcbiAgPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+fTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4sPC9zcGFuPlxcbiAgZGF0YSA8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4oPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPik8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPns8L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBrZXl3b3JkXFxcIiA+cmV0dXJuPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID57PC9zcGFuPlxcbiAgICAgIG9wdGlvbnM8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID46PC9zcGFuPiBvcHRpb25zPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+LDwvc3Bhbj5cXG4gICAgICBkZWZhdWx0VmFsdWU8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID46PC9zcGFuPiBkZWZhdWx0VmFsdWVcXG4gICAgPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+fTwvc3Bhbj5cXG4gIDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPn08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+LDwvc3Bhbj5cXG4gIG1ldGhvZHM8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID46PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID57PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwidG9rZW4gZnVuY3Rpb25cXFwiID5zZWxlY3RDaGFuZ2U8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+KDwvc3Bhbj5zZWxlY3RlZFZhbHVlPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+LDwvc3Bhbj4gb3B0aW9uPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+KTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+ezwvc3Bhbj5cXG4gICAgICBjb25zb2xlPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Ljwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gZnVuY3Rpb25cXFwiID5sb2c8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+KDwvc3Bhbj5zZWxlY3RlZFZhbHVlPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+KTwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+fTwvc3Bhbj5cXG4gIDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPn08L3NwYW4+XFxuPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+fTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4pPC9zcGFuPlwiXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBcImNvZGVcIixcbiAgICAgICAgXCJ2YXIgb3B0aW9ucyA9IFt7XFxuICB2YWx1ZTogJ3poZWppYW5nJyxcXG4gIGxhYmVsOiAn5rWZ5rGfJyxcXG4gIGNoaWxkcmVuOiBbe1xcbiAgICB2YWx1ZTogJ2hhbmd6aG91JyxcXG4gICAgbGFiZWw6ICfmna3lt54nLFxcbiAgICBjaGlsZHJlbjogW3tcXG4gICAgICB2YWx1ZTogJ3hpaHUnLFxcbiAgICAgIGxhYmVsOiAn6KW/5rmWJyxcXG4gICAgfV0sXFxuICB9XSxcXG59LCB7XFxuICB2YWx1ZTogJ2ppYW5nc3UnLFxcbiAgbGFiZWw6ICfmsZ/oi48nLFxcbiAgY2hpbGRyZW46IFt7XFxuICAgIHZhbHVlOiAnbmFuamluZycsXFxuICAgIGxhYmVsOiAn5Y2X5LqsJyxcXG4gICAgY2hpbGRyZW46IFt7XFxuICAgICAgdmFsdWU6ICd6aG9uZ2h1YW1lbicsXFxuICAgICAgbGFiZWw6ICfkuK3ljY7pl6gnLFxcbiAgICB9XSxcXG4gIH1dLFxcbn1dXFxuXFxudmFyIGRlZmF1bHRWYWx1ZSA9IFsnemhlamlhbmcnLCAnaGFuZ3pob3UnLCAneGlodSddXFxuXFxubmV3IFZ1ZSh7XFxuICBlbDogJ2JvZHknLFxcbiAgY29tcG9uZW50czoge1xcbiAgICBjYXNjYWRlcjogYXR1aS5DYXNjYWRlclxcbiAgfSxcXG4gIGRhdGEgKCkge1xcbiAgICByZXR1cm4ge1xcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXFxuICAgICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0VmFsdWVcXG4gICAgfVxcbiAgfSxcXG4gIG1ldGhvZHM6IHtcXG4gICAgc2VsZWN0Q2hhbmdlKHNlbGVjdGVkVmFsdWUsIG9wdGlvbikge1xcbiAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkVmFsdWUpXFxuICAgIH1cXG4gIH1cXG59KVwiXG4gICAgICBdXG4gICAgXVxuICBdLFxuICBcIm1ldGFcIjoge1xuICAgIFwiY2F0ZWdvcnlcIjogXCJDb21wb25lbnRzXCIsXG4gICAgXCJ0eXBlXCI6IFwiRm9ybSBDb250cm9sc1wiLFxuICAgIFwidGl0bGVcIjogXCJDYXNjYWRlclwiLFxuICAgIFwic3VidGl0bGVcIjogXCLnuqfogZTpgInmi6nlmahcIixcbiAgICBcImZpbGVuYW1lXCI6IFwic3JjL2NvbXBvbmVudHMvQ2FzY2FkZXIvaW5kZXgubWRcIlxuICB9LFxuICBcInRvY1wiOiBbXG4gICAgXCJ1bFwiLFxuICAgIFtcbiAgICAgIFwibGlcIixcbiAgICAgIFtcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBcImhyZWZcIjogXCIj5L2/55So5YeG5aSHXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCLkvb/nlKjlh4blpIdcIlxuICAgICAgXVxuICAgIF0sXG4gICAgW1xuICAgICAgXCJsaVwiLFxuICAgICAgW1xuICAgICAgICBcImFcIixcbiAgICAgICAge1xuICAgICAgICAgIFwiaHJlZlwiOiBcIiNBUElcIlxuICAgICAgICB9LFxuICAgICAgICBcIkFQSVwiXG4gICAgICBdXG4gICAgXVxuICBdLFxuICBcImFwaVwiOiBbXG4gICAgXCJzZWN0aW9uXCIsXG4gICAgW1xuICAgICAgXCJoMlwiLFxuICAgICAgXCJBUElcIlxuICAgIF0sXG4gICAgW1xuICAgICAgXCJ0YWJsZVwiLFxuICAgICAgW1xuICAgICAgICBcInRoZWFkXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgW1xuICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgXCLlsZ7mgKdcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgXCLor7TmmI5cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgXCLnsbvlnotcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgXCJ0aFwiLFxuICAgICAgICAgICAgXCLpu5jorqTlgLxcIlxuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICBbXG4gICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgIFwib3B0aW9uc1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICBcIuaYvuekuueahOaegeiBlOaVsOaNrumAiemhue+8jOW/heS8oFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICBcIkFycmF5XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgIFwiW11cIlxuICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICBbXG4gICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICBcInBsYWNlaG9sZGVyXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgIFwi5Y2g5L2N56ymXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgIFwiU3RyaW5nXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgIFwi6K+36YCJ5oupXCJcbiAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgW1xuICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgXCJ3aWR0aFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICBcIuWuveW6plwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICBcIlN0cmluZ1wiXG4gICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgIFwiZGlzcGxheVJlbmRlclwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICBcIuaYvuekuuagvOW8j+W8j+WMluWHveaVsFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICBcIkZ1bmN0aW9uXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgIFwiZnVuY3Rpb24obGFiZWwpIHsgcmV0dXJuIGxhYmVsLmpvaW4oJyAvICcpIH1cIlxuICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICBbXG4gICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICBcImRlZmF1bHRWYWx1ZVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICBcIum7mOiupOaYvuekuueahOaVsOaNrlwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICBcIkFycmF5XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgIFwiW11cIlxuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgXVxuICAgIF1cbiAgXVxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL0Nhc2NhZGVyL2luZGV4Lm1kXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==