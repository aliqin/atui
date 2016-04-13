import Modal from './Modal.vue'

Modal.confirm = function(parmas) {
  let title = parmas.title
  let content = parmas.content
  let onOk = parmas.onOk
  if(!document.getElementsByClassName('atui-modal').length) {
      let box = document.createElement('div')
      box.className = 'atui-modal'
      document.body.appendChild(box)
    }
    let div = document.createElement('div')
    document.getElementsByClassName('atui-modal')[0].appendChild(div)
    new Vue({
      el:div,
      template:'<modal class="atui-modal" :show="show" small backdrop="false" :callback="callback"><div v-if="title" slot="modal-header"></div><div slot="modal-body" class="modal-body"><icon :type="help" color="#fa0"></icon>{{title}}<br/>{{content}}</div></modal>',
      components:{
        Modal:Modal
      },
      data:{
        title:title,
        content:content,
        show:true
      },
      ready:function() {
        let me = this
      },
      methods:{
        callback:function() {
          onOk()
          this.show = false
        }
      }
    })
}

export default Modal
