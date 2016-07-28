---
order: 0
title:
  zh-CN: 高级
  en-US: Type
---

## zh-CN



## en-US


````jsx
<trigger trigger="click">
  <button class="atui-btn" slot="trigger">popup里继续trigger</button>
  <div slot="popup">
    <trigger trigger="hover" placement="right">
      <span slot="trigger" style="display: inline-block; padding: 20px; border: 1px solid gray">hover to trigger</span>
      <div slot="popup" style="padding: 20px">I'm a hover popup</div>
    </trigger>
  </div>
</trigger>

<trigger trigger="hover" placement="right">
  <trigger trigger="hover" slot="trigger">
    <button class="atui-btn" slot="trigger">同时多个popup</button>
    <div slot="popup">I'm popup-1</div>
  </trigger>
  <div slot="popup">I'm popup-2</div>
</trigger>

<trigger trigger="hover" placement="right">
  <trigger trigger="hover" slot="trigger">
    <button class="atui-btn" slot="trigger">同时多个popup</button>
    <div slot="popup">I'm popup-1</div>
  </trigger>
  <div slot="popup">I'm popup-2</div>
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
