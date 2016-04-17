import Modal from './Modal.vue'
import Icon from '../Icon'
let iconConfig = {
  'info':{
    icon:'info',
    color:'#30b2f2'
  },
  'success':{
    icon:'success',
    color:'#1dbf38'
  },
  'error':{
    icon:'error',
    color:'#ff5959'
  },
  'confirm':{
    icon:'help',
    color:'#b366ff'
  }
}
;['info', 'success', 'error', 'confirm'].forEach((type) => {
  Modal[type] = function(parmas) {
    let title = parmas.title
    let content = parmas.content
    let onOk = parmas.onOk
    if (!document.getElementsByClassName('atui-modal').length) {
        let box = document.createElement('div')
        box.className = 'atui-modal'
        document.body.appendChild(box)
    }
    let div = document.createElement('div')
    document.getElementsByClassName('atui-modal')[0].appendChild(div)
    new Vue({
      el: div,
      template: '<modal class="atui-modal" :show="show" small backdrop="false" :callback="callback"><div v-if="title" slot="modal-header"></div><div slot="modal-body" class="modal-body"><icon :type="type" size="24" :color="color"></icon>{{title}}<br/>{{content}}</div><div v-if="type!==\'help\'" slot="modal-footer" class="modal-footer"><button type="button" class="btn btn-default" @click="this.show=false">知道了</button></div></modal>',
      components: {
        Modal: Modal,
        Icon:Icon
      },
      data: {
        title: title,
        content: content,
        type:iconConfig[type].icon,
        color:iconConfig[type].color,
        show: true
      },
      ready: function() {
        let me = this
      },
      methods: {
        callback: function() {
          onOk()
          this.show = false
        }
      }
    })
  }
})
export default Modal
