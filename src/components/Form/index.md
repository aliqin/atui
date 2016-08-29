---
category: Components
type: Form Controls
title: Form
subtitle: 表单
cols: 1
---


## 何时使用


## API

### Form
属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
prefix-cls | 样式前缀 | String | atui

### Form.FormItem
属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
label | 表单元素标记 | String | 空
item-col | 以当前Form表单为准，表单信息项所占栅格列数 | String | 24，即占一行
label-col | 以当前表单信息项为准，表单元素标记所占栅格列数 | String | 7
wrapper-col | 以当前表单信息项为准，表单元素所占栅格列数 | String | 24 - labelCol
required | 是否在表单元素标记前加* | Boolean | false
tips | 表单信息项错误提示信息，有值才显示 | String | 空
valid-status | 验证状态，目前取值有success,warning,error和空 | String | 空
has-icon | 配合validateStatus属性使用，是否展示校验状态图标 | Boolean | false
prefix-cls | 样式前缀 | String | atui
tips-mode | 提示文案显示方式，目前取值有text（提示文案显示在输入域的下方）和popup（提示文案显示在输入域的右侧） | String | text
description | popup模式提示下，显示的输入提示，如果验证状态为error，则会显示错误提示文案 | String | 空

