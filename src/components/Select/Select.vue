<template>
  <div class="select-container" v-bind:class="{open: show,disabled: disabled,multiple:multiple}">
    <div class="select-toggle" tabindex="1" class="dropdown-toggle" @click="toggleDropdown" v-bind="{disabled: disabled}"
    >
      <template v-if="!multiple">
        <span class="select-placeholder" v-show="showPlaceholder">{{placeholder}}</span>
        <span class="btn-content">{{ selectedOptions[0].label }}</span>
        <span :class="{caret:true,open:show}"><icon type="down" size="12"></icon></span>
      </template>
      <div v-else>
        <span class="select-placeholder" v-show="showPlaceholder">{{placeholder}}</span>
        <tag v-for="option in selectedOptions" closable @close="closeTag(option)">{{{option.label}}}</tag>
        <input type="text" v-el:search-field class="select-search-field" @input="onInput" @keyup.delete="deleteTag" v-model="searchText" autocomplete="off"/>
      </div>

    </div>
    <div v-if="options.length" class="dropdown-menu">
      <div v-if="search" class="option bs-searchbox">
        <input type="text" placeholder="Search" v-model="searchText" autocomplete="off">
      </div>
      <div class="option" v-for="option in options | filterBy searchText " v-bind:id="option.value" style="position:relative">
        <a @mousedown.prevent.stop="select(option)" style="cursor:pointer">
          {{ option.label }}
          <icon type="tick" v-show="value.indexOf(option.value) !== -1"></icon>
        </a>
      </div>
    </div>
    <div v-else class="dropdown-menu">
      <slot></slot>
    </div>
    <div class="notify" v-show="showNotify" transition="fadein">最多可选 ({{limit}})项.</div>

  </div>
</template>

<script>
  import EventListener from '../utils/EventListener'
  import coerceBoolean from '../utils/coerceBoolean.js'
  import Icon from '../Icon/'
  import Tag from '../Tag/'
  export default {
    props: {
      options: {
        type: Array,
        default:[]
      },
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
      multiple: {
        type: Boolean,
        coerce: coerceBoolean,
        default: false
      },
      search: { // Allow searching (only works when options are provided)
        type: Boolean,
        coerce: coerceBoolean,
        default: false
      },
      limit: {
        type: Number,
        default: 1024
      },
      disabled: {
        type: Boolean,
        coerce: coerceBoolean,
        default: false
      }
    },
    components:{
      Icon,
      Tag
    },
    created() {
      if (!this.multiple && Array.isArray(this.value)) {
        this.value = this.value.slice(0, 1)
      } else if (this.multiple && this.value.length > this.limit) {
        this.value = this.value.slice(0, this.limit)
      }
      if(this.value) {
        this.showPlaceholder = false
      }
      this.$children.forEach((option)=>{

      })
    },
    data() {
      return {
        searchText: null,
        show: false,
        selectedOptions:[],
        showPlaceholder:true,
        showNotify: false
      }
    },
    computed: {

    },
    watch: {
      value(val) {
        if (this.multiple && val.length > this.limit) {
          this.showNotify = true
          this.value.pop()
          setTimeout(() => this.showNotify = false, 1000)
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
            this.value.$remove(option.value)
          }
        } else {
          this.selectedOptions = [option]
          this.value = option.value
        }

        if (!this.multiple) {
          this.show = false
        }

        // 需要把option的change事件继续冒泡给上一层级调用
        return true
      }
    },
    ready() {
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
