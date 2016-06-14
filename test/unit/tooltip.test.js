import Vue from 'vue'
import Tooltip from '../../src/components/Tooltip/'

new Vue({
  template: `
      <div>
      <tooltip content="我是tooltip" placement="top">
        <button class="btn btn-default ">上边</button>
      </tooltip>
      </div>
      `,
  components: { Tooltip }
}).$mount().$appendTo('body')

describe('Tooltip', () => {
  it('Tooltip组件是否正常显示', () => {
    expect(document.body.querySelectorAll('.tooltip-arrow').length).above(0)
  })
})
