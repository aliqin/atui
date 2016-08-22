---
order: 2
title:
  zh-CN: 分页
  en-US: Pagination
---

## zh-CN

增加pagination属性以分页，
```
const pagination = {
  total: data.length
}

```

## en-US


````jsx
<v-table :data-source="gridData" :columns="gridColumns" row-key="key" :pagination="pagination"></v-table>
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
        return '<icon type="info-s"></icon><a href="'+ record.key+'.html" target="_blank">详情</a>'
      }
    }
  }
]

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `李大嘴${i}`,
    age: 32,
    address: `西湖区湖底公园${i}号`,
  });
}

const pagination = {
  total: data.length
}

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
    icon: atui.Icon
  },
  data () {
    return {
      loading: false,
      gridData: data,
      gridColumns: columns,
      rowSelection: rowSelection,
      pagination: pagination
    }
  }
})
````
