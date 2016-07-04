<template>
  <div class="bs-docs-section" id="menu">
    <h3 class="page-header"><a href="#menu" class="anchor">Menu 菜单</a></h3>
    <div class="bs-example">
    <v-menu mode="inline"
      >
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
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<menu>
  <menu-item>菜单1</menu-item>
  <sub-menu title="子导航1">
    <menu-item><a href="http://www.taobao.com" target="_blank">淘宝</a></menu-item>
    <menu-item><a href="http://www.tmall.com" target="_blank">天猫</a></menu-item>
    <menu-item><a href="http://www.alipay.com" target="_blank">支付宝</a></menu-item>
  </sub-menu>
  <sub-menu title="子导航2">
    <menu-item>子导航21</menu-item>
    <menu-item>子导航22</menu-item>
    <menu-item>子导航23</menu-item>
  </sub-menu>
</menu>
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
      <tr>
        <td>title</td>
        <td><code>String</code></td>
        <td></td>
        <td>标题</td>
      </tr>
      <tr>
        <td>width</td>
        <td><code>Number, String or null</code></td>
        <td><code>null</code></td>
        <td> ( 例如: '80%' 或 '5em' 或500 ) 如果不填那么就是自动宽</td>
      </tr>
      <tr>
        <td>callback</td>
        <td><code>Function</code></td>
        <td></td>
        <td>当点击主要按钮时触发的回调.</td>
      </tr>
      <tr>
        <td>large</td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td>大的弹窗</td>
      </tr>
      <tr>
        <td>small</td>
        <td><code>Boolean</code></td>
        <td><code>false</code></td>
        <td>小的弹窗</td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
  import {Menu} from 'src/'
  const { SubMenu, MenuItem, MenuItemGroup} = Menu
  export default {
    data() {
      return {
        showModal: false,
        fadeModal: false,
        zoomModal: false,
        showCustomModal: false,
        largeModal: false,
        smallModal: false
      }
    },
    components: {
      vMenu: Menu,
      SubMenu,
      MenuItemGroup,
      MenuItem
    },
  }
</script>
