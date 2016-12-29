<template>
  <div :class="[prefixCls + '-searchbox-cont']">
    <trigger style="width:100%"
    trigger="focus"
    effect="slide"
    placement="bottomLeft"
    popup-cls="searchbox"
    popup-use-trigger-width>
      <div slot="trigger">
        <input type="text"
               :class="inputClassObj"
               :placeholder="placeholder"
               v-model="searchValue"
               @focus="focusInput" />
        <icon type="clear" v-show="searchValue" color="#bfbfbf" size="14" @click="clearInput"></icon>
        <icon type="search" :color="iconColor" size="14"></icon>
      </div>
      <div slot="popup" ref="popup" v-if="searchList && searchList.length > 0"
           :class="[prefixCls + '-searchbox-list-containter']">
        <ul :class="[prefixCls + '-searchbox-list-dropdown']">
          <li v-for="(item, index) in searchList" v-if="~item[textField].indexOf(searchValue)">
            <a href="javascript:;" @click="checkItem(index, item[textField])" :title="item[textField]">{{item[textField]}}</a>
          </li>
        </ul>
      </div>
    </trigger>
  </div>
</template> 
<script type="text/babel">
  import GlobalMixin from '../_utils/GlobalMixin'
  import Icon from '../Icon/'
  import Trigger from '../Trigger'

  export default {
    name: 'Searchbox',
    mixins: [
      GlobalMixin
    ],

    components: {
      Trigger, Icon
    },

    props: {
      placeholder: {
        type: String,
        default: ''
      },
      notFoundContent: {
        type: String,
        default: ''
      },
      value: {
        type: String,
        default: ''
      },
      searchList: Array,
      large: Boolean,
      small: Boolean,
      textField: {
        type: String,
        default: 'name'
      },
      filterField: {
        type: Array
      }
    },

    data () {
      return {
        searchValue: this.value,
        iconColor: '#BFBFBF',
        showPop: false,
        isCheck: false
      }
    },

    computed: {
      filterLables () {
        let str = this.filterField.map((item) => {
          return '' + item
        })
        return str.join(' ')
      },

      inputClassObj () {
        let { prefixCls, large, small } = this
        let classObj = {}

        classObj[prefixCls + '-searchbox-input'] = true
        classObj[prefixCls + '-input'] = true
        classObj[prefixCls + '-input-large'] = large
        classObj[prefixCls + '-input-small'] = small

        return classObj
      },

      filterValue () {
        return this.value.replace(/^\s+|\s+$/g, '')
      }
    },

    beforeDestroy () {
      if (this._closeEvent) this._closeEvent.remove()
    },

    watch: {
      searchValue (newVal, oldVal) {
        newVal = newVal.replace(/^\s+|\s+$/g, '')
        oldVal = oldVal.replace(/^\s+|\s+$/g, '')

        if (newVal !== oldVal) {
          !this.isCheck && this.$emit('value-change', newVal, this)

          this.isCheck = false
        }
      }
    },

    methods: {
      focusInput () {
        this.iconColor = '#00A0FF'
        this.showPop = true
      },
      blurInput () {
        this.iconColor = '#BFBFBF'
        this.showPop = false
      },
      checkItem (index, val) {
        this.searchValue = val
        this.isCheck = true
        this.$emit('value-check', this.searchList[index], this)
        this.blurInput()
      },
      clearInput () {
        this.searchValue = ''
      }
    }
  }
</script>
