import Vue from 'vue'
import Pagination from '../../src/components/Pagination/'


let vm = new Vue({
  template: `
      <div>
        <pagination>
        </pagination>
      </div>
      `,
  components: { Pagination },
  data:{

  }
}).$mount()

describe('Pagination', () => {
  it('Pagination组件是否正常显示', () => {

  })

  it('事件回调', () => {

  })

})
