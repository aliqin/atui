<template>
  <div class="bs-docs-section" id="table">
    <h3 class="page-header"><a href="#tabs" class="anchor">Table 表格</a></h3>
    <div class="bs-example">
    <row>
      <h4>带分页</h4>
      <grid :data-source="gridData" :columns="gridColumns" :row-selection="rowSelection" row-key="key" @table-change="onTableChange" :loading="loading" :size="size" :pagination="pagination" v-ref:grid></grid>

      <h4>不带分页</h4>
      <grid :data-source="gridData" :columns="gridColumns" :row-selection="rowSelection" row-key="key" @table-change="onTableChange" :loading="loading" :size="size"></grid>
    </row>
    </div>
    <input type="button" @click="changeData" value="填充表格数据"/> <input type="button" @click="changeLoading" value="切换loading状态"/>
    <input type="button" @click="emptyData" value="清空数据"/>
    <input type="button" @click="changeSize" value="改变大小({{size}})"/>

    <modal title="Fade Modal" :show.sync="show" effect="fade" width="800px">
        <div slot="modal-body" class="modal-body">
          <v-textarea :content.sync='textarea'></v-textarea>
        </div>
      </modal>
    <pre><code class="language-markup"><script type="language-mark-up">
<h4>带分页</h4>
<grid :data-source="gridData" :columns="gridColumns" :row-selection="rowSelection" row-key="key" @table-change="onTableChange" :loading="loading" :size="size" :pagination="pagination" v-ref:grid></grid>

<h4>不带分页</h4>
<grid :data-source="gridData" :columns="gridColumns" :row-selection="rowSelection" row-key="key" @table-change="onTableChange" :loading="loading" :size="size"></grid>

<!--脚本-->
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
  width:150
}, {
  title: '年龄',
  dataIndex: 'age',
  sorter: (a, b) => a.age - b.age,
  render(text, record, index) {
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
    title: '操作 <tooltip content="提示" placement="topRight"><icon type="help"></icon></tooltip>',
    key: 'operation',
    render(text, record) {
      if(record) {
        return '<icon type="info"></icon><a href="'+ record.key+'.html" target="_blank">详情</a>'
      }
    }
  }
];
const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `李大嘴${i}`,
    age: 32,
    address: `西湖区湖底公园${i}号`,
  });
}
// 配置选择数据的选项
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
};
export default {
  components: {
    Grid:VueComponent.Table,
    Icon,
    Row:Layout.Row
  },
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
  methods:{
    changeData() {
      this.gridData.push({
        key: Math.random(),
        name: '李秀莲大嘴哥',
        age: Math.random(),
        address: '西湖区湖底公园123号',
      })
    }
  }
}

</script></code></pre>
  <h3>Table 选项 </h3>
  <table class="atui-table table-bordered">
    <thead>
      <tr>
        <th>名称</th>
        <th>类型</th>
        <th>默认值</th>
        <th>描述</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>data-srouce</td>
        <td><code>Array</code></td>
        <td></td>
        <td>要绑定的数据源</td>
      </tr>
      <tr>
        <td>size</td>
        <td><code>String</code></td>
        <td><code>default</code> 或 <code>middle</code> 或 <code>small</code></td>
        <td>表格大小</td>
      </tr>
       <tr>
        <td>fixed-header</td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td>是否固定头部（注意，固定头部必须指定每列宽度）</td>
      </tr>
      <tr>
        <td>row-selection</td>
        <td><code>Boolean</code></td>
        <td>false</td>
        <td>是否增加列checkbox选择</td>
      </tr>
      <tr>
        <td>columns</td>
        <td><code>Array</code></td>
        <td>[]</td>
        <td>表格列的配置描述</td>
      </tr>
      <tr>
        <td>row-key</td>
        <td><code>String</code></td>
        <td></td>
        <td>行选择时绑定的关键列名</td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
  import {Table,Icon,Layout,Tooltip, Modal,Textarea as vTextarea} from 'src/'
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
    width:150
  }, {
    title: '年龄',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
    render(text, record, index) {
      // return '<tooltip content="talk is cheap show me the code" placement="topLeft">'+
      //           '<div>'+ record.name +'</div>'
      //           // '<input v-if="gridData['+ index +']" v-model="gridData['+ index +'].age"/>'+
      //         '</tooltip>'
      return ''
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
      title: '操作 <tooltip content="提示" placement="topRight"><icon type="help"></icon></tooltip>',
      key: 'operation',
      render(text, record) {
        if(record) {
          return '<tooltip content="talk is cheap show me the code" placement="topLeft">'+
                '<icon type="info"></icon><a @click="this.show=true" target="_blank">详情</a>'+
              '</tooltip>'
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

  const rowSelection = {
    getCheckboxProps(record) {
      return {
        disabled: record.name === '李大嘴'   // 配置无法勾选的列
      }
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

  const pagination = {
    total: data.length,
    onShowSizeChange(current, pageSize) {
      console.log('Current: ', current, '; PageSize: ', pageSize);
    },
    onChange(current) {
      console.log('Current: ', current);
    },
  }

  export default {
    components: {
      Grid:Table,
      Icon,
      Row:Layout.Row,
      Tooltip,
      Modal,
      vTextarea
    },
    data() {
      return {
        size:'default',
        fixedHeader:false,
        loading:false,
        gridData:data,
        show:false,
        textarea:'',
        gridColumns: columns,
        pagination: pagination,
        rowSelection:rowSelection
      }
    },
    methods:{
      changeData() {
        this.gridData.push({
          key: Math.random(),
          name: '李秀莲大嘴哥',
          age: Math.random(),
          address: '西湖区湖底公园123号',
        })
      },
      emptyData() {
        this.gridData = []
      },
      onTableChange(paging,filter,sorter) {
        console.log('table-change',paging,filter,sorter)
        let me = this
        me.gridData = me.gridData.reverse()
      },
      changeLoading() {
        this.loading = !this.loading
      },
      changeSize() {
        this.size = "default" == this.size ? "middle" : "middle" == this.size ? "small" : "default"
      },
      changeFixed() {
        this.fixedHeader = !this.fixedHeader
      }
    }
  }
</script>
