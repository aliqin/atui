import Vue from 'vue'
import Spin from '../'

let vm = new Vue({
  template: `
      <div>
        <spin @toggle="toggle" :show="show">
        </spin>
      </div>
      `,
  components: { Spin },
  data: {
    show: true,
    toggle: false
  },
  methods: {
    toggle () {
      this.toggle = true
    }
  }
}).$mount()

describe('Spin', () => {
  it('Spin组件是否正常显示', () => {
    expect(vm.$el.querySelectorAll('.atui-spin').length).to.equal(1)
  })

  it('事件回调', () => {
    vm.show = false
    vm.$nextTick(() => {
      expect(vm.toggle).to.equal(true)
    })
  })
})
