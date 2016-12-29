import Vue from 'vue'
import TimePicker from '../'

let vm = new Vue({
  template: `
      <div>
      <time-picker>
      </time-picker>
      </div>
      `,
  components: { TimePicker }
}).$mount()

// timepicker组件测试用例,拉低了coverage summary统计数据
describe('TimePicker', () => {
  it('TimePicker组件是否正常显示', () => {
    expect(vm.$el.querySelectorAll('.atui-time-picker-panel').length).above(2)
  })
})
