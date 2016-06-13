import Vue from 'vue'
import Tabs from '../../src/components/Tabs/'
const {
    Tab
} = Tabs
let vm = new Vue({
  data () {
    return {
      show: true
    }
  },
  template: `
      <div>
      <tabs :base="true" size="small">
        <tab header="系统短信签名">
          <p>
            选项卡一内容
          </p>
        </tab>
        <tab header="推广短信签名">
           <p>
              选项卡二内容
           </p>
        </tab>
        <tab header="被禁用的" disabled>
        </tab>
      </tabs></div>
      `,
  components: {
    Tabs,
    Tab
  }
}).$mount()
describe('Tabs', () => {
  it('Tabs组件基础渲染', () => {
    expect(vm.$el.querySelectorAll('.tabs-header ul li').length).to.equal(3)
  })
})
