---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN



## en-US


````jsx
<pagination :curr-page="currPage" :total="total"></pagination>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    pagination: atui.Pagination
  },
  data: function() {
    return {
      totalPage: 10,
      currPage: 2,
      total: 273
    }
  }
})
````
