<template>
  <div class="bs-docs-section" id="dropdown">
    <h3 class="page-header"><a href="#dropdown" class="anchor">Dropdown 下拉框</a></h3>
    <div class="bs-example">
      <dropdown>
        <div data-toggle="dropdown">
          点击显示菜单 <icon type="down"></icon>
        </div>
        <ul name="dropdown-menu" class="atui-dropdown-menu">
          <li><a>选项一</a></li>
          <li><a>选项二</a></li>
          <li><a>选项三</a></li>
          <li role="separator" class="atui-dropdown-divider"></li>
          <li><a href="#">其它</a></li>
        </ul>
      </dropdown>
      <dropdown>
        <button type="button" class="atui-btn" data-toggle="dropdown">
          点击显示菜单 <icon type="down"></icon>
        </button>
        <ul name="dropdown-menu" class="atui-dropdown-menu">
          <li><a>选项一</a></li>
          <li><a>选项二</a></li>
          <li><a>选项三</a></li>
          <li role="separator" class="atui-dropdown-divider"></li>
          <li><a href="#">其它</a></li>
        </ul>
      </dropdown>
      <dropdown>
        <button type="button" class="atui-btn atui-btn-primary" data-toggle="dropdown">
          点击显示菜单 <icon type="down"></icon>
        </button>
        <ul name="dropdown-menu" class="atui-dropdown-menu">
          <li><a href="#">选项一</a></li>
          <li><a href="#">选项二</a></li>
          <li><a href="#">选项三</a></li>
          <li role="separator" class="atui-dropdown-divider"></li>
          <li><a href="#">其它</a></li>
        </ul>
      </dropdown>
      <dropdown trigger="hover">
        <a href="#" data-toggle="dropdown">
          鼠标移上来显示 <icon type="down"></icon>
        </a>
        <ul name="dropdown-menu" class="atui-dropdown-menu">
          <li><a href="#">选项一</a></li>
          <li><a href="#">选项二</a></li>
          <li><a href="#">选项三</a></li>
          <li role="separator" class="atui-dropdown-divider"></li>
          <li><a href="#">其它</a></li>
        </ul>
      </dropdown>
    </div>
    <pre><code class="language-markup"><script type="language-mark-up">
<dropdown>
  <div data-toggle="dropdown">
    点击显示菜单 <icon type="down"></icon>
  </div>
  <ul name="dropdown-menu" class="atui-dropdown-menu">
    <li><a>选项一</a></li>
    <li><a>选项二</a></li>
    <li><a>选项三</a></li>
    <li role="separator" class="atui-dropdown-divider"></li>
    <li><a href="#">其它</a></li>
  </ul>
</dropdown>
<dropdown>
  <button type="button" class="atui-btn" data-toggle="dropdown">
    点击显示菜单 <icon type="down"></icon>
  </button>
  <ul name="dropdown-menu" class="atui-dropdown-menu">
    <li><a>选项一</a></li>
    <li><a>选项二</a></li>
    <li><a>选项三</a></li>
    <li role="separator" class="atui-dropdown-divider"></li>
    <li><a href="#">其它</a></li>
  </ul>
</dropdown>
<dropdown>
  <button type="button" class="atui-btn atui-btn-primary" data-toggle="dropdown">
    点击显示菜单 <icon type="down"></icon>
  </button>
  <ul name="dropdown-menu" class="atui-dropdown-menu">
    <li><a href="#">选项一</a></li>
    <li><a href="#">选项二</a></li>
    <li><a href="#">选项三</a></li>
    <li role="separator" class="atui-dropdown-divider"></li>
    <li><a href="#">其它</a></li>
  </ul>
</dropdown>
<dropdown trigger="hover">
  <a href="#" data-toggle="dropdown">
    鼠标移上来显示 <icon type="down"></icon>
  </a>
  <ul name="dropdown-menu" class="atui-dropdown-menu">
    <li><a href="#">选项一</a></li>
    <li><a href="#">选项二</a></li>
    <li><a href="#">选项三</a></li>
    <li role="separator" class="atui-dropdown-divider"></li>
    <li><a href="#">其它</a></li>
  </ul>
</dropdown>
</script></code></pre>


<h2>Options</h2>
    <table class="atui-table table-bordered">
      <thead>
        <tr>
          <th>名称</th>
          <th>类型</th>
          <th>默认值</th>
          <th>说明</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>trigger</td>
          <td><code>String</code></td>
          <td><code>click</code> one of <code>click</code> <code>hover</code></td>
          <td>触发类型</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import {Dropdown,Icon} from 'src/'
  export default {
    components: {
      Dropdown,
      Icon
    }
  }
</script>
