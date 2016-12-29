---
order: 1
title:
  zh-CN: 弹窗默认显示
  en-US: Type
---

## zh-CN
配置props:`popupAlwaysShow=true`,默认展示

## en-US

````jsx
<v-trigger :popup-always-show="true">
  <v-button slot="trigger">不需要触发</v-button>
  <div slot="popup">我会永远展示</div>
</v-trigger>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    vTrigger: atui.Trigger,
    vButton: atui.Button
  }
})
````
