---
order: 4
title:
  zh-CN: 过滤
  en-US: Filter
---

## zh-CN
在columns项里增加filters可增加筛选功能，可设置多选或单选，如果有onFilter则客户端进行过滤，如果没有onfilter则会触发table-change事件，自行去服务器端进行过滤

```js
import {quickSort} from 'atui/src/utils/sort.js'
var columns = [{
  title: '姓名ss',
  dataIndex: 'name',
  filters: [{
    text: '姓李的的',
    value: '李',
  }, {
    text: '姓胡的',
    value: '胡',
  }],
  sorter: quickSort,
  width:150,
  onFilter: (names, record) => {
    return names.some(function(name){
      return record.name.indexOf(name) == 0
    })
  }
}, {
  title: '年龄',
  dataIndex: 'age',
  width:250,
  filters: [{
    text: '32',
    value: '32',
  }, {
    text: '42',
    value: '42',
  }]
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
  width:250,
  onFilter: (value, record) => {
    return record.address.indexOf(value)>=0
  }
},{
    title: '操作',
    key: 'operation'
  }
];
```
## en-US


````jsx
<v-table :data-source="gridData" @table-change="onTableChange" :row-expandable="rowExpandable" :columns="gridColumns" row-key="key" >
  <template scope="props" slot="operation">
    <v-button @click.native="onBtnClick(props.record)">操作</v-button>
  </template>
</v-table>
````

````vue-script
import {quickSort} from 'atui/src/utils/sort.js'
var columns = [{
  title: '姓名ss',
  dataIndex: 'name',
  filters: [{
    text: '姓李的的',
    value: '李',
  }, {
    text: '姓胡的',
    value: '胡',
  }],
  sorter: quickSort,
  width:150,
  onFilter: (names, record) => {
    return names.some(function(name){
      return record.name.indexOf(name) == 0
    })
  }
}, {
  title: '年龄',
  dataIndex: 'age',
  width:250,
  filters: [{
    text: '32',
    value: '32',
  }, {
    text: '42',
    value: '42',
  }],
  onFilter: (ages, record) => {
    return ages.some(function(age){
      return parseInt(record.age) === parseInt(age)
    })
  }
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
  width:250,
  onFilter: (value, record) => {
    return record.address.indexOf(value)>=0
  }
},{
    title: '操作',
    key: 'operation',
    render: function(text, record) {
      if(record) {
        return '<icon type="info-s"></icon><a href="'+ record.key+'.html" target="_blank">详情</a>'
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
  address: '香港弥敦道2',
}]

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
}


new Vue({
  el: 'body',
  components: {
    vTable: atui.Table,
    vButton: atui.Button,
    icon: atui.Icon
  },
  data () {
    return {
      gridData: [],
      gridColumns: columns,
      rowSelection:rowSelection
    }
  },
  created () {
    let me = this
    setTimeout(function(){
      me.gridData = data
    },2000)
  },
  methods: {
    onTableChange(paging,filter,sorter) {
      console.log('table-change',paging,filter,sorter)
      //let me = this
      //me.gridData = me.gridData.reverse()
    },
    onBtnClick (record) {
      console.log(record)
    },
    rowExpandable (record, index) {
      debugger
      return record.name == '李大嘴'
    }
  }
})
````
