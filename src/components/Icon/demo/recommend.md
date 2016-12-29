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
<v-icon type="info-s"></v-icon>
<v-icon type="error-s"></v-icon>
<v-icon type="success-s"></v-icon>
<v-icon type="help-s"></v-icon>
<v-icon type="warning-s"></v-icon>
<v-icon type="info-s-b"></v-icon>
<v-icon type="error-s-b"></v-icon>
<v-icon type="success-s-b"></v-icon>
<v-icon type="help-s-b"></v-icon>
<v-icon type="warning-s-b"></v-icon>
<br>
<p>24px尺寸推荐使用：</p>
<v-icon type="info"></v-icon>
<v-icon type="error"></v-icon>
<v-icon type="success"></v-icon>
<v-icon type="help"></v-icon>
<v-icon type="warning"></v-icon>
<br>
<p>36px尺寸推荐使用：</p>
<v-icon type="info-l"></v-icon>
<v-icon type="error-l"></v-icon>
<v-icon type="success-l"></v-icon>
<v-icon type="help-l"></v-icon>
<v-icon type="warning-l"></v-icon>

````

````vue-script
new Vue({
    el: 'body',
    components: {
        vIcon: atui.Icon
    }
})
````
