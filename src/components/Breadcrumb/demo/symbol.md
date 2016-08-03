---
order: 0
title:
  zh-CN: 自定义间隔符
  en-US: Type
---

## zh-CN



## en-US


````jsx
<breadcrumb symbol="&gt;">
  <breadcrumb-item :href="href">一级类目</breadcrumb-item>
  <breadcrumb-item :href="href">二级类目</breadcrumb-item>
  <breadcrumb-item :href="href">三级类目</breadcrumb-item>
  <breadcrumb-item>四级类目</breadcrumb-item>
</breadcrumb>
````

````vue-script
new Vue({
  el: 'body',
  components: {
      breadcrumb: atui.Breadcrumb,
      breadcrumbItem: atui.Breadcrumb.BreadcrumbItem
  }
})
````
