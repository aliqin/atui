---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN
Trigger最基本的用法

## en-US

````jsx
<trigger>
  <v-button slot="trigger">popup on bottom</v-button>
  <div slot="popup">I'm a popup</div>
</trigger>

<trigger placement="right">
  <v-button slot="trigger">popup on right</v-button>
  <div slot="popup">I'm a popup</div>
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
