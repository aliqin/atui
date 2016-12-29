---
order: 0
title:
  zh-CN: 带有输入框的滑块
  en-US: Type
---

## zh-CN



## en-US


````jsx
<v-row>
  <v-col span="14">
    <slider v-model="sliderValue"></slider>
  </v-col>
  <v-col span="10">
    <v-input type="text" v-model="sliderValue"></v-input>
  </v-col>
</v-row>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    slider: atui.Slider,
    vRow: atui.Layout.Row,
    vCol: atui.Layout.Col,
    vInput: atui.Input
  },
  data: {
    sliderValue : 5
  }
})
````
