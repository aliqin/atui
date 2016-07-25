---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN



## en-US


````jsx
basic
<slider :value="30"></slider>
<slider :value="[20,50]"></slider>
<slider :value="[20,50]" disabled></slider>
带有输入框的滑块
<v-row>
  <v-col span="14">
    <slider :value.sync="sliderValue"></slider>
  </v-col>
  <v-col span="10">
    <v-input type="text" :value.sync="sliderValue"></v-input>
  </v-col>
</v-row>
有取值区间的滑块
<slider :value="1" :min="1" :max="21"></slider>
````

````vue-script
new Vue({
    el: 'body',
    components: {
        slider: atui.Slider,
        vRow: atui.Layout.Row,
        vCol: atui.Layout.Col,
        vInput: atui.Input
    }
})
````
