---
order: 2
title: 安装
---

## 安装

```bash
$ tnpm install @ali/atui --save
```
> 注：如果您是测试或者后台开发，建议您使用[快速上手](/docs/atui/getting-started)中介绍的浏览器引入的方式，如果您是专业的前端开发人员，可以根据习惯选择浏览器引入或者npm安装的方式


## 示例

```jsx
<v-button>按钮</v-button>

import Vue  from  'vue'
import atui from  '@ali/atui'

new Vue({
  components: {
    vButton: atui.Button
  }
})
```

引入样式：

```jsx

<link rel="stylesheet" href="http://g.alicdn.com/aliqin/atui/0.1.2/greater-blue.css">
```
> 注：目前支持三套皮肤，`greater-blue` ,`tao-orange`, `tmall-red`


