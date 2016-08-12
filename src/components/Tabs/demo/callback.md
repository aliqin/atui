---
order: 3
title:
  zh-CN: 回调
  en-US: Type
---

## zh-CN



## en-US


````jsx
<tabs @on-tab-click="handleOnClick">
  <tab header="推广短信签名啊啊啊中啊啊啊啊啊啊啊">
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
  <tab header="被禁用的" disabled>
    ...
  </tab>
  <tab header="推广短信签名">
     <p>
        选项卡二内容
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
  <tab header="推广短信签名">
     <p>
        选项卡二内容
     </p>
  </tab>
  <tab header="推广短信签名">
     <p>
        选项卡二内容
     </p>
  </tab>
</tabs>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    tabs: atui.Tabs,
    tab: atui.Tabs.Tab
  },
  methods: {
    handleOnClick (index) {
      console.log(index)
    }
  }
})
````
