import Vue from 'vue'
import {Group} from '../../src/components/Button/'

let vm = new Vue({
  template: `
      <div>
        <button-group>
          <v-button>
            <icon type="head"></icon>
          </v-button>
          <v-button>
            <icon type="tail"></icon>
          </v-button>
        </button-group>
      </div>
      `,
  components: { buttonGroup: Group },
  data: {

  }
}).$mount()

describe('ButtonGroup', () => {
  it('ButtonGroup组件是否正常显示', () => {
    expect(vm.$el.querySelectAll('button').length).to.equal(2)
  })

  it('事件回调', () => {

  })
})
