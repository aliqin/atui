---
category: Components
type: Form Controls
title: Select
subtitle: 选择器
---


## 何时使用
可以使用v-model来绑定选中的值

## API
`Select`组件包含子组件 `Option`

### Select

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
value | 选中的值，当设置为多选时用Array | String / Array | |
placeholder | 占位提示 | String | |
multiple | 是否多选 | Boolean |  false |
selectedOptions | 多选时选中的options | [] |
tags | 是否输入变Tag | Boolean | false |
disabled | 是否禁用 | Boolean | false |
dropdownClassName | 下拉菜单的class名 | String | |
dropdownZIndex | 下拉菜单的zindex值 | Number | |

### Option
属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
value | 选项的值 | String | |
disabled | 是否禁用 | Boolean | |


