<template>
  <div :class="stepClassObj" :style="{'width': tailWidth}">
   <div v-if="!lastStep"
        :class="[prefixCls + '-step-tail']">
     <i>
     </i>
   </div>
   <div :class="[prefixCls + '-step-head']">
     <div :class="[prefixCls + '-step-head-inner']">
      <span
        v-if="status !== 'finish'"
        :class="[prefixCls + '-step-icon']">
        {{ stepNumber }}
      </span>
      <span v-else
            :class="[prefixCls + '-step-finish-icon']">
        <icon type="success" size="28"></icon>
      </span>
     </div>
   </div>
   <div :class="[prefixCls + '-step-main']">
     <div :class="[prefixCls + '-step-main-title']">{{ title }}</div>
     <div :class="[prefixCls + '-step-main-description']">{{ description }}</div>
   </div>
  </div>
</template>

<script>
import Icon from '../Icon/'
export default {
  name: 'Step',
  data () {
    return {
      status: 'process',
      stepNumber: 0,
      lastStep: false,
      tailWidth: 'auto'
    }
  },
  props: {
    title: String,
    description: String,
    prefixCls: {
      type: String,
      default: 'atui'
    }
  },
  computed: {
    stepClassObj () {
      let { prefixCls, status, lastStep } = this
      let classObj = {}

      classObj[prefixCls + '-step'] = true
      classObj[prefixCls + '-step-status-process'] = status === 'process'
      classObj[prefixCls + '-step-status-finish'] = status === 'finish'
      classObj[prefixCls + '-step-status-wait'] = status === 'wait'
      classObj[prefixCls + '-step-item-last'] = lastStep

      return classObj
    }
  },
  components: {
    Icon
  }
}
</script>
