<template>
  <div role="dialog" class="atui-modal" v-show="show" transition="fade"
    @click="clickBack"
    >
    <div :class="{'modal-dialog':true,'modal-lg':large,'modal-sm':small}" role="document"
      :style="{width: width, height:height}" v-show="show" transition="fade">
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
import EventListener from '../utils/EventListener.js'
import coerceBoolean from '../utils/coerceBoolean.js'

  export default {
    props: {
      title: {
        type: String
      },
      show: {
        require: true,
        type: Boolean,
        coerce: coerceBoolean,
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
        default: false
      },
      large: {
        type: Boolean
      },
      small: {
        type: Boolean
      }
    },
    data() {
      return {
        in:false
      }
    },
    methods: {
      close() {
        this.show = false
      },
      clickBack() {
        if(this.backdrop) {
          this.close()
        }
      }
    },
    compiled () {
      var me = this
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
