---
order: 1
title:
  zh-CN: 管理中心
  en-US: admin
---

## zh-CN

简单的一个后面管理模板

## en-US


````jsx
<v-row>
  <v-col span="18">
  <h1>管理中心</h1>
  </v-col>
  <v-col span="6">
    <header style="text-align:right;">
      <icon type="help-s"></icon>帮助
    </header>
  </v-col>
</v-row>
<v-row>
  <v-col span="4">
    <v-menu>
      <sub-menu title="导航一">
        <menu-item><a href="http://www.alidayu.com" target="_blank">选项1</a></menu-item>
        <menu-item>选项2</menu-item>
        <menu-item>选项3</menu-item>
        <menu-item>选项4</menu-item>
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
  </v-col>
  <v-col span="20">
  <breadcrumb>
    <breadcrumb-item :href="href">一级类目</breadcrumb-item>
    <breadcrumb-item :href="href">二级类目</breadcrumb-item>
    <breadcrumb-item>三级类目</breadcrumb-item>
  </breadcrumb>
    <h3>我是一个页面</h3>
  </v-col>
</v-row>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    vRow: atui.Layout.Row,
    vCol: atui.Layout.Col,
    icon: atui.Icon,
    breadcrumb: atui.Breadcrumb,
    breadcrumbItem: atui.Breadcrumb.BreadcrumbItem,
    vMenu: atui.Menu,
    menuItem: atui.Menu.MenuItem,
    menuItemGroup: atui.Menu.MenuItemGroup,
    subMenu: atui.Menu.SubMenu
  }
})
````


