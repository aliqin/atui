---
order: 0
title:
  zh-CN: 横向的
  en-US: Type
---

## zh-CN



## en-US


````jsx
<v-menu mode="horizontal">
  <v-sub-menu uuid="sub1" title="导航一">
    <v-menu-item-group title="分组1">
      <v-menu-item uuid="item1"><a href="http://www.alidayu.com" target="_blank">选项1</a></v-menu-item>
      <v-menu-item uuid="item2">选项2</v-menu-item>
    </v-menu-item-group>
    <v-menu-item-group title="分组2">
      <v-menu-item uuid="item3">选项3</v-menu-item>
      <v-menu-item uuid="item4">选项4</v-menu-item>
    </v-menu-item-group>
  </v-sub-menu>
  <v-sub-menu uuid="sub2" title="导航二">
    <v-menu-item uuid="item5">选项5</v-menu-item>
    <v-menu-item uuid="item6">选项6</v-menu-item>
    <v-sub-menu title="三级导航">
      <v-menu-item uuid="item7">选项7</v-menu-item>
      <v-menu-item uuid="item8">选项8</v-menu-item>
    </v-sub-menu>
  </v-sub-menu>
  <v-sub-menu uuid="sub3" title="导航三">
    <v-menu-item uuid="item9">选项9</v-menu-item>
    <v-menu-item uuid="item10">选项10</v-menu-item>
    <v-menu-item uuid="item11">选项11</v-menu-item>
    <v-menu-item uuid="item12">选项12</v-menu-item>
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
  }
})
````
