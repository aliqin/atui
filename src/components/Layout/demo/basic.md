---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN



## en-US


````jsx
<v-row>
  <v-col span="24">col-24</v-col>
</v-row>
<v-row>
  <v-col span="23">col-23</v-col>
  <v-col span="1">1</v-col>
</v-row>
````

````vue-script
new Vue({
    el: 'body',
    components: {
        vRow: atui.Layout.Row,
        vCol: atui.Layout.Col
    }
})
````
