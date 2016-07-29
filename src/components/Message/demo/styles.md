---
order: 1
title:
  zh-CN: 不同样式
  en-US: Type
---

## zh-CN



## en-US


````jsx
<message type="success" show-icon>
  成功提示的文案
</message>

<message type="info" show-icon>
  消息提示的文案
</message>

<message type="error" show-icon>
  错误提示的文案
</message>

<message type="warning" show-icon>
  警告提示的文案
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
