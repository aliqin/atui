import Vue from 'vue'
import DatePicker from '../'
const RangePicker = DatePicker.RangePicker

let vm = new Vue({
  template: `
      <div>
        <range-picker></range-picker>
      </div>
      `,
  components: { RangePicker },
  data: {

  }
}).$mount()

describe('RangePicker', () => {
  it('RangePicker组件是否正常显示', () => {
    expect(vm.$el.querySelectorAll('.atui-datepicker').length).to.equal(2)
  })
})
