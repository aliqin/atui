<template>
  <div class="bs-docs-section" id="pagination">
    <h3 class="page-header"><a href="#pagination" class="anchor">Pagination 翻页</a></h3>
    <div class="bs-example">
      <h4 class="example-title">完全版</h4>
      <pagination :curr-page="currPage"
                  :total="total"
                  show-jumper
                  :page-size="pageSize"
                  show-size-changer>
      </pagination>
      <h4 class="example-title">迷你版</h4>
      <pagination :curr-page="currPage"
                  :total="total"
                  show-jumper
                  mini>
      </pagination>
      <h4 class="example-title">精简版</h4>
      <pagination :curr-page="currPage"
                  :total="total"
                  simple
                  class="custom">
      </pagination>


      <input type="button" value="changeTotalPage" @click="changeTotalPage"/>
    </div>
<pre>
<code class="language-markup"><script type="language-mark-up">
<pagination :total-page.sync="totalPage" :curr-page.sync="currPage" :total="total" :show-jumper="true" :show-size-changer="true"></pagination>
<pagination :total-page.sync="totalPage" :curr-page.sync="currPage" :total="total" :show-jumper="true" :mini="true"></pagination>
<pagination :total-page.sync="totalPage",:curr-page.sync="currPage",:total="total",:simple="true" class="custom"></pagination>
</script></code></pre>
  </div>
  <h2>Options</h2>
  <table class="atui-table table-bordered">
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
        <td>default-size</td>
        <td>Number</td>
        <td>one of <code>10、20、30</code></td>
        <td>如果有选择页码大小的话，这个可以指定每页的大小</td>
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
  <br>
  <strong>注：</strong>pagination组件会监听当前currPage的变化，当其发生变化时pagination组件会向上派发一个回调事件，名字叫pageChange，回调参数就是当前页以及pagination的id，需要在引用pagination的当前文件里面的events对象里将其加入进去.
  <pre><code class="language-markup"><script type="language-mark-up">
    events: {
      pageChange (page, id) {

      }
    }
  </script></code></pre>
</template>

<script>
  import {Pagination} from 'src/'
  export default {
    data () {
      return {
        currPage: 10,
        showJumper: true,
        total: 100,
        showSizeChanger: true,
        pageSize:20
      }
    },
    components: {
      Pagination
    },
    events: {
      pageChange (page, id) {

      },
      'pagination-size-change' (data) {
        console.log('EVENT', 'pagination-size-change', data.label, data.value)
      }
    },
    methods:{
      changeTotalPage() {
        this.currPage = 20
        this.total = 1000
        this.pageSize = 30
      }
    },
    ready () {

    }
  }
</script>

<style lang="less">
  .example-title {
    margin: 20px 0;
  }
</style>
