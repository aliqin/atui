---
order: 1
title:
  zh-CN: 描述功能
  en-US: Type
---

## zh-CN

添加一些步骤描述

## en-US


````jsx
<v-steps :current="2" >
  <v-step title="第一步" description="这里是多信息"></v-step>
  <v-step title="第二步" description="这里是多信息"></v-step>
  <v-step title="第三步" description="这里是多信息"></v-step>
  <v-step title="第四步" description="这里是多信息"></v-step>
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
