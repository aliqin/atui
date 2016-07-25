---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN



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
