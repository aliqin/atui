---
order: 0
title:
  zh-CN: 省市选择
  en-US: Type
---

## zh-CN
只可以选省和市，但这种情况推荐使用cascader组件

## en-US


````jsx
<address-select small level="2" placeholder="请选择省市"></address-select>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    addressSelect: atuiWidget.AddressSelect
  }
})
````
