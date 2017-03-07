---
order: 2
title:
  zh-CN: 偏移量
  en-US: Type
---

## zh-CN
可以设置offset属性来设置距离窗口顶部达到指定偏移量后触发 ，默认为0

## en-US


````jsx
<v-affix :offset="100">
  <v-button>100px to top</v-button>
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
