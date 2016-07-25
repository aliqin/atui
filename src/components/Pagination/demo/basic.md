---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN



## en-US


````jsx
<pagination :total-page.sync="totalPage" :curr-page.sync="currPage" :total="total" :show-jumper="true" :show-size-changer="true"></pagination> <br/>
<pagination :total-page.sync="totalPage" :curr-page.sync="currPage" :total="total" :show-jumper="true" :mini="true"></pagination> <br/>
<pagination :total-page.sync="totalPage" :curr-page.sync="currPage" :total="total" :simple="true" class="custom"></pagination>
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
