import Vue from 'vue'
import Tabs from '../'
let Tab = Tabs.Tab

let vm = new Vue({
  data () {
    return {
      show: true
    }
  },
  template: `
      <div>
        <v-tabs>
          <v-tab header="系统短信签名">
            系统短信签名内容
          </v-tab>
          <v-tab header="推广短信签名">
            推广短信签名内容
          </v-tab>
        </v-tabs>
      </div>
      `,
  components: {
    vTabs: Tabs,
    vTab: Tab
  },
}).$mount()



describe('Tabs', () => {
  it('Tabs组件基础渲染', () => {
    vm.$nextTick(() => {
      expect(vm.$el.querySelectorAll('.atui-tab-header ul li').length).to.equal(2)
      expect(vm.$el.querySelectorAll('.atui-tab-pane').length).to.equal(2)
    })
  })
})
