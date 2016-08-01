---
order: 1
title:
  zh-CN: 禁用
  en-US: Type
---

## zh-CN



## en-US


````jsx
<tabs>
  <tab header="系统短信签名">
    <p>
      选项卡一内容
    </p>
  </tab>
  <tab header="推广短信签名">
     <p>
        选项卡二内容
     </p>
  </tab>
  <tab header="被禁用的" disabled>
    ...
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
