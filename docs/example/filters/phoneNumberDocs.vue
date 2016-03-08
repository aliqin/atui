<template>
  <div class="bs-docs-section" id="phoneNumber">
    <h3 class="page-header"><a href="#phoneNumber" class="anchor">手机号码格式化</a></h3>
    <div class="bs-example">
    <input type="text" v-model="number" />
    <div>{{number | phone-number}}</div>
    </div>

<pre><code class="language-markup"><script type="language-mark-up">

</script></code></pre>
  </div>
</template>
<script>
  import phoneNumber from 'src/filters/phoneNumber.js'
  export default {
    data() {
      return {
        number:'13291896699'
      }
    }
  }
</script>

