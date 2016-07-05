<template>
  <div class="bs-docs-section" id="menu">
    <h3 class="page-header"><a href="#menu" class="anchor">Menu 菜单</a></h3>
    <div class="bs-example">
    <v-menu style="width:240px;"
      >
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
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<v-menu>
  <sub-menu title="导航一">
    <menu-item-group title="分组1">
      <menu-item>选项1</menu-item>
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

<!--script-->
import {Menu} from 'src/'
const { SubMenu, MenuItem, MenuItemGroup} = Menu
export default {
  components: {
    vMenu: Menu,
    SubMenu,
    MenuItemGroup,
    MenuItem
  },
}
  </script></code></pre>

  <h2>Options</h2>
  <table class="atui-table table-bordered">
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  </table>
  </div>
</template>

<script>
  import {Menu} from 'src/'
  const { SubMenu, MenuItem, MenuItemGroup} = Menu
  export default {
    components: {
      vMenu: Menu,
      SubMenu,
      MenuItemGroup,
      MenuItem
    },
  }
</script>
