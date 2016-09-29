/**
 * Created by jiangyi on 16/7/13.
 */

import Vue from 'vue'
import Menu from '../Menu'

const {SubMenu, MenuItem, MenuItemGroup} = Menu

describe('Menu组件单元测试', () => {
  let vm = new Vue({
    components: {
      vMenu: Menu,
      vSubMenu: SubMenu,
      vMenuItem: MenuItem,
      vMenuItemGroup: MenuItemGroup
    },
    template: `
      <v-menu>
        <v-sub-menu title="导航一">
          <v-menu-item-group title="分组1">
            <v-menu-item>选项1</v-menu-item>
            <v-menu-item>选项2</v-menu-item>
          </v-menu-item-group>
          <v-menu-item-group title="分组2">
            <v-menu-item>选项3</v-menu-item>
            <v-menu-item>选项4</v-menu-item>
          </v-menu-item-group>
        </v-sub-menu>
      </v-menu>
    `,
    replace: false
  }).$mount()

  it('基本功能渲染', () => {
    expect(vm.$el.querySelectorAll('.atui-menu-root').length).to.be.equal(1)
    expect(vm.$el.querySelectorAll('.atui-menu-submenu').length).to.be.equal(1)
    expect(vm.$el.querySelectorAll('.atui-menu-item-group').length).to.be.equal(2)
    expect(vm.$el.querySelectorAll('.atui-menu-item').length).to.be.equal(4)
  })
})
