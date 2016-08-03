---
category: Components
type: Navigation
title: Menu
subtitle: 导航菜单
---


## 何时使用


## API

### Menu

| 参数     | 说明           | 类型     | 默认值       |
|----------|---------------|----------|--------------|
| mode | 菜单类型，现在支持垂直、水平、和内嵌模式三种 | String: `vertical` `horizontal` `inline` | `vertical` |
| selectedKey | 当前选中的菜单项 key  | String |      |
| openOne | 是否只打开一个面板 | Boolean | false

### Menu.Item

| 参数     | 说明           | 类型     | 默认值       |
|----------|----------------|----------|--------------|
| disabled    | 是否禁用 | Boolean   |  false  |
| key   | item 的唯一标志 |  String |  |

### Menu.SubMenu

| 参数     | 说明           | 类型     | 默认值       |
|----------|----------------|----------|--------------|
| disabled    | 是否禁用 | Boolean   |  false  |
| key | 唯一标志 |  String |  |
| title    | 子菜单项值 | String or React.Element   |    |

### Menu.MenuItemGroup

| 参数     | 说明           | 类型     | 默认值       |
|----------|----------------|----------|--------------|
| title    | 分组标题       | String or React.Element |    |
