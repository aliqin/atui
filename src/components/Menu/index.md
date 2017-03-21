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
| uuid   | item 的唯一标志 |  String |  |

### Menu.SubMenu

| 参数     | 说明           | 类型     | 默认值       |
|----------|----------------|----------|--------------|
| disabled    | 是否禁用 | Boolean   |  false  |
| uuid | 唯一标志 |  String |  |
| title    | 子菜单项值 | String or React.Element   |    |

### Menu.MenuItemGroup

| 参数     | 说明           | 类型     | 默认值       |
|----------|----------------|----------|--------------|
| title    | 分组标题       | String or React.Element |    |

### Menu动态渲染的数据结构
```jsx
[
  {
    type: 'SubMenu',
    uuid: 'sub1',
    title: '导航一',
    children: [
      {
        type: 'MenuItemGroup',
        title: '分组1',
        uuid: 'sub1',
        children: [
          {
            type: 'MenuItem',
            uuid: '1',
            content: '选项1'
          },
          {
            type: 'MenuItem',
            uuid: '2',
            content: '选项2'
          }
        ]
      },
      {
        type: 'MenuItemGroup',
        title: '分组2',
        uuid: 'sub2',
        children: [
          {
            type: 'MenuItem',
            uuid: '3',
            content: '选项3'
          },
          {
            type: 'MenuItem',
            uuid: '4',
            content: '选项4'
          }
        ]
      }
    ]
  },
  {
    type: 'SubMenu',
    title: '导航二',
    uuid: 'sub2',
    children: [
      {
        type: 'MenuItem',
        uuid: '5',
        content: '选项5'
      },
      {
        type: 'MenuItem',
        uuid: '6',
        content: '选项6'
      },
      {
        type: 'SubMenu',
        uuid: 'sub3',
        title: '三级导航',
        children: [
          {
            type: 'MenuItem',
            uuid: '7',
            content: '选项7'
          },
          {
            type: 'MenuItem',
            uuid: '8',
            content: '选项8'
          }
        ]
      }
    ]
  }
]
```