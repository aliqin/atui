<template>
  <div class="bs-docs-section" id="menu">
    <h3 class="page-header"><a href="#menu" class="menu">Menu 菜单</a></h3>
    <div class="bs-example">
    <menu>
      <menu-item>
        菜单1
      </menu-item>
      <menu-item>顶起顶起</menu-item>
      <menu-item>顶起顶起</menu-item>
      <menu-item>
        <sub-menu>
          <menu-item>顶起顶起</menu-item>
        </sub-menu>
      </menu-item>
    </menu>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">

  </script></code></pre>
  <h2>Options</h2>
  <table class="table table-bordered">
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
  import Menu from 'src/components/menu/'
  const { SubMenu, MenuItem } = Menu
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
    components: { Menu, SubMenu, MenuItem },
  }
</script>
