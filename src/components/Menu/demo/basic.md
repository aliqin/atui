---
order: 0
title:
  zh-CN: 按钮类型
  en-US: Type
---

## zh-CN

按钮有四种类型：主按钮、次按钮、幽灵按钮、虚线按钮。

通过设置 `type` 为 `primary` `ghost` `dashed` 可分别创建主按钮、幽灵按钮、虚线按钮，若不设置 `type` 值则为次按钮。不同的样式可以用来区别其重要程度。

主按钮和次按钮可独立使用，幽灵按钮用于和主按钮组合。需要强引导用主按钮，切记主按钮在同一个操作区域最多出现一次。

## en-US

There are primary button, default button, ghost button and dashed button in antd.

`type` can be set as `primary` or `ghost` or `dashed`, in order to create primary button or ghost button or dashed button. If nothing is provided to `type`, we will get default button. Users can tell the significance of button from it's appearance.

Primary button and default button can be used without other button, but ghost button must be used with primary button.



````jsx
<v-menu>
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