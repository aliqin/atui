import Vue from 'vue'
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
  Modal[type] = function ({title, content, onOk, btnOkText = '确定', btnCancelText = '取消'}) {
    let modalObj = new Vue({
      template: `
        <modal :class="[prefixCls + '-modal', prefixCls + '-confirm', prefixCls + '-confirm-' + type]" :show="show" small :callback="callback">
          <div v-if="title" slot="modal-header"></div>
          <div slot="modal-body">
            <div :class="[prefixCls + '-confirm-header']">
              <icon :type="type" size="36" :color="color"></icon>
              <span :class="[prefixCls + '-confirm-title']">{{title}}</span>
            </div>
            <div :class="[prefixCls + '-confirm-content']" v-html="content"></div>
          </div>
          <div slot="modal-footer" :class="[prefixCls + '-modal-footer']">
            <template  v-if="type!==\'help\'">
            <button type="button" :class="[prefixCls + '-btn', prefixCls + '-btn-default']" @click="callback">{{'确定' !== btnOkText ? btnOkText : '知道了'}}</button>
            </template>
            <template v-else>
            <button type="button" :class="[prefixCls + '-btn', prefixCls + '-btn-default']" @click="callback">{{btnOkText}}</button>
            <button type="button" :class="[prefixCls + '-btn', prefixCls + '-btn-tertiary']" @click="close">${btnCancelText}</button>            
            </template>
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
        btnOkText: '确定',
        btnCancelText: '取消',
        prefixCls: 'atui'
      },
      methods: {
        callback () {
          onOk && onOk()
          this.show = false
          // this.$destroy(true)
          // console.log(this.$el)
          // document.body.removeChild(this.$el)
        },
        close () {
          this.show = false
        }
      }
    })

    let elem = modalObj.$mount()
    document.body.appendChild(elem.$el)
  }
})

export default Modal
