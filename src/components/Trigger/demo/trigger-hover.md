---
order: 0
title:
  zh-CN: hover展示
  en-US: Type
---

## zh-CN
配置props:`trigger=hover`,hover展示

## en-US

````jsx
<trigger trigger="hover">
  <v-button slot="trigger">hover to show</v-button>
  <div slot="popup">I'm a hover popup</div>
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
