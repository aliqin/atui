---
category: Components
type: Basic
title: Layout
subtitle: 布局
cols: 1
---


## 何时使用
页面布局时使用，使用24栏栅格设计，在Layout组件下有两个子组件，分别是`Row`和`Col`，代表行和列，由于Col是HTML原生标签，所以使用时不能使用Col标签，用法示例：

```js
new Vue({
  el: 'body',
  components: {
    vRow: atui.Layout.Row,
    vCol: atui.Layout.Col
  }
})
```

## API


### Layout.Row

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------

### Layout.Col

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
span | 栅格数量 | String | 1



<style>
  #src-components-Layout-demo-basic .atui-row > div{
    text-align: center;
    line-height: 30px;
    height: 30px;
    background: #99EAD8;
    margin-bottom: 10px;
    background-clip: content-box;
  }
</style>
