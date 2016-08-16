<template>
<i :class="[prefixCls + '-iconfont', prefixCls + '-icon-' + type]" :style="{ fontSize: size + 'px',color:color }">
</i>
</template>

<script>
export default {
  name: 'icon',
  props: {
    type: {
      type: String,
      require: true
    },
    size: {
      type: String
    },
    color: {
      type: String
    },
    prefixCls: {
      type: String,
      default: 'atui'
    }
  }
}
</script>
