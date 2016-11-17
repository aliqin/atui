---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN



## en-US


````jsx
<v-menu>
  <sub-menu key="sub1" title="导航一">
    <menu-item-group title="分组1">
      <menu-item key="1">选项1</menu-item>
      <menu-item key="2">选项2</menu-item>
    </menu-item-group>
    <menu-item-group title="分组2">
      <menu-item key="3">选项3</menu-item>
      <menu-item key="4">选项4</menu-item>
    </menu-item-group>
  </sub-menu>
  <sub-menu key="sub2" title="导航二">
    <menu-item key="5">选项5</menu-item>
    <menu-item key="6">选项6</menu-item>
    <sub-menu key="sub3" title="三级导航">
      <menu-item key="7">选项7</menu-item>
      <menu-item key="8">选项8</menu-item>
    </sub-menu>
  </sub-menu>
  <sub-menu key="sub4" title="导航三">
    <menu-item key="9">选项9</menu-item>
    <menu-item key="10">选项10</menu-item>
    <menu-item key="11">选项11</menu-item>
    <menu-item key="12">选项12</menu-item>
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
