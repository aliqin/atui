# atui
阿里通信基于Vue.js的组件库.

<p align="center"></a></p>

* [Vue.js](http://vuejs.org/) (基于Vue.js `^v1.x.x 版本以上`).


## 安装方法

### NPM

```bash
$ npm install @ali/atui --save-dev
```


```js
$ tnpm install @ali/atui --save-dev

// css引入 greater-blue | tao-orange | or tmall-red (推荐)
import '@ali/atui/dist/greater-blue.css'

// 或less引入
import '@ali/atui/style/themes/greater-blue.less'

// 引入组件
import { Alert } from '@ali/atui'

// 如果没有使用rollup或webpak2.0，整个组件JS都会打包进去，使用如下方式可按需打包
import Alert from '@ali/atui/src/components/Alert'

new Vue({
  components: {
    Alert
  }
})
```

### 浏览器引用

```html
<script src="//g.alicdn.com/aliqin/atui/0.0.10/vue.dev.js"></script>
<!--开发时建议引入vue.dev.js，发布时引用vue.js即可-->
<script src="//g.alicdn.com/aliqin/atui/0.0.10/atui.js"></script>
<script>
  const { Alert } = atui
  new Vue({
    components: {
      Alert
    }
  })
</script>
```

### 组件文档地址 http://groups.alidemo.cn/aliqin/atui/

