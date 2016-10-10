---
order: 0
title:
  zh-CN: 可以关闭的
  en-US: Close
---

## zh-CN

使用 visible 属性控制浮层显示

## en-US


````jsx
<popover
  effect="fade"
  placement="bottom"
  :visible.sync="visible"
  title="我是标题">
  <div slot="content">
  <p>我是文字，我是文字，我是文字，我是文字，我是文字，我是文字，我是文字，</p>
  <v-button @click="visible = false">点我关闭</v-button>
  </div>
  <v-button>Popover on bottom</v-button>
</popover>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    popover: atui.Popover,
    vButton: atui.Button
  },
  data() {
    return {
      visible: false
    }
  }
})
````
