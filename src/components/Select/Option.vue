<template>
  <div :class="{option:true,disabled:disabled,chosen:chosen}">
    <a @mousedown.prevent.stop="handleClick">
      <span v-el:content><slot></slot></span>
    </a>
  </div>
</template>

<script>
  import coerceBoolean from '../utils/coerceBoolean.js'
  import Icon from '../Icon/'
  export default {
    props: {
      value: {
        type: String
      },
      disabled:{
        type: Boolean,
        coerce: coerceBoolean,
        default:false
      }
    },
    components:{
      Icon
    },
    data() {
      return {
        chosen: false
      }
    },
    computed: {
      chosen() {
        return this.$parent.selectedOptions.some((item)=>{
          return item.value === this.value
        })
      }
    },
    ready() {
      if(this.chosen) {
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

<style scoped>
  a span.check-mark {
    position: absolute;
    display: inline-block;
    right: 15px;
    margin-top: 5px;
  }
</style>
