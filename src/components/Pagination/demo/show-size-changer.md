---
order: 1
title:
  zh-CN: 页码改变与跳转功能
  en-US: Type
---

## zh-CN



## en-US


````jsx
<pagination :curr-page="currPage" :total="total" show-jumper show-size-changer></pagination>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    pagination: atui.Pagination
  },
  data: function() {
    return {
      currPage: 3,
      total: 273
    }
  }
})
````
