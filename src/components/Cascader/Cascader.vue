<template>
  <div class="cascader">
    <span class="cascader-picker">
      <v-input readonly @click="toggleMenus" :value="displayValue" :placeholder="placeholder" :style="{width:width}"></v-input>
    </span>
    <div class="cascader-menus" v-show="show" transition="slide">
      <ul class="cascader-menu" v-for="(index, menu) in menus">
        <li class="cascader-menu-item" :class="{selected:selectedOptions[index] === option,disabled:option.disabled}" v-for="option in menu" @click="changeOption(index,option,$event)">{{option.label}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import EventListener from '../utils/EventListener'
  import Input from '../Input'

  export default {
    props: {
      options: {
        type: Array,
        required:true
      },
      placeholder: {
        type:String,
        default:'请选择'
      },
      width: {
        type:String
      },
      displayRender: {
        type:Function,
        default (label) {
          return label.join(' / ')
        }
      },
      expandTrigger: {
        type:String,
        default:'click'
      },
      defaultValue: {
        type: Array
      }
    },
    components: {
      vInput:Input
    },
    data() {
      return {
        menus: [],
        selectedOptions: [],
        displayValue:'',
        show: false
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
      me.options.forEach((option,i) => {
        me.menus[0].push({
          label:option.label,
          value:option.value,
          children:option.children
        })
      });
      if(me.defaultValue) {
        me.defaultValue.forEach((value,i) => {
          let option = me.menus[i].filter((option) => {
            return option.value === value
          })
          me.changeOption(i,option[0])
        })
      }
    },
    ready () {
      const el = this.$el
      let me = this
      me._closeEvent = EventListener.listen(window, 'click', (e)=> {
        if (!el.contains(e.target)) {
          me.show = false
        }
      })
    },
    methods: {
      changeOption (index,option,event) {
        let me = this
        let menus = me.menus.slice(0,index + 1)
        if(option.disabled) {
          return
        }
        me.selectedOptions = me.selectedOptions.slice(0,index + 1)
        me.selectedOptions[index] = option
        if(option.children) {
          menus.push(option.children)
        } else {
          me.displayValue = me.displayRender(me.selectedLabel)
          // 有事件来的才触发自定义事件，使用defaultValue填充的不触发
          if(event) {
            me.$dispatch('change', me.selectedValue, me.selectedOptions)
          }
          me.show = false
        }
        me.menus = menus
      },
      toggleMenus() {
        this.show = !this.show
      }
    }
  }
</script>
