# atui
阿里通信基于Vue.js的组件库. http://aliqin.github.io

[![NPM download][npmdl-image]][npm-url]
[![NPM version][npm-image]][npm-url]
[![issues][issue-image]][npm-url]
[![forks][forks-image]][npm-url]
[![stars][stars-image]][npm-url]
[![license][license-image]][npm-url]

[npmdl-image]: https://img.shields.io/npm/dm/atui.svg
[npm-image]: https://img.shields.io/npm/v/atui.svg?style=flat
[npm-url]: https://www.npmjs.com/package/atui
[issue-image]: https://img.shields.io/github/issues/aliqin/atui.svg
[forks-image]: https://img.shields.io/github/forks/aliqin/atui.svg
[stars-image]: https://img.shields.io/github/stars/aliqin/atui.svg
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
