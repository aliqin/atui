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
        </pagination>
      </div>
      `,
  components: { Pagination },
  data: {
    currPage: 5
  }
}).$mount()

describe('Pagination', () => {
  it('clamps jumper state to the last available page', () => {
    const PaginationConstructor = Vue.extend(Pagination)
    const instance = new PaginationConstructor({
      propsData: { total: 100, pageSize: 10, currPage: 1 }
    })
    expect(instance._handleChange(99)).to.equal(10)
    expect(instance.currPageNum).to.equal(10)
    expect(instance._current).to.equal(10)
    instance.$destroy()
  })
  it('Pagination组件是否正常显示', () => {
    expect(vm.$el.querySelectorAll('.atui-pagination-items').length).to.equal(1)
  })

  it('事件回调', () => {

  })
})
