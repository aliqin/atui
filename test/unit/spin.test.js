import Vue from 'vue'
import Spin from '../../src/components/Spin/'

let vm = new Vue({
  template: `
      <div>
        <spin>
        </spin>
      </div>
      `,
  components: { Spin },
  data: {

  }
}).$mount()

describe('Spin', () => {
  it('Spin组件是否正常显示', () => {
    expect(vm.$el.querySelectorAll('.atui-spin').length).to.equal(1)
  })

  it('事件回调', () => {

  })
})

