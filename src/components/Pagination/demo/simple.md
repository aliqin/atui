---
order: 2
title:
  zh-CN: 简单版
  en-US: Type
---

## zh-CN



## en-US


````jsx
<pagination :total-page.sync="totalPage" :curr-page.sync="currPage" :total="total" simple></pagination>
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
