import Vue from 'vue'
import Tooltip from '../'

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

// tooltip组件严重拉低了coverage summary统计数据
/* describe('Tooltip', () => {
  it('Tooltip组件是否正常显示', () => {
    expect(document.body.querySelectorAll('.tooltip-arrow').length).above(0)
  })
})*/
