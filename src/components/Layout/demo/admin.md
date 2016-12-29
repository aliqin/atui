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
      <v-icon type="help-s"></v-icon>帮助
    </header>
  </v-col>
</v-row>
<v-row>
  <v-col span="4">
    <v-menu>
      <v-sub-menu title="导航一">
        <v-menu-item><a href="http://www.alidayu.com" target="_blank">选项1</a></v-menu-item>
        <v-menu-item>选项2</v-menu-item>
        <v-menu-item>选项3</v-menu-item>
        <v-menu-item>选项4</v-menu-item>
      </v-sub-menu>
      <v-sub-menu title="导航二">
        <v-menu-item>选项5</v-menu-item>
        <v-menu-item>选项6</v-menu-item>
        <v-sub-menu title="三级导航">
          <v-menu-item>选项7</v-menu-item>
          <v-menu-item>选项8</v-menu-item>
        </v-sub-menu>
      </v-sub-menu>
      <v-sub-menu title="导航三">
        <v-menu-item>选项9</v-menu-item>
        <v-menu-item>选项10</v-menu-item>
        <v-menu-item>选项11</v-menu-item>
        <v-menu-item>选项12</v-menu-item>
      </v-sub-menu>
    </v-menu>
  </v-col>
  <v-col span="20">
    <v-breadcrumb>
      <v-breadcrumb-item :href="href">一级类目</v-breadcrumb-item>
      <v-breadcrumb-item :href="href">二级类目</v-breadcrumb-item>
      <v-breadcrumb-item>三级类目</v-breadcrumb-item>
    </v-breadcrumb>
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
    vIcon: atui.Icon,
    vBreadcrumb: atui.Breadcrumb,
    vBreadcrumbItem: atui.Breadcrumb.BreadcrumbItem,
    vMenu: atui.Menu,
    vMenuItem: atui.Menu.MenuItem,
    vMenuItemGroup: atui.Menu.MenuItemGroup,
    vSubMenu: atui.Menu.SubMenu
  },
  data: {
    href: './'
  }
})
````


