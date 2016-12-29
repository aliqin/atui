---
order: 1
title:
  zh-CN: popup里继续trigger
  en-US: Type
---

## zh-CN
高级用法: popup里继续trigger

## en-US

````jsx
<v-trigger trigger="click" placement="right">
  <v-button slot="trigger">popup里继续trigger</v-button>
  <div slot="popup">
    <v-trigger trigger="hover">
      <span slot="trigger" style="display: inline-block; padding: 20px; border: 1px solid gray">hover to trigger</span>
      <div slot="popup" style="padding: 20px">I'm a hover popup</div>
    </v-trigger>
  </div>
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
