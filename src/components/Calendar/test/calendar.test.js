/**
 * Created by jiangyi on 16/7/11.
 */

import Vue from 'vue'
import Calendar from '../'

describe('Calendar组件单元测试', () => {
  let vm = new Vue({
    components: {
      Calendar
    },
    template: `
      <calendar @change="selectChange"></calendar>
    `,
    replace: false,
    methods: {
      selectChange () {}
    }
  }).$mount()

  it('基本功能渲染', () => {
    expect(vm.$el.querySelectorAll('.atui-calendar').length).to.be.equal(1)
  })
})
