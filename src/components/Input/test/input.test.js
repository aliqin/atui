import Vue from 'vue'
import Input from '../'

describe('Input组件单元测试', () => {
  let vm = new Vue({
    components: {
      vInput: Input
    },
    template: `
      <div>
        <v-input type="text" placeholder="input text"></v-input>
        <v-input valid-status="error" type="text" placeholder="error输入框－默认尺寸"></v-input>
      </div>
    `
  }).$mount()

  it('基础功能渲染', () => {
    let $input = vm.$el.querySelectorAll('.atui-input')
    expect($input.length).to.be.equal(2)
    expect($input[0].type).to.be.equal('text')
    expect($input[0].placeholder).to.be.equal('input text')
  })
})
