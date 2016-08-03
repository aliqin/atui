---
order: 5
title:
  zh-CN: 按钮组
  en-US: Type
---

## zh-CN



## en-US


````jsx
<button-group>
  <v-button secondary value="cancel"></v-button>
  <v-button primary value="ok"></v-button>
</button-group>
<button-group large>
  <v-button primary value="L"></v-button>
  <v-button secondary value="M"></v-button>
  <v-button tertiary value="M"></v-button>
</button-group>
<button-group small>
  <v-button disabled value="L"></v-button>
  <v-button disabled value="M"></v-button>
  <v-button disabled value="M"></v-button>
  <v-button disabled value="R"></v-button>
</button-group>
<button-group>
  <v-button>
    <icon type="prev"></icon>上一页
  </v-button>
  <v-button>
    下一页<icon type="next"></icon>
  </v-button>
</button-group>
<button-group>
  <v-button>
    <icon type="head"></icon>
  </v-button>
  <v-button>
    <icon type="tail"></icon>
  </v-button>
</button-group>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    vButton: atui.Button,
    icon: atui.Icon
  }
})
````
