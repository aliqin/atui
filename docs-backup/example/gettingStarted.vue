<template>
  <div class="bs-docs-section" id="getting-started">

    <h2>安装方法：CommonJS</h2>
    <pre><code class="language-javascript">
$ tnpm install @ali/vue-component --save-dev

// css引入 greater-blue | tao-orange | or tmall-red (推荐)
import '@ali/atui/dist/greater-blue.css'

// 或less引入
import '@ali/atui/style/themes/greater-blue.css'

// 引入组件
import { Alert } from '@ali/atui'

// 如果没有使用rollup或webpak2.0，整个组件JS都会打包进去，使用如下方式可按需打包
import Alert from '@ali/atui/src/components/Alert'

new Vue({
  components: {
    Alert
  }
})
    </code></pre>
    <h3>浏览器引用</h3>
    <pre><code class="language-markup">
&lt;script src=&quot;path/to/vue.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;path/to/atui.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;
  var alert = VueComponent.alert
&lt;/script&gt;
    </code></pre>
  </div>
</template>
