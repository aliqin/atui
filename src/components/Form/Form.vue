<template>
  <form :class="formClassObj">
    <v-row>
      <slot></slot>
    </v-row>
  </form>
</template>

<script type="text/babel">
import Layout from '../Layout/'
const vRow = Layout.Row

export default {
  name: 'Form',
  props: {
    prefixCls: {
      type: String,
      default: 'atui'
    }
  },
  computed: {
    formClassObj () {
      let { prefixCls } = this
      let classObj = {}

      classObj[prefixCls + '-form'] = true
      return classObj
    }
  },
  components: {
    vRow
  }
}
</script>
