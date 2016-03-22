<template>
  <div class="bs-docs-section" id="pagination">
    <h3 class="page-header"><a href="#pagination" class="anchor">pagination 翻页</a></h3>  
    <div class="bs-example">
      <pagination id="pagination-search-list" :total-page.sync="totalPage" :curr-page.sync="currPage" />
    </div>
<pre>
<code class="language-markup"><script type="language-mark-up">


</script></code></pre>
  </div>
  <h2>Options</h2>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
      </tr>
      <tr>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import pagination from 'src/components/Pagination.vue'
  export default {
    data () {
      return {
        id: "12",
        totalPage: 100,
        currPage: 10
      }
    },
    components: {
      pagination
    }
  }
</script>

<style lang="less">
  .example-title {
    margin: 20px 0;
  }
</style>