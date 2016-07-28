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
  content="我是内容，我是内容，我是内容">
  <v-button>Popover on bottom</v-button>
</popover>

<popover
  effect="fade"
  placement="right"
  title="永远展示"
  content="怎么动都不会消失"
  :always-show="true">
  <v-button>Popover always show</v-button>
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
