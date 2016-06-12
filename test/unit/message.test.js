import Vue from 'vue'
import Message from '../../src/components/Message/'

const vm = new Vue({
  data() {
    return {
      show: true
    }
  },
  template:`
      <div>
        <message :show="show"
          :duration="3000"
          type="success"
          width="400px"
          placement="top-right"
          dismissable>
          <strong>我是标题!</strong>
          <p>我是具体内容.</p>
        </message>
      </div>
      `,
  components: { Message }
}).$mount()

describe('Message', () => {
  it('Message组件是否正常显示', () => {
    expect(vm.$el.textContent).to.contain('我是标题!')
    expect(vm.$el.textContent).to.contain('我是具体内容.')
  })

  it('定时消失', () => {
    setTimeout(() => {
      expect(vm.$el.style.display).to.equal('none')
    },4000)
  })

})

