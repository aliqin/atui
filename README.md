# vue-components
阿里通信基于Vue.js的组件库.



* [Vue.js](http://vuejs.org/) (基于Vue.js `^v1.x.x 版本以上`,组件仓库使用1.0.8开发).


## 安装方法

### NPM

```bash
$ npm install @ali/vue-components
```

### CommonJS
```js
var alert = require('vue-components/src/alert');
// or
var alert = require('vue-components').alert;

new Vue({
  components: {
    'alert': alert
  }
})
```

### ES6
```js
import alert from 'vue-components/src/alert'
// or
import { alert } from 'vue-components'

new Vue({
  components: {
    alert
  }
})
```


### 浏览器引用


```html
<script src="path/to/vue.js"></script>
<script src="path/to/vue-components.js"></script>
<script>
  var alert = VueStrap.alert
</script>
```

