import Vue from 'vue'
import TimePicker from '../'
let vm = new Vue({
  template: `
      <div>
      <time-picker value="10:00:00">
      </time-picker>
      </div>
      `,
  components: {
    TimePicker
  }
}).$mount()

// timepicker组件测试用例,拉低了coverage summary统计数据
describe('TimePicker', () => {
  // after(() => {
  //   vm.$destroy()
  // })
  it('TimePicker组件是否正常显示', () => {
    expect(document.body.querySelectorAll('.atui-time-picker-panel').length).above(2)
  })
  it('点击后展示是否正确', () => {
    vm.$el.querySelector('.atui-trigger').click()
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.time-hours').parentNode.scrollTop).to.equal(240)
    })
  })
})
