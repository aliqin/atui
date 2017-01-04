---
category: Components
type: Navigation
title: Tabs
subtitle: 标签页
cols: 1
---


## 何时使用


## API


### Tabs

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
trigger | 触发事件类型 | String | click
base | 是否为基本类型 | Boolean | false
@change | 当前激活的tab发生变化时派发的事件 | Function(currActiveIndex) | |

### Tabs.Tab

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
header | 标签头内容 | String | |
disabled | 是否禁用 | Boolean | false
