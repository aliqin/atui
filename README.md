# vue-component
阿里通信基于Vue.js的组件库.



* [Vue.js](http://vuejs.org/) (基于Vue.js `^v1.x.x 版本以上`,组件仓库使用1.0.8开发).


## 安装方法

### NPM

```bash
$ npm install @ali/vue-component --save-dev
```

### CommonJS
```js
var alert = require('vue-component/src/alert');
// or
var alert = require('vue-component').alert;

new Vue({
  components: {
    'alert': alert
  }
})
```

### ES6
```js
import alert from 'vue-component/src/alert'
// or
import { alert } from 'vue-component'

new Vue({
  components: {
    alert
  }
})
```


### 浏览器引用


```html
<script src="path/to/vue.js"></script>
<script src="path/to/vue-component.js"></script>
<script>
  var alert = VueComponent.alert
</script>
```

