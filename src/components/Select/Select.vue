<template>
  <div class="select-container" :class="{open:show,disabled:disabled,multiple:multiple}">
    <div :class="['select-toggle',{tags:tags}]" tabindex="1" @mousedown="toggleDropdown" @keydown.up="selectUp" @keydown.down="selectDown" v-bind="{disabled: disabled}"
    >
      <template v-if="!multiple">
        <span class="select-placeholder" v-show="!value">{{placeholder}}</span>
        <span class="btn-content">{{ showText }}</span>
        <span :class="{caret:true,open:show}"><icon type="down" size="12"></icon></span>
      </template>
      <div v-else>
        <span class="select-placeholder" v-show="!value.length && showPlaceholder">{{placeholder}}</span>
        <tag v-for="option in selectedOptions" closable @close="closeTag(option)">{{{option.label}}}</tag>
        <input type="text" v-el:search-field class="select-search-field" @input="onInput" @keydown.delete="deleteTag" @blur="createTag" @keydown.enter.prevent="createTag" v-model="searchText" autocomplete="off"/>
      </div>
    </div>
    <div class="dropdown-menu" v-show="options.length > 0">
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
    name:'select',
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
      let me = this
      if(me.tags) {
        me.multiple = true
      }
      if(!me.value) {
        me.value = me.multiple ? [] : ''
      }
      if(me.multiple && !Array.isArray(me.value)) {
        me.value = [me.value]
      }
      if(!me.multiple && Array.isArray(me.value)) {
        me.value = me.value.slice(0, 1)
      }
      if (me.multiple && me.value.length > me.limit) {
        me.value = me.value.slice(0, me.limit)
      }
      if(me.value.length) {
        me.showPlaceholder = false
      }
    },
    data() {
      return {
        searchText: '',
        noResult:false,
        show: false,
        activeIndex:0,
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
        if (this.multiple) {
          if(val.length > this.limit) {
            this.showNotify = true
            this.value.pop()
            setTimeout(() => this.showNotify = false, 1000)
          }
        } else {
          this.$broadcast('valueChange',val)
        }
      },
      selectedOptions(options) {
        if(this.multiple) {
          this.value = this.selectedOptions.map((option)=>{
            return option.value
          })
        } else {
          this.value = this.selectedOptions[0].value
        }
        if(options.length) {
          this.$dispatch('change',this.multiple ? options : options[0])
        }
      }
    },
    methods: {
      toggleDropdown() {
        let me = this
        if(this.disabled) {
          this.show = false
          return
        }
        this.show = !this.show
        if(this.multiple) {
          this.showPlaceholder = false
          setTimeout(() => me.$els.searchField.focus(),10)
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
          if(!value || !value.trim().length) {
            return
          }
          if(this.value.indexOf(value) === -1) {
            const option = {
              label:value,
              value:value
            }
            this.selectedOptions.push(option)
          }
          this.searchText = ''
          event.target.style.width = '10px'
        }
      },
      selectDown(event) {
        // event.preventDefault()
        // let childs = this.$children
        // let length = childs.length
        // this.activeIndex = this.activeIndex > length ? 0 : this.activeIndex + 1
        // childs.forEach(option => {
        //   option.active = false
        // })
        // // console.log(childs[0])
        // childs[this.activeIndex].active = true
      },
      selectUp(event) {
        // event.preventDefault()
        // let childs = this.$children
        // let length = childs.length
        // this.activeIndex = this.activeIndex === 0 ? length - 1 : this.activeIndex - 1

        // childs.forEach(option => {
        //   option.active = false
        // })
        // childs[this.activeIndex].active = true
      }
    },
    events:{
      'option-change':function (option) {
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
        this.searchText = ''
        // 需要把option的change事件继续冒泡给上一层级调用
        // return true
      }
    },
    ready() {
      let me = this
      // me.options = me.$children.filter(child => {
      //   console.log(typeof child)
      // })
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

