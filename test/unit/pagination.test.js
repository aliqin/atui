import Vue from 'vue'
import Pagination from '../../src/components/Pagination/'


let vm = new Vue({
  template: `
      <div>
        <pagination
        total-page.sync="100"
        curr-page.sync="5"
        total="1000"
        show-jumper
        show-size-changer>
        </pagination>
      </div>
      `,
  components: { Pagination },
  data: {

  }
}).$mount()

describe('Pagination', () => {
  it('Pagination组件是否正常显示', () => {
    expect(vm.$el.querySelectAll('.pagination-items').length).to.equal(1)
  })

  it('事件回调', () => {

  })
})
