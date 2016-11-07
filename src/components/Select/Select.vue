<template>
  <div :class="selectClassObj" :style="style">
    <trigger trigger="click"
             placement="bottomLeft"
             effect="slide"
             popup-hide-when-click-outside
             :disabled="disabled"
             :width="width"
             :show.sync="show"
             @toggole-popup="togglePopupHandler"
             popup-use-trigger-width
             v-ref:triige>
      <div slot="trigger" :class="[prefixCls + '-select-toggle', tags && (prefixCls + '-select-tags')]"
           tabindex="1"
           v-bind="{disabled: disabled}">
        <template v-if="!multiple">
          <span v-show="showPlaceholder"
                :class="[prefixCls + '-select-placeholder']">{{placeholder}}</span>
          <span :class="[prefixCls + '-select-btn-content']">{{ showText }}</span>
          <span :class="[prefixCls + '-select-caret', show && (prefixCls + '-select-open')]">
            <icon :class="[prefixCls + '-dropdown-icon']" type="down" size="12"></icon></span>
        </template>
        <div v-else @click="focusInput">
          <span :class="[prefixCls + '-select-placeholder']" v-show="showPlaceholder">{{placeholder}}</span>
          <tag v-for="option in selectedOptions" closable @close="closeTag(option)">{{{option.label}}}</tag>
          <input type="text" v-el:search-field :class="[prefixCls + '-select-search-field']" @input="onInput" @keydown.delete="deleteTag" @blur="createTag" @keydown.enter.prevent="createTag" v-model="searchText" autocomplete="off"/>
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
    name: 'select',

    mixins: [GlobalMixin],

    props: {
      value: {
        type: [String, Array],
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
      },
      show: {
        type: Boolean,
        default: false
      }
    },

    components: {
      Icon,
      Tag,
      Trigger
    },

    created () {
      let me = this
      if (me.tags) {
        me.multiple = true
      }
      if (!me.value) {
        me.value = me.multiple ? [] : ''
      }
      if (me.multiple && !Array.isArray(me.value)) {
        me.value = [me.value]
      }
      if (!me.multiple && Array.isArray(me.value)) {
        me.value = me.value.slice(0, 1)
      }
      if (me.multiple && me.value.length > me.limit) {
        me.value = me.value.slice(0, me.limit)
      }
      if (me.value.length || me.selectedOptions.length) {
        me.showPlaceholder = false
      }
    },

    data () {
      return {
        searchText: '',
        noResult: false,
        activeIndex: 0,
        showPlaceholder: true,
        showNotify: false,
        options: [],
        selectedOptions: []
      }
    },

    computed: {
      showText () {
        return this.selectedOptions && this.selectedOptions[0] && this.selectedOptions[0].label
      },
      selectClassObj () {
        let { prefixCls, show, multiple, large, small } = this
        let classObj = {}

        classObj[prefixCls + '-select-cont'] = true
        classObj[prefixCls + '-dropdown-open'] = show
        classObj[prefixCls + '-select-multiple'] = multiple
        classObj[prefixCls + '-select-large'] = large
        classObj[prefixCls + '-select-small'] = small

        return classObj
      }
    },

    watch: {
      value (val) {
        let me = this
        if (!val) {
          me.showPlaceholder = true
          return
        }
        me.showPlaceholder = false
        if (me.multiple) {
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
          this.$set('selectedOptions', options)
        } else {
          this.$broadcast('valueChange', val)
        }
      },
      selectedOptions (options) {
        this.$dispatch('change', this.multiple ? options : options[0])
      }
    },

    methods: {
      closeTag (option) {
        this.value.$remove(option.value)
      },
      deleteTag (event) {
        let input = event.target
        let value = input.value
        if (value.length === 0) {
          let value = this.value[this.value.length - 1]
          this.value.$remove(value)
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
        this.$els.searchField.focus()
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
        if (this.multiple) {
          this.showPlaceholder = false
          setTimeout(() => me.$els.searchField.focus(), 10)
        }
      }
    },

    events: {
      'option-change' (option) {
        this.showPlaceholder = false

        if (this.multiple) {
          let isSelected = this.value.indexOf(option.value) >= 0
          if (!isSelected) {
            this.value.push(option.value)
          } else {
            this.value.$remove(option.value)
          }
        } else {
          this.value = option.value
        }

        if (!this.multiple) {
          this.show = false
        }
        this.searchText = ''
        // 需要把option的change事件继续冒泡给上一层级调用
        // return true
      }
    }
  }
</script>

