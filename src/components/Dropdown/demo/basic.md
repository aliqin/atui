---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN



## en-US

````jsx

<dropdown>
  <div data-toggle="dropdown">
    点击显示菜单 <icon type="down"></icon>
  </div>
  <ul name="dropdown-menu" class="dropdown-menu">
    <li><a>选项一</a></li>
    <li><a>选项二</a></li>
    <li><a>选项三</a></li>
    <li role="separator" class="divider"></li>
    <li><a href="#">其它</a></li>
  </ul>
</dropdown>
<dropdown>
  <button type="button" class="btn" data-toggle="dropdown">
    点击显示菜单 <icon type="down"></icon>
  </button>
  <ul name="dropdown-menu" class="dropdown-menu">
    <li><a>选项一</a></li>
    <li><a>选项二</a></li>
    <li><a>选项三</a></li>
    <li role="separator" class="divider"></li>
    <li><a href="#">其它</a></li>
  </ul>
</dropdown>
<dropdown>
  <button type="button" class="btn btn-primary" data-toggle="dropdown">
    点击显示菜单 <icon type="down"></icon>
  </button>
  <ul name="dropdown-menu" class="dropdown-menu">
    <li><a href="#">选项一</a></li>
    <li><a href="#">选项二</a></li>
    <li><a href="#">选项三</a></li>
    <li role="separator" class="divider"></li>
    <li><a href="#">其它</a></li>
  </ul>
</dropdown>
<dropdown trigger="hover">
  <a href="#" data-toggle="dropdown">
    鼠标移上来显示 <icon type="down"></icon>
  </a>
  <ul name="dropdown-menu" class="dropdown-menu">
    <li><a href="#">选项一</a></li>
    <li><a href="#">选项二</a></li>
    <li><a href="#">选项三</a></li>
    <li role="separator" class="divider"></li>
    <li><a href="#">其它</a></li>
  </ul>
</dropdown>
````

````vue-script
new Vue({
    el: 'body',
    components: {
        dropdown: atui.Dropdown
    }
})
````
