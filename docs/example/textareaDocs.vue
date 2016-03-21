<template>
  <div class="bs-docs-section" id="textarea">
    <h3 class="page-header"><a href="#textarea" class="anchor">textarea 文本域</a></h3>
    <div class="bs-example">
    <h4>基础文本域</h4>
    <div>
      <textarea class="textarea" placeholder="请输入描述信息"></textarea>
    </div>
    <div>
      <textarea class="textarea" disabled>文本框被禁用了</textarea>
    </div>
    <div>
      <textarea class="textarea error">信息错误了</textarea>
    </div>
    <h4>有字数限制文本域</h4>
    <div>
      <limit-textarea :limit-words="10" placeholder="这里只能输入10个字"></limit-textarea>
    </div>
<pre><code class="language-markup"><script type="language-mark-up">
<!-- textarea文本域 -->
<!-- 用样式textarea，标识是个文本域 -->
<!-- 文本域有错误（error）状态和禁用状态（加disabled属性即可） -->
<textarea class="textarea" placeholder="请输入描述信息"></textarea>
<textarea class="textarea error">信息错误了</textarea>
<textarea class="textarea error">信息错误了</textarea>

<!-- 有字数限制的文本域，通过组件方式调用 -->
<!-- 参数limit-words指定限制的最多字数 -->
<limit-textarea :limit-words="10"></limit-textarea>
</script></code></pre>
  </div>
</template>

<script>
  import limitTextarea from 'src/components/limitTextarea.vue'

  export default {
    components: {
      limitTextarea: limitTextarea
    },
    data() {
      return {
        checkboxValue: [],
        radioValue: ''
      }
    }
  }
</script>
