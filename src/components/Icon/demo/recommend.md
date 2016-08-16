---
order: 0
title:
  zh-CN: 推荐尺寸
  en-US: Recommend
---

## zh-CN

图标推荐尺寸
因为同一个的图标在不同尺寸下线条感差异可能会比较大，针对不同的图标，我们给出推荐尺寸


## en-US


````jsx

<p>16px尺寸推荐使用：</p>
<icon type="info-s"></icon>
<icon type="error-s"></icon>
<icon type="success-s"></icon>
<icon type="help-s"></icon>
<icon type="warning-s"></icon>
<br>
<p>24px尺寸推荐使用：</p>
<icon type="info"></icon>
<icon type="error"></icon>
<icon type="success"></icon>
<icon type="help"></icon>
<icon type="warning"></icon>
<br>
<p>36px尺寸推荐使用：</p>
<icon type="info-l"></icon>
<icon type="error-l"></icon>
<icon type="success-l"></icon>
<icon type="help-l"></icon>
<icon type="warning-l"></icon>

````

````vue-script
new Vue({
    el: 'body',
    components: {
        icon: atui.Icon
    }
})
````
