<template>
<i :class="['iconfont','icon-' + type]" :style="{ fontSize: size + 'px',color:color }">
  <slot></slot>
</i>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      require: true
    },
    size:{
    	type:String,
    	default:'14'
    },
    color:{
    	type:String
    }
  }
}

</script>
