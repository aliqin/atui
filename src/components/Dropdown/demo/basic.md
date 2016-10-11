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
  <div>
    点击显示菜单 <icon type="down"></icon>
  </div>
  <ul slot="dropdown-menu">
    <li><a>选项一</a></li>
    <li><a>选项二</a></li>
    <li><a>选项三</a></li>
    <li role="separator" class="atui-dropdown-divider"></li>
    <li><a href="#">其它</a></li>
  </ul>
</dropdown>

````

````vue-script
new Vue({
  el: 'body',
  components: {
    dropdown: atui.Dropdown,
    icon: atui.Icon
  }
})
````
