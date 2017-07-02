import vInput from '../'
import {
  createVue
} from 'test/unit/util.js'

describe('Input组件单元测试', () => {
  let vm
  afterEach(() => {
    vm.$destroy()
  })

  it('基础功能渲染', () => {
    vm = createVue({
      template: '<div><v-input small type="text" placeholder="input text"></v-input></div>',
      components: {
        vInput
      }
    })
    let $input = vm.$el.querySelectorAll('.atui-input')
    expect($input.length).to.equal(1)
    expect($input[0].placeholder).to.be.equal('input text')
    expect(vm.$el.querySelectorAll('.atui-input-small').length).to.equal(1)
  })

  // it('手机号校验', (done) => {
  //   vm = createVue({
  //     data: {
  //       phoneValidRule: ['isPhone'],
  //       val: ''
  //     },
  //     template: '<div><v-input type="text" :rules="phoneValidRule" v-model="val"></v-input></div>',
  //     components: {
  //       vInput
  //     }
  //   })
  //   let $input = vm.$el.querySelector('.atui-input')
  //   vm.val = '1234'
  //   setTimeout(() => {
  //     expect($input.className).to.contain('atui-input-error')
  //     done()
  //   }, 20)
  // })
})
