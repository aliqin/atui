<template>
  <div class="select-container" v-bind:class="{open: show}">
    <button v-el:btn type="button" class="dropdown-toggle"
      @click="toggleDropdown"
      @blur="show = (search ? show : false)"
      v-bind="{disabled: disabled}"
    >
      <span class="btn-placeholder" v-show="showPlaceholder">{{placeholder}}</span>
      <span class="btn-content">{{ selectedItems }}</span>
      <span class="caret"><icon type="up"></icon></span>
    </button>
    <ul class="dropdown-menu">
      <template v-if="options.length">
        <li v-if="search" class="bs-searchbox">
          <input type="text" placeholder="Search" v-model="searchText" class="form-control" autocomplete="off">
        </li>
        <li v-for="option in options | filterBy searchText " v-bind:id="option.value" style="position:relative">
          <a @mousedown.prevent.stop="select(option.value)" style="cursor:pointer">
            {{ option.label }}
            <span class="glyphicon glyphicon-ok check-mark" v-show="value.indexOf(option.value) !== -1"></span>
          </a>
        </li>
      </template>
      <slot v-else></slot>
      <div class="notify" v-show="showNotify" transition="fadein">Limit reached ({{limit}} items max).</div>
    </ul>
  </div>
</template>

<script>
  import coerceBoolean from '../utils/coerceBoolean.js'
  import Icon from '../Icon/'
  export default {
    props: {
      options: {
        type: Array,
        default() { return [] },
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
      },
      onChange:{
        type:Function,
        default() {

        }
      }
    },
    components:{
      Icon
    },
    ready() {
      if (this.defaultValue.constructor !== Array) {
        if (this.defaultValue.length === 0) {
          this.defaultValue = []
        } else {
          this.defaultValue = [this.defaultValue]
        }
      } else {
        if (!this.multiple && this.defaultValue.length > 1) {
          this.defaultValue = this.defaultValue.slice(0, 1)
        } else if (this.multiple && this.defaultValue.length > this.limit) {
          this.defaultValue = this.defaultValue.slice(0, this.limit)
        }
      }
    },
    data() {
      return {
        searchText: null,
        show: false,
        showNotify: false
      }
    },
    computed: {
      selectedItems() {
        let foundItems = []
        if (this.defaultValue.length) {
          for (let item in this.defaultValue) {
            if (typeof this.defaultValue[item] === "string") {
              foundItems.push(this.defaultValue[item])
            }
          }
          return foundItems.join(', ')
        }
      },
      showPlaceholder() {
        return this.defaultValue.length === 0
      }
    },
    watch: {
      defaultValue(val) {
        if (val.length > this.limit) {
          this.showNotify = true
          this.defaultValue.pop()
          setTimeout(() => this.showNotify = false, 1000)
        }
      }
    },
    methods: {
      select(v) {
          if (this.defaultValue.indexOf(v) === -1) {
            if (this.multiple) {
              this.defaultValue.push(v)
            } else {
              this.defaultValue = [v]
            }
          } else {
            if (this.multiple) {
              this.defaultValue.$remove(v)
            }
          }
          if (this.closeOnSelect) {
            this.toggleDropdown()
          }
      },
      toggleDropdown() {
        this.show = !this.show
      }
    },
    events:{
      change(text,value) {
        this.onChange(text,value)
      }
    }
  }
</script>

<style scoped>

</style>
