<template>
  <div :class="[prefixCls + '-searchbox-cont']">
    <trigger trigger="focus" effect="slide" placement="bottomLeft" popup-cls="searchbox">
      <div slot="trigger">
        <input type="text"
               :class="inputClassObj"
               :placeholder="placeholder"
               v-model="value"
               @focus="focusInput"
               debounce="500" />
        <icon type="clear" v-show="value" color="#bfbfbf" size="14" @click="clearInput"></icon>
        <icon type="search" :color="iconColor" size="14"></icon>
      </div>
      <div slot="popup" v-if="searchList && searchList.length > 0"
           :class="[prefixCls + '-searchbox-list-containter']">
        <ul :class="[prefixCls + '-searchbox-list-dropdown']">
          <li v-for="item in searchList | filterBy filterValue">
            <a href="javascript:;" @click="checkItem($index, item[textField])" :title="item[textField]">{{item[textField]}}</a>
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
      searchList: null,
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
      value (newVal, oldVal) {
        newVal = newVal.replace(/^\s+|\s+$/g, '')
        oldVal = oldVal.replace(/^\s+|\s+$/g, '')

        if (newVal !== oldVal) {
          !this.isCheck && this.$dispatch('value-change', newVal, this)

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
        this.value = val
        this.isCheck = true
        this.$dispatch('value-check', this.searchList[index], this)
        this.blurInput()
      },
      clearInput () {
        this.value = ''
      }
    }
  }
</script>
