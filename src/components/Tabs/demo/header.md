---
order: 5
title:
  zh-CN: 自定义头部
  en-US: Type
---

## zh-CN
可以通过具名slot来自定义tab的头部展示


## en-US


````jsx
<v-tabs>
  <v-tab>
    <span slot="header">我是自定义的头部区域</span>
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
    vTab: atui.Tabs.Tab
  }
})
````
