<template>
  <div :class="{option:true,disabled:disabled,chosen:chosen}">
    <a @mousedown.prevent.stop="handleClick">
      <span v-el:content><slot></slot></span>
    </a>
  </div>
</template>

<script>
  import Icon from '../Icon/'
  export default {
    props: {
      value: {
        type: String
      },
      disabled:{
        type: Boolean
      }
    },
    components:{
      Icon
    },

    computed: {
      chosen() {
        return this.$parent.selectedOptions.some((item)=>{
          return item.value == this.value
        })
      }
    },
    ready() {
      if(this.$parent.value == this.value){
        let option = {
          label:this.$els.content.innerHTML,
          value:this.value
        }
        this.$parent.selectedOptions.push(option)
      }

    },
    methods: {
      handleClick() {
        if(this.disabled) {
          return;
        }
        let option = {
          label:this.$els.content.innerHTML,
          value:this.value
        }
        this.$dispatch('change',option)
      }
    }
  }
</script>

