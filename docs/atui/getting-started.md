---
order: 1
english: 快速上手
---
---
```bash
$ tnpm install @ali/vue-component --save-dev
```
```js
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
```

## 兼容性

ATUI支持所有的现代浏览器和 IE9+。


```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="index.css">
  </head>
  <body>
  </body>
  <script src="dist/vue.js"></script>
  <script src="dist/atui.js"></script>
  <script>
    var alert = atui.alert
  </script>
</html>
```

