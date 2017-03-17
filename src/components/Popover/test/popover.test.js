import Vue from 'vue'
import Popover from '../'
// import util from 'test/unit/util.js'

describe('Popover组件单元测试', () => {
  let createInstance = function (options) {
    options = options || {}
    options.trigger = options.trigger || 'click'

    let vm = new Vue({
      components: {
        Popover
      },
      replace: false,
      template: `
        <div>
        <popover 
          effect="scale" 
          pop-cls="mypop" 
          title="this is title" 
          content="this is content" 
          placement="top"
          trigger="${options.trigger}" >
            <button class="atui-btn">trigger</button>
        </popover>
        </div>
      `
    }).$mount()

    return vm
  }

  it('基本渲染功能', () => {
    let vm = createInstance()
    expect(vm.$el.querySelectorAll('.atui-trigger-cont').length).to.be.equal(1)
    expect(vm.$el.querySelectorAll('.atui-btn').length).to.be.equal(1)
    expect(vm.$el.querySelectorAll('.atui-popover-cont').length).to.be.equal(1)
    vm.$destroy()
  })
  /*
  it('click触发方式', (done) => {
    let vm = createInstance({
      trigger: 'click'
    })
    let btn = vm.$el.querySelector('.atui-btn')

    vm.$nextTick(function () {
      let pop = document.querySelector('.mypop')
      expect(pop.style.display).to.be.equal('none')
      btn.click()
      vm.$nextTick(() => {
        expect(pop.style.display).to.be.equal('')
        vm.$destroy()
        done()
      })
    })
  })

  it('hover触发', (done) => {
    let vm = createInstance({
      trigger: 'hover'
    })

    vm.$nextTick(function () {
      let pop = document.querySelector('.mypop')
      expect(pop.style.display).to.be.equal('none')
      util.triggerEvent({
        target: pop,
        type: 'mouseenter'
      })
      vm.$nextTick(() => {
        expect(pop.style.display).to.be.equal('')
        vm.$destroy()
        done()
      })
    })
  })
  */
})
