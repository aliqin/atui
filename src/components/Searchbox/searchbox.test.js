import Vue from 'vue'
import Searchbox from '../Searchbox/'

let vm = new Vue({
  template: `
      <div>
        <searchbox>
        </searchbox>
      </div>
      `,
  components: { Searchbox },
  data: {

  }
}).$mount()

describe('Searchbox', () => {
  it('SearchBox组件是否正常显示', () => {
    expect(vm.$el.querySelectorAll('.search-box').length).to.equal(1)
  })

  it('事件回调', () => {

  })
})
