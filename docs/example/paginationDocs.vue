<template>
  <div class="bs-docs-section" id="pagination">
    <h3 class="page-header"><a href="#pagination" class="anchor">pagination 翻页</a></h3>  
    <div class="bs-example">
      <h4 class="example-title">完全版</h4>
      <pagination :total-page.sync="totalPage", 
                  :curr-page.sync="currPage", 
                  :total="total",
                  :show-jumper="true",
                  :show-size-changer="true">
      </pagination>
      <h4 class="example-title">迷你版</h4>
      <pagination :total-page.sync="totalPage", 
                  :curr-page.sync="currPage", 
                  :total="total",
                  :show-jumper="true",
                  :mini="true">
      </pagination>
      <h4 class="example-title">精简版</h4>
      <pagination :total-page.sync="totalPage", 
                  :curr-page.sync="currPage", 
                  :total="total",
                  :simple="true">
      </pagination>
    </div>
<pre>
<code class="language-markup"><script type="language-mark-up">
<pagination :total-page.sync="totalPage" :curr-page.sync="currPage" :total="total" :show-jumper="true" :show-size-changer="true"></pagination>
<pagination :total-page.sync="totalPage" :curr-page.sync="currPage" :total="total" :show-jumper="true" :mini="true"></pagination>
<pagination :total-page.sync="totalPage" :curr-page.sync="currPage" :total="total" :simple="true"></pagination>
</script></code></pre>
  </div>
  <h2>Options</h2>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>参数</th>
        <th>类型</th>
        <th>默认值</th>
        <th>说明</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>total-page</td>
        <td>Number</td>
        <td>无</td>
        <td>总页数</td>
      </tr>
      <tr>
        <td>curr-page</td>
        <td>Number</td>
        <td>无</td>
        <td>当前页</td>
      </tr>
      <tr>
        <td>total</td>
        <td>Number</td>
        <td>无</td>
        <td>数据总条数</td>
      </tr>
      <tr>
        <td>show-jumper</td>
        <td>Boolean</td>
        <td>false</td>
        <td>是否开启跳转功能</td>
      </tr>
      <tr>
        <td>show-size-changer</td>
        <td>Boolean</td>
        <td>false</td>
        <td>是否开启修改每页条数功能</td>
      </tr>
      <tr>
        <td>simple</td>
        <td>Boolean</td>
        <td>false</td>
        <td>是否采用精简版样式</td>
      </tr>
      <tr>
        <td>mini</td>
        <td>Boolean</td>
        <td>false</td>
        <td>是否采用迷你版样式</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import Pagination from 'src/components/Pagination/'
  export default {
    data () {
      return {
        totalPage: 100,
        currPage: 10,
        showJumper: true,
        total: 100,
        showSizeChanger: true
      }
    },
    components: {
      Pagination
    },
    events: {
      pageChange () {

      }
    }
  }
</script>

<style lang="less">
  .example-title {
    margin: 20px 0;
  }
</style>