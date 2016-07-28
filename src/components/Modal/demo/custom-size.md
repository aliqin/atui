---
order: 1
title:
  zh-CN: 自定义尺寸
  en-US: Type
---

## zh-CN
需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。
另外当需要一个简洁的确认框询问用户时，可以使用精心封装好的 `atui.Modal.confirm()` 等方法。


## en-US


````jsx
<v-button @click="show = true">显示弹窗</v-button>
<modal :show.sync="show" width="90%" height="90%">
  <div slot="modal-header" class="atui-modal-header">
    <h4 class="modal-title"><i>Custom</i> <code>Modal</code> <b>Title</b></h4>
  </div>
  <div slot="modal-body" class="atui-modal-body">
    高圆圆，中国女演员，1979年10月5日出生于北京市丰台区云岗一个普通的知识分子家庭。1996年高圆圆被广告公司发掘，随后拍摄了大量广告，成为了广告圈中的模特。1997年高圆圆出演了她的第一部电影《爱情麻辣烫》，从此开始了她的演员生涯。2001年高圆圆参演的电影《十七岁的单车》获得柏林国际电影节最佳影片银熊奖。
  </div>
  <div slot="modal-footer" class="atui-modal-footer">
    <v-button @click='show = false'>Exit</v-button>
    <v-button @click='show = false'>Custom Save</v-button>
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
