---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN
基本展示

## en-US


````jsx
<v-tabs>
  <v-tab header="系统短信签名">
    系统短信签名内容
  </v-tab>
  <v-tab header="推广短信签名">
    推广短信签名内容
  </v-tab>
</v-tabs>

````

````vue-script
new Vue({
  el: 'body',
  components: {
    vTabs: atui.Tabs,
    vTab: atui.Tabset.Tab
  }
})
````
