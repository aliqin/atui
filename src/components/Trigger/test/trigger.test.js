import Vue from 'vue'
import Trigger from '../'

let vm = new Vue({
  template: `
      <div>
        <v-trigger>
          <v-button slot="trigger">popup on bottom</v-button>
          <div slot="popup">I'm a popup</div>
        </v-trigger>

        <v-trigger placement="right">
          <v-button slot="trigger">popup on right</v-button>
          <div slot="popup">I'm a popup</div>
        </v-trigger>
      </div>
      `,
  components: { vTrigger: Trigger }
}).$mount()

describe('Trigger', () => {
  it('Trigger组件是否正常显示', () => {
    expect(vm.$el.querySelectorAll('.atui-trigger').length).to.equal(2)
  })
})
