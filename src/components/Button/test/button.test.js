import Vue from 'vue'
import Button from '../'
let vm = new Vue({
  template: `
      <div>
        <v-button large text value="大号+文字型按钮"></v-button>
        <v-button text value="中号+文字型按钮"></v-button>
        <v-button small text value="小号+文字型按钮"></v-button>
      </div>
      `,
  components: { vButton: Button },
  data: {

  }
}).$mount()

describe('Button', () => {
  it('Button组件是否正常显示', () => {
    expect(vm.$el.querySelectorAll('button.atui-btn').length).to.equal(3)
  })
})
