import Vue from 'vue'
import Button from '../'
let ButtonGroup = Button.ButtonGroup
let vm = new Vue({
  template: `
      <div>
        <v-button-group>
          <v-button value="cancel">
          </v-button>
          <v-button value="ok">
          </v-button>
        </v-button-group>
      </div>
      `,
  components: {
    vButton: Button,
    vButtonGroup: ButtonGroup
  },
  data: {

  }
}).$mount()

describe('ButtonGroup', () => {
  after(() => {
    vm.$destroy()
  })
  it('ButtonGroup组件是否正常显示', () => {
    expect(vm.$el.querySelectorAll('button').length).to.equal(2)
  })

  it('事件回调', () => {
    vm.$el.querySelectorAll('button')[0].click()
    expect(Array.from(vm.$el.querySelectorAll('button')[0].classList)).to.contain('active')
  })
})
