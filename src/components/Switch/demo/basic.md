---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN



## en-US


````jsx
<v-switch small color="#000"></v-switch>
<v-switch small checked @change="changeHandler"></v-switch>
<v-switch small disabled></v-switch>
<v-switch></v-switch>
<v-switch checked @change="changeHandler"></v-switch>
<v-switch disabled></v-switch>
<v-switch>
  <span slot="checkedPart">开</span>
  <span slot="unCheckedPart">关</span>
</v-switch>
<v-switch :disabled="disabled" checked>
  <span slot="checkedPart">开</span>
  <span slot="unCheckedPart">关</span>
</v-switch>
<v-switch :disabled="disabled">
  <span slot="checkedPart">开</span>
  <span slot="unCheckedPart">关</span>
</v-switch>
<v-switch>
  <span slot="checkedPart"><v-icon type="tick" size="16"></v-icon></span>
  <span slot="unCheckedPart"><v-icon type="close" size="12"></v-icon></span>
</v-switch>
````

````vue-script
new Vue({
    el: 'body',
    components: {
        vSwitch: atui.Switch
    }
})
````
