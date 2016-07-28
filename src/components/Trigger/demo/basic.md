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

<trigger :popup-always-show="true">
  <button class="atui-btn" slot="trigger">不需要触发</button>
  <div slot="popup">我会永远展示</div>
</trigger>

<trigger :offset="[0, 50]">
  <button class="atui-btn" slot="trigger">弹窗向下偏移50px</button>
  <div slot="popup">我被偏移了...</div>
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
