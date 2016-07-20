<template>
  <div class="bs-docs-section" id="searchbox">
    <h3 class="page-header"><a href="#searchbox" class="anchor">Searchbox 搜索框</a></h3>
    <div class="bs-example">
      <searchbox placeholder="请输入关键词搜索" :value.sync="defaultVal" :search-list="searchList" text-field="name"></searchbox>
      <searchbox placeholder="请输入关键词搜索"></searchbox>
    </div>
<pre><code class="language-markup"><script type="language-mark-up">
<searchbox placeholder="请输入关键词搜索" :value.sync="defaultVal" :search-list="searchList" text-field="name"></searchbox>
</script></code></pre>
    <h4>参数</h4>
    <table class="atui-table table-bordered">
      <thead>
        <tr>
          <th>参数名</th>
          <th>类型</th>
          <th>默认值</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>placeholder</td>
          <td><code>String</code></td>
          <td><code>空</code></td>
          <td>搜索框预期值的提示信息</td>
        </tr>
        <tr>
          <td>value</td>
          <td><code>String</code></td>
          <td><code>空</code></td>
          <td>搜索框默认值</td>
        </tr>
        <tr>
          <td>search-list</td>
          <td><code>Array</code>或<code>Object</code></td>
          <td><code>数组素组</code></td>
          <td>搜索列表</td>
        </tr>
        <tr>
          <td>text-filed</td>
          <td><code>String</code></td>
          <td><code>name</code></td>
          <td>下拉列表中显示的是列表的哪个字段</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {Searchbox, Message} from 'src/'
export default{
  components: {
    Searchbox,
    Message
  },
  data () {
    return {
      defaultVal: '果',
      searchList: [
        {name: '水果', value: '1'},
        {name: '苹果', value: '2'},
        {name: '香蕉', value: '3'},
        {name: '人参果', value: '4'},
        {name: '草莓', value: '5'},
        {name: '芒果', value: '6'},
        {name: '干果', value: '11'},
        {name: '碧根果', value: '12'},
        {name: '腰果', value: '13'},
        {name: '核桃', value: '14'},
        {name: '杏仁', value: '15'},
        {name: '素材', value: '21'},
        {name: '香菜', value: '22'}
      ]
    }
  },
  events: {
    'searchbox-value-check' (data, searchboxVue) {
      console.log(data);
    },
    'searchbox-value-change' (val, searchboxVue) {
      Message.info(val);
    }
  }
}
</script>

