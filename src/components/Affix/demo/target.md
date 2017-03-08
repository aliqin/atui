---
order: 1
title:
  zh-CN: 滚动容器
  en-US: Container to scroll
---

## zh-CN
用 `target` 设置 `Affix` 需要监听其滚动事件的元素，默认为 `window`。

## en-US
Set a `target` for 'Affix', which is listen to scroll event of target element (default is `window`).

````jsx
<div id="affixTarget" style="width: 100%; height: 100px; background: #ccc; overflow-y: scroll; padding: 30px;">
  <div style="height: 300px;">
    <v-affix :target="getTarget">
      <v-button>affix</v-button>
    </v-affix>
  </div>
</div>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    vButton: atui.Button,
    vAffix: atui.Affix
  },
  data() {
    return {
      
    }
  },
  methods: {
    getTarget () {
      return document.getElementById('affixTarget')
    }
  }
})
````
