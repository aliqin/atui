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
    <link rel="stylesheet" href="//unpkg.com/atui@0.0.7/dist/greater-blue.css">
  </head>
  <body>
    <message>这是一个提示消息</message>
  </body>
  <script src="//unpkg.com/vue@2.1.4"></script>
  <script src="//unpkg.com/atui"></script>
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

