import Vue from 'vue'
import Button from '../'
let ButtonGroup = Button.ButtonGroup
let vm = new Vue({
  template: `
      <div>
        <v-button-group>
          <v-button>
          </v-button>
          <v-button>
          </v-button>
        </v-button-group>
      </div>
      `,
  components: { vButton: Button, vButtonGroup: ButtonGroup },
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
