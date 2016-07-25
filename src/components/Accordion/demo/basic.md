---
order: 0
title:
  zh-CN: 按钮类型
  en-US: Type
---

## zh-CN

按钮有四种类型：主按钮、次按钮、幽灵按钮、虚线按钮。

通过设置 `type` 为 `primary` `ghost` `dashed` 可分别创建主按钮、幽灵按钮、虚线按钮，若不设置 `type` 值则为次按钮。不同的样式可以用来区别其重要程度。

主按钮和次按钮可独立使用，幽灵按钮用于和主按钮组合。需要强引导用主按钮，切记主按钮在同一个操作区域最多出现一次。



````jsx
<input type="checkbox" v-model="checked">
<label for="checked">Open only one at a time.</label>
<accordion :one-at-atime="checked">
  <panel :is-open="true">
    <div slot="panel-header" class="custom-class">Panel #1</div>
    内容一
  </panel>
  <panel>
    <div slot="panel-header" class="custom-class">Panel #2</div>
    内容二
  </panel>
  <panel>
    <div slot="panel-header" class="custom-class">Panel #3</div>
    内容三
  </panel>
  <panel>
    <div slot="panel-header" class="custom-class">Panel #4</div>
    内容四
  </panel>
</accordion>
````

````vue-script
new Vue({
    el: 'body',
    components: {
        accordion: atui.Accordion,
        panel: atui.Accordion.Panel
    }
})
````