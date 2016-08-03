webpackJsonp([54,161],{428:function(t,e){"use strict";t.exports={content:["section",["h2","\u4f55\u65f6\u4f7f\u7528"]],meta:{category:"Components",type:"Form Controls",title:"Select",subtitle:"\u9009\u62e9\u5668",filename:"src/components/Select/index.md"},toc:["ul",["li",["a",{href:"#\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"]],["li",["a",{href:"#API"},"API"]]],api:["section",["h2","API"],["p",["code","Select"],"\u7ec4\u4ef6\u5305\u542b\u5b50\u7ec4\u4ef6 ",["code","Option"]],["h3","Select"],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","value"],["td","\u9009\u4e2d\u7684\u503c\uff0c\u5f53\u8bbe\u7f6e\u4e3a\u591a\u9009\u65f6\u7528Array"],["td","String / Array"],["td"]],["tr",["td","placeholder"],["td","\u5360\u4f4d\u63d0\u793a"],["td","String"],["td"]],["tr",["td","multiple"],["td","\u662f\u5426\u591a\u9009"],["td","Boolean"],["td","false"]],["tr",["td","tags"],["td","\u662f\u5426\u8f93\u5165\u53d8Tag"],["td","Boolean"],["td","false"]],["tr",["td","disabled"],["td","\u662f\u5426\u7981\u7528"],["td","Boolean"],["td","false"]]]],["h3","Option"],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","value"],["td","\u9009\u9879\u7684\u503c"],["td","String"],["td"]],["tr",["td","disabled"],["td","\u662f\u5426\u7981\u7528"],["td","Boolean"],["td"]]]]]}}});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvU2VsZWN0L2luZGV4Lm1kLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlbGVjdC9pbmRleC5tZCJdLCJuYW1lcyI6WyJ3ZWJwYWNrSnNvbnAiLCI0MjgiLCJtb2R1bGUiLCJleHBvcnRzIiwiY29udGVudCIsIm1ldGEiLCJjYXRlZ29yeSIsInR5cGUiLCJ0aXRsZSIsInN1YnRpdGxlIiwiZmlsZW5hbWUiLCJ0b2MiLCJocmVmIiwiYXBpIl0sIm1hcHBpbmdzIjoiQUFBQUEsY0FBYyxHQUFHLE1BRVhDLElBQ0EsU0FBU0MsRUFBUUMsR0FFdEIsWUNMREQsR0FBT0MsU0FDTEMsU0FDRSxXQUVFLEtBQ0EsNkJBR0pDLE1BQ0VDLFNBQVksYUFDWkMsS0FBUSxnQkFDUkMsTUFBUyxTQUNUQyxTQUFZLHFCQUNaQyxTQUFZLGtDQUVkQyxLQUNFLE1BRUUsTUFFRSxLQUVFQyxLQUFRLDZCQUVWLDhCQUlGLE1BRUUsS0FFRUEsS0FBUSxRQUVWLFNBSU5DLEtBQ0UsV0FFRSxLQUNBLFFBR0EsS0FFRSxPQUNBLFVBRUYsK0NBRUUsT0FDQSxZQUlGLEtBQ0EsV0FHQSxTQUVFLFNBRUUsTUFFRSxLQUNBLGlCQUdBLEtBQ0EsaUJBR0EsS0FDQSxpQkFHQSxLQUNBLHlCQUtKLFNBRUUsTUFFRSxLQUNBLFVBR0EsS0FDQSx3RkFHQSxLQUNBLG1CQUdBLFFBSUYsTUFFRSxLQUNBLGdCQUdBLEtBQ0EsNkJBR0EsS0FDQSxXQUdBLFFBSUYsTUFFRSxLQUNBLGFBR0EsS0FDQSw2QkFHQSxLQUNBLFlBR0EsS0FDQSxXQUlGLE1BRUUsS0FDQSxTQUdBLEtBQ0Esc0NBR0EsS0FDQSxZQUdBLEtBQ0EsV0FJRixNQUVFLEtBQ0EsYUFHQSxLQUNBLDZCQUdBLEtBQ0EsWUFHQSxLQUNBLGFBTU4sS0FDQSxXQUdBLFNBRUUsU0FFRSxNQUVFLEtBQ0EsaUJBR0EsS0FDQSxpQkFHQSxLQUNBLGlCQUdBLEtBQ0EseUJBS0osU0FFRSxNQUVFLEtBQ0EsVUFHQSxLQUNBLDZCQUdBLEtBQ0EsV0FHQSxRQUlGLE1BRUUsS0FDQSxhQUdBLEtBQ0EsNkJBR0EsS0FDQSxZQUdBIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL1NlbGVjdC9pbmRleC5tZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIndlYnBhY2tKc29ucChbNTQsMTYxXSx7XG5cbi8qKiovIDQyODpcbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXHRcblx0bW9kdWxlLmV4cG9ydHMgPSB7XG5cdCAgXCJjb250ZW50XCI6IFtcInNlY3Rpb25cIiwgW1wiaDJcIiwgXCLkvZXml7bkvb/nlKhcIl1dLFxuXHQgIFwibWV0YVwiOiB7XG5cdCAgICBcImNhdGVnb3J5XCI6IFwiQ29tcG9uZW50c1wiLFxuXHQgICAgXCJ0eXBlXCI6IFwiRm9ybSBDb250cm9sc1wiLFxuXHQgICAgXCJ0aXRsZVwiOiBcIlNlbGVjdFwiLFxuXHQgICAgXCJzdWJ0aXRsZVwiOiBcIumAieaLqeWZqFwiLFxuXHQgICAgXCJmaWxlbmFtZVwiOiBcInNyYy9jb21wb25lbnRzL1NlbGVjdC9pbmRleC5tZFwiXG5cdCAgfSxcblx0ICBcInRvY1wiOiBbXCJ1bFwiLCBbXCJsaVwiLCBbXCJhXCIsIHtcblx0ICAgIFwiaHJlZlwiOiBcIiPkvZXml7bkvb/nlKhcIlxuXHQgIH0sIFwi5L2V5pe25L2/55SoXCJdXSwgW1wibGlcIiwgW1wiYVwiLCB7XG5cdCAgICBcImhyZWZcIjogXCIjQVBJXCJcblx0ICB9LCBcIkFQSVwiXV1dLFxuXHQgIFwiYXBpXCI6IFtcInNlY3Rpb25cIiwgW1wiaDJcIiwgXCJBUElcIl0sIFtcInBcIiwgW1wiY29kZVwiLCBcIlNlbGVjdFwiXSwgXCLnu4Tku7bljIXlkKvlrZDnu4Tku7YgXCIsIFtcImNvZGVcIiwgXCJPcHRpb25cIl1dLCBbXCJoM1wiLCBcIlNlbGVjdFwiXSwgW1widGFibGVcIiwgW1widGhlYWRcIiwgW1widHJcIiwgW1widGhcIiwgXCLlsZ7mgKdcIl0sIFtcInRoXCIsIFwi6K+05piOXCJdLCBbXCJ0aFwiLCBcIuexu+Wei1wiXSwgW1widGhcIiwgXCLpu5jorqTlgLxcIl1dXSwgW1widGJvZHlcIiwgW1widHJcIiwgW1widGRcIiwgXCJ2YWx1ZVwiXSwgW1widGRcIiwgXCLpgInkuK3nmoTlgLzvvIzlvZPorr7nva7kuLrlpJrpgInml7bnlKhBcnJheVwiXSwgW1widGRcIiwgXCJTdHJpbmcgLyBBcnJheVwiXSwgW1widGRcIl1dLCBbXCJ0clwiLCBbXCJ0ZFwiLCBcInBsYWNlaG9sZGVyXCJdLCBbXCJ0ZFwiLCBcIuWNoOS9jeaPkOekulwiXSwgW1widGRcIiwgXCJTdHJpbmdcIl0sIFtcInRkXCJdXSwgW1widHJcIiwgW1widGRcIiwgXCJtdWx0aXBsZVwiXSwgW1widGRcIiwgXCLmmK/lkKblpJrpgIlcIl0sIFtcInRkXCIsIFwiQm9vbGVhblwiXSwgW1widGRcIiwgXCJmYWxzZVwiXV0sIFtcInRyXCIsIFtcInRkXCIsIFwidGFnc1wiXSwgW1widGRcIiwgXCLmmK/lkKbovpPlhaXlj5hUYWdcIl0sIFtcInRkXCIsIFwiQm9vbGVhblwiXSwgW1widGRcIiwgXCJmYWxzZVwiXV0sIFtcInRyXCIsIFtcInRkXCIsIFwiZGlzYWJsZWRcIl0sIFtcInRkXCIsIFwi5piv5ZCm56aB55SoXCJdLCBbXCJ0ZFwiLCBcIkJvb2xlYW5cIl0sIFtcInRkXCIsIFwiZmFsc2VcIl1dXV0sIFtcImgzXCIsIFwiT3B0aW9uXCJdLCBbXCJ0YWJsZVwiLCBbXCJ0aGVhZFwiLCBbXCJ0clwiLCBbXCJ0aFwiLCBcIuWxnuaAp1wiXSwgW1widGhcIiwgXCLor7TmmI5cIl0sIFtcInRoXCIsIFwi57G75Z6LXCJdLCBbXCJ0aFwiLCBcIum7mOiupOWAvFwiXV1dLCBbXCJ0Ym9keVwiLCBbXCJ0clwiLCBbXCJ0ZFwiLCBcInZhbHVlXCJdLCBbXCJ0ZFwiLCBcIumAiemhueeahOWAvFwiXSwgW1widGRcIiwgXCJTdHJpbmdcIl0sIFtcInRkXCJdXSwgW1widHJcIiwgW1widGRcIiwgXCJkaXNhYmxlZFwiXSwgW1widGRcIiwgXCLmmK/lkKbnpoHnlKhcIl0sIFtcInRkXCIsIFwiQm9vbGVhblwiXSwgW1widGRcIl1dXV1dXG5cdH07XG5cbi8qKiovIH1cblxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvU2VsZWN0L2luZGV4Lm1kLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiY29udGVudFwiOiBbXG4gICAgXCJzZWN0aW9uXCIsXG4gICAgW1xuICAgICAgXCJoMlwiLFxuICAgICAgXCLkvZXml7bkvb/nlKhcIlxuICAgIF1cbiAgXSxcbiAgXCJtZXRhXCI6IHtcbiAgICBcImNhdGVnb3J5XCI6IFwiQ29tcG9uZW50c1wiLFxuICAgIFwidHlwZVwiOiBcIkZvcm0gQ29udHJvbHNcIixcbiAgICBcInRpdGxlXCI6IFwiU2VsZWN0XCIsXG4gICAgXCJzdWJ0aXRsZVwiOiBcIumAieaLqeWZqFwiLFxuICAgIFwiZmlsZW5hbWVcIjogXCJzcmMvY29tcG9uZW50cy9TZWxlY3QvaW5kZXgubWRcIlxuICB9LFxuICBcInRvY1wiOiBbXG4gICAgXCJ1bFwiLFxuICAgIFtcbiAgICAgIFwibGlcIixcbiAgICAgIFtcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBcImhyZWZcIjogXCIj5L2V5pe25L2/55SoXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCLkvZXml7bkvb/nlKhcIlxuICAgICAgXVxuICAgIF0sXG4gICAgW1xuICAgICAgXCJsaVwiLFxuICAgICAgW1xuICAgICAgICBcImFcIixcbiAgICAgICAge1xuICAgICAgICAgIFwiaHJlZlwiOiBcIiNBUElcIlxuICAgICAgICB9LFxuICAgICAgICBcIkFQSVwiXG4gICAgICBdXG4gICAgXVxuICBdLFxuICBcImFwaVwiOiBbXG4gICAgXCJzZWN0aW9uXCIsXG4gICAgW1xuICAgICAgXCJoMlwiLFxuICAgICAgXCJBUElcIlxuICAgIF0sXG4gICAgW1xuICAgICAgXCJwXCIsXG4gICAgICBbXG4gICAgICAgIFwiY29kZVwiLFxuICAgICAgICBcIlNlbGVjdFwiXG4gICAgICBdLFxuICAgICAgXCLnu4Tku7bljIXlkKvlrZDnu4Tku7YgXCIsXG4gICAgICBbXG4gICAgICAgIFwiY29kZVwiLFxuICAgICAgICBcIk9wdGlvblwiXG4gICAgICBdXG4gICAgXSxcbiAgICBbXG4gICAgICBcImgzXCIsXG4gICAgICBcIlNlbGVjdFwiXG4gICAgXSxcbiAgICBbXG4gICAgICBcInRhYmxlXCIsXG4gICAgICBbXG4gICAgICAgIFwidGhlYWRcIixcbiAgICAgICAgW1xuICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICBbXG4gICAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgICBcIuWxnuaAp1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgICBcIuivtOaYjlwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgICBcIuexu+Wei1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgICBcIum7mOiupOWAvFwiXG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBcInRib2R5XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgW1xuICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgXCJ2YWx1ZVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICBcIumAieS4reeahOWAvO+8jOW9k+iuvue9ruS4uuWkmumAieaXtueUqEFycmF5XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgIFwiU3RyaW5nIC8gQXJyYXlcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgXCJ0ZFwiXG4gICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgIFwicGxhY2Vob2xkZXJcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgXCLljaDkvY3mj5DnpLpcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgXCJTdHJpbmdcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgXCJ0ZFwiXG4gICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgIFwibXVsdGlwbGVcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgXCLmmK/lkKblpJrpgIlcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgXCJCb29sZWFuXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgIFwiZmFsc2VcIlxuICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICBbXG4gICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICBcInRhZ3NcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgXCLmmK/lkKbovpPlhaXlj5hUYWdcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgXCJCb29sZWFuXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgIFwiZmFsc2VcIlxuICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICBbXG4gICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICBcImRpc2FibGVkXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgIFwi5piv5ZCm56aB55SoXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgIFwiQm9vbGVhblwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICBcImZhbHNlXCJcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIF1cbiAgICBdLFxuICAgIFtcbiAgICAgIFwiaDNcIixcbiAgICAgIFwiT3B0aW9uXCJcbiAgICBdLFxuICAgIFtcbiAgICAgIFwidGFibGVcIixcbiAgICAgIFtcbiAgICAgICAgXCJ0aGVhZFwiLFxuICAgICAgICBbXG4gICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICAgIFwi5bGe5oCnXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICAgIFwi6K+05piOXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICAgIFwi57G75Z6LXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICAgIFwi6buY6K6k5YC8XCJcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgW1xuICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICBbXG4gICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICBcInZhbHVlXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgIFwi6YCJ6aG555qE5YC8XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgIFwiU3RyaW5nXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIFwidGRcIlxuICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICBbXG4gICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICBcImRpc2FibGVkXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgIFwi5piv5ZCm56aB55SoXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgIFwiQm9vbGVhblwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBcInRkXCJcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIF1cbiAgICBdXG4gIF1cbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvY29tcG9uZW50cy9TZWxlY3QvaW5kZXgubWRcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9