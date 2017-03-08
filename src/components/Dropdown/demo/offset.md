---
order: 0
title:
  zh-CN: 带偏移量的菜单
  en-US: Type
---

## zh-CN
配置props:`offset=[0, 20]`,向下偏移量20px


## en-US

````jsx

<v-dropdown :offset="[0, 20]">
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
