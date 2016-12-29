---
order: 0
title:
  zh-CN: 获取焦点的时候展示
  en-US: Type
---

## zh-CN
配置props:`trigger=focus`,获取焦点的时候展示

## en-US

````jsx
<v-trigger trigger="focus">
  <input type="text" class="atui-form-control" placeholder="Focus" slot="trigger">
  <div slot="popup">I'm a hover popup</div>
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
