<template>
  <div class="bs-docs-section" id="loading">
    <h3 class="page-header"><a href="#loading" class="anchor">loading 加载中</a></h3>
    <div class="bs-example">
    <h4>小的加载</h4>
    <loading :show="true" size="small"></loading>
    <h4>普通加载</h4>
    <loading :show="true"></loading>
    <h4>大的加载</h4>
    <loading :show="true" size="large"></loading>
    </div>

<pre><code class="language-markup"><script type="language-mark-up">
<loading :show="true" size="small"></loading>
<loading :show="true"></loading>
<loading :show="true" size="large"></loading>
</script></code></pre>

  </div>
</template>

<script>
  import Loading from 'src/components/Loading/'
  export default {
    components: {
      Loading
    }
  }
</script>
