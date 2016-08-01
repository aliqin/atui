---
order: 1
title:
  zh-CN: 页码改变与跳转功能
  en-US: Type
---

## zh-CN



## en-US


````jsx
<pagination :total-page.sync="totalPage" :curr-page.sync="currPage" :total="total" show-jumper show-size-changer></pagination>
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
