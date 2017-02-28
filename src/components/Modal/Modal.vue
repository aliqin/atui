<template>
  <div role="dialog" :class="[prefixCls + '-modal']" v-show="visible"
    @click="clickBack"
    >
    <div v-show="visible"
         :class="dialogClassObj"
         :style="{width: width}"
         @click.stop="() => {}"
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
  name: 'Modal',
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
    open () {
      this.visible = true
    },
    close () {
      this.visible = false
    },
    clickBack () {
      if (this.backdrop) {
        this.close()
      }
    }
  },
  data () {
    return {
      visible: this.show
    }
  },
  watch: {
    show (val) {
      this.visible = val
    },
    visible (val) {
      let event = val ? 'open' : 'close'
      this.$emit(event)
    }
  },
  mounted () {
    var me = this
    window.addEventListener('keyup', (ev) => {
      if (ev.keyCode === 27) {
        me.visible = false
      }
    })
    document.body.appendChild(this.$el)

    if (this.show) {
      this.visible = true
    }
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
