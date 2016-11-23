---
order: 4
title:
  zh-CN: 可展开
  en-US: Expandable
---

## zh-CN

当表格内容较多不能一次性完全展示时，配置expandedRowRender函数

## en-US


````jsx
<v-table :data-source="gridData" :columns="gridColumns" :expanded-row-render="expandedRowRender" row-key="key"></v-table>
````


````vue-script
var columns = [{
  title: '姓名<img src="//img.alicdn.com/tps/i2/TB1nff4IpXXXXc1XVXX.7lBQXXX-380-54.png" width="50px">',
  dataIndex: 'name',
  width:150
}, {
  title: '年龄',
  dataIndex: 'age',
  width:250
}, {
  title: '地址',
  dataIndex: 'address',
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
];

var data = [{
  key: '1',
  name: '-1条',
  age: 32,
  address: '南湖区湖底公园1号<img src="//img.alicdn.com/tps/i2/TB1nff4IpXXXXc1XVXX.7lBQXXX-380-54.png" width="50px">',
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
  address: '香港弥敦道1',
}]

new Vue({
  el: 'body',
  components: {
    vTable: atui.Table,
    icon: atui.Icon
  },
  data () {
    return {
      gridData:data,
      gridColumns: columns,
      expandedRowRender: (record) => { return '<span>' + record.name + '</span>' }
    }
  },
  methods: {
    rowClick (rowIndex, record) {
      console.log(rowIndex, record)
    }
  }
})
````
