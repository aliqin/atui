<template>
  <div v-if="!closed"
       :class="[prefixCls + '-tag', color && (prefixCls + '-tag-color')]"
       :style="{'background-color': color}">
    <a :href="href" :target="href ? '_blank' : ''"
       :class="[prefixCls + '-tag-text']"
       :style="{'fontSize': size+'px'}">
      <slot></slot>
    </a>
    <span v-if="closable"
         :class="[prefixCls + '-tag-close']"
         @click="closeHandler">
     <v-icon type="close" :size="size"></v-icon>
    </span>
  </div>
</template>

<script>
import vIcon from '../Icon/'

export default {
  props: {
    color: String,
    closable: Boolean,
    href: String,
    size: {
      type: String,
      default: '12'
    },
    prefixCls: {
      type: String,
      default: 'atui'
    }
  },
  data () {
    return {
      closed: false
    }
  },
  methods: {
    closeHandler (e) {
      this.closed = true
      this.$dispatch('close', e)
    }
  },
  components: {
    vIcon
  }
}
</script>
