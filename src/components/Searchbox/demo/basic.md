---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN



## en-US


````jsx
<searchbox placeholder="请输入关键词搜索" :value.sync="defaultVal" :search-list="searchList" text-field="name"></searchbox>
````

````vue-script
new Vue({
    el: 'body',
    components: {
        searchbox: atui.Searchbox
    },
    data: function() {
        return {
            defaultVal: '大米'
        }
    }
})
````
