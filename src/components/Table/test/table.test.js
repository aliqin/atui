import Vue from 'vue'
import Table from '../'

var columns = [{
  title: '姓名<img src="//img.alicdn.com/tps/i2/TB1nff4IpXXXXc1XVXX.7lBQXXX-380-54.png" width="50px">',
  dataIndex: 'name',
  sorter: (a, b) => a.name.length - b.name.length,
  width: 150
}, {
  title: '年龄',
  dataIndex: 'age',
  width: 250,
  filters: [{
    text: '32',
    value: '32'
  }, {
    text: '42',
    value: '42'
  }]
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
}]

var data = [{
  key: '1',
  name: '一',
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
  }
]

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
  data: {
    size: 'default',
    fixedHeader: false,
    loading: false,
    gridData: data,
    gridColumns: columns,
    rowSelection: rowSelection,
    selectRow: '',
    pagination: {}

  },
  template: `
      <div>
      <v-table :data-source="gridData" :columns="gridColumns" row-key="key" @row-click="rowClick" :pagination="pagination"></v-table>
      </div>
      `,
  components: {
    vTable: Table
  },
  methods: {
    rowClick (rowIndex, record) {
      this.selectRow = rowIndex
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
  after(() => {
    vm.$destroy()
  })
  it('Table组件基础渲染', () => {
    expect(vm.$el.querySelectorAll('table thead tr th').length).to.equal(columns.length)
    expect(vm.$el.querySelectorAll('table tbody tr').length).to.equal(6)
  })

  it('Table行点击', () => {
    vm.$el.querySelectorAll('table tbody tr')[1].click()
    expect(vm.selectRow).to.equal(1)
  })

  it('Table排序', (done) => {
    let ascend = vm.$el.querySelector('.atui-table-sorter .atui-icon-caretup')
    let descend = vm.$el.querySelector('.atui-table-sorter .atui-icon-caretdown')
    ascend.click()
    vm.$nextTick(() => {
      expect(vm.$el.querySelectorAll('table tbody tr td span')[0].textContent).to.equal('一')
      descend.click()
      vm.$nextTick(() => {
        expect(vm.$el.querySelectorAll('table tbody tr td span')[0].textContent).to.equal('李秀莲大嘴哥')
        done()
      })
    })
  })

  it('点击分页按钮时table正确切换', (done) => {
    vm.pagination = {
      total: 6,
      pageSize: 5,
      currPage: 1
    }
    vm.$nextTick(() => {
      let p = vm.$el.querySelectorAll('.atui-pagination-item')
      expect(p.length).to.equal(4)
      p[2].click()
      vm.$nextTick(() => {
        expect(vm.$el.querySelectorAll('table tbody tr').length).to.equal(1)
        done()
      })
    })
  })
  it('Table数据清空', (done) => {
    vm.gridData = []
    vm.$nextTick(() => {
      expect(vm.$el.querySelectorAll('table tbody tr').length).to.equal(1)
      done()
    })
  })
})
