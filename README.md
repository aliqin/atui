# vue-component
阿里通信基于Vue.js的组件库.

<p align="center"></a></p>

* [Vue.js](http://vuejs.org/) (基于Vue.js `^v1.x.x 版本以上`).


## 安装方法

### NPM

```bash
$ npm install @ali/vue-component --save-dev
```


```js
$ tnpm install @ali/vue-component --save-dev

// css引入 alidayu or alitx or tmallwt
import '@ali/vue-component/dist/alidayu.css'

// 或less引入
import '@ali/vue-component/style/themes/alidayu.less'

// 引入组件
import { Alert } from '@ali/vue-component'

// 如果没有使用rollup或webpak2.0，整个组件JS都会打包进去，使用如下方式可按需打包
import Alert from '@ali/vue-component/src/components/Alert'

new Vue({
  components: {
    Alert
  }
})
```

### 浏览器引用

```html
<script src="//g.alicdn.com/aliqin/vue-component/0.0.3/vue.js"></script>
<script src="//g.alicdn.com/aliqin/vue-component/0.0.3/VueComponent.js"></script>
<script>
  var alert = VueComponent.Alert
  new Vue({
    components: {
      Alert
    }
  })
</script>
```

### 组件文档地址 http://groups.alidemo.cn/aliqin/vue-component/

