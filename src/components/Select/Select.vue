<template>
  <div class="select-container" v-bind:class="{open: show,disabled: disabled}">
    <div class="select-toggle" tabindex="1" class="dropdown-toggle"
      @click="toggleDropdown" @input="onInput"
      v-bind="{disabled: disabled,contenteditable:tags}"
    >
      <span class="select-placeholder" v-show="showPlaceholder">{{placeholder}}</span>

      <span v-if="!multiple" :class="{caret:true,open:show}"><icon type="down" size="12"></icon></span>
      <div v-if="multiple">
        <tag v-for="lable in selectedLabels" closable>{{label}}</tag>
      </div>
      <span v-else class="btn-content">{{{ selectedLabels }}}</span>

    </div>
    <div v-if="options.length" class="dropdown-menu">
      <div v-if="search" class="option bs-searchbox">
        <input type="text" placeholder="Search" v-model="searchText" class="form-control" autocomplete="off">
      </div>
      <div class="option" v-for="option in options | filterBy searchText " v-bind:id="option.value" style="position:relative">
        <a @mousedown.prevent.stop="select(option.label,option.value)" style="cursor:pointer">
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
        type: Array
      },
      width:{
        type: Array,
      },
      value: {
        twoWay: true,
        default:''
      },
      tags:null,
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
      closeOnSelect: { // only works when multiple==false
        type: Boolean,
        coerce: coerceBoolean,
        default: false
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
      if(this.tags) {
        this.multiple = true
      }
      if (!this.multiple && Array.isArray(this.value)) {
        this.value = this.value.slice(0, 1)
      } else if (this.multiple && this.value.length > this.limit) {
        this.value = this.value.slice(0, this.limit)
      }
    },
    data() {
      return {
        searchText: null,
        show: false,
        selectedLabels:[],
        showNotify: false,
        value:this.multiple ? [] : ''
      }
    },
    computed: {
      showPlaceholder() {
        return this.selectedLabels.length === 0
      }
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
      select(label,value) {
          this.$emit('change',label,value)
      },
      toggleDropdown() {
        if(this.disabled) {
          this.show = false
          return
        }
        this.show = !this.show
        if(this.tags) {
          this.showPlaceholder = false
        }
      },
      onInput() {
        console.log(event)
      }
    },
    events:{
      change(label,value) {
        if(this.multiple) {
          if(this.selectedLabels.indexOf(label) === -1) {
            this.selectedLabels.push(label)
          }
        } else {
          this.selectedLabels = label
        }
        if (this.multiple) {
          if(this.value.indexOf(value) === -1) {
            this.value.push(value)
          } else {
            this.value.$remove(value)
          }
        } else {
          this.value = value
        }

        if (this.closeOnSelect || !this.multiple) {
          this.toggleDropdown()
        }
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
