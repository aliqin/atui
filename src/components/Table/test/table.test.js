import Vue from 'vue'
import Table from '../'

var columns = [{
  title: '姓名<img src="//img.alicdn.com/tps/i2/TB1nff4IpXXXXc1XVXX.7lBQXXX-380-54.png" width="50px">',
  dataIndex: 'name',
  width: 150
}, {
  title: '年龄',
  dataIndex: 'age',
  width: 250
}, {
  title: '地址',
  dataIndex: 'address',
  filterMultiple: false,
  width: 250
}, {
  title: '操作',
  key: 'operation',
  render: function (text, record) {
    if (record) {
      return '<icon type="info-s"></icon><a href="' + record.key + '.html" target="_blank">详情</a>'
    }
  }
}
]

var data = [{
  key: '1',
  name: '-1条',
  age: 32,
  address: '南湖区湖底公园1号<img src="//img.alicdn.com/tps/i2/TB1nff4IpXXXXc1XVXX.7lBQXXX-380-54.png" width="50px">'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园12号'
}, {
  key: '3',
  name: '李大嘴',
  age: 32,
  address: '南湖区湖底公园123号'
}, {
  key: '4',
  name: '李秀莲大嘴哥',
  age: 32,
  address: '西湖区湖底公园123号'
},
  {
    key: '5',
    name: '刘德华',
    age: 54,
    address: '西湖区湖底公园999号'
  },
  {
    key: '6',
    name: '洪金宝',
    age: 66,
    address: '香港弥敦道1'
  }]

const rowSelection = {
  getCheckboxProps (record) {
    return {
      disabled: record.name === '胡彦祖' // 配置无法勾选的列
    }
  },
  onChange (selectedRowKeys, selectedRows) {
    // console.log('rowSelection.onChange', selectedRowKeys, selectedRows)
  },
  onSelect (record, selected, selectedRows) {
    // console.log('rowSelection.onSelect', record, selected, selectedRows)
  },
  onSelectAll (selected, selectedRows, changeRows) {
    // console.log('rowSelection.onSelectAll', selected, selectedRows, changeRows)
  }
}
let vm = new Vue({
  data () {
    return {
      size: 'default',
      fixedHeader: false,
      loading: false,
      gridData: data,
      gridColumns: columns,
      rowSelection: rowSelection
    }
  },
  template: `
      <div>
      <v-table :data-source="gridData" :columns="gridColumns" row-key="key" @row-click="rowClick"></v-table>
      </div>
      `,
  components: {
    vTable: Table
  },
  methods: {
    rowClick (rowIndex, record) {
      console.log(rowIndex, record)
    },
    getData () {
      let self = this
      setTimeout(function () {
        self.gridData = data
      })
    }
  }
}).$mount()

// table组件测试用例,拉低了coverage summary统计数据
describe('Table', () => {
  it('Table组件基础渲染', () => {
    expect(vm.$el.querySelectorAll('table tbody tr').length).to.equal(6)
  })
  it('Table数据清空', () => {
    vm.gridData = []
    vm.$nextTick(() => {
      expect(vm.$el.querySelectorAll('table tbody tr').length).to.equal(1)
    })
  })
})
