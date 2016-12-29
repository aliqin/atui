---
category: Components
type: Form Controls
title: Input
subtitle: 输入框
---


atui.Input

> 注意：input在HTML是原生标签，注册组件时请使用自定义组件比如vInput

## API



属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
prefix-cls | 样式前缀 | String | atui
placeholder | 占位提示 | String | 空 |
value | 输入域文本 | String | 空 |
large | 按钮组尺寸，大 | Boolean | false |
small | 按钮组尺寸，小 | Boolean | false |
error | 增加错误样式（不建议直接使用，推荐通过修改valid-status属性的值来控制） | Boolean | false |
success | 增加成功样式（不建议直接使用，推荐通过修改valid-status属性的值来控制） | Boolean | false |
warn | 增加警告样式（不建议直接使用，推荐通过修改valid-status属性的值来控制） | Boolean | false |
valid-status | 当前验证状态，如不设置，会根据验证规则自动生成 有三个状态可选：`error`,`success`,`warn` | String | 空 |
required | 规则验证，是否必填 | Boolean | false
requiredTips | 必填验证失败的提示文案 | String | 空
maxlength | 输入内容最大长度 | String | 空 |
minlength | 输入内容最小长度 | String | 空 |
minlengthTips | 最小长度验证失败的提示文案 | String | 空
rules | 验证规则 | Array | 空
rules-tips | 验证规则对应的验证失败时的提示文案 | Array | 空
valid-result | 所有验证规则校验后的验证结果，每项验证规则都对应着一个验证状态（success或者error），一个验证提示 | Object | 空
tips | 总的提示文案，如不配置，会根据rules和rules-tips自动生成 | String | 空


