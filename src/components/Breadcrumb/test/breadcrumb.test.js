/**
 * Created by jiangyi on 16/7/4.
 */

import Vue from 'vue'
import Breadcrumb from '../'

const {BreadcrumbItem} = Breadcrumb

describe('Breadcrumb组件单元测试', () => {
  let vm = new Vue({
    data () {
      return {
        href: 'https://www.taobao.com'
      }
    },
    components: {
      Breadcrumb,
      BreadcrumbItem
    },
    replace: false,
    template: `
      <breadcrumb>
        <breadcrumb-item :href="href">一级目录</breadcrumb-item>
        <breadcrumb-item :href="href">二级目录</breadcrumb-item>
        <breadcrumb-item>三级别目录</breadcrumb-item>
      </breadcrumb>
    `
  }).$mount()

  it('基本功能渲染', () => {
    expect(vm.$el.querySelectorAll('.atui-breadcrumbs').length).to.be.equal(1)
    expect(vm.$el.querySelectorAll('.atui-breadcrumb').length).to.be.equal(3)
  })
})
