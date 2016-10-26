---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN
要显示的时候show必须传，否则是不显示状态

## en-US


````jsx
<spin :show="show"></spin>
<br/>
<button @click="show = !show">点我{{show ? '隐藏' : '显示'}}</button>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    spin: atui.Spin
  },
  data () {
    return { show: false }
  }
})
````
