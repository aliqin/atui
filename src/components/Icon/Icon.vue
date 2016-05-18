<template>
<i :class="['iconfont','icon-' + type]" :style="{ fontSize: size + 'px',color:color }">
</i>
</template>

<script>
export default {
  name:'icon',
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
