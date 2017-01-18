import Vue from 'vue'
import Calendar from '../'

describe('Calendar组件单元测试', () => {
  let vm = new Vue({
    components: {
      Calendar
    },
    template: `<div>
      <calendar @change="selectChange"></calendar>
      </div>
    `,
    methods: {
      selectChange () {}
    }
  }).$mount()

  it('基本功能渲染', () => {
    expect(vm.$el.querySelectorAll('.atui-calendar').length).to.be.equal(1)
  })
})
