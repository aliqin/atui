---
category: Components
type: Views
title: Calendar
subtitle: 日历
cols: 1

---


## 何时使用

基础的日历控件

## API


按钮的属性说明如下：

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
value | 默认值 | Date | 无 | 
format | 格式 | String | `yyyy-MM-dd` |
disabledDate | 禁用的日期 | Function | `function(){}` |
@change | 选择日期后的回调函数 | Function(dateStr, date) | `function(){}` |