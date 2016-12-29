---
order: 0
title:
  zh-CN: 选择街道
  en-US: Type
---

## zh-CN
选择省和市

## en-US


````jsx
<address-select large level="4" placeholder="请选择详细地址" v-ref:select-addr></address-select>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    addressSelect: atuiWidget.AddressSelect
  },
  mounted() {
    // 获取当前地址
    console.log(this.$refs.selectAddr.addr)
  }
})
````
