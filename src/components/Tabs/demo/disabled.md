---
order: 1
title:
  zh-CN: 禁用
  en-US: Type
---

## zh-CN



## en-US


````jsx
<v-tabs>
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
    vTabs: atui.Tabset,
    vTab: atui.Tabset.Tab
  }
})
````
