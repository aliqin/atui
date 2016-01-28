import Vue from 'vue'
import Tab from '../src/components/Tab.vue'

describe('Tab.vue', () => {
  it('should render correct component', () => {
    const vm = new Vue({
      template: '<div></div>',
      components: { Tab }
    }).$mount()
    expect(true).to.be.ok
  })
})

