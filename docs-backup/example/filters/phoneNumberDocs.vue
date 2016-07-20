<template>
  <div class="bs-docs-section" id="phonenumber">
    <h3 class="page-header"><a href="#phonenumber" class="anchor">手机号码格式化 phonenumber</a></h3>
    <div class="bs-example">
    <input type="text" v-model="number" />
    <div>{{number | phoneNumber}}</div>
    </div>
<pre><code class="language-markup"><script type="language-mark-up">
<input type="text" v-model="number" />
<div>{{number | phoneNumber}}</div>
</script></code></pre>
  </div>
</template>
<script>
  import 'src/filters/'
  export default {
    data() {
      return {
        number:'13291896699'
      }
    }
  }
</script>

