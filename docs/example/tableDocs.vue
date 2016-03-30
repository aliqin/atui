<template>
  <div class="bs-docs-section" id="table">
    <h3 class="page-header"><a href="#tabs" class="anchor">Table 表格</a></h3>
    <div class="bs-example">
      <grid :data-srouce="gridData" :columns="gridColumns" :row-selection="true" :filter-key="filterKey" row-key="key"></grid>
    </div>

    <pre><code class="language-markup"><script type="language-mark-up">
<grid :data-srouce="gridData" :columns="gridColumns" rowSelection="true" row-key="key"></grid>
<script>
  import grid from 'src/components/Table/'
  const columns = [{
    title: '姓名',
    dataIndex: 'name',
    filters: [{
      text: '姓李的',
      value: '李',
    }, {
      text: '姓胡的',
      value: '胡',
    }],
    // 指定确定筛选的条件函数
    // 这里是名字中第一个字是 value
    onFilter: (value, record) => record.name.indexOf(value) === 0
  }, {
    title: '年龄',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
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
    onFilter: (value, record) => record.address.indexOf(value) === 0
  }];

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
  }];

  export default {
    components: {
      grid
    },
    data() {
      return {
        gridData:data,
        gridColumns: columns
      }
    }
  }
</script></code></pre>
  <h3>Table 选项 </h3>
  <table class="table table-bordered">
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
        <td>[]</td>
        <td>要绑定的数据源</td>
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
  import grid from 'src/components/Table/'
  const columns = [{
    title: '姓名',
    dataIndex: 'name',
    filters: [{
      text: '姓李的',
      value: '李',
    }, {
      text: '姓胡的',
      value: '胡',
    }],
    // 指定确定筛选的条件函数
    // 这里是名字中第一个字是 value
    onFilter: (value, record) => record.name.indexOf(value) === 0
  }, {
    title: '年龄',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
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
    onFilter: (value, record) => record.address.indexOf(value) === 0
  }];

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
  }];

  export default {
    components: {
      grid
    },
    data() {
      return {
        gridData:data,
        gridColumns: columns
      }
    }
  }
</script>
