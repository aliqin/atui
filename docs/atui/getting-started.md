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
    <link rel="stylesheet" href="http://g.alicdn.com/aliqin/atui/0.1.2/greater-blue.css">
  </head>
  <body>
    <message>这是一个提示消息</message>
  </body>
  <script src="http://g.alicdn.com/aliqin/atui/0.1.1/vue.dev.js"></script>
  <script src="http://g.alicdn.com/aliqin/atui/0.1.2/atui.js"></script>
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

