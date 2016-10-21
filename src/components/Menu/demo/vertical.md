---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN



## en-US


````jsx
<v-menu mode="horizontal">
  <sub-menu title="导航一">
    <menu-item-group title="分组1">
      <menu-item><a href="http://www.alidayu.com" target="_blank">选项1</a></menu-item>
      <menu-item>选项2</menu-item>
    </menu-item-group>
    <menu-item-group title="分组2">
      <menu-item>选项3</menu-item>
      <menu-item>选项4</menu-item>
    </menu-item-group>
  </sub-menu>
  <sub-menu title="导航二">
    <menu-item>选项5</menu-item>
    <menu-item>选项6</menu-item>
    <sub-menu title="三级导航">
      <menu-item>选项7</menu-item>
      <menu-item>选项8</menu-item>
    </sub-menu>
  </sub-menu>
  <sub-menu title="导航三">
    <menu-item>选项9</menu-item>
    <menu-item>选项10</menu-item>
    <menu-item>选项11</menu-item>
    <menu-item>选项12</menu-item>
  </sub-menu>
</v-menu>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    vMenu: atui.Menu,
    menuItem: atui.Menu.MenuItem,
    menuItemGroup: atui.Menu.MenuItemGroup,
    subMenu: atui.Menu.SubMenu
  }
})
````
