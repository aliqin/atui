<template>
  <div
    v-show="show"
    :class="messageClassObj"
    :transition="transition"
    :style="{width:width}"
    role="alert">
    <div :class="[prefixCls + '-message-content']">
      <button v-show="dismissable" type="button" :class="[prefixCls + '-close']" @click="show = false">
      <span>&times;</span>
      </button>
      <icon v-if="showIcon" :type="type"></icon>
      <slot>
        {{content}}
      </slot>
    </div>
  </div>
</template>

<script type="text/babel">
import Icon from '../Icon'

export default {
  props: {
    type: {
      type: String
    },
    dismissable: {
      type: Boolean
    },
    showIcon: {
      type: Boolean
    },
    show: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [String, Number]
    },
    width: {
      type: String
    },
    placement: {
      type: String
    },
    content: String,
    transition: {
      type: String,
      default: 'fade'
    },
    arrow: String,
    prefixCls: {
      type: String,
      default: 'atui'
    }
  },
  components: {
    Icon
  },
  created () {
    if (this.type) {
      this.showIcon = true
    }
  },
  watch: {
    show (val) {
      if (this._timeout) clearTimeout(this._timeout)
      if (val && Boolean(this.duration)) {
        this._timeout = setTimeout(() => { this.show = false }, this.duration)
      }
    }
  },
  computed: {
    messageClassObj () {
      let { prefixCls, type, arrow, placement } = this
      let messageClass = {}

      messageClass[prefixCls + '-message'] = true
      messageClass[prefixCls + '-message-success'] = type === 'success'
      messageClass[prefixCls + '-message-warning'] = type === 'warning'
      messageClass[prefixCls + '-message-info'] = type === 'info'
      messageClass[prefixCls + '-message-error'] = type === 'error'
      messageClass[prefixCls + '-message-help'] = type === 'help'
      messageClass[prefixCls + '-message-top'] = placement === 'top'
      messageClass[prefixCls + '-message-top-right'] = placement === 'top-right'
      messageClass[prefixCls + '-message-center'] = placement === 'center'
      messageClass[prefixCls + '-message-arrow'] = !!arrow
      messageClass[prefixCls + '-message-arrow-' + arrow] = !!arrow
      return messageClass
    }
  }
}
</script>
