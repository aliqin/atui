import Vue from 'vue'
import Carousel from '../'
const Slide = Carousel.Slide


describe('Carousel组件单元测试', () => {
  let vm = new Vue({
    components: {
      Carousel,
      Slide
    },
    template: `<div>
      <carousel height="300px" control-btn @before-change="beforeChange" @after-change="afterChange">
        <slide>
          <img src="http://placehold.it/400x300?text=one">
        </slide>
        <slide>
          <img src="http://placehold.it/400x300?text=two">
        </slide>
        <slide>
          <img src="http://placehold.it/400x300?text=three">
        </slide>
      </carousel>
      <carousel animation="fade" :speed="1000">
        <slide>
          <img src="http://placehold.it/400x300?text=one">
        </slide>
        <slide>
          <img src="http://placehold.it/400x300?text=two">
        </slide>
        <slide>
          <img src="http://placehold.it/400x300?text=three">
        </slide>
      </carousel>
      </div>
    `,
    methods: {
      beforeChange () {},
      afterChange () {}
    }
  }).$mount()

  it('基本功能渲染', () => {
    expect(vm.$el.querySelectorAll('.atui-carousel-item').length).to.be.equal(6)
  })
})
