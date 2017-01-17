/**
 * Created by jiangyi on 16/6/24.
 */

import Vue from 'vue'
import Steps from '../'

const {Step} = Steps

describe('Steps组件单元测试', () => {
  let vm = new Vue({
    data () {
      return {
        current: 0
      }
    },
    components: {
      vSteps: Steps,
      vStep: Step
    },
    replace: false,
    template: `
      <div>
        <v-steps :current="current" color="#00a0ff">
          <v-step title="已完成" ></v-step>
          <v-step title="进行中"></v-step>
          <v-step title="有一个待运行"></v-step>
          <v-step title="待运行"></v-step>
        </v-steps>
      </div>
    `

  }).$mount()

  it('基本渲染功能', () => {
    expect(vm.$el.querySelectorAll('.atui-steps').length).to.be.equal(1)
    expect(vm.$el.querySelectorAll('.atui-step').length).to.be.equal(4)
  })
})
