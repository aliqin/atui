---
order: 5
title:
  zh-CN: 带箭头的
  en-US: Type
---

## zh-CN



## en-US


````jsx
<message type="warning" arrow="top">
  箭头在上边
</message>
<message type="error" arrow="bottom">
  箭头在下边
</message>
<message type="success" arrow="left">
  箭头在左边
</message>
<message type="info" arrow="right">
  箭头在右边
</message>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    message: atui.Message
  }
})
````
