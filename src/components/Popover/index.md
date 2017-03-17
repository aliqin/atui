---
category: Components
type: Views
title: Popover
subtitle: 气泡卡片
---


## 何时使用


## API


按钮的属性说明如下：

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
trigger | 触发事件 | String | click
placement | 汽泡位置 | String | 参考Trigger组件
title | 标题 | String |  |
content | 内容 | String |  |
visible | 用于手动控制浮层显隐 | Boolean | false
showHeader | 是否显示标题 | Boolean | true
alwaysShow | 是否一直显示 | Boolean | false
popCls | 弹出层额外的class | String | |
popZIndex | 弹出层的zindex | number | |
@pop-change | pop弹出状态变化时派发pop-change事件，参数为true或false，表示是否展示 | Function | |