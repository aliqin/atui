import Vue from 'vue'
import Button from '../../Button'
import Affix from '../'

let vm = new Vue({
  template: `
      <v-affix>
        <v-button>affix</v-button>
      </v-affix>
      `,
  components: { vButton: Button, vAffix: Affix },
  data: {

  }
}).$mount()

describe('Affix', () => {
  it('Affix组件是否正常显示', () => {
    expect(vm.$el.querySelectorAll('div.atui-affix').length).to.equal(1)
  })
})
