---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN



## en-US


````jsx
<tree :data-source="dataSource"></tree>
````

````vue-script
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
    dataSource: treeData
  }
})
````
