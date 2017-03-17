---
order: 2
title:
  zh-CN: 可以关闭的
  en-US: Close
---

## zh-CN

使用 visible 属性控制浮层显示，在pop-change事件中同步visible的状态值

## en-US


````jsx
<popover
  effect="fade"
  placement="bottom"
  :visible="visible"
  trigger="hover"
  @pop-change="(show) => visible = show"
  title="我是标题">
  <div slot="content">
  <p>我是文字，我是文字，我是文字，我是文字，我是文字，我是文字，我是文字，</p>
  <v-button @click.native="visible = false">点我关闭</v-button>
  </div>
  <v-button class="aa">Popover on bottom</v-button>
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
