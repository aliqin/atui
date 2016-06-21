<template>
  <div class="search-box">
    <input type="text" class="input" :class="{large:large,small:small}" :placeholder="placeholder" v-model="value" @focus="focusInput" debounce="500" />
    <icon type="clear" v-show="value" color="#bfbfbf" size="14" @click="clearInput"></icon>
    <icon type="search" :color="iconColor" size="14"></icon>
    <div v-if="searchList && searchList.length > 0" class="search-list-containter">
      <ul class="list-dropdown" v-show="showPop" transition="slide">
        <li v-for="item in searchList | filterBy value">
          <a href="javascript:;" @click="checkItem($index, item[textField])" :title="item[textField]">{{item[textField]}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
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
      }
    },
    data () {
      return {
        iconColor: '#BFBFBF',
        showPop: false
      }
    },
    computed: {
      filterLables () {
        let str = this.filterField.map((item) => {
          return '' + item
        })
        return str.join(' ')
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
    methods: {
      focusInput () {
        this.iconColor = '#00A0FF'
        if (this.searchList && this.searchList.length > 0) {
          this.showPop = true
        } else {
          this.showPop = false
        }
      },
      blurInput () {
        this.iconColor = '#BFBFBF'
        this.showPop = false
      },
      checkItem (index, val) {
        this.value = val
        this.$dispatch('searchbox-value-check', this.searchList[index], this)
        this.blurInput()
      },
      clearInput () {
        this.value = ''
      }
    }
  }
</script>
