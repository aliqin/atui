<template>
  <div
    v-show="show"
    :class="{
      'atui-message':		true,
      'atui-message-success':(type == 'success'),
      'atui-message-warning':(type == 'warning'),
      'atui-message-info':	(type == 'info'),
      'atui-message-error':	(type == 'error' || type == 'danger'),
      'atui-message-help': (type == 'help'),
      'top': 			(placement === 'top'),
      'top-right': 	(placement === 'top-right'),
      'center':      (placement === 'center'),
    }"
    :transition="transition"
    :style="{width:width}"
    role="alert">
    <div class="atui-message-content">
      <button v-show="dismissable" type="button" class="close" @click="show = false">
      <span>&times;</span>
      </button>
      <icon v-if="showIcon" :type="type"></icon>
      <slot>
        {{content}}
      </slot>
    </div>
  </div>
</template>

<script>
import coerceBoolean from '../utils/coerceBoolean.js'
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
      coerce: coerceBoolean,
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
    }
  },
  components: {
    Icon
  },
  watch: {
    show (val) {
      if (this._timeout) clearTimeout(this._timeout)
      if (val && Boolean(this.duration)) {
        this._timeout = setTimeout(() => this.show = false, this.duration)
      }
    }
  }
}
</script>
