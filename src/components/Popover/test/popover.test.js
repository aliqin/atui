/**
 * Created by jiangyi on 16/7/20.
 */

import Vue from 'vue'
import Popover from '../Popover'

describe('Popover组件单元测试', () => {
  let vm = new Vue({
    components: {
      Popover
    },
    replace: false,
    template: `
      <popover effect="scale" title="this is title" content="this is content" placement="top" trigger="hover">
        <button class="atui-btn">Hover</button>
      </popover>
    `
  }).$mount()

  it('基本渲染功能', () => {
    expect(vm.$el.querySelectorAll('.atui-trigger').length).to.be.equal(1)
    expect(vm.$el.querySelectorAll('.atui-btn').length).to.be.equal(1)
    expect(vm.$el.querySelectorAll('.atui-popover-top').length).to.be.equal(1)
  })
})
