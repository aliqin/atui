<template>
  <div :class="[prefixCls + '-searchbox']">
    <input type="text"
           :class="inputClassObj"
           :placeholder="placeholder"
           v-model="value"
           @focus="focusInput"
           debounce="500" />
    <icon type="clear" v-show="value" color="#bfbfbf" size="14" @click="clearInput"></icon>
    <icon type="search" :color="iconColor" size="14"></icon>
    <div v-if="searchList && searchList.length > 0"
         :class="[prefixCls + '-searchbox-list-containter']">
      <ul v-show="showPop"
          :class="[prefixCls + '-searchbox-list-dropdown']"
          transition="slide">
        <li v-for="item in searchList | filterBy value">
          <a href="javascript:;" @click="checkItem($index, item[textField])" :title="item[textField]">{{item[textField]}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/babel">
  import Icon from '../Icon/'
  import EventListener from '../utils/EventListener'

  export default {
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
      },
      prefixCls: {
        type: String,
        default: 'atui'
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
      }
    },
    components: {
      Icon
    },
    ready () {
      let self = this
      const el = this.$el

      this._closeEvent = EventListener.listen(window, 'click', (e) => {
        if (!el.contains(e.target)) {
          self.blurInput()
        }
      })
    },
    beforeDestroy () {
      if (this._closeEvent) this._closeEvent.remove()
    },
    watch: {
      value (val) {
        !this.isCheck && this.$dispatch('searchbox-value-change', val, this)

        this.isCheck = false
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
        this.$dispatch('searchbox-value-check', this.searchList[index], this)
        this.blurInput()
      },
      clearInput () {
        this.value = ''
      }
    }
  }
</script>
