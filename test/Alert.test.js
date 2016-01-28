import Vue from 'vue'
import Alert from '../src/components/Alert.vue'

describe('Alert.vue', () => {
  it('Alert组件位置应该在右上角', () => {
    const vm = new Vue({
      template: '<div>'+
                  '<alert show="true"'+
                    'duration="3000"'+
                    'type="success"'+
                    'width="400px"'+
                    'placement="top-right"'+
                    'dismissable>'+
                    '<span class="icon-ok-circled alert-icon-float-left"></span>'+
                    '<strong>我是标题!</strong>'+
                    '<p>我是具体内容.</p>'+
                  '</alert>'+
                '</div>',
      components: { Alert }
    }).$mount()
    expect(vm.$el.querySelector('.alert').className).to.contain('top-right')
  })
  it('Alert组件位置应该在顶部', () => {
    const vm = new Vue({
      template: '<div>'+
                  '<alert show="true"'+
                    'duration="3000"'+
                    'type="success"'+
                    'width="400px"'+
                    'placement="top"'+
                    'dismissable>'+
                    '<span class="icon-ok-circled alert-icon-float-left"></span>'+
                    '<strong>我是标题!</strong>'+
                    '<p>我是具体内容.</p>'+
                  '</alert>'+
                '</div>',
      components: { Alert }
    }).$mount()
    expect(vm.$el.querySelector('.alert').className).to.contain('top')
  })
})

