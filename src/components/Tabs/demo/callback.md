---
order: 3
title:
  zh-CN: 回调
  en-US: Type
---

## zh-CN
回调功能


## en-US


````jsx
<v-tabs @on-tab-click="handleOnClick">
  <v-tab header="推广短信签名啊啊啊中啊啊啊啊啊啊啊">
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
  <v-tab header="被禁用的" disabled>
    ...
  </v-tab>
  <v-tab header="推广短信签名">
     <p>
        选项卡二内容
     </p>
  </v-tab>
  <v-tab header="推广短信签名">
     <p>
        选项卡二内容
     </p>
  </v-tab>
</v-tabs>
````

````vue-script
let Message = atui.Message
new Vue({
  el: 'body',
  components: {
    vTabs: atui.Tabset,
    vTab: atui.Tabset.Tab
  },
  methods: {
    handleOnClick (index) {
      Message.info('这是第'+ index + '个Tab')
    }
  }
})
````
