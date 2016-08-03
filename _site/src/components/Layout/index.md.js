webpackJsonp([82,161],{400:function(n,t){"use strict";n.exports={content:["section",["h2","\u4f55\u65f6\u4f7f\u7528"],["p","\u9875\u9762\u5e03\u5c40\u65f6\u4f7f\u7528\uff0c\u4f7f\u752824\u680f\u6805\u683c\u8bbe\u8ba1\uff0c\u5728Layout\u7ec4\u4ef6\u4e0b\u6709\u4e24\u4e2a\u5b50\u7ec4\u4ef6\uff0c\u5206\u522b\u662f",["code","Row"],"\u548c",["code","Col"],"\uff0c\u4ee3\u8868\u884c\u548c\u5217\uff0c\u7531\u4e8eCol\u662fHTML\u539f\u751f\u6807\u7b7e\uff0c\u6240\u4ee5\u4f7f\u7528\u65f6\u4e0d\u80fd\u4f7f\u7528Col\u6807\u7b7e\uff0c\u7528\u6cd5\u793a\u4f8b\uff1a"],["pre",{lang:"js",highlighted:'<span class="token keyword" >new</span> <span class="token class-name" >Vue</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  el<span class="token punctuation" >:</span> <span class="token string" >\'body\'</span><span class="token punctuation" >,</span>\n  components<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n    vRow<span class="token punctuation" >:</span> atui<span class="token punctuation" >.</span>Layout<span class="token punctuation" >.</span>Row<span class="token punctuation" >,</span>\n    vCol<span class="token punctuation" >:</span> atui<span class="token punctuation" >.</span>Layout<span class="token punctuation" >.</span>Col\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>'},["code","new Vue({\n  el: 'body',\n  components: {\n    vRow: atui.Layout.Row,\n    vCol: atui.Layout.Col\n  }\n})"]]],meta:{category:"Components",type:"Basic",title:"Layout",subtitle:"\u5e03\u5c40",cols:1,filename:"src/components/Layout/index.md"},toc:["ul",["li",["a",{href:"#\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"]],["li",["a",{href:"#API"},"API"]]],api:["section",["h2","API"],["h3","Layout.Row"],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody"]],["h3","Layout.Col"],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","span"],["td","\u6805\u683c\u6570\u91cf"],["td","String"],["td","1"]]]],["style","\n  #src-components-Layout-demo-basic .atui-row > div{\n    text-align: center;\n    line-height: 30px;\n    height: 30px;\n    background: #99EAD8;\n    margin-bottom: 10px;\n    background-clip: content-box;\n  }\n"]]}}});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0L2luZGV4Lm1kLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dC9pbmRleC5tZCJdLCJuYW1lcyI6WyJ3ZWJwYWNrSnNvbnAiLCI0MDAiLCJtb2R1bGUiLCJleHBvcnRzIiwiY29udGVudCIsImxhbmciLCJoaWdobGlnaHRlZCIsIm1ldGEiLCJjYXRlZ29yeSIsInR5cGUiLCJ0aXRsZSIsInN1YnRpdGxlIiwiY29scyIsImZpbGVuYW1lIiwidG9jIiwiaHJlZiIsImFwaSJdLCJtYXBwaW5ncyI6IkFBQUFBLGNBQWMsR0FBRyxNQUVYQyxJQUNBLFNBQVNDLEVBQVFDLEdBRXRCLFlDTERELEdBQU9DLFNBQ0xDLFNBQ0UsV0FFRSxLQUNBLDZCQUdBLElBQ0EsZ01BRUUsT0FDQSxPQUVGLFVBRUUsT0FDQSxPQUVGLCtNQUdBLE9BRUVDLEtBQVEsS0FDUkMsWUFBZSw4MUJBR2YsT0FDQSwrR0FJTkMsTUFDRUMsU0FBWSxhQUNaQyxLQUFRLFFBQ1JDLE1BQVMsU0FDVEMsU0FBWSxlQUNaQyxLQUFRLEVBQ1JDLFNBQVksa0NBRWRDLEtBQ0UsTUFFRSxNQUVFLEtBRUVDLEtBQVEsNkJBRVYsOEJBSUYsTUFFRSxLQUVFQSxLQUFRLFFBRVYsU0FJTkMsS0FDRSxXQUVFLEtBQ0EsUUFHQSxLQUNBLGVBR0EsU0FFRSxTQUVFLE1BRUUsS0FDQSxpQkFHQSxLQUNBLGlCQUdBLEtBQ0EsaUJBR0EsS0FDQSx5QkFLSixXQUlGLEtBQ0EsZUFHQSxTQUVFLFNBRUUsTUFFRSxLQUNBLGlCQUdBLEtBQ0EsaUJBR0EsS0FDQSxpQkFHQSxLQUNBLHlCQUtKLFNBRUUsTUFFRSxLQUNBLFNBR0EsS0FDQSw2QkFHQSxLQUNBLFdBR0EsS0FDQSxTQU1OLFFBQ0EiLCJmaWxlIjoic3JjL2NvbXBvbmVudHMvTGF5b3V0L2luZGV4Lm1kLmpzIiwic291cmNlc0NvbnRlbnQiOlsid2VicGFja0pzb25wKFs4MiwxNjFdLHtcblxuLyoqKi8gNDAwOlxuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IHtcblx0ICBcImNvbnRlbnRcIjogW1wic2VjdGlvblwiLCBbXCJoMlwiLCBcIuS9leaXtuS9v+eUqFwiXSwgW1wicFwiLCBcIumhtemdouW4g+WxgOaXtuS9v+eUqO+8jOS9v+eUqDI05qCP5qCF5qC86K6+6K6h77yM5ZyoTGF5b3V057uE5Lu25LiL5pyJ5Lik5Liq5a2Q57uE5Lu277yM5YiG5Yir5pivXCIsIFtcImNvZGVcIiwgXCJSb3dcIl0sIFwi5ZKMXCIsIFtcImNvZGVcIiwgXCJDb2xcIl0sIFwi77yM5Luj6KGo6KGM5ZKM5YiX77yM55Sx5LqOQ29s5pivSFRNTOWOn+eUn+agh+etvu+8jOaJgOS7peS9v+eUqOaXtuS4jeiDveS9v+eUqENvbOagh+etvu+8jOeUqOazleekuuS+i++8mlwiXSwgW1wicHJlXCIsIHtcblx0ICAgIFwibGFuZ1wiOiBcImpzXCIsXG5cdCAgICBcImhpZ2hsaWdodGVkXCI6IFwiPHNwYW4gY2xhc3M9XFxcInRva2VuIGtleXdvcmRcXFwiID5uZXc8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBjbGFzcy1uYW1lXFxcIiA+VnVlPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPig8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+ezwvc3Bhbj5cXG4gIGVsPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Ojwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInRva2VuIHN0cmluZ1xcXCIgPidib2R5Jzwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4sPC9zcGFuPlxcbiAgY29tcG9uZW50czxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPjo8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPns8L3NwYW4+XFxuICAgIHZSb3c8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID46PC9zcGFuPiBhdHVpPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Ljwvc3Bhbj5MYXlvdXQ8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4uPC9zcGFuPlJvdzxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPiw8L3NwYW4+XFxuICAgIHZDb2w8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID46PC9zcGFuPiBhdHVpPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Ljwvc3Bhbj5MYXlvdXQ8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4uPC9zcGFuPkNvbFxcbiAgPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+fTwvc3Bhbj5cXG48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID59PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPik8L3NwYW4+XCJcblx0ICB9LCBbXCJjb2RlXCIsIFwibmV3IFZ1ZSh7XFxuICBlbDogJ2JvZHknLFxcbiAgY29tcG9uZW50czoge1xcbiAgICB2Um93OiBhdHVpLkxheW91dC5Sb3csXFxuICAgIHZDb2w6IGF0dWkuTGF5b3V0LkNvbFxcbiAgfVxcbn0pXCJdXV0sXG5cdCAgXCJtZXRhXCI6IHtcblx0ICAgIFwiY2F0ZWdvcnlcIjogXCJDb21wb25lbnRzXCIsXG5cdCAgICBcInR5cGVcIjogXCJCYXNpY1wiLFxuXHQgICAgXCJ0aXRsZVwiOiBcIkxheW91dFwiLFxuXHQgICAgXCJzdWJ0aXRsZVwiOiBcIuW4g+WxgFwiLFxuXHQgICAgXCJjb2xzXCI6IDEsXG5cdCAgICBcImZpbGVuYW1lXCI6IFwic3JjL2NvbXBvbmVudHMvTGF5b3V0L2luZGV4Lm1kXCJcblx0ICB9LFxuXHQgIFwidG9jXCI6IFtcInVsXCIsIFtcImxpXCIsIFtcImFcIiwge1xuXHQgICAgXCJocmVmXCI6IFwiI+S9leaXtuS9v+eUqFwiXG5cdCAgfSwgXCLkvZXml7bkvb/nlKhcIl1dLCBbXCJsaVwiLCBbXCJhXCIsIHtcblx0ICAgIFwiaHJlZlwiOiBcIiNBUElcIlxuXHQgIH0sIFwiQVBJXCJdXV0sXG5cdCAgXCJhcGlcIjogW1wic2VjdGlvblwiLCBbXCJoMlwiLCBcIkFQSVwiXSwgW1wiaDNcIiwgXCJMYXlvdXQuUm93XCJdLCBbXCJ0YWJsZVwiLCBbXCJ0aGVhZFwiLCBbXCJ0clwiLCBbXCJ0aFwiLCBcIuWxnuaAp1wiXSwgW1widGhcIiwgXCLor7TmmI5cIl0sIFtcInRoXCIsIFwi57G75Z6LXCJdLCBbXCJ0aFwiLCBcIum7mOiupOWAvFwiXV1dLCBbXCJ0Ym9keVwiXV0sIFtcImgzXCIsIFwiTGF5b3V0LkNvbFwiXSwgW1widGFibGVcIiwgW1widGhlYWRcIiwgW1widHJcIiwgW1widGhcIiwgXCLlsZ7mgKdcIl0sIFtcInRoXCIsIFwi6K+05piOXCJdLCBbXCJ0aFwiLCBcIuexu+Wei1wiXSwgW1widGhcIiwgXCLpu5jorqTlgLxcIl1dXSwgW1widGJvZHlcIiwgW1widHJcIiwgW1widGRcIiwgXCJzcGFuXCJdLCBbXCJ0ZFwiLCBcIuagheagvOaVsOmHj1wiXSwgW1widGRcIiwgXCJTdHJpbmdcIl0sIFtcInRkXCIsIFwiMVwiXV1dXSwgW1wic3R5bGVcIiwgXCJcXG4gICNzcmMtY29tcG9uZW50cy1MYXlvdXQtZGVtby1iYXNpYyAuYXR1aS1yb3cgPiBkaXZ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYmFja2dyb3VuZDogIzk5RUFEODtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcXG4gIH1cXG5cIl1dXG5cdH07XG5cbi8qKiovIH1cblxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0L2luZGV4Lm1kLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiY29udGVudFwiOiBbXG4gICAgXCJzZWN0aW9uXCIsXG4gICAgW1xuICAgICAgXCJoMlwiLFxuICAgICAgXCLkvZXml7bkvb/nlKhcIlxuICAgIF0sXG4gICAgW1xuICAgICAgXCJwXCIsXG4gICAgICBcIumhtemdouW4g+WxgOaXtuS9v+eUqO+8jOS9v+eUqDI05qCP5qCF5qC86K6+6K6h77yM5ZyoTGF5b3V057uE5Lu25LiL5pyJ5Lik5Liq5a2Q57uE5Lu277yM5YiG5Yir5pivXCIsXG4gICAgICBbXG4gICAgICAgIFwiY29kZVwiLFxuICAgICAgICBcIlJvd1wiXG4gICAgICBdLFxuICAgICAgXCLlkoxcIixcbiAgICAgIFtcbiAgICAgICAgXCJjb2RlXCIsXG4gICAgICAgIFwiQ29sXCJcbiAgICAgIF0sXG4gICAgICBcIu+8jOS7o+ihqOihjOWSjOWIl++8jOeUseS6jkNvbOaYr0hUTUzljp/nlJ/moIfnrb7vvIzmiYDku6Xkvb/nlKjml7bkuI3og73kvb/nlKhDb2zmoIfnrb7vvIznlKjms5XnpLrkvovvvJpcIlxuICAgIF0sXG4gICAgW1xuICAgICAgXCJwcmVcIixcbiAgICAgIHtcbiAgICAgICAgXCJsYW5nXCI6IFwianNcIixcbiAgICAgICAgXCJoaWdobGlnaHRlZFwiOiBcIjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBrZXl3b3JkXFxcIiA+bmV3PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gY2xhc3MtbmFtZVxcXCIgPlZ1ZTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4oPC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPns8L3NwYW4+XFxuICBlbDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPjo8L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBzdHJpbmdcXFwiID4nYm9keSc8L3NwYW4+PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+LDwvc3Bhbj5cXG4gIGNvbXBvbmVudHM8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID46PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID57PC9zcGFuPlxcbiAgICB2Um93PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Ojwvc3Bhbj4gYXR1aTxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPi48L3NwYW4+TGF5b3V0PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Ljwvc3Bhbj5Sb3c8c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4sPC9zcGFuPlxcbiAgICB2Q29sPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Ojwvc3Bhbj4gYXR1aTxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPi48L3NwYW4+TGF5b3V0PHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+Ljwvc3Bhbj5Db2xcXG4gIDxzcGFuIGNsYXNzPVxcXCJ0b2tlbiBwdW5jdHVhdGlvblxcXCIgPn08L3NwYW4+XFxuPHNwYW4gY2xhc3M9XFxcInRva2VuIHB1bmN0dWF0aW9uXFxcIiA+fTwvc3Bhbj48c3BhbiBjbGFzcz1cXFwidG9rZW4gcHVuY3R1YXRpb25cXFwiID4pPC9zcGFuPlwiXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBcImNvZGVcIixcbiAgICAgICAgXCJuZXcgVnVlKHtcXG4gIGVsOiAnYm9keScsXFxuICBjb21wb25lbnRzOiB7XFxuICAgIHZSb3c6IGF0dWkuTGF5b3V0LlJvdyxcXG4gICAgdkNvbDogYXR1aS5MYXlvdXQuQ29sXFxuICB9XFxufSlcIlxuICAgICAgXVxuICAgIF1cbiAgXSxcbiAgXCJtZXRhXCI6IHtcbiAgICBcImNhdGVnb3J5XCI6IFwiQ29tcG9uZW50c1wiLFxuICAgIFwidHlwZVwiOiBcIkJhc2ljXCIsXG4gICAgXCJ0aXRsZVwiOiBcIkxheW91dFwiLFxuICAgIFwic3VidGl0bGVcIjogXCLluIPlsYBcIixcbiAgICBcImNvbHNcIjogMSxcbiAgICBcImZpbGVuYW1lXCI6IFwic3JjL2NvbXBvbmVudHMvTGF5b3V0L2luZGV4Lm1kXCJcbiAgfSxcbiAgXCJ0b2NcIjogW1xuICAgIFwidWxcIixcbiAgICBbXG4gICAgICBcImxpXCIsXG4gICAgICBbXG4gICAgICAgIFwiYVwiLFxuICAgICAgICB7XG4gICAgICAgICAgXCJocmVmXCI6IFwiI+S9leaXtuS9v+eUqFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwi5L2V5pe25L2/55SoXCJcbiAgICAgIF1cbiAgICBdLFxuICAgIFtcbiAgICAgIFwibGlcIixcbiAgICAgIFtcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBcImhyZWZcIjogXCIjQVBJXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJBUElcIlxuICAgICAgXVxuICAgIF1cbiAgXSxcbiAgXCJhcGlcIjogW1xuICAgIFwic2VjdGlvblwiLFxuICAgIFtcbiAgICAgIFwiaDJcIixcbiAgICAgIFwiQVBJXCJcbiAgICBdLFxuICAgIFtcbiAgICAgIFwiaDNcIixcbiAgICAgIFwiTGF5b3V0LlJvd1wiXG4gICAgXSxcbiAgICBbXG4gICAgICBcInRhYmxlXCIsXG4gICAgICBbXG4gICAgICAgIFwidGhlYWRcIixcbiAgICAgICAgW1xuICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICBbXG4gICAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgICBcIuWxnuaAp1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgICBcIuivtOaYjlwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgICBcIuexu+Wei1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgICBcIum7mOiupOWAvFwiXG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBcInRib2R5XCJcbiAgICAgIF1cbiAgICBdLFxuICAgIFtcbiAgICAgIFwiaDNcIixcbiAgICAgIFwiTGF5b3V0LkNvbFwiXG4gICAgXSxcbiAgICBbXG4gICAgICBcInRhYmxlXCIsXG4gICAgICBbXG4gICAgICAgIFwidGhlYWRcIixcbiAgICAgICAgW1xuICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICBbXG4gICAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgICBcIuWxnuaAp1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgICBcIuivtOaYjlwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgICBcIuexu+Wei1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgICBcIum7mOiupOWAvFwiXG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBcInRib2R5XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgW1xuICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgXCJzcGFuXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgIFwi5qCF5qC85pWw6YePXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgIFwiU3RyaW5nXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgIFwiMVwiXG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICBdXG4gICAgXSxcbiAgICBbXG4gICAgICBcInN0eWxlXCIsXG4gICAgICBcIlxcbiAgI3NyYy1jb21wb25lbnRzLUxheW91dC1kZW1vLWJhc2ljIC5hdHVpLXJvdyA+IGRpdntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjOTlFQUQ4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xcbiAgfVxcblwiXG4gICAgXVxuICBdXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L2luZGV4Lm1kXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==