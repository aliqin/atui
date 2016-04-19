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

<style lang="less">
.fade-transition {
  transition: opacity .3s ease;
}
.fade-enter,
.fade-leave {
  height: 0;
  opacity: 0;
}
.alert.top {
  position: fixed;
  top: 30px;
  margin: 0 auto;
  left: 0;
  right: 0;
  z-index: 2;
}
.alert.top-right {
  position: fixed;
  top: 30px;
  right: 50px;
  z-index: 2;
}
.alert.center {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,50%);
  z-index: 2;
}
</style>
