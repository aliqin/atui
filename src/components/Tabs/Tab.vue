<template>
  <div role="tabpanel" :class="[prefixCls + 'tab-pane']"
      v-show="show"
      :transition="transition"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    header: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    prefixCls: {
      type: String,
      default: 'atui'
    }
  },
  data () {
    return {
      index: 0
    }
  },
  computed: {
    show () {
      return this.$parent.currActive === this.index
    },
    transition () {
      return this.$parent.effect
    }
  },
  created () {
    this.$parent.renderData.push({
      header: this.header,
      disabled: this.disabled
    })
  },
  beforeDestroy () {
    let renderData = this.$parent.renderData
    let me = this

    this.$parent.renderData = renderData.filter((data) => {
      return data.header !== me.header
    })

    let index = 0
    Vue.nextTick(() => {
      if (!me.$parent) {
        return
      }
      me.$parent.$children.forEach((child) => {
        console.log(child)
        child.index = index++
      })
      // fix activeIndex overflow
      let tabLen = me.$parent.renderData.length
      me.$parent.currActive = Math.min(me.$parent.currActive, tabLen - 1)
    })
  },
  mounted () {
    for (var c in this.$parent.$children) {
      if (this.$parent.$children[c].$el === this.$el) {
        this.index = +c
        break
      }
    }
  }
}
</script>
