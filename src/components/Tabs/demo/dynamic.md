---
order: 0
title:
  zh-CN: 动态绑定
  en-US: dynamic
---

## zh-CN
如果需要动态增加或删除tab的话需要在最外层的tabs组件额外绑定headers属性


## en-US


````jsx
<v-tabs :headers="apps" :active="active" @change="onTabChange">
  <v-tab v-for="app in apps" :header="app.appname">
    <p>
      {{app.appname}}
    </p>
  </v-tab>
</v-tabs>
<v-button @click.native="deleteTab" :style="{marginTop:'20px'}">删除第二个tab</v-button>
<v-button @click.native="changeTab" :style="{marginTop:'20px'}">激活第三个tab</v-button>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    vButton: atui.Button,
    vTabs: atui.Tabset,
    vTab: atui.Tabset.Tab
  },
  data() {
    return {
      active: 0,
      apps: [
        {
          appname: '大于'
        },
        {
          appname: '直充'
        },
        {
          appname: '网厅'
        }
      ]
    }
  },
  methods: {
    deleteTab() {
      this.apps.splice(1,1)
    },
    changeTab() {
      this.active = 2
    },
    onTabChange(currIndex) {
      console.log(currIndex)
    }
  }
})
````
