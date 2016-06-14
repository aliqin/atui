import Vue from 'vue'
import Pagination from '../../src/components/Pagination/'


let vm = new Vue({
  template: `
      <div>
        <pagination
        :total-page.sync="total"
        :curr-page.sync="current"
        total="1000"
        show-jumper
        show-size-changer>
        </pagination>
      </div>
      `,
  components: { Pagination },
  data: {
    total: 100,
    current: 5
  }
}).$mount()

describe('Pagination', () => {
  it('Pagination组件是否正常显示', () => {
    console.log(vm.$el.innerHTML)
    expect(vm.$el.querySelectorAll('.pagination-items').length).to.equal(1)
  })

  it('事件回调', () => {

  })
})
