import Vue from 'vue'
import Button from '../'
let Group = Button.Group
let vm = new Vue({
  template: `
      <div>
        <button-group>
          <v-button>
          </v-button>
          <v-button>
          </v-button>
        </button-group>
      </div>
      `,
  components: { vButton: Button, buttonGroup: Group },
  data: {

  }
}).$mount()

describe('ButtonGroup', () => {
  it('ButtonGroup组件是否正常显示', () => {
    expect(vm.$el.querySelectorAll('button').length).to.equal(2)
  })

  it('事件回调', () => {

  })
})
