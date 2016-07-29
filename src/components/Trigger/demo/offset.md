---
order: 1
title:
  zh-CN: 弹窗坐标偏移
  en-US: Type
---

## zh-CN
配置props:`offset=[50, 0]`,向右偏移量50px

## en-US

````jsx
<trigger :offset="[50, 0]" placement="right">
  <v-button slot="trigger">弹窗向右偏移50px</v-button>
  <div slot="popup">我被偏移了...</div>
</trigger>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    trigger: atui.Trigger,
    vButton: atui.Button
  }
})
````
