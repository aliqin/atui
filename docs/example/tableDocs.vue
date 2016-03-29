<template>
  <div class="bs-docs-section" id="table">
    <h3 class="page-header"><a href="#tabs" class="anchor">Table 表格</a></h3>
    <div class="bs-example">
      <grid :data-srouce="gridData" :columns="gridColumns" :row-selection="true" :filter-key="filterKey" row-key="key"></grid>
    </div>

    <pre><code class="language-markup"><script type="language-mark-up">
<grid :data-srouce="gridData" :columns="gridColumns" rowSelection="true" row-key="key"></grid>
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
  const dataSource = [{
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
  }, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
  }];

  const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  }];
  export default {
    components: {
      grid
    },
    data() {
      return {
        gridData:dataSource,
        gridColumns: columns
      }
    }
  }
</script>
