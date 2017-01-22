import Vue from 'vue'
import Switch from '../'


describe('Switch组件单元测试', () => {
  let vm = new Vue({
    components: {
      vSwitch: Switch
    },
    template: `
      <div>
        <v-switch checked></v-switch>
      </div>
    `
  }).$mount()

  it('基本渲染功能', () => {
    expect(vm.$el.querySelectorAll('.atui-switch-checked').length).to.be.equal(1)
  })
})
