---
order: 1
english: 快速上手
---
---


## 第一个例子

可以复制下面的代码运行一个最简单的demo，atui相关的js，css可以通过http://unpkg.com/atui/ 来访问，由于unpkg性能没有保障，建议生产环境使用npm包的方式引入或者copy一份源码发布到自己的cdn上


```html
<html>
  <head>
    <meta charset="utf-8">
    <!-- 引入样式 -->
    <link rel="stylesheet" href="//unpkg.com/atui/dist/greater-blue.css">
  </head>
  <body>
    <div id="app">
      <v-button primary @click.native="onClick">这是一个按钮</v-button>
    </div>
    <!-- 先引入 Vue -->
    <script src="//unpkg.com/vue"></script>
    <!-- 引入组件库 -->
    <script src="//unpkg.com/atui"></script>
    <script>
      new Vue({
        el:'#app',
        components: {
          // 注册组件
          vButton: atui.Button
        },
        methods: {
          onClick () {
            alert('button click')
          }
        }
      })
    </script>
 </body>
</html>
```

## 安装

### 使用npm安装

可以通过npm直接安装到项目中，使用`import` 或 `require` 进行引用

```bash
$ npm install atui --save
```

### 浏览器引入

我们在npm发布包内的`dist`目录下提供了`atui.js`,`atuiFilter.js`,`atuiWidget.js` 三个主要的js文件 以及 `greater-blue.css`,`tao-orange.css`,`tmall-red.css`三个预打包的主题样式文件（大于蓝，淘宝橙，天猫红）用于一次性引入所有的atui组件（样式文件使用其中之一即可），也可以通过[unpkg](https://unpkg.com/atui/)进行下载

>为保证性能，生产环境请使用npm包引入或者在unpkg上下载一份副本，切勿直接引用unpkg上的文件

#### stable

- https://unpkg.com/atui/dist/atui.js
- https://unpkg.com/atui/dist/atuiFilter.js
- https://unpkg.com/atui/dist/atuiWidget.js
- https://unpkg.com/atui/dist/greater-blue.css
- https://unpkg.com/atui/dist/tao-orange.css
- https://unpkg.com/atui/dist/tmall-red.css

## 示例

引入`vue`和`atui`
```javascript
import Vue  from 'vue'
import atui from 'atui'
```

引入组件库样式
```javascript
import 'atui/dist/greater-blue.css'
```
> 注：目前支持三套皮肤，`greater-blue` ,`tao-orange`, `tmall-red`

注册atui组件
```javascript
new Vue({
  el:'#app',
  components: {
    vButton: atui.Button,
    vDatePicker: atui.DatePicker
  },
  methods: {
    onClick () {
      alert('button click')
    }
  }
})
```

在模版中使用
```html
<div id="app">
  <v-button @click.native="onClick">click me</v-button>
  <v-date-picker format="yyyy-MM-dd"></v-date-picker>
</div>
```




