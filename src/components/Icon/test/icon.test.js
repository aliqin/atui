/**
 * Created by jiangyi on 16/7/13.
 */

import Vue from 'vue'
import Icon from '../'

describe('Icon组件单元测试', () => {
  let vm = new Vue({
    components: {
      Icon
    },
    template: `
      <div>
      <icon type="search"></icon>
      </div>
    `
  }).$mount()

  it('基本功能渲染', () => {
    expect(vm.$el.querySelectorAll('.atui-icon-search').length).to.be.equal(1)
  })
})
