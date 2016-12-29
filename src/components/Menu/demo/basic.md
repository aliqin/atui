---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN



## en-US


````jsx
<v-menu @click="click">
  <v-sub-menu uuid="sub1" title="导航一">
    <v-menu-item-group title="分组1">
      <v-menu-item uuid="1">选项1</v-menu-item>
      <v-menu-item uuid="2">选项2</v-menu-item>
    </v-menu-item-group>
    <v-menu-item-group title="分组2">
      <v-menu-item uuid="3">选项3</v-menu-item>
      <v-menu-item uuid="4">选项4</v-menu-item>
    </v-menu-item-group>
  </v-sub-menu>
  <v-sub-menu uuid="sub2" title="导航二">
    <v-menu-item uuid="5">选项5</v-menu-item>
    <v-menu-item uuid="6">选项6</v-menu-item>
    <v-sub-menu uuid="sub3" title="三级导航">
      <v-menu-item uuid="7">选项7</v-menu-item>
      <v-menu-item uuid="8">选项8</v-menu-item>
    </v-sub-menu>
  </v-sub-menu>
  <v-sub-menu uuid="sub4" title="导航三">
    <v-menu-item uuid="9">选项9</v-menu-item>
    <v-menu-item uuid="10">选项10</v-menu-item>
    <v-menu-item uuid="11">选项11</v-menu-item>
    <v-menu-item uuid="12">选项12</v-menu-item>
  </v-sub-menu>
</v-menu>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    vMenu: atui.Menu,
    vMenuItem: atui.Menu.MenuItem,
    vMenuItemGroup: atui.Menu.MenuItemGroup,
    vSubMenu: atui.Menu.SubMenu
  },
  methods: {
    click(e,d) {
      console.log('menu-click',e,d)
    }
  }
})
````
