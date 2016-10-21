---
category: Components
type: Views
title: Searchbox
subtitle: 搜索条
---


## 何时使用
```
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
  },
  methods: {
    valueChange (val) {
      console.log(val);
    },
    valueCheck (item) {
      console.log(item);
    }
  }
})
```

## API


按钮的属性说明如下：

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
placeholder | 占位提示 | String | |
searchList | 搜索候选提示列表 | Array | []

