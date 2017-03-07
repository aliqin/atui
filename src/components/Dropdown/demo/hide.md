---
order: 2
title:
  zh-CN: 菜单隐藏方式
  en-US: Type
---

## zh-CN
下拉菜单默认在点击菜单项后会被隐藏，将`hide-on-click`属性默认为`false`可以关闭此功能。


## en-US

````jsx

<v-dropdown :hide-on-click="false">
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
</v-dropdown>

````

````vue-script
new Vue({
  el: 'body',
  components: {
    vDropdown: atui.Dropdown,
    icon: atui.Icon
  },
  data: {
    
  },
  methods: {
    closeDropdown () {
    }
  }
})
````
