<template>
  <div v-show="show" :class="{option:true,disabled:disabled,active:active,chosen:chosen}" @mousedown.prevent.stop="handleClick">
    <slot></slot>
  </div>
</template>

<script>
  // import Icon from '../Icon/
  // TODO: 子组件不应该知道父组件的内容，所有业务逻辑应该拿到父组件中去
  export default {
    name: 'option',
    props: {
      value: {
        type: String
      },
      disabled: {
        type: Boolean
      }
    },
    data () {
      return {
        active: false
      }
    },
    computed: {
      chosen () {
        return this.$parent.selectedOptions.some((item) => {
          return item.value === this.value
        })
      },
      show () {
        let searchText = this.$parent.searchText.trim()
        if (searchText.length && this.$parent.multiple) {
          return this.$el.innerText.indexOf(searchText) >= 0
        }
        return true
      }
    },
    ready () {
      let option = {
        label: this.$el.innerText,
        value: this.value,
        disabled: this.disabled
      }
      this.$parent.$data.options.push(option)
      if (this.$parent.value === this.value) {
        this.$parent.selectedOptions.push(option)
      }
    },
    methods: {
      handleClick () {
        if (this.disabled) {
          return
        }
        let option = {
          label: this.$el.innerText,
          value: this.value
        }
        this.$dispatch('option-change', option)
      }
    },
    events: {
      valueChange (val) {
        if (val === this.value && !this.disabled) {
          const option = {
            label: this.$el.innerText,
            value: this.value,
            disabled: this.disabled
          }
          this.$parent.selectedOptions = [option]
          this.chosen = true
        }
      }
    }
  }
</script>

