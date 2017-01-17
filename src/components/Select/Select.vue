<template>
  <div :class="selectClassObj" :style="style">
    <trigger trigger="click"
             placement="bottomLeft"
             effect="slide"
             popup-hide-when-click-outside
             :disabled="disabled"
             :width="width"
             :show="show"
             @toggle-popup="togglePopupHandler"
             popup-use-trigger-width
             ref="trigger">
      <div slot="trigger" :class="[prefixCls + '-select-toggle', tags && (prefixCls + '-select-tags')]"
           tabindex="1"
           v-bind="{disabled: disabled}">
        <template v-if="!multipleSelect">
          <span v-show="showPlaceholder"
                :class="[prefixCls + '-select-placeholder']">{{placeholder}}</span>
          <span :class="[prefixCls + '-select-btn-content']">{{ showText }}</span>
          <span :class="[prefixCls + '-select-caret', show && (prefixCls + '-select-open')]">
            <icon :class="[prefixCls + '-dropdown-icon']" type="down" size="12"></icon></span>
        </template>
        <div v-else @click="focusInput">
          <span :class="[prefixCls + '-select-placeholder']" v-show="showPlaceholder">{{placeholder}}</span>
          <tag v-for="option in selectedOptions" closable @close="closeTag(option)" v-html="option.label"></tag>
          <input type="text" ref="searchField" :class="[prefixCls + '-select-search-field']" @input="onInput" @keydown.delete="deleteTag" @blur="createTag" @keydown.enter.prevent="createTag" v-model="searchText" autocomplete="off"/>
        </div>
      </div>
      <div slot="popup" :style="{width:width}" :class="[prefixCls + '-dropdown-menu']">
        <slot></slot>
        <div v-show="noResult" class="no-result">无结果</div>
        <div class="notify" v-show="showNotify" transition="fadein">最多可选 ({{limit}})项.</div>
      </div>
    </trigger>
  </div>
</template>

