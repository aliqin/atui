---
order: 0
title:
  zh-CN: 容器
---

## zh-CN
放入一个容器中。


## en-US


````jsx
<spin :sping="sping">
  <div>
    内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
  </div>
</spin>
<br/>
<button @click="sping = !sping">点我{{sping ? '隐藏' : '显示'}}loading</button>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    spin: atui.Spin
  },
  data() {
    return { sping: true }
  }
})
````
