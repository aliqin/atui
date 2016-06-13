import Vue from 'vue'
import Modal from '../../src/components/Modal/'

let vm = new Vue({
  data () {
    return {
      show: true
    }
  },
  template: `
      <div>
        <modal title="Zoom Modal" :show.sync="show" effect="zoom" width="400px">
          <div slot="modal-header"></div>
          <div slot="modal-body" class="modal-body">
            高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。
          </div>
        </modal>
      </div>
      `,
  components: { Modal }
}).$mount().$appendTo('body')

describe('Modal', () => {
  it('Modal组件是否正常显示', () => {
    expect(document.body.querySelectorAll('.atui-modal').length).above(0)
  })

  it('事件回调', () => {

  })

})
