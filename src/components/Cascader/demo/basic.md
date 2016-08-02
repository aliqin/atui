---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN



## en-US


````jsx
<cascader :options="options" @change="selectChange" :default-value="defaultValue"></cascader>
````

````vue-script
var options = [{
    value: 'zhejiang',
    label: '浙江',
    children: [{
      value: 'hangzhou',
      label: '杭州',
      children: [{
        value: 'xihu',
        label: '西湖',
      }],
    }],
  }, {
    value: 'jiangsu',
    label: '江苏',
    children: [{
      value: 'nanjing',
      label: '南京',
      children: [{
        value: 'zhonghuamen',
        label: '中华门',
      }],
    }],
  }];

var defaultValue = ['zhejiang', 'hangzhou', 'xihu']

new Vue({
  el: 'body',
  components: {
    cascader: atui.Cascader
  },
  data () {
    return {
      options: options,
      defaultValue: defaultValue
    }
  },
  methods: {
    selectChange(selectedValue, option) {
      alert(selectedValue)
    }
  }
})
````
