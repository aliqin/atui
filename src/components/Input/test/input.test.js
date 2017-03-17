import Vue from 'vue'
import vInput from '../'
// import util from 'test/unit/util.js'
import jQuery from 'jquery'

const $ = jQuery

describe('Input组件单元测试', () => {
  let createInstance = function (options) {
    options = $.extend({
      id: +new Date(),
      placeholder: 'placeholder',
      rules: ['notNull']
    }, options)

    let vm = new Vue({
      data: options,
      template: `
            <div :id="id">
              <v-input type="text" :placeholder="placeholder" :rules="rules"></v-input>
            </div>
            `,
      components: { vInput }
    }).$mount()

    return vm
  }

  it('基础功能渲染', () => {
    let vm = createInstance({
      placeholder: 'input text'
    })
    let $input = vm.$el.querySelectorAll('.atui-input')
    expect($input.length).to.be.equal(1)
    expect($input[0].type).to.be.equal('text')
    expect($input[0].placeholder).to.be.equal('input text')
    vm.$destroy()
  })

  /*
  it('手机号校验', (done) => {
    let options = {
      id: 'phonecheck',
      placeholder: 'phonecheck',
      rules: ['isTelephone']
    }
    let vm = createInstance(options)

    setTimeout(() => {
      let wrapper = vm.$el
      let input = $(wrapper).find('.atui-input')[0]
      console.log(input)

      util.keyEvent({
        type: 'keydown',
        target: input,
        keyCode: '1'.charCodeAt(0)
      })

      vm.$nextTick(() => {
        console.log(input.value)
        vm.$destroy()
        done()
      })

    },100)
  })
  */
})
