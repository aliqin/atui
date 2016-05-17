<template>
  <div v-show="show" :class="{option:true,disabled:disabled,active:active,chosen:chosen}" @mousedown.prevent.stop="handleClick">
    <slot></slot>
  </div>
</template>

<script>
  // import Icon from '../Icon/'
  export default {
    name:'option',
    props: {
      value: {
        type: String
      },
      disabled:{
        type: Boolean
      }
    },
    data() {
      return {
        active:false
      }
    },
    computed: {
      chosen() {
        return this.$parent.selectedOptions.some((item)=>{
          return item.value == this.value
        })
      },
      show() {
        let searchText = this.$parent.searchText.trim()
        if(searchText.length && this.$parent.multiple) {
          return this.$el.innerText.indexOf(searchText) >=0
        }
        return true;
      }
    },
    ready() {
      let option = {
        label:this.$el.innerText,
        value:this.value,
        disabled:this.disabled
      }
      this.$parent.$data.options.push(option)
      if(this.$parent.value == this.value){
        this.$parent.selectedOptions.push(option)
      }

    },
    methods: {
      handleClick() {
        if(this.disabled) {
          return;
        }
        let option = {
          label:this.$el.innerText,
          value:this.value
        }
        this.$dispatch('option-change',option)
      }
    }
  }
</script>

