import Vue from 'vue'
import Grid from '../../src/components/Table/'

const dataSource = [
]
const vm = new Vue({
  data() {
    return {
      show: true
    }
  },
  template:
      '<div><grid :data-source="show"'+
      '</grid></div>',
  components: { Grid }
}).$mount()

describe('Table', () => {
  it('Table组件基础渲染', () => {
    expect(vm.$el.textContent).to.contain('我是标题!')
    expect(vm.$el.textContent).to.contain('我是具体内容.')
  })
})

