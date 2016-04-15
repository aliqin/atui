<template>
  <div class="select-container" v-bind:class="{open: show,disabled: disabled}">
    <button v-el:btn type="button" class="dropdown-toggle"
      @click="toggleDropdown"
      @blur="show = (search ? show : false)"
      v-bind="{disabled: disabled}"
    >
      <span class="btn-placeholder" v-show="showPlaceholder">{{placeholder}}</span>
      <span class="btn-content">{{{ selectedLabels }}}</span>
      <span :class="{caret:true,open:show}"><icon type="down" size="12"></icon></span>
    </button>
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
  import coerceBoolean from '../utils/coerceBoolean.js'
  import Icon from '../Icon/'
  export default {
    props: {
      options: {
        type: Array
      },
      width:{
        type: Array,
      },
      defaultValue: {
        twoWay: true,
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
      Icon
    },
    created() {
      if (!this.multiple && Array.isArray(this.defaultValue)) {
        this.defaultValue = this.defaultValue.slice(0, 1)
      } else if (this.multiple && this.defaultValue.length > this.limit) {
        this.defaultValue = this.defaultValue.slice(0, this.limit)
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
      defaultValue(val) {
        if (this.multiple && val.length > this.limit) {
          this.showNotify = true
          this.defaultValue.pop()
          setTimeout(() => this.showNotify = false, 1000)
        }
      }
    },
    methods: {
      select(label,value) {
          this.$emit('change',label,value)
      },
      toggleDropdown() {
        this.show = !this.show
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
          if(this.defaultValue.indexOf(value) === -1) {
            this.defaultValue.push(value)
          } else {
            this.defaultValue.$remove(value)
          }
        } else {
          this.defaultValue = value
        }

        if (this.closeOnSelect || !this.multiple) {
          this.toggleDropdown()
        }
      }
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
