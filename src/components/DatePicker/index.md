---
category: Components
type: Form Controls
title: DatePicker
subtitle: 日期选择器
---



## 何时使用


## API

### DatePicker

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
value | 默认值,Date类型 | Date | `new Date()` | 
placeholder | 占位文字 | String | 请选择日期
disabled | 是否禁用 | Boolean | false
format | 格式 | String | yyyy-MM-dd
disabledDate | 禁用的日期 | Function | `function(){}`
locale | 语言 | String  `zh_CN` or  `en_US`| zh_CN



### DatePicker.RangePicker

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
startDate | 开始日期,如果不设置默认为今天 | Date | |
endDate | 结束日期,如果不设置默认为今天 | Date | |
disabled | 是否禁用 | Boolean | false
format | 格式 | String | yyyy-MM-dd
disabledStart | 禁用开始时间的部分日期 | Function | `(date) => { return false }` |
disabledEnd | 禁用结束时间的部分日期 | Function | `(date) => { return false }` |
