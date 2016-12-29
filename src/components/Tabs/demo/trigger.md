---
order: 2
title:
  zh-CN: hover触发
  en-US: Type
---

## zh-CN

支持hover事件


## en-US


````jsx
<v-tabs base trigger="hover">
  <v-tab header="系统短信签名">
    <p>
      选项卡一内容
    </p>
  </v-tab>
  <v-tab header="推广短信签名">
     <p>
        选项卡二内容
     </p>
  </v-tab>
  <v-tab header="被禁用的" disabled>
    ...
  </v-tab>
</v-tabs>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    vTabs: atui.Tabs,
    vTab: atui.Tabs.Tab
  }
})
````
