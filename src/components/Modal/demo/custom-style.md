---
order: 2
title:
  zh-CN: 自定义头和尾
  en-US: Type
---

## zh-CN
可以自定义头部和尾部，使用slot填充即可


## en-US


````jsx
<v-button @click.native="show = true">显示弹窗</v-button>
<modal :show="show" width="90%" height="90%" @close="show = false">
  <div slot="modal-header" class="atui-modal-header">
    <h4 class="modal-title">自定义头</h4>
  </div>
  <div slot="modal-body" class="atui-modal-body">
    高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。
  </div>
  <div slot="modal-footer" class="atui-modal-footer">
    <v-button @click.native='show = false'>我是自定义尾部的按钮</v-button>
  </div>
</modal>
````

````vue-script
new Vue({
  el: 'body',
  components: {
    modal: atui.Modal,
    vButton: atui.Button
  },
  data () {
    return {
      show: false
    }
  }
})
````
