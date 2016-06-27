import Vue from 'vue'
import TimePicker from '../../src/components/TimePicker/'

new Vue({
  template: `
      <div>
      <timePicker>
      </timePicker>
      </div>
      `,
  components: { TimePicker }
}).$mount().$appendTo('body')

describe('TimePicker', () => {
  it('TimePicker组件是否正常显示', () => {
    expect(document.body.querySelectorAll('.time-picker-panel').length).above(2)
  })
})
