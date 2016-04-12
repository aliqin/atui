<template>
  <div class="select-container" v-bind:class="{open: show}">
    <button v-el:btn type="button" class="dropdown-toggle"
      @click="toggleDropdown"
      @blur="show = (search ? show : false)"
      v-bind="{disabled: disabled}"
    >
      <span class="btn-placeholder" v-show="showPlaceholder">{{placeholder}}</span>
      <span class="btn-content">{{{ selectedLabels }}}</span>
      <span class="caret"><icon type="up"></icon></span>
    </button>
    <ul class="dropdown-menu">
      <template v-if="options.length">
        <li v-if="search" class="bs-searchbox">
          <input type="text" placeholder="Search" v-model="searchText" class="form-control" autocomplete="off">
        </li>
        <li v-for="option in options | filterBy searchText " v-bind:id="option.value" style="position:relative">
          <a @mousedown.prevent.stop="select(option.label,option.value)" style="cursor:pointer">
            {{ option.label }}
            <span class="glyphicon glyphicon-ok check-mark" v-show="value.indexOf(option.value) !== -1"></span>
          </a>
        </li>
      </template>
      <slot v-else></slot>
      <div class="notify" v-show="showNotify" transition="fadein">最多可选 ({{limit}})项.</div>
    </ul>
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
        selectedLabels:[],
        showNotify: false
      }
    },
    computed: {
      showPlaceholder() {
        return this.selectedLabels.length === 0
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
        }else {
          this.selectedLabels = [label]
        }
        if (this.defaultValue.indexOf(value) === -1) {
          if (this.multiple) {
            this.defaultValue.push(value)
          } else {
            this.defaultValue = [value]
          }
        } else {
          if (this.multiple) {
            this.defaultValue.$remove(value)
          }
        }
        if (this.closeOnSelect || !this.multiple) {
          this.toggleDropdown()
        }
      }
    }
  }
</script>

<style scoped>

</style>
