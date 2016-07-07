import Modal from './Modal.vue'
import Icon from '../Icon'

const iconConfig = {
  'info': {
    icon: 'info',
    color: '#30b2f2'
  },
  'success': {
    icon: 'success',
    color: '#1dbf38'
  },
  'error': {
    icon: 'error',
    color: '#ff5959'
  },
  'confirm': {
    icon: 'help',
    color: '#b366ff'
  }
}

;['info', 'success', 'error', 'confirm'].forEach((type) => {
  Modal[type] = function (parmas) {
    const title = parmas.title
    const content = parmas.content
    const onOk = parmas.onOk

    new Vue({
      template: `
        <modal :class="[prefixCls + '-modal', prefixCls + '-confirm', prefixCls + '-confirm-' + type]" :show="show" small :callback="callback">
          <div v-if="title" slot="modal-header"></div>
          <div slot="modal-body">
            <icon :type="type" size="36" :color="color"></icon>
            <span :class="[prefixCls + '-confirm-title']">{{title}}</span>
            <div :class="[prefixCls + '-confirm-content']">{{{content}}}</div>
          </div>
          <div v-if="type!==\'help\'" slot="modal-footer" :class="[prefixCls + '-modal-footer']">
            <button type="button" :class="[prefixCls + '-btn', prefixCls + '-btn-default']" @click="callback">知道了</button>
          </div>
        </modal>`,
      components: {
        Modal: Modal,
        Icon: Icon
      },
      data: {
        title: title,
        content: content,
        type: iconConfig[type].icon,
        color: iconConfig[type].color,
        show: true,
        prefixCls: 'atui'
      },
      methods: {
        callback () {
          onOk && onOk()
          this.show = false
          // this.$destroy(true)
          // console.log(this.$el)
          // document.body.removeChild(this.$el)
        }
      }
    }).$mount().$appendTo(document.body)
  }
})

export default Modal
