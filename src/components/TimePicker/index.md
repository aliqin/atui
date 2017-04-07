---
category: Components
type: Form Controls
title: TimePicker
subtitle: 时间选择器
---

用户时分秒的选择，可以通过`v-model`绑定一个`Date`对象或者时间字符串（ex:'10:00:00'）

## 何时使用


## API


属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
value | 默认值,`Date`类型或`String`('10:00:00')| Date | `new Date()` | 
placeholder | 值为空时显示提示文字 | string | 请选择时间
disabled | 是否禁用 | boolean | false
disabledHours | 禁用的小时范围 | function | `function() { return [] }`
disabledMinutes | 禁用的分钟范围 | function | `function() { return [] }`
disabledSeconds | 禁用的秒钟范围 | function | `function() { return [] }`
