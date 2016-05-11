<template>
  <div role="dialog"
    :class="{
    'modal':true,
    'fade':effect === 'fade',
    'zoom':effect === 'zoom',
    'in':in
    }"
    >
    <div :class="{'modal-dialog':true,'modal-lg':large,'modal-sm':small}" role="document"
      :style="{width: width, height:height}">
      <div class="modal-content">
        <slot name="modal-header">
          <div class="modal-header">
            <button type="button" class="close" @click="close"><span>&times;</span></button>
            <h4 class="modal-title" >{{title}}</h4>
          </div>
        </slot>
        <slot name="modal-body">
          <div class="modal-body"></div>
        </slot>
        <slot name="modal-footer">
          <div class="modal-footer">
            <button type="button" class="btn btn-default" @click="callback">确定</button>
            <button type="button" class="btn tertiary" @click="close">取消</button>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import getScrollBarWidth from '../utils/getScrollBarWidth.js'
import EventListener from '../utils/EventListener.js'
import coerceBoolean from '../utils/coerceBoolean.js'

  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      show: {
        require: true,
        type: Boolean,
        coerce: coerceBoolean,
        twoWay: true
      },
      width: String,
      height:String,
      callback: {
        type: Function,
        default() {}
      },
      effect: {
        type: String,
        default: null
      },
      backdrop: {
        type: Boolean,
        coerce: coerceBoolean,
        default: true
      },
      large: {
        type: Boolean,
        coerce: coerceBoolean,
        default: false
      },
      small: {
        type: Boolean,
        coerce: coerceBoolean,
        default: false
      }
    },
    data() {
      return {
        in:false
      }
    },
    ready() {
      this.$watch('show', (val)=> {
        const el = this.$el
        const body = document.body
        const scrollBarWidth =  getScrollBarWidth()
        if (val) {
          el.querySelector('.modal-content').focus()
          el.style.display = 'block'
          this.in = true
          if (scrollBarWidth !== 0) {
            body.style.paddingRight = scrollBarWidth + 'px'
          }
          if (this.backdrop) {
            this._blurModalContentEvent = EventListener.listen(this.$el, 'click', (e)=> {
              if (e.target === el) this.show = false
            })
          }
        } else {
          if (this._blurModalContentEvent) this._blurModalContentEvent.remove()
          this.in = false
          setTimeout(()=> {
            el.style.display = 'none'
            body.style.paddingRight = '0'
          }, 300)
        }
      }, { immediate: true })
    },
    methods: {
      close() {
        this.show = false
      }
    },
    compiled () {
      var me = this;
      window.addEventListener('keyup', function (ev) {
          if (ev.keyCode === 27) {
              me.show = false;
          }
      });
    },
    attached() {
      this.$appendTo(document.body)
    }
  }
</script>
