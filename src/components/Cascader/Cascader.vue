<template>
  <div class="casader">
    <span class="cascader-picker">
      <v-input readonly></v-input>
    </span>
    <div class="cascader-menus" v-if="data.length">
      <ul class="cascader-menu" v-for="options in data">
        <li class="cascader-menu-item" v-for="option in options">{{option.label}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Input from '../Input'
  import coerceBoolean from '../utils/coerceBoolean.js'

  export default {
    props:{
      options:{
        type: Array
      }
    },
    components:{
      vInput:Input
    },
    data() {
      return {
        data:[]
      }
    },
    created() {
      let me = this
      me.data.push([]);
      this.options.forEach((option,i) => {
        let level = 0;
        me.data[level] = []
        me.data[level].push({
          label:option.label,
          value:option.value
        })
        // while(option.children) {
        //   level ++
        //   me.data[level] = []
        //   me.data.push(children);
        // }
      })
      console.log(me.data)
    },
    methods: {

    }
  }
</script>
<style lang="less">
  .cascader-picker{
    position: relative;
    display: inline-block;
    cursor: pointer;
    vertical-align: middle;
  }
</style>
