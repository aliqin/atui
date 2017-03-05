import Vue from 'vue'
import Tooltip from '../'

let vm = new Vue({
  template: `
      <div>
      <tooltip :style="{width: '60px', float: 'left'}" content="我是tooltip" placement="topRight">
        <button class="btn btn-default ">上边</button>
      </tooltip>
      </div>
      `,
  components: { Tooltip }
}).$mount()

// tooltip组件严重拉低了coverage summary统计数据
describe('Tooltip', () => {
  it('Tooltip组件是否正常显示', () => {
    vm.$nextTick(() => {
      expect(document.body.querySelectorAll('.atui-tooltip-arrow').length).to.equal(1)
    })
  })
})
