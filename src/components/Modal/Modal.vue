<template>
  <div role="dialog" :class="[prefixCls + '-modal']" v-show="show"
    @click="clickBack"
    >
    <div v-show="show"
         :class="dialogClassObj"
         :style="{width: width}"
         role="document">
      <div :class="[prefixCls + '-modal-content']">
        <slot name="modal-header">
          <div :class="[prefixCls + '-modal-header']">
            <button type="button" :class="[prefixCls + '-close']" @click="close"><span>&times;</span></button>
            <h4 :class="[prefixCls + '-modal-title']">{{title}}</h4>
          </div>
        </slot>
        <div :class="[prefixCls + '-modal-body']" :style="{height: height, maxHeight: '500px'}">
          <slot name="modal-body">
          </slot>
        </div>
        <slot name="modal-footer">
          <div :class="[prefixCls + '-modal-footer']">
            <button type="button" :class="[prefixCls + '-btn', prefixCls + '-btn-default']" @click="callback">确定</button>
            <button type="button" :class="[prefixCls + '-btn', prefixCls + '-btn-tertiary']" @click="close">取消</button>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    title: String,
    show: {
      require: true,
      type: Boolean
    },
    width: String,
    height: String,
    callback: {
      type: Function,
      default () {}
    },
    effect: String,
    backdrop: Boolean,
    small: Boolean,
    prefixCls: {
      type: String,
      default: 'atui'
    }
  },
  methods: {
    close () {
      this.show = false
    },
    clickBack () {
      if (this.backdrop) {
        this.close()
      }
    }
  },
  compiled () {
    var me = this
    window.addEventListener('keyup', (ev) => {
      if (ev.keyCode === 27) {
        me.show = false
      }
    })
  },
  attached () {
    this.$appendTo(document.body)
  },
  computed: {
    dialogClassObj () {
      let { prefixCls, large, small } = this
      let dialogClass = {}

      dialogClass[prefixCls + '-modal-dialog'] = true
      dialogClass[prefixCls + '-modal-lg'] = large
      dialogClass[prefixCls + '-modal-sm'] = small

      return dialogClass
    }
  }
}
</script>
