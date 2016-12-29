---
category: Components
type: Views
title: Modal
subtitle: 对话框
---


## 何时使用
需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
打开关闭弹窗可以通过控制show属性，注意父组件需要监听Modal的@close事件，在事件中把show属性置为false，也可以拿到Modal的引用，调用open() close()函数
另外当需要一个简洁的确认框询问用户时，可以使用精心封装好的 `atui.Modal.confirm()` 等方法。

## API


属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
title | 标题 | String |
width | ( 例如: `80%` 或 `5em` 或`500px` ) 如果不填那么就是自动宽 | String |
height | 最大高度目前设定的是500px | String |
backdrop | 如果想点击弹窗后面的蒙层关闭弹窗，则设置为`true` | Boolean | false
callback | 当点击主要按钮时触发的回调 | String |
large | 大的弹窗 | Boolean | false
small | 小的弹窗 | Boolean | false
show | 是否显示 | Boolean | true
