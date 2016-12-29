---
category: Components
type: Views
title: Tree
subtitle: 树形控件
---


## 何时使用
组件必须绑定数据，格式如下：
```js
let treeData = {
  name: 'My Tree',
  children: [
    { name: 'hello' },
    { name: 'wat' },
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        },
        { name: 'hello' },
        { name: 'wat' },
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        }
      ]
    }
  ]
}

new Vue({
  el: 'body',
  components: {
    tree: atui.Tree
  },
  data: {
    return {
      dataSource: treeData
    }
  }
})
```

## API


### Tree

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
dataSource | 数据源 | Object | |
@expand | 展开/收起事件 | Function(status, model) | |


