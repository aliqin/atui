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
      defaultVal: '果',
      searchList: [
        {name: '水果', value: '1'},
        {name: '苹果', value: '2'},
        {name: '香蕉', value: '3'},
        {name: '人参果', value: '4'},
        {name: '草莓', value: '5'},
        {name: '芒果', value: '6'},
        {name: '干果', value: '11'},
        {name: '碧根果', value: '12'},
        {name: '腰果', value: '13'},
        {name: '核桃', value: '14'},
        {name: '杏仁', value: '15'},
        {name: '素材', value: '21'},
        {name: '香菜', value: '22'}
      ]
    }
  }
})
````
