<template>
  <div class="casader">
    <span class="cascader-picker">
      <v-input readonly></v-input>
    </span>
    <div class="cascader-menus">
      <ul class="cascader-menu" v-for="menu in menus">
        <li class="cascader-menu-item" v-for="option in menu" @click="changeOption($index,option)">{{option.label}}</li>
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
      },
      defaultValue:Array
    },
    components:{
      vInput:Input
    },
    data() {
      return {
        childs:0,
        menus:[]
      }
    },
    created() {
      let me = this
      me.menus[0] = []
      me.options.forEach((option,i) => {
        me.menus[0].push({
          label:option.label,
          value:option.value,
          children:option.children
        })
      });
      // me.childs++
      // let children = this.options[0].children
      // // 算出层级，初始化界面的选择框
      // while(children && children.length) {
      //   me.childs++
      //   children = children[0].children
      // }
    },
    ready() {

    },
    methods: {
      changeOption(index,option) {
        let me = this
        if(option.children) {
          me.menus[index+1] = option.children
        }
        me.$set('menus',me.menus)
      }
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
