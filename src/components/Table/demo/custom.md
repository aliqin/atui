---
order: 1
title:
  zh-CN: 自定义列展示
  en-US: Type
---

## zh-CN

可以通过vue2.1.0后新增的Scoped Slots特性来自定义列的展示，slot的命名格式为 (column.dataIndex || column.key)
如果某一列不对应数据源中的任何一列，比如'操作'这一列，那么需要在列配置中新增一个key字段来标记这一列，通过props.record来获取到当前行的记录

## en-US


````jsx
<v-table :data-source="gridData" :columns="gridColumns" row-key="key">
  <div slot="noDataTip">if dataSource is null, i will displayed</div>
  <template scope="props" slot="age">
    <span>年龄：{{props.record.age}}</span>
  </template>
  <template scope="props" slot="operation">
    <v-button @click.native="onBtnClick(props.record)">操作</v-button>
  </template>
</v-table>
````


````vue-script
var columns = [{
  title: '姓名<img src="//img.alicdn.com/tps/i2/TB1nff4IpXXXXc1XVXX.7lBQXXX-380-54.png" width="50px">',
  dataIndex: 'name',
  width:150,
  className: 'name'
}, {
  title: '年龄',
  dataIndex: 'age',
  width:250,
  className: 'age'
}, {
  title: '地址',
  dataIndex: 'address',
  filterMultiple: false,
  width:250
},{
    title: '操作',
    key: 'operation'
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
    icon: atui.Icon,
    vButton: atui.Button
  },
  data () {
    return {
      gridData: data,
      gridColumns: columns
    }
  },
  methods: {
    onBtnClick (record) {
      console.log(record)
    },
    getData () {
      let self = this
      setTimeout(function(){
        self.gridData = data
      }) 
    }
  }
})
````
