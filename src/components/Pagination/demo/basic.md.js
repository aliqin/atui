webpackJsonp([67,163],{417:function(n,a){"use strict";n.exports={content:{"zh-CN":[],"en-US":[]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Type"},filename:"src/components/Pagination/demo/basic.md",id:"src-components-Pagination-demo-basic"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>pagination</span> <span class="token attr-name" >:total-page.sync</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>totalPage<span class="token punctuation" >"</span></span> <span class="token attr-name" >:curr-page.sync</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>currPage<span class="token punctuation" >"</span></span> <span class="token attr-name" >:total</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>total<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>pagination</span><span class="token punctuation" >></span></span>'}],preview:'<pagination :total-page.sync="totalPage" :curr-page.sync="currPage" :total="total"></pagination>',vueScript:"new Vue({\n  el: 'body',\n  components: {\n    pagination: atui.Pagination\n  },\n  data: function() {\n    return {\n      totalPage: 10,\n      currPage: 2,\n      total: 273\n    }\n  }\n})"}}});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvUGFnaW5hdGlvbi9kZW1vL2Jhc2ljLm1kLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1BhZ2luYXRpb24vZGVtby9iYXNpYy5tZCJdLCJuYW1lcyI6WyJ3ZWJwYWNrSnNvbnAiLCI0MTciLCJtb2R1bGUiLCJleHBvcnRzIiwiY29udGVudCIsInpoLUNOIiwiZW4tVVMiLCJtZXRhIiwib3JkZXIiLCJ0aXRsZSIsImZpbGVuYW1lIiwiaWQiLCJ0b2MiLCJocmVmIiwiaGlnaGxpZ2h0ZWRDb2RlIiwibGFuZyIsImhpZ2hsaWdodGVkIiwicHJldmlldyIsInZ1ZVNjcmlwdCJdLCJtYXBwaW5ncyI6IkFBQUFBLGNBQWMsR0FBRyxNQUVYQyxJQUNBLFNBQVNDLEVBQVFDLEdBRXRCLFlDTERELEdBQU9DLFNBQ0xDLFNBQ0VDLFdBQ0FDLFlBRUZDLE1BQ0VDLE1BQVMsRUFDVEMsT0FDRUosUUFBUyxlQUNUQyxRQUFTLFFBRVhJLFNBQVksMENBQ1pDLEdBQU0sd0NBRVJDLEtBQ0UsTUFFRSxNQUVFLEtBRUVDLEtBQVEsVUFFVixXQUlGLE1BRUUsS0FFRUEsS0FBUSxVQUVWLFdBSU5DLGlCQUNFLE9BRUVDLEtBQVEsTUFDUkMsWUFBZSwwOUJBR25CQyxRQUFXLG1HQUNYQyxVQUFhIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL1BhZ2luYXRpb24vZGVtby9iYXNpYy5tZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIndlYnBhY2tKc29ucChbNjcsMTYzXSx7XG5cbi8qKiovIDQxNzpcbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSB7XG5cdCAgXCJjb250ZW50XCI6IHtcblx0ICAgIFwiemgtQ05cIjogW10sXG5cdCAgICBcImVuLVVTXCI6IFtdXG5cdCAgfSxcblx0ICBcIm1ldGFcIjoge1xuXHQgICAgXCJvcmRlclwiOiAwLFxuXHQgICAgXCJ0aXRsZVwiOiB7XG5cdCAgICAgIFwiemgtQ05cIjogXCLln7rmnKxcIixcblx0ICAgICAgXCJlbi1VU1wiOiBcIlR5cGVcIlxuXHQgICAgfSxcblx0ICAgIFwiZmlsZW5hbWVcIjogXCJzcmMvY29tcG9uZW50cy9QYWdpbmF0aW9uL2RlbW8vYmFzaWMubWRcIixcblx0ICAgIFwiaWRcIjogXCJzcmMtY29tcG9uZW50cy1QYWdpbmF0aW9uLWRlbW8tYmFzaWNcIlxuXHQgIH0sXG5cdCAgXCJ0b2NcIjogW1widWxcIiwgW1wibGlcIiwgW1wiYVwiLCB7XG5cdCAgICBcImhyZWZcIjogXCIjemgtQ05cIlxuXHQgIH0sIFwiemgtQ05cIl1dLCBbXCJsaVwiLCBbXCJhXCIsIHtcblx0ICAgIFwiaHJlZlwiOiBcIiNlbi1VU1wiXG5cdCAgfSwgXCJlbi1VU1wiXV1dLFxuXHQgIFwiaGlnaGxpZ2h0ZWRDb2RlXCI6IFtcInByZVwiLCB7XG5cdCAgICBcImxhbmdcIjogXCJqc3hcIixcblx0ICAgIFwiaGlnaGxpZ2h0ZWRcIjogXCI8c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiZsdDs8L3NwYW4+cGFnaW5hdGlvbjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItbmFtZVxcXCIgPjp0b3RhbC1wYWdlLnN5bmM8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItdmFsdWVcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID49PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPlxcXCI8L3NwYW4+dG90YWxQYWdlPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XFxcIjwvc3Bhbj48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLW5hbWVcXFwiID46Y3Vyci1wYWdlLnN5bmM8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItdmFsdWVcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID49PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPlxcXCI8L3NwYW4+Y3VyclBhZ2U8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5cXFwiPC9zcGFuPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItbmFtZVxcXCIgPjp0b3RhbDwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci12YWx1ZVxcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPj08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XFxcIjwvc3Bhbj50b3RhbDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPlxcXCI8L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPj48L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Jmx0Oy88L3NwYW4+cGFnaW5hdGlvbjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4+PC9zcGFuPjwvc3Bhbj5cIlxuXHQgIH1dLFxuXHQgIFwicHJldmlld1wiOiBcIjxwYWdpbmF0aW9uIDp0b3RhbC1wYWdlLnN5bmM9XFxcInRvdGFsUGFnZVxcXCIgOmN1cnItcGFnZS5zeW5jPVxcXCJjdXJyUGFnZVxcXCIgOnRvdGFsPVxcXCJ0b3RhbFxcXCI+PC9wYWdpbmF0aW9uPlwiLFxuXHQgIFwidnVlU2NyaXB0XCI6IFwibmV3IFZ1ZSh7XFxuICBlbDogJ2JvZHknLFxcbiAgY29tcG9uZW50czoge1xcbiAgICBwYWdpbmF0aW9uOiBhdHVpLlBhZ2luYXRpb25cXG4gIH0sXFxuICBkYXRhOiBmdW5jdGlvbigpIHtcXG4gICAgcmV0dXJuIHtcXG4gICAgICB0b3RhbFBhZ2U6IDEwLFxcbiAgICAgIGN1cnJQYWdlOiAyLFxcbiAgICAgIHRvdGFsOiAyNzNcXG4gICAgfVxcbiAgfVxcbn0pXCJcblx0fTtcblxuLyoqKi8gfVxuXG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9QYWdpbmF0aW9uL2RlbW8vYmFzaWMubWQuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJjb250ZW50XCI6IHtcbiAgICBcInpoLUNOXCI6IFtdLFxuICAgIFwiZW4tVVNcIjogW11cbiAgfSxcbiAgXCJtZXRhXCI6IHtcbiAgICBcIm9yZGVyXCI6IDAsXG4gICAgXCJ0aXRsZVwiOiB7XG4gICAgICBcInpoLUNOXCI6IFwi5Z+65pysXCIsXG4gICAgICBcImVuLVVTXCI6IFwiVHlwZVwiXG4gICAgfSxcbiAgICBcImZpbGVuYW1lXCI6IFwic3JjL2NvbXBvbmVudHMvUGFnaW5hdGlvbi9kZW1vL2Jhc2ljLm1kXCIsXG4gICAgXCJpZFwiOiBcInNyYy1jb21wb25lbnRzLVBhZ2luYXRpb24tZGVtby1iYXNpY1wiXG4gIH0sXG4gIFwidG9jXCI6IFtcbiAgICBcInVsXCIsXG4gICAgW1xuICAgICAgXCJsaVwiLFxuICAgICAgW1xuICAgICAgICBcImFcIixcbiAgICAgICAge1xuICAgICAgICAgIFwiaHJlZlwiOiBcIiN6aC1DTlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiemgtQ05cIlxuICAgICAgXVxuICAgIF0sXG4gICAgW1xuICAgICAgXCJsaVwiLFxuICAgICAgW1xuICAgICAgICBcImFcIixcbiAgICAgICAge1xuICAgICAgICAgIFwiaHJlZlwiOiBcIiNlbi1VU1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZW4tVVNcIlxuICAgICAgXVxuICAgIF1cbiAgXSxcbiAgXCJoaWdobGlnaHRlZENvZGVcIjogW1xuICAgIFwicHJlXCIsXG4gICAge1xuICAgICAgXCJsYW5nXCI6IFwianN4XCIsXG4gICAgICBcImhpZ2hsaWdodGVkXCI6IFwiPHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4mbHQ7PC9zcGFuPnBhZ2luYXRpb248L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLW5hbWVcXFwiID46dG90YWwtcGFnZS5zeW5jPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLXZhbHVlXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+PTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5cXFwiPC9zcGFuPnRvdGFsUGFnZTxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPlxcXCI8L3NwYW4+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci1uYW1lXFxcIiA+OmN1cnItcGFnZS5zeW5jPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLXZhbHVlXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+PTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5cXFwiPC9zcGFuPmN1cnJQYWdlPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XFxcIjwvc3Bhbj48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLW5hbWVcXFwiID46dG90YWw8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItdmFsdWVcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID49PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPlxcXCI8L3NwYW4+dG90YWw8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5cXFwiPC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4+PC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiZsdDsvPC9zcGFuPnBhZ2luYXRpb248L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Pjwvc3Bhbj48L3NwYW4+XCJcbiAgICB9XG4gIF0sXG4gIFwicHJldmlld1wiOiBcIjxwYWdpbmF0aW9uIDp0b3RhbC1wYWdlLnN5bmM9XFxcInRvdGFsUGFnZVxcXCIgOmN1cnItcGFnZS5zeW5jPVxcXCJjdXJyUGFnZVxcXCIgOnRvdGFsPVxcXCJ0b3RhbFxcXCI+PC9wYWdpbmF0aW9uPlwiLFxuICBcInZ1ZVNjcmlwdFwiOiBcIm5ldyBWdWUoe1xcbiAgZWw6ICdib2R5JyxcXG4gIGNvbXBvbmVudHM6IHtcXG4gICAgcGFnaW5hdGlvbjogYXR1aS5QYWdpbmF0aW9uXFxuICB9LFxcbiAgZGF0YTogZnVuY3Rpb24oKSB7XFxuICAgIHJldHVybiB7XFxuICAgICAgdG90YWxQYWdlOiAxMCxcXG4gICAgICBjdXJyUGFnZTogMixcXG4gICAgICB0b3RhbDogMjczXFxuICAgIH1cXG4gIH1cXG59KVwiXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvUGFnaW5hdGlvbi9kZW1vL2Jhc2ljLm1kXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==