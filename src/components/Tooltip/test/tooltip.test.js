import Vue from 'vue'
import Tooltip from '../'
// import util from 'test/unit/util.js'
import $ from 'jquery'

let createInstance = function (options) {
  options = $.extend({
    placement: 'top',
    customPopupCls: 'myTooltip'
  }, options)

  let vm = new Vue({
    template: `
        <div>
        <tooltip content="我是tooltip" placement="${options.placement}" custom-popup-cls="${options.customPopupCls}">
          <button class="btn btn-default ">上边</button>
        </tooltip>
        </div>
        `,
    components: { Tooltip }
  }).$mount()

  return vm
}

describe('Tooltip', () => {
  it('Tooltip组件是否正常显示', (done) => {
    let vm = createInstance()
    vm.$nextTick(() => {
      expect(document.body.querySelectorAll('.atui-tooltip-arrow').length).to.equal(1)
      vm.$destroy()
      done()
    })
  })

  /*
  it('hover能否正常展示', (done) => {
    let vm = createInstance({
      customPopupCls: 'hoverPop'
    })
    setTimeout(() => {
      let tooltip = $('.hoverPop')[0]// document.querySelectorAll('.atui-tooltip')[0]
      let btn = vm.$el.querySelector('.btn-default')
      expect(tooltip.style.display).to.equal('none')
      util.triggerEvent({
        type: 'mouseenter',
        target: btn
      })
      setTimeout(() => {
        console.log('tooltip.style.display:', tooltip.style.display)
        expect(tooltip.style.display).to.equal('')
        vm.$destroy()
        done()
      }, 100)
    }, 100)
  })

  it('placement配置不同的方向', (done) => {
    let placement = ['top', 'bottom', 'left', 'right']
    let run = function (index) {
      if (index >= 4) {
        done()
        return
      }
      let vm = createInstance({
        placement: placement[index],
        customPopupCls: 'my-' + placement[index]
      })
      setTimeout(() => {
        let tooltip = $('.my-' + placement[index])[0]
        expect(tooltip.className).to.have.string('atui-tooltip-' + placement[index])
        vm.$destroy()
        run(++index)
      }, 0)
    }
    run(0)
  })
*/
})
