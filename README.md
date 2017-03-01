# atui
A Vue.js 2.0 UI Toolkit for Web http://aliqin.github.io

[Vue.js](http://vuejs.org/) (require Vue.js `>=v2.1.4`).

--------

[![Build Status](https://travis-ci.org/aliqin/atui.svg?branch=dev)](https://travis-ci.org/aliqin/atui)
[![NPM download][npmdl-image]][npm-url]
[![NPM version][npm-image]][npm-url]
[![gzip size:JS][gzipjs-image]][npm-url]
[![gzip size:css][gzipcss-image]][npm-url]
[![license][license-image]][npm-url]
[![Gitter](https://badges.gitter.im/aliqin/atui.svg)](https://gitter.im/aliqin/atui?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

[npmdl-image]: https://img.shields.io/npm/dm/atui.svg
[npm-image]: https://img.shields.io/npm/v/atui.svg?style=flat
[gzipjs-image]: http://img.badgesize.io/https://unpkg.com/atui/dist/atui.js?compression=gzip&label=gzip%20size:%20JS
[gzipcss-image]: http://img.badgesize.io/https://unpkg.com/atui/dist/greater-blue.css?compression=gzip&label=gzip%20size:%20CSS
[npm-url]: https://www.npmjs.com/package/atui
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg




## install

### NPM

```bash
$ npm install atui --save-dev
```


```js
$ npm install atui --save-dev

// css
import 'atui/dist/greater-blue.css'

// or less
import 'atui/style/themes/greater-blue.less'

// import atui
import atui from 'atui'

new Vue({
  components: {
    vButton: atui.Button
    vDatePicker: atui.vDatePicker
  }
})

// use as required
import vDatePicker from 'atui/lib/date-picker';
new Vue({
  components: {
    vDatePicker: vDatePicker
  }
})

```

### use in browser

```html
<script src="//unpkg.com/vue@2.1.4"></script>
<script src="//unpkg.com/atui"></script>
<script>
  const { Button } = atui
  new Vue({
    components: {
      Button
    }
  })
</script>
```
