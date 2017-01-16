/**
 * Created by jiangyi on 16/7/4.
 */

import Vue from 'vue'
import Badge from '../'

describe('Badge组件单元测试', () => {
  let vm = new Vue({
    data () {
      return {
        count: 6
      }
    },
    components: {
      Badge
    },
    template: `
      <badge :count="6">
        <a href="javascript:;" class="badge-count-example"></a>
      </badge>
    `
  }).$mount()

  it('组件基本渲染', () => {
    expect(vm.$el.querySelectorAll('.atui-badge-count').length).to.be.equal(1)
  })
})
