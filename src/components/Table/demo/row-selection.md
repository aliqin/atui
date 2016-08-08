---
order: 1
title:
  zh-CN: 可选择
  en-US: Type
---

## zh-CN

row-selection属性可增加选择功能

```js
const rowSelection = {
  getCheckboxProps (record) {
    return {
      disabled: record.name === '胡彦祖'
    }
  },
  onChange (selectedRowKeys, selectedRows) {
    console.log('rowSelection.onChange',selectedRowKeys, selectedRows)
  },
  onSelect (record, selected, selectedRows) {
    console.log('rowSelection.onSelect',record, selected, selectedRows)
  },
  onSelectAll (selected, selectedRows, changeRows) {
    console.log('rowSelection.onSelectAll',selected, selectedRows, changeRows)
  }
}
```
## en-US


````jsx
<v-table :data-source="gridData" :columns="gridColumns" :row-selection="rowSelection" row-key="key" @table-change="onTableChange" :loading="loading"></v-table>
````

````vue-script
var columns = [{
  title: '姓名',
  dataIndex: 'name',
  filters: [{
    text: '姓李的的',
    value: '李',
  }, {
    text: '姓胡的',
    value: '胡',
  }],
  sorter:true,
  width:150
}, {
  title: '年龄',
  dataIndex: 'age',
  sorter: function(a, b) { return a.age - b.age },
  render: function(text, record, index) {
    return '<input v-model="gridData['+ index +'].age"/>'
  },
  width:250
}, {
  title: '地址',
  dataIndex: 'address',
  filters: [{
    text: '南湖',
    value: '南湖',
  }, {
    text: '西湖',
    value: '西湖',
  }],
  filterMultiple: false,
  width:250

},{
    title: '操作',
    key: 'operation',
    render: function(text, record) {
      if(record) {
        return '<icon type="info"></icon><a href="'+ record.key+'.html" target="_blank">详情</a>'
      }
    }
  }
];

var data = [{
  key: '1',
  name: '胡斌',
  age: 32,
  address: '南湖区湖底公园1号',
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园12号',
}, {
  key: '3',
  name: '李大嘴',
  age: 32,
  address: '南湖区湖底公园123号',
}, {
  key: '4',
  name: '李秀莲大嘴哥',
  age: 32,
  address: '西湖区湖底公园123号',
},
{
  key: '5',
  name: '刘德华',
  age: 54,
  address: '西湖区湖底公园999号',
},
{
  key: '6',
  name: '洪金宝',
  age: 66,
  address: '香港弥敦道4',
}];

// 配置选择数据的选项

var rowSelection = {
  getCheckboxProps: function(record) {
    return {
      disabled: record.name === '胡彦祖'    // 配置无法勾选的列
    };
  },
  onChange: function(selectedRowKeys, selectedRows) {
    console.log('rowSelection.onChange',selectedRowKeys, selectedRows);
  },
  onSelect: function(record, selected, selectedRows) {
    console.log('rowSelection.onSelect',record, selected, selectedRows);
  },
  onSelectAll: function(selected, selectedRows, changeRows) {
    console.log('rowSelection.onSelectAll',selected, selectedRows, changeRows);
  }
};


new Vue({
  el: 'body',
  components: {
    vTable: atui.Table,
    icon: atui.Icon,
    row: atui.Layout.Row
  },
  data () {
    return {
      loading:false,
      gridData:data,
      gridColumns: columns,
      rowSelection: rowSelection
    }
  }
})
````
