import Vue from 'vue'
import Textarea from '../'

let vm = new Vue({
  template: `
      <div>
      <v-textarea placeholder="请在这里输入说明"></v-textarea>
      <v-textarea disabled content="被禁用了"></v-textarea>
      </div>
      `,
  components: {
    vTextarea: Textarea
  }
}).$mount()

describe('Textarea', () => {
  it('Textarea组件是否正常显示', () => {
    expect(vm.$el.querySelectorAll('.atui-textarea-box').length).to.equal(2)
  })
})
