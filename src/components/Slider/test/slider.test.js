/**
 * Created by jiangyi on 16/7/20.
 */

import Vue from 'vue'
import Slider from '../'

describe('Slider组件单元测试', () => {
  let vm = new Vue({
    components: {
      Slider
    },
    replace: false,
    template: `
      <slider :value="30"></slider>
    `
  }).$mount()

  it('基础功能渲染', () => {
    expect(vm.$el.querySelectorAll('.atui-slider').length).to.be.equal(1)
    expect(vm.$el.querySelectorAll('.atui-slider-step').length).to.be.equal(1)
    expect(vm.$el.querySelectorAll('.atui-slider-mark').length).to.be.equal(1)
  })
})
