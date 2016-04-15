<template>
  <div :class="{option:true,disabled:disabled}">
    <a @mousedown.prevent.stop="handleClick">
      <span v-el:content><slot></slot></span>
      <icon type="tick" v-show="chosen"></icon>
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
        return this.$parent.defaultValue.indexOf(this.value) !== -1
      }
    },
    ready() {
      if(this.chosen) {
        this.$parent.selectedLabels = [this.$els.content.innerHTML]
      }
    },
    methods: {
      handleClick() {
        if(this.disabled) {
          return;
        }
        this.$dispatch('change',this.$els.content.innerHTML,this.value)
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
