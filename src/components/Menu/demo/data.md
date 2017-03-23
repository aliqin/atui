---
order: 3
title:
  zh-CN: 绑定数据自动渲染
  en-US: Type
---

## zh-CN
如果你的menu是动态生成的，也可以通过给menu组件绑定一个数据结构来动态自动渲染，详细的数据结构参考下面的文档

## en-US


````jsx
<v-menu @click.native="click" v-model="menuData">
</v-menu>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    vMenu: atui.Menu,
    vMenuItem: atui.Menu.MenuItem,
    vMenuItemGroup: atui.Menu.MenuItemGroup,
    vSubMenu: atui.Menu.SubMenu
  },
  data: {
    menuData: [
      {
        type: 'SubMenu',
        uuid: 'sub1',
        title: '导航一',
        show: true, // 是否展开SubMenu
        children: [
          {
            type: 'MenuItemGroup',
            title: '分组1',
            uuid: 'sub1',
            children: [
              {
                type: 'MenuItem',
                uuid: '1',
                content: '<a href="//github.com/aliqin/atui">选项1</a>'
              },
              {
                type: 'MenuItem',
                uuid: '2',
                selected: true, // 是否选中该菜单项
                content: '选项2'
              }
            ]
          },
          {
            type: 'MenuItemGroup',
            title: '分组2',
            uuid: 'sub2',
            children: [
              {
                type: 'MenuItem',
                uuid: '3',
                content: '选项3'
              },
              {
                type: 'MenuItem',
                uuid: '4',
                content: '选项4'
              }
            ]
          }
        ]
      },
      {
        type: 'SubMenu',
        title: '导航二',
        uuid: 'sub2',
        children: [
          {
            type: 'MenuItem',
            uuid: '5',
            content: '选项5'
          },
          {
            type: 'MenuItem',
            uuid: '6',
            content: '选项6'
          },
          {
            type: 'SubMenu',
            uuid: 'sub3',
            title: '三级导航',
            children: [
              {
                type: 'MenuItem',
                uuid: '7',
                content: '选项7'
              },
              {
                type: 'MenuItem',
                uuid: '8',
                content: '选项8'
              }
            ]
          }
        ]
      }
    ]
  },
  methods: {
    click(e,d) {
      console.log('menu-click',e,d)
    }
  }
})
````
