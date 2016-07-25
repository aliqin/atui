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

## en-US


````jsx
<v-steps :current="current" color="#00a0ff">
  <v-step title="已完成" ></v-step>
  <v-step title="进行中"></v-step>
  <v-step title="有一个待运行"></v-step>
  <v-step title="待运行"></v-step>
</v-steps>
<v-steps :current="current" color="rgb(229, 46, 46)">
    <v-step title="已完成" ></v-step>
    <v-step title="进行中"></v-step>
    <v-step title="有一个待运行"></v-step>
    <v-step title="待运行"></v-step>
</v-steps>
<v-steps :current="current">
  <v-step title="已完成" description="这里是多信息"></v-step>
  <v-step title="进行中"  description="这里是多信息的耶哦"></v-step>
  <v-step title="有一个待运行" description="描述啊描述啊"></v-step>
  <v-step title="待运行" description="这里是多信息的描述啊"></v-step>
</v-steps>
````

````vue-script
new Vue({
    el: 'body',
    components: {
        vSteps: atui.Steps,
        vStep: atui.Steps.Step
    }
})
````