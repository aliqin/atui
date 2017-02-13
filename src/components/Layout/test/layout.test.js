import Vue from 'vue'
import Layout from '../'


describe('Layout组件单元测试', () => {
  let vm = new Vue({
    components: {
      vRow: Layout.Row,
      vCol: Layout.Col
    },
    template: `
      <div>
        <v-row>
          <v-col span="23">col-23</v-col>
          <v-col span="1">1</v-col>
        </v-row>
        <v-row>
          <v-col span="22">col-22</v-col>
          <v-col span="2">2</v-col>
        </v-row>
        <v-row>
          <v-col span="24">col-24</v-col>
        </v-row>
      </div>
    `
  }).$mount()

  it('基础功能渲染', () => {
    expect(vm.$el.querySelectorAll('.atui-row').length).to.be.equal(3)
    expect(vm.$el.querySelectorAll('.atui-row:first-child > div').length).to.be.equal(2)
  })
})
