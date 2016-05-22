import Vue from 'vue'
import Grid from '../../src/components/Table/'

const columns = [{
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
  onFilter: (value, record) => record.name.indexOf(value) === 0,
  width:150
}, {
  title: '年龄',
  dataIndex: 'age',
  sorter: (a, b) => a.age - b.age,
  render(text, record,index) {
    if(record) {
      return '<input type="text" v-model="gridData['+ index +'].age"/>'
    }
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
  width:250,
  onFilter: (value, record) => record.address.indexOf(value) === 0

},{
    title: '操作',
    key: 'operation',
    render(text, record) {
      if(record) {
        return '<icon type="info"></icon><a href="'+ record.key+'.html" target="_blank">详情</a>'
      }
    }
  }
]

const data = [{
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
  address: '香港弥敦道',
}];
const rowSelection = {
  getCheckboxProps(record) {
    return {
      disabled: record.name === '胡彦祖'    // 配置无法勾选的列
    };
  },
  onChange(selectedRowKeys, selectedRows) {
    console.log('rowSelection.onChange',selectedRowKeys, selectedRows);
  },
  onSelect(record, selected, selectedRows) {
    console.log('rowSelection.onSelect',record, selected, selectedRows);
  },
  onSelectAll(selected, selectedRows, changeRows) {
    console.log('rowSelection.onSelectAll',selected, selectedRows, changeRows);
  }
}

const vm = new Vue({
  data() {
    return {
      size:'default',
      fixedHeader:false,
      loading:false,
      gridData:data,
      gridColumns: columns,
      rowSelection:rowSelection
    }
  },
  template:
      '<div><grid :data-source="gridData"'+
      ':columns="gridColumns" :row-selection="rowSelection"'+
      'row-key="key" @table-change="onTableChange"'+
      ':loading="loading" :size="size"></grid></div>',
  components: { Grid }
}).$mount()

describe('Table', () => {
  it('Table组件基础渲染', () => {
    expect(vm.$el.querySelectorAll('table tbody tr').length).to.equal(6)
  })

  // it('Table组件全选反选', () => {

  // })

  it('Table数据清空', () => {
    vm.gridData = []
    vm.$nextTick(()=>{
      expect(vm.$el.querySelectorAll('table tbody tr').length).to.equal(1)
    })
  })
})

