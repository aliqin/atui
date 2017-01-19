# atui

[![Join the chat at https://gitter.im/aliqin/atui](https://badges.gitter.im/aliqin/atui.svg)](https://gitter.im/aliqin/atui?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
阿里通信基于Vue.js的组件库. http://aliqin.github.io

[![NPM download][npmdl-image]][npm-url]
[![NPM version][npm-image]][npm-url]
[![gzip size:JS][gzipjs-image]][npm-url]
[![gzip size:css][gzipcss-image]][npm-url]
[![license][license-image]][npm-url]

[npmdl-image]: https://img.shields.io/npm/dm/atui.svg
[npm-image]: https://img.shields.io/npm/v/atui.svg?style=flat
[gzipjs-image]: http://img.badgesize.io/https://unpkg.com/atui/dist/atui.js?compression=gzip&label=gzip%20size:%20JS
[gzipcss-image]: http://img.badgesize.io/https://unpkg.com/atui/dist/greater-blue.css?compression=gzip&label=gzip%20size:%20CSS
[npm-url]: https://www.npmjs.com/package/atui
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg

* [Vue.js](http://vuejs.org/) (基于Vue.js `v2.1.4 版本以上`).


## 安装方法

### NPM

```bash
$ npm install atui --save-dev
```


```js
$ npm install atui --save-dev

// css引入 greater-blue | tao-orange | or tmall-red (推荐)
import 'atui/dist/greater-blue.css'

// 或less引入
import 'atui/style/themes/greater-blue.less'

// 引入组件
import atui from 'atui'

// 如果只使用了少量的组件，也可以按需引入
import vButton from 'atui/lib/button';
import vDatePicker from 'atui/lib/date-picker';

new Vue({
  components: {
    Alert:atui.Alert
  }
})
```

### 浏览器引用

```html
<script src="//unpkg.com/vue@2.1.4"></script>
<script src="//unpkg.com/atui"></script>
<script>
  const { Alert } = atui
  new Vue({
    components: {
      Alert
    }
  })
</script>
```
