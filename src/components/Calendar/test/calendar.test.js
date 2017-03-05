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

  it('显示隐藏', () => {
    // vm.disabledDate = function () {
    //   return date.getTime() < new Date(value + ' 00:00:00').getTime()
    // }
    vm.$nextTick(() => {
      expect(vm.$el.querySelectorAll('.atui-calendar').length).to.be.equal(1)
    })
  })
})
