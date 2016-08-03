---
category: Components
type: Form Controls
title: Cascader
subtitle: 级联选择器
---


## 使用准备

需要一个数据源来绑定,比如

```js
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
}]

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
      console.log(selectedValue)
    }
  }
})

```


## API



属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
options | 显示的极联数据选项，必传 | Array | []
placeholder | 占位符 | String | 请选择
width | 宽度 | String |
displayRender | 显示格式式化函数 | Function | function(label) { return label.join(' / ') }
defaultValue | 默认显示的数据 | Array | []

