import Vue from 'vue'
import Dropdown from '../../src/components/Dropdown/'


let vm = new Vue({
  template: `
      <div>
        <dropdown>
        </dropdown>
      </div>
      `,
  components: { Dropdown },
  data: {

  }
}).$mount()

describe('Dropdown', () => {
  it('Dropdown组件是否正常显示', () => {
    expect(vm.$el.querySelectorAll('.dropdown').length).to.equal(1)
  })

  it('事件回调', () => {

  })
})
