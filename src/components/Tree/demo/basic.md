---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN



## en-US


````jsx
<v-tree :data-source="dataSource" ref="myTree" @expand="onExpand"></v-tree>
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
    vTree: atui.Tree
  },
  data: {
    dataSource: treeData
  },
  methods: {
    onExpand () {
      console.log(arguments)
    }
  }
})
````
