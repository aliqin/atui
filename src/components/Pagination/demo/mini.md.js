webpackJsonp([66,161],{416:function(n,a){"use strict";n.exports={content:{"zh-CN":[],"en-US":[]},meta:{order:0,title:{"zh-CN":"\u8ff7\u4f60\u7248","en-US":"Type"},filename:"src/components/Pagination/demo/mini.md",id:"src-components-Pagination-demo-mini"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>pagination</span> <span class="token attr-name" >:total-page.sync</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>totalPage<span class="token punctuation" >"</span></span> <span class="token attr-name" >:curr-page.sync</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>currPage<span class="token punctuation" >"</span></span> <span class="token attr-name" >mini</span> <span class="token attr-name" >:total</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>total<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>pagination</span><span class="token punctuation" >></span></span>'}],preview:'<pagination :total-page.sync="totalPage" :curr-page.sync="currPage" mini :total="total"></pagination>',vueScript:"new Vue({\n  el: 'body',\n  components: {\n    pagination: atui.Pagination\n  },\n  data: function() {\n    return {\n      totalPage: 10,\n      currPage: 2,\n      total: 273\n    }\n  }\n})"}}});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvUGFnaW5hdGlvbi9kZW1vL21pbmkubWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUGFnaW5hdGlvbi9kZW1vL21pbmkubWQiXSwibmFtZXMiOlsid2VicGFja0pzb25wIiwiNDE2IiwibW9kdWxlIiwiZXhwb3J0cyIsImNvbnRlbnQiLCJ6aC1DTiIsImVuLVVTIiwibWV0YSIsIm9yZGVyIiwidGl0bGUiLCJmaWxlbmFtZSIsImlkIiwidG9jIiwiaHJlZiIsImhpZ2hsaWdodGVkQ29kZSIsImxhbmciLCJoaWdobGlnaHRlZCIsInByZXZpZXciLCJ2dWVTY3JpcHQiXSwibWFwcGluZ3MiOiJBQUFBQSxjQUFjLEdBQUcsTUFFWEMsSUFDQSxTQUFTQyxFQUFRQyxHQUV0QixZQ0xERCxHQUFPQyxTQUNMQyxTQUNFQyxXQUNBQyxZQUVGQyxNQUNFQyxNQUFTLEVBQ1RDLE9BQ0VKLFFBQVMscUJBQ1RDLFFBQVMsUUFFWEksU0FBWSx5Q0FDWkMsR0FBTSx1Q0FFUkMsS0FDRSxNQUVFLE1BRUUsS0FFRUMsS0FBUSxVQUVWLFdBSUYsTUFFRSxLQUVFQSxLQUFRLFVBRVYsV0FJTkMsaUJBQ0UsT0FFRUMsS0FBUSxNQUNSQyxZQUFlLHFnQ0FHbkJDLFFBQVcsd0dBQ1hDLFVBQWEiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvUGFnaW5hdGlvbi9kZW1vL21pbmkubWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3ZWJwYWNrSnNvbnAoWzY2LDE2MV0se1xuXG4vKioqLyA0MTY6XG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0XG5cdG1vZHVsZS5leHBvcnRzID0ge1xuXHQgIFwiY29udGVudFwiOiB7XG5cdCAgICBcInpoLUNOXCI6IFtdLFxuXHQgICAgXCJlbi1VU1wiOiBbXVxuXHQgIH0sXG5cdCAgXCJtZXRhXCI6IHtcblx0ICAgIFwib3JkZXJcIjogMCxcblx0ICAgIFwidGl0bGVcIjoge1xuXHQgICAgICBcInpoLUNOXCI6IFwi6L+35L2g54mIXCIsXG5cdCAgICAgIFwiZW4tVVNcIjogXCJUeXBlXCJcblx0ICAgIH0sXG5cdCAgICBcImZpbGVuYW1lXCI6IFwic3JjL2NvbXBvbmVudHMvUGFnaW5hdGlvbi9kZW1vL21pbmkubWRcIixcblx0ICAgIFwiaWRcIjogXCJzcmMtY29tcG9uZW50cy1QYWdpbmF0aW9uLWRlbW8tbWluaVwiXG5cdCAgfSxcblx0ICBcInRvY1wiOiBbXCJ1bFwiLCBbXCJsaVwiLCBbXCJhXCIsIHtcblx0ICAgIFwiaHJlZlwiOiBcIiN6aC1DTlwiXG5cdCAgfSwgXCJ6aC1DTlwiXV0sIFtcImxpXCIsIFtcImFcIiwge1xuXHQgICAgXCJocmVmXCI6IFwiI2VuLVVTXCJcblx0ICB9LCBcImVuLVVTXCJdXV0sXG5cdCAgXCJoaWdobGlnaHRlZENvZGVcIjogW1wicHJlXCIsIHtcblx0ICAgIFwibGFuZ1wiOiBcImpzeFwiLFxuXHQgICAgXCJoaWdobGlnaHRlZFwiOiBcIjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Jmx0Ozwvc3Bhbj5wYWdpbmF0aW9uPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci1uYW1lXFxcIiA+OnRvdGFsLXBhZ2Uuc3luYzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci12YWx1ZVxcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPj08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XFxcIjwvc3Bhbj50b3RhbFBhZ2U8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5cXFwiPC9zcGFuPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItbmFtZVxcXCIgPjpjdXJyLXBhZ2Uuc3luYzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci12YWx1ZVxcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPj08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XFxcIjwvc3Bhbj5jdXJyUGFnZTxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPlxcXCI8L3NwYW4+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci1uYW1lXFxcIiA+bWluaTwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItbmFtZVxcXCIgPjp0b3RhbDwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci12YWx1ZVxcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPj08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XFxcIjwvc3Bhbj50b3RhbDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPlxcXCI8L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPj48L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Jmx0Oy88L3NwYW4+cGFnaW5hdGlvbjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4+PC9zcGFuPjwvc3Bhbj5cIlxuXHQgIH1dLFxuXHQgIFwicHJldmlld1wiOiBcIjxwYWdpbmF0aW9uIDp0b3RhbC1wYWdlLnN5bmM9XFxcInRvdGFsUGFnZVxcXCIgOmN1cnItcGFnZS5zeW5jPVxcXCJjdXJyUGFnZVxcXCIgbWluaSA6dG90YWw9XFxcInRvdGFsXFxcIj48L3BhZ2luYXRpb24+XCIsXG5cdCAgXCJ2dWVTY3JpcHRcIjogXCJuZXcgVnVlKHtcXG4gIGVsOiAnYm9keScsXFxuICBjb21wb25lbnRzOiB7XFxuICAgIHBhZ2luYXRpb246IGF0dWkuUGFnaW5hdGlvblxcbiAgfSxcXG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xcbiAgICByZXR1cm4ge1xcbiAgICAgIHRvdGFsUGFnZTogMTAsXFxuICAgICAgY3VyclBhZ2U6IDIsXFxuICAgICAgdG90YWw6IDI3M1xcbiAgICB9XFxuICB9XFxufSlcIlxuXHR9O1xuXG4vKioqLyB9XG5cbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1BhZ2luYXRpb24vZGVtby9taW5pLm1kLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiY29udGVudFwiOiB7XG4gICAgXCJ6aC1DTlwiOiBbXSxcbiAgICBcImVuLVVTXCI6IFtdXG4gIH0sXG4gIFwibWV0YVwiOiB7XG4gICAgXCJvcmRlclwiOiAwLFxuICAgIFwidGl0bGVcIjoge1xuICAgICAgXCJ6aC1DTlwiOiBcIui/t+S9oOeJiFwiLFxuICAgICAgXCJlbi1VU1wiOiBcIlR5cGVcIlxuICAgIH0sXG4gICAgXCJmaWxlbmFtZVwiOiBcInNyYy9jb21wb25lbnRzL1BhZ2luYXRpb24vZGVtby9taW5pLm1kXCIsXG4gICAgXCJpZFwiOiBcInNyYy1jb21wb25lbnRzLVBhZ2luYXRpb24tZGVtby1taW5pXCJcbiAgfSxcbiAgXCJ0b2NcIjogW1xuICAgIFwidWxcIixcbiAgICBbXG4gICAgICBcImxpXCIsXG4gICAgICBbXG4gICAgICAgIFwiYVwiLFxuICAgICAgICB7XG4gICAgICAgICAgXCJocmVmXCI6IFwiI3poLUNOXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJ6aC1DTlwiXG4gICAgICBdXG4gICAgXSxcbiAgICBbXG4gICAgICBcImxpXCIsXG4gICAgICBbXG4gICAgICAgIFwiYVwiLFxuICAgICAgICB7XG4gICAgICAgICAgXCJocmVmXCI6IFwiI2VuLVVTXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJlbi1VU1wiXG4gICAgICBdXG4gICAgXVxuICBdLFxuICBcImhpZ2hsaWdodGVkQ29kZVwiOiBbXG4gICAgXCJwcmVcIixcbiAgICB7XG4gICAgICBcImxhbmdcIjogXCJqc3hcIixcbiAgICAgIFwiaGlnaGxpZ2h0ZWRcIjogXCI8c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiZsdDs8L3NwYW4+cGFnaW5hdGlvbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItbmFtZVxcXCIgPjp0b3RhbC1wYWdlLnN5bmM8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItdmFsdWVcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID49PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPlxcXCI8L3NwYW4+dG90YWxQYWdlPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XFxcIjwvc3Bhbj48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLW5hbWVcXFwiID46Y3Vyci1wYWdlLnN5bmM8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItdmFsdWVcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID49PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPlxcXCI8L3NwYW4+Y3VyclBhZ2U8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5cXFwiPC9zcGFuPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItbmFtZVxcXCIgPm1pbmk8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLW5hbWVcXFwiID46dG90YWw8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItdmFsdWVcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID49PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPlxcXCI8L3NwYW4+dG90YWw8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5cXFwiPC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4+PC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiZsdDsvPC9zcGFuPnBhZ2luYXRpb248L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Pjwvc3Bhbj48L3NwYW4+XCJcbiAgICB9XG4gIF0sXG4gIFwicHJldmlld1wiOiBcIjxwYWdpbmF0aW9uIDp0b3RhbC1wYWdlLnN5bmM9XFxcInRvdGFsUGFnZVxcXCIgOmN1cnItcGFnZS5zeW5jPVxcXCJjdXJyUGFnZVxcXCIgbWluaSA6dG90YWw9XFxcInRvdGFsXFxcIj48L3BhZ2luYXRpb24+XCIsXG4gIFwidnVlU2NyaXB0XCI6IFwibmV3IFZ1ZSh7XFxuICBlbDogJ2JvZHknLFxcbiAgY29tcG9uZW50czoge1xcbiAgICBwYWdpbmF0aW9uOiBhdHVpLlBhZ2luYXRpb25cXG4gIH0sXFxuICBkYXRhOiBmdW5jdGlvbigpIHtcXG4gICAgcmV0dXJuIHtcXG4gICAgICB0b3RhbFBhZ2U6IDEwLFxcbiAgICAgIGN1cnJQYWdlOiAyLFxcbiAgICAgIHRvdGFsOiAyNzNcXG4gICAgfVxcbiAgfVxcbn0pXCJcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9QYWdpbmF0aW9uL2RlbW8vbWluaS5tZFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=