---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN



## en-US


````jsx
<h4>小的加载</h4>
<spin show size="small"></spin>
<h4>普通加载</h4>
<spin show></spin>
<h4>大的加载</h4>
<spin show size="large"></spin>
<h4>隐藏的大的加载(默认不加show就不显示)</h4>
<spin size="large"></spin>
<h4>包裹要loading的元素</h4>
<spin sping>
  <div>
    内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
  </div>
</spin>
````

````vue-script
new Vue({
    el: 'body',
    components: {
        spin: atui.Spin
    }
})
````
