---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN



## en-US


````jsx
<popover
  effect="fade"
  placement="bottom"
  title="我是标题"
  content="我是内容，我是内容，我是内容"
  pop-cls="mypop"
  :pop-z-index="9090">
  <v-button class="abc">Popover on bottom</v-button>
</popover>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    popover: atui.Popover,
    vButton: atui.Button
  }
})
````
