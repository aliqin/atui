import Vue from 'vue'
import Slider from '../'

describe('Slider组件单元测试', () => {
  let vm = new Vue({
    components: {
      vSlider: Slider
    },
    replace: false,
    template: `
      <div>
      <v-slider :value="30"></v-slider>
      <v-slider v-model="sliderValue"></v-slider>
      <v-slider v-model="initRange"></v-slider>
      </div>
    `,
    data: {
      sliderValue: 5,
      initRange: [20, 50]
    }
  }).$mount()

  it('基础功能渲染', () => {
    expect(vm.$el.querySelectorAll('.atui-slider').length).to.be.equal(3)
    expect(vm.$el.querySelectorAll('.atui-slider-step').length).to.be.equal(3)
    expect(vm.$el.querySelectorAll('.atui-slider-mark').length).to.be.equal(3)
  })
})
