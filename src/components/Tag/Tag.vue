<template>
  <div v-if="!closed" :class="['atui-tag',{'atui-tag-color': color}]" :style="{'background-color': color}">
   <a :href="href" class="tag-text" :style="{'fontSize': size+'px'}"><slot></slot></a>
   <span v-if="closable" class="tag-close" @click="closeHandler">
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