<script type="text/babel">
  import GlobalMixin from '../_utils/GlobalMixin'
  import Icon from '../Icon/'
  import Tag from '../Tag/'
  import Trigger from '../Trigger'

  export default {
    name: 'Select',

    mixins: [GlobalMixin],

    props: {
      defaultValue: {
        type: [String, Number, Array],
        default: ''
      },
      placeholder: {
        type: String,
        default: '请选择'
      },
      large: Boolean,
      small: Boolean,
      style: String,
      width: {
        type: String,
        default: 'auto'
      },
      tags: Boolean,
      multiple: Boolean,
      limit: {
        type: Number,
        default: 1024
      },
      disabled: {
        type: Boolean
      }
    },

    components: {
      Icon,
      Tag,
      Trigger
    },

    created () {
      let me = this
      let value = me.defaultValue
      if (me.multiple || me.tags) {
        me.multipleSelect = true
      }
      value = me.getValue()
      if ((me.defaultValue !== null) || me.selectedOptions.length) {
        me.showPlaceholder = false
      }
      this.value = value
      this.$on('option-change', function (option) {
        me.showPlaceholder = false

        if (me.multipleSelect) {
          let isSelected = me.value.indexOf(option.value) >= 0
          if (!isSelected) {
            me.value.push(option.value)
          } else {
            let index = me.value.indexOf(option.value)
            me.value.splice(index, 1)
          }
        } else {
          me.value = option.value
        }
        if (!this.multipleSelect) {
          // this.show = false
          this.$refs.trigger.showPopup = false
        }
        me.searchText = ''
      })
    },

    data () {
      return {
        searchText: '',
        noResult: false,
        activeIndex: 0,
        showPlaceholder: true,
        showNotify: false,
        show: false,
        value: [],
        multipleSelect: false,
        options: [],
        selectedOptions: []
      }
    },

    computed: {
      showText () {
        return this.selectedOptions && this.selectedOptions[0] && this.selectedOptions[0].label
      },
      selectClassObj () {
        let { prefixCls, show, multipleSelect, large, small } = this
        let classObj = {}

        classObj[prefixCls + '-select-cont'] = true
        classObj[prefixCls + '-dropdown-open'] = show
        classObj[prefixCls + '-select-multipleSelect'] = multipleSelect
        classObj[prefixCls + '-select-large'] = large
        classObj[prefixCls + '-select-small'] = small

        return classObj
      }
    },

    watch: {
      defaultValue (val) {
        this.value = this.getValue()
      },
      value (val) {
        let me = this
        if (!val) {
          me.showPlaceholder = true
          return
        }
        me.showPlaceholder = false
        if (me.multipleSelect) {
          if (val.length > this.limit) {
            me.showNotify = true
            me.value.pop()
            setTimeout(() => { me.showNotify = false }, 1000)
          }
          // 多选时，当value有变化则重新设置selectedOptions
          let options = []
          val.forEach(v => {
            // 先判断是否在原来的option中
            let option = me.options.filter(opt => {
              return opt.value === v
            })
            if (option.length) {
              options.push(option[0])
            } else {
              // 不在证明是新建的tag，则创建一个option
              options.push({
                label: v,
                value: v,
                disabled: false
              })
            }
          })
          me.$set(this, 'selectedOptions', options)
        } else {
          me.$refs.trigger.$children.forEach((child) => {
            if (val === child.value && !child.disabled) {
              const option = {
                label: child.$el.innerText,
                value: child.value,
                disabled: child.disabled
              }
              me.selectedOptions = [option]
              child.chosen = true
            }
          })
          // me.$emit('valueChange', val)
        }
      },
      selectedOptions (options) {
        this.$emit('change', this.multipleSelect ? options : options[0])
      }
    },

    methods: {
      /**
       * 根据defaultValue获取初始的value
       * @param defaultValue
       */
      getValue (defaultValue) {
        let me = this
        let value = me.defaultValue
        if (me.defaultValue === null) {
          value = me.multipleSelect ? [] : ''
        }
        if (me.multipleSelect && !Array.isArray(me.defaultValue)) {
          value = [me.defaultValue]
        }
        if (!me.multipleSelect && Array.isArray(me.defaultValue)) {
          value = me.defaultValue.slice(0, 1)
        }
        if (me.multipleSelect && me.defaultValue.length > me.limit) {
          value = me.defaultValue.slice(0, me.limit)
        }

        return value
      },
      /**
       * 设置选中的值
       * @param value {any}
       */
      setValue (value) {
        this.value = value
      },
      closeTag (option) {
        let index = this.value.indexOf(option.value)
        this.value.splice(index, 1)
      },
      deleteTag (event) {
        let input = event.target
        let value = input.value
        if (value.length === 0) {
          let index = this.value.indexOf(value)
          this.value.splice(index, 1)
        }
      },
      onInput (event) {
        let input = event.target
        let value = input.value
        let width = value.length * 10
        this.showPlaceholder = false
        input.style.width = (width + 10) + 'px'
      },
      createTag (event) {
        if (this.tags) {
          let value = event.target.value
          if (!value || !value.trim().length) {
            return
          }
          if (this.value.indexOf(value) === -1) {
            this.value.push(value)
          }
          this.searchText = ''
          event.target.style.width = '10px'
        }
      },
      focusInput (ev) {
        this.$refs.searchField.focus()
      },
      selectDown (event) {
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
      selectUp (event) {
        // event.preventDefault()
        // let childs = this.$children
        // let length = childs.length
        // this.activeIndex = this.activeIndex === 0 ? length - 1 : this.activeIndex - 1

        // childs.forEach(option => {
        //   option.active = false
        // })
        // childs[this.activeIndex].active = true
      },

      togglePopupHandler (show) {
        const me = this
        if (this.disabled) {
          this.show = false
          return
        }
        this.show = !this.show
        if (this.multipleSelect) {
          this.showPlaceholder = false
          setTimeout(() => me.$refs.searchField.focus(), 10)
        }
      }
    }
  }
</script>

