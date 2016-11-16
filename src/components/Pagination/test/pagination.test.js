import Vue from 'vue'
import Pagination from '../'


let vm = new Vue({
  template: `
      <div>
        <pagination :curr-page="currPage"
        :total="1000"
        show-jumper
        :page-size="10"
        show-size-changer>
      </div>
      `,
  components: { Pagination },
  data: {
    current: 5
  }
}).$mount()

describe('Pagination', () => {
  it('Pagination组件是否正常显示', () => {
    expect(vm.$el.querySelectorAll('.atui-pagination-items').length).to.equal(1)
  })

  it('事件回调', () => {

  })
})
