<template>
  <div class="bs-docs-section" id="getting-started">

    <h2>安装方法：CommonJS</h2>
    <pre><code class="language-javascript">
$ tnpm install @ali/vue-components --save-dev

var alert = require('@ali/vue-components/lib/alert');
// or
var alert = require('@ali/vue-components').alert;

new Vue({
  components: {
    'alert': alert
  }
})
    </code></pre>
    <h2>ES6</h2>
    <pre><code class="language-javascript">
$ tnpm install @ali/vue-components --save-dev

import alert from '@ali/vue-components/src/alert'
// or
import { alert } from '@ali/vue-components'

new Vue({
  components: {
    alert
  }
})
    </code></pre>
    <h2>浏览器引用</h2>
    <pre><code class="language-markup">
&lt;script src=&quot;path/to/vue.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;path/to/vue-components.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;
  var alert = VueComponents.alert
&lt;/script&gt;
    </code></pre>
  </div>
</template>
