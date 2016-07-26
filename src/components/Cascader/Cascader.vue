<template>
  <div :class="[prefixCls + '-cascader']">
    <trigger trigger="click" placement="bottomLeft" effect="slide" :popup-hide-when-click-outside="true">
      <span slot="trigger"
            :class="[prefixCls + '-cascader-picker']">
        <v-input readonly :value="displayValue" :placeholder="placeholder" :style="{width:width}"></v-input>
      </span>
      <div slot="popup"
           :class="[prefixCls + '-cascader-menus']">
        <ul :class="[prefixCls + '-cascader-menu']" v-for="(index, menu) in menus">
          <li :class="[prefixCls + '-cascader-menu-item', selectedOptions[index] === option && prefixCls + '-cascader-selected', option.disabled && (prefixCls + '-cascader-disabled')]"
              v-for="option in menu" @click="changeOption(index,option,$event)">{{option.label}}</li>
        </ul>
      </div>
    </trigger>
  </div>
</template>

<script type="text/babel">
  import GlobalMixin from '../_utils/GlobalMixin'
  import Input from '../Input'
  import Trigger from '../Trigger'

  export default {
    mixins: [GlobalMixin],

    props: {
      options: {
        type: Array,
        required: true
      },
      placeholder: {
        type: String,
        default: '请选择'
      },
      width: {
        type: String
      },
      displayRender: {
        type: Function,
        default (label) {
          return label.join(' / ')
        }
      },
      expandTrigger: {
        type: String,
        default: 'click'
      },
      defaultValue: {
        type: Array
      }
    },

    components: {
      vInput: Input,
      trigger: Trigger
    },

    data () {
      return {
        menus: [],
        selectedOptions: [],
        displayValue: ''
      }
    },

    computed: {
      selectedValue () {
        let me = this
        return me.selectedOptions.map((option) => {
          return option.value
        })
      },
      selectedLabel () {
        let me = this
        return me.selectedOptions.map((option) => {
          return option.label
        })
      }
    },

    created () {
      let me = this
      me.menus[0] = []
      me.options.forEach((option, i) => {
        me.menus[0].push({
          label: option.label,
          value: option.value,
          children: option.children
        })
      })
      if (me.defaultValue) {
        me.defaultValue.forEach((value, i) => {
          let option = me.menus[i].filter((option) => {
            return option.value === value
          })
          me.changeOption(i, option[0])
        })
      }
    },

    methods: {
      changeOption (index, option, event) {
        let me = this
        let menus = me.menus.slice(0, index + 1)
        if (option.disabled) {
          return
        }
        me.selectedOptions = me.selectedOptions.slice(0, index + 1)
        me.selectedOptions[index] = option
        if (option.children) {
          menus.push(option.children)
        } else {
          me.displayValue = me.displayRender(me.selectedLabel)
          // 有事件来的才触发自定义事件，使用defaultValue填充的不触发
          if (event) {
            me.$dispatch('change', me.selectedValue, me.selectedOptions)
          }
          me.show = false
        }
        me.menus = menus
      }
    }
  }
</script>
