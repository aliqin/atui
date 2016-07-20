<template>
  <div class="bs-docs-section" id="spin">
    <h3 class="page-header"><a href="#spin" class="anchor">Spin 加载中</a></h3>
    <div class="bs-example">
    <h4>小的加载</h4>
    <spin show size="small"></spin>
    <h4>普通加载</h4>
    <spin show></spin>
    <h4>大的加载</h4>
    <spin show size="large"></spin>
    <h4>隐藏的大的加载(默认不加show就不显示)</h4>
    <spin size="large"></spin>
    <h4>包裹要loading的元素</h4>
    <spin sping>
      <div>
        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
        内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
      </div>
    </spin>
    </div>

<pre><code class="language-markup"><script type="language-mark-up">
<h4>小的加载</h4>
<spin show size="small"></spin>
<h4>普通加载</h4>
<spin show></spin>
<h4>大的加载</h4>
<spin show size="large"></spin>
<h4>隐藏的大的加载(默认不加show就不显示)</h4>
<spin size="large"></spin>
<h4>包裹要loading的元素</h4>
<spin sping>
  <div>
    内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
  </div>
</spin>
</script></code></pre>

  </div>
</template>

<script>
  import {Spin} from 'src/'
  export default {
    components: {
      Spin
    }
  }
</script>
