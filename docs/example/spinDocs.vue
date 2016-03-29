<template>
  <div class="bs-docs-section" id="spin">
    <h3 class="page-header"><a href="#spin" class="anchor">spin 加载中</a></h3>
    <div class="bs-example">
    <h4>小的加载</h4>
    <spin :show="true" size="small"></spin>
    <h4>普通加载</h4>
    <spin :show="true"></spin>
    <h4>大的加载</h4>
    <spin :show="true" size="large"></spin>
    </div>

<pre><code class="language-markup"><script type="language-mark-up">
<spin :show="true" size="small"></spin>
<spin :show="true"></spin>
<spin :show="true" size="large"></spin>
</script></code></pre>

  </div>
</template>

<script>
  import Spin from 'src/components/Spin/'
  export default {
    components: {
      Spin
    }
  }
</script>
