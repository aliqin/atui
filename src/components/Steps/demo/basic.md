---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN

指定第2步高亮，注意是从0开始

## en-US


````jsx
<v-steps :current="2">
  <v-step title="第一步" ></v-step>
  <v-step title="第二步"></v-step>
  <v-step title="第三步"></v-step>
  <v-step title="第四步"></v-step>
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
