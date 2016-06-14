import Vue from 'vue'
import DatePicker from '../../src/components/DatePicker/'

let vm = new Vue({
  template: `
      <div>
        <date-picker>
        </date-picker>
      </div>
      `,
  components: { DatePicker },
  data: {

  }
}).$mount()

describe('DatePicker', () => {
  it('DatePicker组件是否正常显示', () => {
    expect(vm.$el.querySelectAll('.atui-datepicker').length).to.equal(1)
  })

  it('事件回调', () => {

  })
})
