---
category: Components
chinese: 手风琴
type: Navigation
english: Accordion
---

显示当前页面在系统层级结构中的位置，并能向上返回。

## 何时使用

- 当系统拥有超过两级以上的层级结构时；
- 当需要告知用户『你在哪里』时；
- 当需要向上导航的功能时。

## API

```html
<accordion :one-at-atime="checked">
  <panel open>
    <div slot="panel-header" class="custom-class">Panel #1</div>
    内容一
  </panel>
  <panel>
    <div slot="panel-header" class="custom-class">Panel #2</div>
    内容二
  </panel>
  <panel>
    <div slot="panel-header" class="custom-class">Panel #3</div>
    内容三
  </panel>
  <panel>
    <div slot="panel-header" class="custom-class">Panel #4</div>
    内容四
  </panel>
</accordion>
```

| 参数      | 说明                              | 类型              |  可选值 | 默认值 |
|-----------|-----------------------------------|-----------------|---------|--------|
| routes    | router 的路由栈信息               | Array             |         | -      |
| params    | 路由的参数                        | Object            |         | -      |
| separator | 分隔符自定义                      | String or Element |         | '/'    |
| linkRender | 自定义链接函数，和 react-router 配置使用 | Function(href, name, paths) | | - |
| nameRender | 自定义文字函数，和 react-router 配置使用 | Function(breadcrumbName, route, params) | | - |


