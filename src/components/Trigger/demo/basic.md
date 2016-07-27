---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN



## en-US

````jsx
<trigger trigger="click" placement="top">
  <button class="atui-btn" slot="trigger">click to trigger</button>
  <div slot="popup">I'm a click popup</div>
</trigger>

<trigger trigger="hover">
  <button class="atui-btn" slot="trigger">hover to trigger</button>
  <div slot="popup">I'm a hover popup</div>
</trigger>

<trigger trigger="click" placement="topRight">
  <button class="atui-btn" slot="trigger">click to show topRight</button>
  <div slot="popup">I'm a hover popup</div>
</trigger>

<trigger trigger="hover" placement="topLeft">
  <button class="atui-btn" slot="trigger">topLeft</button>
  <div slot="popup">I'm a hover popup</div>
</trigger>

<trigger trigger="hover" placement="bottomRight">
  <button class="atui-btn" slot="trigger">bottomRight</button>
  <div slot="popup">I'm a hover popup</div>
</trigger>

<trigger trigger="focus">
  <input type="text" class="atui-form-control" placeholder="Focus" slot="trigger">
  <div slot="popup">I'm a hover popup</div>
</trigger>
````

````vue-script
new Vue({
    el: 'body',
    components: {
        trigger: atui.Trigger
    }
})
````
