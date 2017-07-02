import Button from '../../Button'
import Affix from '../'
import {
  createVue
} from 'test/unit/util.js'

describe('Affix', () => {
  let vm
  afterEach(() => {
    vm.$destroy()
  })
  it('Affix组件是否正常显示', () => {
    vm = createVue({
      template: `
      <v-affix>
         <v-button>affix</v-button>
       </v-affix>
      `,
      components: {
        vButton: Button,
        vAffix: Affix
      }
    })
    expect(vm.$el.querySelectorAll('div.atui-affix').length).to.equal(1)
  })
})
