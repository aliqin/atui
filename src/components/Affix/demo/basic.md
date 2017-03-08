---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN
基本使用方式，默认会固定在浏览器窗口最上方，当元素固定时会加上vue-affix这个class，可以依据此class写固定状态的自定义样式


## en-US


````jsx
<v-affix>
  <v-button>affix</v-button>
</v-affix>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    vButton: atui.Button,
    vAffix: atui.Affix
  },
  data() {
    return {
      
    }
  },
  methods: {

  }
})
````
