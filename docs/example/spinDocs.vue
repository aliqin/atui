<template>
  <div class="bs-docs-section" id="buttons">
    <h3 class="page-header"><a href="#buttons" class="anchor">Spin 加载中</a></h3>
    <div class="bs-example">
    <h4>小的加载</h4>
    <spin :spining="true" size="small"></spin>
    <h4>普通加载</h4>
    <spin :spining="true"></spin>
    <h4>大的加载</h4>
    <spin :spining="true" size="large"></spin>
    </div>

<pre><code class="language-markup"><script type="language-mark-up">

</script></code></pre>

  </div>
</template>

<script>
  import spin from 'src/components/Spin.vue'
  export default {
    data() {
      return {

      }
    },
    components: {
      spin
    },
    created() {

    }
  }
</script>
