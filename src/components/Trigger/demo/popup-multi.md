---
order: 1
title:
  zh-CN: 同时多个popup
  en-US: Type
---

## zh-CN
高级用法: 同时多个popup

## en-US

````jsx
<v-trigger trigger="hover" placement="right">
  <v-trigger trigger="hover" slot="trigger">
    <v-button slot="trigger">同时多个popup</v-button>
    <div slot="popup">I'm popup-1</div>
  </v-trigger>
  <div slot="popup">I'm popup-2</div>
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
