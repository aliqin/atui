<template>
  <div class="select-container" v-bind:class="{open: show,disabled: disabled,multiple:multiple}">
    <div class="select-toggle" tabindex="1" class="dropdown-toggle" @click="toggleDropdown" v-bind="{disabled: disabled}"
    >
      <template v-if="!multiple">
        <span class="select-placeholder" v-show="showPlaceholder">{{placeholder}}</span>
        <span class="btn-content">{{ showText }}</span>
        <span :class="{caret:true,open:show}"><icon type="down" size="12"></icon></span>
      </template>
      <div v-else>
        <span class="select-placeholder" v-show="showPlaceholder">{{placeholder}}</span>
        <tag v-for="option in selectedOptions" closable @close="closeTag(option)">{{{option.label}}}</tag>
        <input type="text" v-el:search-field class="select-search-field" @input="onInput" @keydown.delete="deleteTag" @keydown.enter.prevent="createTag" v-model="searchText" autocomplete="off"/>
      </div>
    </div>
    <div class="dropdown-menu">
      <slot></slot>
      <div v-show="noResult" class="no-result">无结果</div>
      <div class="notify" v-show="showNotify" transition="fadein">最多可选 ({{limit}})项.</div>
    </div>


  </div>
</template>

<script>
  import EventListener from '../utils/EventListener'
  import coerceBoolean from '../utils/coerceBoolean.js'
  import Icon from '../Icon/'
  import Tag from '../Tag/'
  export default {
    props: {
      width:{
        type: Array,
      },
      value: {
        default:''
      },
      placeholder: {
        type: String,
        default: '请选择'
      },
      tags:{
        type:Boolean
      },
      multiple: {
        type: Boolean
      },
      search: { // Allow searching (only works when options are provided)
        type: Boolean
      },
      limit: {
        type: Number,
        default: 1024
      },
      disabled: {
        type: Boolean
      }
    },
    components:{
      Icon,
      Tag
    },
    created() {
      if(this.tags) {
        this.multiple = true
      }
      if (!this.multiple && Array.isArray(this.value)) {
        this.value = this.value.slice(0, 1)
      } else if (this.multiple && this.value.length > this.limit) {
        this.value = this.value.slice(0, this.limit)
      }
      if(this.value.length) {
        this.showPlaceholder = false
      }
    },
    data() {
      return {
        searchText: '',
        noResult:false,
        show: false,
        selectedOptions:[],
        showPlaceholder:true,
        showNotify: false,
        options:[]
      }
    },
    computed: {
      showText() {
        return this.selectedOptions && this.selectedOptions[0] && this.selectedOptions[0].label
      }
    },
    watch: {
      value(val) {
        if (this.multiple && val.length > this.limit) {
          this.showNotify = true
          this.value.pop()
          setTimeout(() => this.showNotify = false, 1000)
        }
      },
      selectedOptions() {
        if(this.multiple) {
          this.value = this.selectedOptions.map((option)=>{
            return option.value
          })
        } else {
          this.value = this.selectedOptions[0].value
        }
      }
    },
    methods: {
      select(option) {
        this.$dispatch('change',option)
      },
      toggleDropdown() {
        if(this.disabled) {
          this.show = false
          return
        }
        this.show = !this.show
        if(this.multiple) {
          this.showPlaceholder = false
          this.$els.searchField.focus()
        }
      },
      closeTag(option) {
        this.selectedOptions.$remove(option)
      },
      deleteTag() {
        let input = event.target
        let value = input.value
        if(value.length === 0) {
          let options = this.selectedOptions
          let option = options[options.length -1]
          this.selectedOptions.$remove(option)
        }
      },
      onInput() {
        let input = event.target
        let value = input.value
        let width = value.length * 10
        this.showPlaceholder = false
        input.style.width = (width + 10) + 'px'
      },
      createTag() {
        if(this.tags) {
          let value = event.target.value
          if(!value.trim().length) {
            return
          }
          if(this.value.trim().indexOf(value) === -1) {
            this.selectedOptions.push({
              label:value,
              value:value
            })
          }
          this.searchText = '';
        }
      }
    },
    events:{
      change(option) {
        this.showPlaceholder = false

        if(this.multiple) {
          let isSelected = this.selectedOptions.some((item)=>{
            return item.value === option.value
          })
          if(!isSelected) {
            this.selectedOptions.push(option)
            this.value.push(option.value)
          } else {
            this.selectedOptions = this.selectedOptions.filter((item)=>{
              return item.value !== option.value
            })
            console.log(this.value)
            this.value.$remove(option.value)
          }
        } else {
          this.selectedOptions = [option]
          this.value = option.value
        }

        if (!this.multiple) {
          this.show = false
        }
        this.searchText = ''
        // 需要把option的change事件继续冒泡给上一层级调用
        return true
      }
    },
    ready() {
      // 如果设置了子option元素同时又传了options，那么优先使用option子组件的内容
      let me = this
      me._closeEvent = EventListener.listen(window, 'click', (e)=> {
        if (!me.$el.contains(e.target)) {
          me.show = false
        }
      })
    },
    beforeDestroy() {
      if (this._closeEvent) this._closeEvent.remove()
    }
  }
</script>

<style scoped>
.caret .iconfont{
  display: inline-block;
  transition: all .3s ease;
  transform:rotate(0deg);
}
.caret.open .iconfont{
  transform:rotate(180deg);
}
</style>
