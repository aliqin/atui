---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN



## en-US


````jsx
<tabs>
  <tab header="系统短信签名">
    系统短信签名内容
  </tab>
  <tab header="推广短信签名">
    推广短信签名内容
  </tab>
</tabs>

````

````vue-script
new Vue({
  el: 'body',
  components: {
    tabs: atui.Tabs,
    tab: atui.Tabs.Tab
  }
})
````