import Vue from 'vue'
import Alert from '../src/components/Message/'

describe('Alert.vue', () => {
  it('Alert组件的显示内容是否正确', () => {
    const vm = new Vue({
      data() {
        return {
          show: true
        }
      },
      template: '<div>'+
                  '<alert :show.sync="show"'+
                    ':duration="3000"'+
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
    expect(vm.$el.querySelector('.alert').textContent).to.contain('我是标题!')
    expect(vm.$el.querySelector('.alert').textContent).to.contain('我是具体内容.')
  })
})

