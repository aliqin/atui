import Vue from 'vue'
import Tag from '../'

let vm = new Vue({
  template: `
      <div>
      <v-tag>标签一</v-tag>
      <v-tag href="http://www.taobao.com" color="orange">淘宝</v-tag>
      </div>
      `,
  components: {
    vTag: Tag
  }
}).$mount()

describe('Tag', () => {
  it('Tag组件是否正常显示', () => {
    expect(vm.$el.querySelectorAll('.atui-tag').length).to.equal(2)
  })
})
