---
category: Components
type: Form Controls
title: Slider
subtitle: 滑动输入条
---


## 何时使用


## API

属性 | 说明 | 类型 | 默认值
-----|-----|-----|------
value | 滑块的值，如果使用[5,10]或者['5','10']，表现为双滑块，也可以不指定value，直接绑定v-model | string or number or array | 0
min | 滑块位置取值区间最小值 | string or number | 0
max | 滑块位置取值区间最大值 | string or number | 100
@change | 当值发生改变时触发的事件 | Function | |
