<template>
  <div class="casader">
    <span class="cascader-picker">
      <v-input readonly></v-input>
    </span>
    <div class="cascader-menus">
      <ul class="cascader-menu" v-if="root">
        <li class="cascader-menu-item" v-for="option in root">{{option.label}}</li>
      </ul>
      <ul class="cascader-menu" v-for="index in childs">
        <!-- <li class="cascader-menu-item" v-for="option in root">{{option.label}}</li> -->
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
        type: Array,
        required:true
      }
    },
    components:{
      vInput:Input
    },
    data() {
      return {
        childs:0,
        root:[]
      }
    },
    created() {
      let me = this
      me.options.forEach((option,i) => {
        me.root.push({
          label:option.label,
          value:option.value
        })
      });
      let children = this.options[0].children
      console.log(children)
      while(children && children.length) {
        me.childs++
        children = children[0].children
      }
    },
    ready() {

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
