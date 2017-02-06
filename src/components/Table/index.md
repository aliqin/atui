---
category: Components
chinese: 表格
cols: 1
type: Views
english: Table
---

展示行列数据。

## 何时使用

- 当有大量结构化的数据需要展现时；
- 当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。

## 如何使用

指定表格的数据源 `dataSource` 为一个数组。

```jsx
const dataSource = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}];

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}];

<v-table :data-source="dataSource" :columns="columns"></v-table>
```


## API

### Table

| 参数           | 说明                     | 类型             | 默认值   |
|---------------|--------------------------|-----------------|---------|
| rowSelection  | 列表项是否可选择，[配置项](#rowSelection) | Object  | null  |
| pagination    | 分页器，配置项参考 [pagination](/components/pagination)，设为 false 时不显示分页 | Object |  |
| size          | 正常或迷你类型，`default` or `small`  | String | default |
| noDataTip     | 当数据源为空时展示的文本，也可以给table传入名称为noDataTip的slot来自定义数据源为空时的展示 | String | |
| dataSource    | 数据数组 | Array |            |
| columns       | 表格列的配置描述，具体项见下表 | Array | - |
| rowKey        | 表格行 key 的取值，可以是字符串或一个函数 | String or Function(record, index):string | 'key' |
| @change      | 分页、排序、筛选变化时触发 | Function(pagination, filters, sorter) |  |
| @row-click    | 表格行点击事件 | Function(rowIndex, record) | |
| expandedRowRender    | 额外的展开行 | Function(record) | |
| rowExpandable | 决定该行是否可展开,返回false表示不支持展开 | Function(record, rowIndex) | |
| loading       | 页面是否加载中 | Boolean | false |


### Column

列描述数据对象，是 columns 中的一项。

| 参数       | 说明                       | 类型            |  默认值  |
|-----------|----------------------------|-----------------|---------|
| key        | React 需要的 key，建议设置 | String          | - |
| dataIndex  | 列数据在数据项中对应的 key，支持 `a.b.c` 的嵌套写法 | String | - |
| render     | 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，@return里面可以设置表格[行/列合并](#demo-colspan-rowspan) | Function(text, record, index) {} | - |
| filters    | 表头的筛选菜单项           | Array           | - |
| onFilter   | 确定筛选的运行函数,filterMultiple为true时value为数组,函数返回true表示该条记录通过筛选 | Function(value, record)    | - |
| filterMultiple | 是否多选 | Boolean    | true    |
| sorter     | 排序函数，本地排序使用一个函数，需要服务端排序可设为 true | Function or Boolean | - |
| width      | 列宽度 | String or Number | -  |
| className  | 列className | String  | -  |
| sortOrder | 排序的受控属性，外界可用此控制列的排序，可设置为 `'ascend'` `'descend'` `false` | Boolean or String | - |

### rowSelection

选择功能的配置。

| 参数              | 说明                     | 类型             |  默认值   |
|------------------|--------------------------|-----------------|---------------------|---------|
| type | 多选/单选，`checkbox` or `radio` | String | `checkbox`  |
| selectedRowKeys | 指定选中项的 key 数组，需要和 onChange 进行配合 | Array | []  |
| onChange | 选中项发生变化的时的回调 | Function(selectedRowKeys, selectedRows) | -   |
| getCheckboxProps | 选择框的默认属性配置        | Function(record) |  -   |
| onSelect | 用户手动选择/取消选择某列的回调         | Function(record, selected, selectedRows) |   -   |
| onSelectAll | 用户手动选择/取消选择所有列的回调    | Function(selected, selectedRows, changeRows) |   -   |

## 注意


