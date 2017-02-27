---
order: 1
english: 快速上手
---
---


## 浏览器支持

ATUI支持所有的现代浏览器和 IE9+。


```html
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="//unpkg.com/atui/dist/greater-blue.css">
  </head>
  <body>
    <div id="app">
      <v-button primary @click.native="onClick">这是一个按钮</v-button>
    </div>
    <script src="//unpkg.com/vue"></script>
    <script src="//unpkg.com/atui"></script>
    <script>
      new Vue({
        el:'#app',
        components: {
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

