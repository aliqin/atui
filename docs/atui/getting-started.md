---
order: 1
english: 快速上手
---
---


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
    <message>这是一个提示消息</message>
  </body>
  <script src="dist/vue.js"></script>
  <script src="dist/atui.js"></script>
  <script>
    new Vue({
      el:'body',
      components: {
        message: atui.Message
      }
    })
  </script>
</html>
```

