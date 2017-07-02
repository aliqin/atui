import Accordion from '../'
import {
  createVue
} from 'test/unit/util.js'
const {
  Panel
} = Accordion

describe('Accordion组件单元测试', () => {
  let vm = createVue({
    components: {
      Accordion,
      Panel
    },
    template: `
      <div id="app">
        <accordion open-one>
          <panel open>
            <div slot="panel-header" class="custom-class">Panel #1</div>
            内容一
          </panel>
          <panel>
            <div slot="panel-header" class="custom-class">Panel #2</div>
            内容二
          </panel>
          <panel>
            <div slot="panel-header" class="custom-class">Panel #3</div>
            内容三
          </panel>
          <panel>
            <div slot="panel-header" class="custom-class">Panel #4</div>
            内容四
          </panel>
        </accordion>
      </div>
    `
  })
  after(() => {
    vm.$destroy()
  })
  it('基本功能渲染', () => {
    expect(vm.$el.querySelectorAll('.atui-panel-group').length).to.equal(1)
    expect(vm.$el.querySelectorAll('.atui-panel').length).to.equal(4)
  })
  it('panel点击事件', () => {
    vm.$el.querySelectorAll('.atui-panel-heading')[1].click()
    expect(vm.$el.querySelectorAll('.atui-panel-body')[1].style.display).not.to.equal('none')
  })
})
