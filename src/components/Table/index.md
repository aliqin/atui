---
category: Components
type: Views
title: Table
subtitle: 表格
cols: 1
---


## 何时使用


## API


### Table

| 参数           | 说明                     | 类型             | 默认值   |
|---------------|--------------------------|-----------------|---------|
| rowSelection  | 列表项是否可选择，[配置项](#rowSelection) | Object  | null  |
| pagination    | 分页器，配置项参考 [pagination](/src/components/Pagination)，设为 false 时不显示分页 | Object |  |
| size          | 正常或迷你类型，`default` or `small`  | String | default |
| dataSource    | 数据数组 | Array |            |
| columns       | 表格列的配置描述，具体项见下表 | Array | - |
| rowKey        | 表格行 key 的取值，可以是字符串或一个函数 | String or Function(record, index):string | 'key' |
| onChange      | 分页、排序、筛选变化时触发 | Function(pagination, filters, sorter) |  |
| loading       | 页面是否加载中 | Boolean | false |
