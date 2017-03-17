<p align="center">
  <img width="240" src="http://img.alicdn.com/tps/TB16_awMVXXXXcKXpXXXXXXXXXX-360-92.png">
</p>


# ATUI
[![Build Status](https://travis-ci.org/aliqin/atui.svg?branch=dev)](https://travis-ci.org/aliqin/atui)
[![codecov](https://codecov.io/gh/aliqin/atui/branch/dev/graph/badge.svg)](https://codecov.io/gh/aliqin/atui/branch/dev)
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

> A Vue.js 2.0 UI Toolkit for Web

require [Vue.js](http://vuejs.org/) `>=v2.1.4`

--------





## Install

```bash
$ npm install atui --save-dev
```


## Quick Start
```js

// css
import 'atui/dist/greater-blue.css'

// import atui
import atui from 'atui'

new Vue({
  components: {
    vButton: atui.Button,
    vDatePicker: atui.DatePicker
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
  new Vue({
    components: {
      vButton: atui.Button
    }
  })
</script>
```

### Roadmap
https://github.com/aliqin/atui/wiki/roadmap

### LICENSE
MIT
