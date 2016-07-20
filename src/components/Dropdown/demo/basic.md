---
order: 0
title:
  zh-CN: 按钮类型
  en-US: Type
---

## zh-CN

按钮有四种类型：主按钮、次按钮、幽灵按钮、虚线按钮。

通过设置 `type` 为 `primary` `ghost` `dashed` 可分别创建主按钮、幽灵按钮、虚线按钮，若不设置 `type` 值则为次按钮。不同的样式可以用来区别其重要程度。

主按钮和次按钮可独立使用，幽灵按钮用于和主按钮组合。需要强引导用主按钮，切记主按钮在同一个操作区域最多出现一次。

## en-US

There are primary button, default button, ghost button and dashed button in antd.

`type` can be set as `primary` or `ghost` or `dashed`, in order to create primary button or ghost button or dashed button. If nothing is provided to `type`, we will get default button. Users can tell the significance of button from it's appearance.

Primary button and default button can be used without other button, but ghost button must be used with primary button.



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