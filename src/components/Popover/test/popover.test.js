import Vue from 'vue'
import Popover from '../'

describe('Popover组件单元测试', () => {
  let vm = new Vue({
    components: {
      Popover
    },
    data () {
      return {
        visible: true
      }
    },
    template: `
      <div>
      <popover :visible="visible" effect="scale" title="this is title" content="this is content" placement="top" trigger="hover">
        <div slot="content">
        <p>我是文字，我是文字，我是文字，我是文字，我是文字，我是文字，我是文字，</p>
        <button @click.native="visible = false">点我关闭</button>
        </div>
      </popover>
      </div>
    `
  }).$mount()

  it('基本渲染功能', () => {
    expect(vm.$el.querySelectorAll('.atui-trigger-cont').length).to.be.equal(1)
    expect(vm.$el.querySelectorAll('.atui-popover-cont').length).to.be.equal(1)
    expect(document.body.querySelectorAll('.atui-popup.atui-popover').length).to.be.equal(1)
  })

  it('关闭功能', () => {
    vm.visible = false
    // vm.$emit('pop-change', false)
    // vm.onTogglePopup(0)
    document.body.querySelector('.atui-popover button').click()

    vm.$nextTick(() => {
      expect(document.body.querySelectorAll('.atui-popup.atui-popover')[0].style.display).to.equal('none')
    })
  })
})
