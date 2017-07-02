import Vue from 'vue'
import Calendar from '../'

describe('Calendar组件单元测试', () => {
  let vm = new Vue({
    data: {
      currDate: new Date('2017-03-31')
    },
    components: {
      Calendar
    },
    template: `<div>
      <calendar @change="selectChange" :value="currDate"></calendar>
      </div>
    `,
    methods: {
      selectChange () {}
    }
  }).$mount()
  after(() => {
    vm.$destroy()
  })
  it('基本功能渲染', () => {
    expect(vm.$el.querySelectorAll('.atui-calendar').length).to.be.equal(1)
    expect(vm.$el.querySelector('.atui-calendar-dateRange-item-active').textContent).to.equal('31')
    expect(vm.$el.querySelectorAll('.atui-calendar-item-gray').length).to.equal(11)
  })

  // it('显示隐藏', () => {
    // vm.disabledDate = function () {
    //   return date.getTime() < new Date(value + ' 00:00:00').getTime()
    // }
    // vm.$nextTick(() => {
      // expect(vm.$el.querySelectorAll('.atui-calendar').length).to.be.equal(1)
    // })
  // })
})
