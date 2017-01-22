import Vue from 'vue'
import Popover from '../'

describe('Popover组件单元测试', () => {
  let vm = new Vue({
    components: {
      Popover
    },
    replace: false,
    template: `
      <div>
      <popover effect="scale" title="this is title" content="this is content" placement="top" trigger="hover">
        <button class="atui-btn">Hover</button>
      </popover>
      </div>
    `
  }).$mount()

  it('基本渲染功能', () => {
    expect(vm.$el.querySelectorAll('.atui-trigger-cont').length).to.be.equal(1)
    expect(vm.$el.querySelectorAll('.atui-btn').length).to.be.equal(1)
    expect(vm.$el.querySelectorAll('.atui-popover-cont').length).to.be.equal(1)
  })
})
