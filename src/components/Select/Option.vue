<template>
  <li :class="{disabled:disabled}">
    <a @mousedown.prevent="handleClick">
      <span v-el:content><slot></slot></span>
      <icon type="tick" v-show="chosen"></icon>
    </a>
  </li>
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
    methods: {
      handleClick() {
        if(this.disabled) {
          return;
        }
        const parent = this.$parent
        if (parent.multiple) {
          const index = parent.defaultValue.indexOf(this.value)
          index === -1 ? parent.defaultValue.push(this.value) : parent.defaultValue.splice(index, 1)
        } else {
          parent.defaultValue = [this.value]
          parent.show = false
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
