/**
 * Created by jiangyi on 16/7/13.
 */

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
      </div>
    `,
    replace: false
  }).$mount()

  it('基础功能渲染', () => {
    let $input = vm.$el.querySelectorAll('.atui-input')

    expect($input.length).to.be.equal(1)
    expect($input[0].type).to.be.equal('text')
    expect($input[0].placeholder).to.be.equal('input text')
  })
})
