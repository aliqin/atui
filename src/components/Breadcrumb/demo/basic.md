---
order: 0
title:
  zh-CN: 基本
  en-US: Type
---

## zh-CN



## en-US


````jsx
<v-breadcrumb>
  <v-breadcrumb-item :href="href">一级类目</v-breadcrumb-item>
  <v-breadcrumb-item :href="href">二级类目</v-breadcrumb-item>
  <v-breadcrumb-item>三级类目</v-breadcrumb-item>
</v-breadcrumb>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    vBreadcrumb: atui.Breadcrumb,
    vBreadcrumbItem: atui.Breadcrumb.BreadcrumbItem
  },
  data: {
    href: '/'
  }
})
````
