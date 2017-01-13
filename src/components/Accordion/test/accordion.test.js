/**
 * Created by jiangyi on 16/7/1.
 */

import Vue from 'vue'
import Accordion from '../'
const {Panel} = Accordion

describe('Accordion组件单元测试', () => {

  let vm = new Vue({
    data () {
      return {
        oneAtATime: false
      }
    },
    components: {
      Accordion,
      Panel
    },
    template: `
      <div id="app">
        <accordion :one-at-a-time="oneAtATime">
          <panel :is-open="true">
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
  }).$mount()


  it('has a created hook', () => {
    assert(typeof Accordion.created === 'function', 'Accordion.created is funciton')
    assert(typeof Accordion.props === 'object', 'Accordion.data is funciton')
  })

  it('基本功能渲染', () => {
      // console.log(vm.data())
      assert(vm.$el.querySelectorAll('.atui-panel-group').length === 12)
  })
    // assert(vm.$el.querySelectorAll('.atui-panel-group').length === 1)
    // assert(vm.$el.querySelectorAll('.atui-panel').length === 4)

  // it('test目录', () => {
  //   expect(1).to.be.equal(1)
  // })
})

