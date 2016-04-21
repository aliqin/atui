<template>
  <div
    v-show="show"
    v-bind:class="{
      'alert':		true,
      'alert-success':(type == 'success'),
      'alert-warning':(type == 'warning'),
      'alert-info':	(type == 'info'),
      'alert-error':	(type == 'error' || type == 'danger'),
      'alert-help': (type == 'help'),
      'top': 			(placement === 'top'),
      'top-right': 	(placement === 'top-right'),
      'center':      (placement === 'center'),
    }"
    transition="fade"
    v-bind:style="{width:width}"
    role="alert">
    <button v-show="dismissable" type="button" class="close" @click="show = false">
      <span>&times;</span>
    </button>
    <icon v-if="showIcon" :type="type"></icon>
    <slot>
      {{content}}
    </slot>
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
        type: Boolean,
        coerce: coerceBoolean,
        default: false,
      },
      showIcon: {
        type: Boolean,
        coerce: coerceBoolean,
        default: true,
      },
      show: {
        type: Boolean,
        coerce: coerceBoolean,
        default: true,
        twoWay: true
      },
      duration: {
        type: [String, Number]
      },
      width: {
        type: String
      },
      placement: {
        type: String
      }
    },
    components:{
      Icon
    },
    watch: {
      show(val) {
        if (this._timeout) clearTimeout(this._timeout)
        if (val && Boolean(this.duration)) {
          this._timeout = setTimeout(()=> this.show = false, this.duration)
        }
      }
    }
  }
</script>
