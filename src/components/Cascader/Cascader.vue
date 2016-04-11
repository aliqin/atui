<template>
  <div class="casader">
    <span class="cascader-picker">
      <v-input readonly @click="toggleMenus" :value="displayValue" :placeholder="placeholder"></v-input>
    </span>
    <div class="cascader-menus" v-show="isOpen">
      <ul class="cascader-menu" v-for="(index, menu) in menus">
        <li class="cascader-menu-item" :class="{selected:selectedOptions[index] === option}" v-for="option in menu" @click="changeOption(index,option,$event)">{{option.label}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import EventListener from '../utils/EventListener'
  import Input from '../Input'

  export default {
    props:{
      options:{
        type: Array,
        required:true
      },
      placeholder:{
        type:String,
        default:'请选择'
      },
      size:{
        type:String,
        default:'default'
      },
      displayRender:{
        type:Function,
        default (label) {
          return label.join(' / ')
        }
      },
      expandTrigger:{
        type:String,
        default:'click'
      },
      defaultValue:{
        type: Array
      }
    },
    components:{
      vInput:Input
    },
    data() {
      return {
        menus:[],
        selectedOptions:[],
        displayValue:'',
        isOpen:false
      }
    },
    computed:{
      selectedValue() {
        let me = this
        return me.selectedOptions.map((option) => {
          return option.value
        })
      },
      selectedLabel() {
        let me = this
        return me.selectedOptions.map((option) => {
          return option.label
        })
      }
    },
    created() {
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
          let option = me.menus[i].find((option) => {
            return option.value === value
          })
          me.changeOption(i,option)
        })
      }
      // me.childs++
      // let children = this.options[0].children
      // // 算出层级，初始化界面的选择框
      // while(children && children.length) {
      //   me.childs++
      //   children = children[0].children
      // }

    },
    ready() {
      const el = this.$el
      let me = this
      me._closeEvent = EventListener.listen(window, 'click', (e)=> {
        if (!el.contains(e.target)) {
          me.isOpen = false
        }
      })
    },
    methods: {
      changeOption(index,option,event) {
        let me = this
        let menus = me.menus.slice(0,index + 1)
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
        }
        me.menus = menus
      },
      toggleMenus() {
        this.isOpen = !this.isOpen
      }
    }
  }
</script>
<style lang="less">
.casader{
  position: relative;
  display: inline-block;
}
  .cascader-picker{
    position: relative;
    display: inline-block;
    cursor: pointer;
    vertical-align: middle;
  }
  .cascader-menus {
    z-index: 10010;
    font-size: 12px;
    background: #fff;
    position: absolute;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    box-shadow: 0 0 4px rgba(0,0,0,0.17);
    white-space: nowrap
  }
  .cascader-menu {
    display: inline-block;
    vertical-align: top;
    min-width: 111px;
    height: 180px;
    list-style: none;
    margin: 0;
    padding: 0;
    border-right: 1px solid #e9e9e9;
    overflow: auto
}

.cascader-menu:last-child {
    border-right-color: transparent;
    margin-right: -1px
}

.cascader-menu-item {
    padding: 7px 16px;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    &.selected,&.selected:hover{
      background: #d5f1fd;
    }
}

.cascader-menu-item:hover {
    background: #eaf8fe;
}

.cascader-menu-item-disabled {
    cursor: not-allowed;
    color: #ccc;
}

.cascader-menu-item-disabled:hover {
    background: transparent
}

.cascader-menu-item-active {
    background: #d5f1fd
}

.cascader-menu-item-active:hover {
    background: #d5f1fd
}

.cascader-menu-item-expand {
    position: relative
}

.cascader-menu-item-expand:after {
    content: '\E600';
    font-family: 'anticon';
    display: inline-block;
    font-size: 12px;
    font-size: 8px \9;
    -webkit-transform: scale(.66666667) rotate(0deg);
    -ms-transform: scale(.66666667) rotate(0deg);
    transform: scale(.66666667) rotate(0deg);
    -ms-filter: "progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand', M11=1, M12=0, M21=0, M22=1)";
    zoom:1;color: #999;
    position: absolute;
    right: 15px
}

</style>
