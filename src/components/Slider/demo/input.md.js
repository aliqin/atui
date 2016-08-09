webpackJsonp([52,163],{432:function(n,a){"use strict";n.exports={content:{"zh-CN":[],"en-US":[]},meta:{order:0,title:{"zh-CN":"\u5e26\u6709\u8f93\u5165\u6846\u7684\u6ed1\u5757","en-US":"Type"},filename:"src/components/Slider/demo/input.md",id:"src-components-Slider-demo-input"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>v-row</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>v-col</span> <span class="token attr-name" >span</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>14<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>slider</span> <span class="token attr-name" >:value.sync</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>sliderValue<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>slider</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>v-col</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>v-col</span> <span class="token attr-name" >span</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>10<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>v-input</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>text<span class="token punctuation" >"</span></span> <span class="token attr-name" >:value.sync</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>sliderValue<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>v-input</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>v-col</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>v-row</span><span class="token punctuation" >></span></span>'}],preview:'<v-row>\n  <v-col span="14">\n    <slider :value.sync="sliderValue"></slider>\n  </v-col>\n  <v-col span="10">\n    <v-input type="text" :value.sync="sliderValue"></v-input>\n  </v-col>\n</v-row>',vueScript:"new Vue({\n  el: 'body',\n  components: {\n    slider: atui.Slider,\n    vRow: atui.Layout.Row,\n    vCol: atui.Layout.Col,\n    vInput: atui.Input\n  },\n  data: {\n    sliderValue : 5\n  }\n})"}}});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvU2xpZGVyL2RlbW8vaW5wdXQubWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2xpZGVyL2RlbW8vaW5wdXQubWQiXSwibmFtZXMiOlsid2VicGFja0pzb25wIiwiNDMyIiwibW9kdWxlIiwiZXhwb3J0cyIsImNvbnRlbnQiLCJ6aC1DTiIsImVuLVVTIiwibWV0YSIsIm9yZGVyIiwidGl0bGUiLCJmaWxlbmFtZSIsImlkIiwidG9jIiwiaHJlZiIsImhpZ2hsaWdodGVkQ29kZSIsImxhbmciLCJoaWdobGlnaHRlZCIsInByZXZpZXciLCJ2dWVTY3JpcHQiXSwibWFwcGluZ3MiOiJBQUFBQSxjQUFjLEdBQUcsTUFFWEMsSUFDQSxTQUFTQyxFQUFRQyxHQUV0QixZQ0xERCxHQUFPQyxTQUNMQyxTQUNFQyxXQUNBQyxZQUVGQyxNQUNFQyxNQUFTLEVBQ1RDLE9BQ0VKLFFBQVMsbURBQ1RDLFFBQVMsUUFFWEksU0FBWSxzQ0FDWkMsR0FBTSxvQ0FFUkMsS0FDRSxNQUVFLE1BRUUsS0FFRUMsS0FBUSxVQUVWLFdBSUYsTUFFRSxLQUVFQSxLQUFRLFVBRVYsV0FJTkMsaUJBQ0UsT0FFRUMsS0FBUSxNQUNSQyxZQUFlLCtsRkFHbkJDLFFBQVcsc01BQ1hDLFVBQWEiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvU2xpZGVyL2RlbW8vaW5wdXQubWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3ZWJwYWNrSnNvbnAoWzUyLDE2M10se1xuXG4vKioqLyA0MzI6XG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRcInVzZSBzdHJpY3RcIjtcblx0XG5cdG1vZHVsZS5leHBvcnRzID0ge1xuXHQgIFwiY29udGVudFwiOiB7XG5cdCAgICBcInpoLUNOXCI6IFtdLFxuXHQgICAgXCJlbi1VU1wiOiBbXVxuXHQgIH0sXG5cdCAgXCJtZXRhXCI6IHtcblx0ICAgIFwib3JkZXJcIjogMCxcblx0ICAgIFwidGl0bGVcIjoge1xuXHQgICAgICBcInpoLUNOXCI6IFwi5bim5pyJ6L6T5YWl5qGG55qE5ruR5Z2XXCIsXG5cdCAgICAgIFwiZW4tVVNcIjogXCJUeXBlXCJcblx0ICAgIH0sXG5cdCAgICBcImZpbGVuYW1lXCI6IFwic3JjL2NvbXBvbmVudHMvU2xpZGVyL2RlbW8vaW5wdXQubWRcIixcblx0ICAgIFwiaWRcIjogXCJzcmMtY29tcG9uZW50cy1TbGlkZXItZGVtby1pbnB1dFwiXG5cdCAgfSxcblx0ICBcInRvY1wiOiBbXCJ1bFwiLCBbXCJsaVwiLCBbXCJhXCIsIHtcblx0ICAgIFwiaHJlZlwiOiBcIiN6aC1DTlwiXG5cdCAgfSwgXCJ6aC1DTlwiXV0sIFtcImxpXCIsIFtcImFcIiwge1xuXHQgICAgXCJocmVmXCI6IFwiI2VuLVVTXCJcblx0ICB9LCBcImVuLVVTXCJdXV0sXG5cdCAgXCJoaWdobGlnaHRlZENvZGVcIjogW1wicHJlXCIsIHtcblx0ICAgIFwibGFuZ1wiOiBcImpzeFwiLFxuXHQgICAgXCJoaWdobGlnaHRlZFwiOiBcIjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Jmx0Ozwvc3Bhbj52LXJvdzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4+PC9zcGFuPjwvc3Bhbj5cXG4gIDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Jmx0Ozwvc3Bhbj52LWNvbDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItbmFtZVxcXCIgPnNwYW48L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItdmFsdWVcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID49PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPlxcXCI8L3NwYW4+MTQ8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5cXFwiPC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4+PC9zcGFuPjwvc3Bhbj5cXG4gICAgPHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4mbHQ7PC9zcGFuPnNsaWRlcjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItbmFtZVxcXCIgPjp2YWx1ZS5zeW5jPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLXZhbHVlXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+PTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5cXFwiPC9zcGFuPnNsaWRlclZhbHVlPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XFxcIjwvc3Bhbj48L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Pjwvc3Bhbj48L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4mbHQ7Lzwvc3Bhbj5zbGlkZXI8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Pjwvc3Bhbj48L3NwYW4+XFxuICA8c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiZsdDsvPC9zcGFuPnYtY29sPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPj48L3NwYW4+PC9zcGFuPlxcbiAgPHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4mbHQ7PC9zcGFuPnYtY29sPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci1uYW1lXFxcIiA+c3Bhbjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci12YWx1ZVxcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPj08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XFxcIjwvc3Bhbj4xMDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPlxcXCI8L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPj48L3NwYW4+PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiZsdDs8L3NwYW4+di1pbnB1dDwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItbmFtZVxcXCIgPnR5cGU8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItdmFsdWVcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID49PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPlxcXCI8L3NwYW4+dGV4dDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPlxcXCI8L3NwYW4+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci1uYW1lXFxcIiA+OnZhbHVlLnN5bmM8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItdmFsdWVcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID49PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPlxcXCI8L3NwYW4+c2xpZGVyVmFsdWU8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5cXFwiPC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4+PC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiZsdDsvPC9zcGFuPnYtaW5wdXQ8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Pjwvc3Bhbj48L3NwYW4+XFxuICA8c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiZsdDsvPC9zcGFuPnYtY29sPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPj48L3NwYW4+PC9zcGFuPlxcbjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Jmx0Oy88L3NwYW4+di1yb3c8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Pjwvc3Bhbj48L3NwYW4+XCJcblx0ICB9XSxcblx0ICBcInByZXZpZXdcIjogXCI8di1yb3c+XFxuICA8di1jb2wgc3Bhbj1cXFwiMTRcXFwiPlxcbiAgICA8c2xpZGVyIDp2YWx1ZS5zeW5jPVxcXCJzbGlkZXJWYWx1ZVxcXCI+PC9zbGlkZXI+XFxuICA8L3YtY29sPlxcbiAgPHYtY29sIHNwYW49XFxcIjEwXFxcIj5cXG4gICAgPHYtaW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgOnZhbHVlLnN5bmM9XFxcInNsaWRlclZhbHVlXFxcIj48L3YtaW5wdXQ+XFxuICA8L3YtY29sPlxcbjwvdi1yb3c+XCIsXG5cdCAgXCJ2dWVTY3JpcHRcIjogXCJuZXcgVnVlKHtcXG4gIGVsOiAnYm9keScsXFxuICBjb21wb25lbnRzOiB7XFxuICAgIHNsaWRlcjogYXR1aS5TbGlkZXIsXFxuICAgIHZSb3c6IGF0dWkuTGF5b3V0LlJvdyxcXG4gICAgdkNvbDogYXR1aS5MYXlvdXQuQ29sLFxcbiAgICB2SW5wdXQ6IGF0dWkuSW5wdXRcXG4gIH0sXFxuICBkYXRhOiB7XFxuICAgIHNsaWRlclZhbHVlIDogNVxcbiAgfVxcbn0pXCJcblx0fTtcblxuLyoqKi8gfVxuXG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9TbGlkZXIvZGVtby9pbnB1dC5tZC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImNvbnRlbnRcIjoge1xuICAgIFwiemgtQ05cIjogW10sXG4gICAgXCJlbi1VU1wiOiBbXVxuICB9LFxuICBcIm1ldGFcIjoge1xuICAgIFwib3JkZXJcIjogMCxcbiAgICBcInRpdGxlXCI6IHtcbiAgICAgIFwiemgtQ05cIjogXCLluKbmnInovpPlhaXmoYbnmoTmu5HlnZdcIixcbiAgICAgIFwiZW4tVVNcIjogXCJUeXBlXCJcbiAgICB9LFxuICAgIFwiZmlsZW5hbWVcIjogXCJzcmMvY29tcG9uZW50cy9TbGlkZXIvZGVtby9pbnB1dC5tZFwiLFxuICAgIFwiaWRcIjogXCJzcmMtY29tcG9uZW50cy1TbGlkZXItZGVtby1pbnB1dFwiXG4gIH0sXG4gIFwidG9jXCI6IFtcbiAgICBcInVsXCIsXG4gICAgW1xuICAgICAgXCJsaVwiLFxuICAgICAgW1xuICAgICAgICBcImFcIixcbiAgICAgICAge1xuICAgICAgICAgIFwiaHJlZlwiOiBcIiN6aC1DTlwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiemgtQ05cIlxuICAgICAgXVxuICAgIF0sXG4gICAgW1xuICAgICAgXCJsaVwiLFxuICAgICAgW1xuICAgICAgICBcImFcIixcbiAgICAgICAge1xuICAgICAgICAgIFwiaHJlZlwiOiBcIiNlbi1VU1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZW4tVVNcIlxuICAgICAgXVxuICAgIF1cbiAgXSxcbiAgXCJoaWdobGlnaHRlZENvZGVcIjogW1xuICAgIFwicHJlXCIsXG4gICAge1xuICAgICAgXCJsYW5nXCI6IFwianN4XCIsXG4gICAgICBcImhpZ2hsaWdodGVkXCI6IFwiPHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4mbHQ7PC9zcGFuPnYtcm93PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPj48L3NwYW4+PC9zcGFuPlxcbiAgPHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4mbHQ7PC9zcGFuPnYtY29sPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci1uYW1lXFxcIiA+c3Bhbjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci12YWx1ZVxcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPj08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XFxcIjwvc3Bhbj4xNDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPlxcXCI8L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPj48L3NwYW4+PC9zcGFuPlxcbiAgICA8c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiZsdDs8L3NwYW4+c2xpZGVyPC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci1uYW1lXFxcIiA+OnZhbHVlLnN5bmM8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIGF0dHItdmFsdWVcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID49PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPlxcXCI8L3NwYW4+c2xpZGVyVmFsdWU8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5cXFwiPC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4+PC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiZsdDsvPC9zcGFuPnNsaWRlcjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4+PC9zcGFuPjwvc3Bhbj5cXG4gIDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Jmx0Oy88L3NwYW4+di1jb2w8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Pjwvc3Bhbj48L3NwYW4+XFxuICA8c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiZsdDs8L3NwYW4+di1jb2w8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLW5hbWVcXFwiID5zcGFuPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLXZhbHVlXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+PTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID5cXFwiPC9zcGFuPjEwPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XFxcIjwvc3Bhbj48L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Pjwvc3Bhbj48L3NwYW4+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Jmx0Ozwvc3Bhbj52LWlucHV0PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci1uYW1lXFxcIiA+dHlwZTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci12YWx1ZVxcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPj08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XFxcIjwvc3Bhbj50ZXh0PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XFxcIjwvc3Bhbj48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBhdHRyLW5hbWVcXFwiID46dmFsdWUuc3luYzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gYXR0ci12YWx1ZVxcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPj08L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+XFxcIjwvc3Bhbj5zbGlkZXJWYWx1ZTxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPlxcXCI8L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPj48L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Jmx0Oy88L3NwYW4+di1pbnB1dDwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4+PC9zcGFuPjwvc3Bhbj5cXG4gIDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gdGFnXFxcIiA+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Jmx0Oy88L3NwYW4+di1jb2w8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Pjwvc3Bhbj48L3NwYW4+XFxuPHNwYW4gY2xhc3M9XFxcInRva2VuIHRhZ1xcXCIgPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiB0YWdcXFwiID48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4mbHQ7Lzwvc3Bhbj52LXJvdzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4+PC9zcGFuPjwvc3Bhbj5cIlxuICAgIH1cbiAgXSxcbiAgXCJwcmV2aWV3XCI6IFwiPHYtcm93PlxcbiAgPHYtY29sIHNwYW49XFxcIjE0XFxcIj5cXG4gICAgPHNsaWRlciA6dmFsdWUuc3luYz1cXFwic2xpZGVyVmFsdWVcXFwiPjwvc2xpZGVyPlxcbiAgPC92LWNvbD5cXG4gIDx2LWNvbCBzcGFuPVxcXCIxMFxcXCI+XFxuICAgIDx2LWlucHV0IHR5cGU9XFxcInRleHRcXFwiIDp2YWx1ZS5zeW5jPVxcXCJzbGlkZXJWYWx1ZVxcXCI+PC92LWlucHV0PlxcbiAgPC92LWNvbD5cXG48L3Ytcm93PlwiLFxuICBcInZ1ZVNjcmlwdFwiOiBcIm5ldyBWdWUoe1xcbiAgZWw6ICdib2R5JyxcXG4gIGNvbXBvbmVudHM6IHtcXG4gICAgc2xpZGVyOiBhdHVpLlNsaWRlcixcXG4gICAgdlJvdzogYXR1aS5MYXlvdXQuUm93LFxcbiAgICB2Q29sOiBhdHVpLkxheW91dC5Db2wsXFxuICAgIHZJbnB1dDogYXR1aS5JbnB1dFxcbiAgfSxcXG4gIGRhdGE6IHtcXG4gICAgc2xpZGVyVmFsdWUgOiA1XFxuICB9XFxufSlcIlxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb21wb25lbnRzL1NsaWRlci9kZW1vL2lucHV0Lm1kXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==