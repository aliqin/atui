<template>
  <div class="search-box">
    <input type="text" class="input" :class="classObj" placeholder="{{placeholder}}" v-model="value" @focus="focusInput" debounce="500" />
    <icon type="search" :color="iconColor" size="14"></icon>
    <div v-if="searchList.length > 0" class="search-list-containter">
      <ul class="list-dropdown" v-show="showPop">
        <li v-for="item in searchList | filterBy value">
          <a href="javascript:;" @click="checkItem($index, item[textField])" title="{{item[textField]}}">{{item[textField]}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Icon from '../Icon/';
  import EventListener from 'src/components/utils/EventListener'

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
      large: null,
      small: null,
      textField: {
        type: String,
        default: 'name'
      },
      filterField: {
        type: Array,
        default: []
      }
    },
    data () {
      return {
        iconColor: '#BFBFBF',
        showPop: false
      }
    },
    computed: {
      classObj () {
        return {
          'large': typeof(this.large) !== "undefined",
          'small': typeof(this.small) !== "undefined",
        }
      },
      filterLables () {
        let str = this.filterField.map(function(item) {
          return "'"+item+"'";
        });
        return str.join(" ");
      }
    },
    components: {
      Icon
    },
    ready () {
      let self = this;
      const el = this.$el;

      this._closeEvent = EventListener.listen(window, 'click', (e)=> {
        if (!el.contains(e.target)) {
          self.blurInput();
        }
      })
    },
    beforeDestroy() {
      if (this._closeEvent) this._closeEvent.remove();
    },
    methods: {
      focusInput () {
        this.iconColor = '#00A0FF';
        if(this.searchList.length > 0) {
          this.showPop = true;
        } else {
          this.showPop = false;
        }
      },
      blurInput () {
        this.iconColor = '#BFBFBF';
        this.showPop = false;
      },
      checkItem (index, val) {
        this.value = val;
        this.$dispatch('searchbox-value-check', this.searchList[index], this);
        this.blurInput();
      }
    }
  }
</script>
<style lang="less">
  .search-box {
    position: relative;

    input {
      padding-right: 25px;
    }

    .icon-search {
      position: absolute;
      right: 8px;
      top: 6px;
    }

    .search-list-containter {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      padding-top: 4px;
      z-index: 9999;
    }

    .list-dropdown {
      height: 193px;
      padding: 0;
      margin: 0;
      background-color: #fff;
      border: 1px solid #d9d9d9;
      border-radius: 4px;
      box-shadow:  0 1px 4px 0 rgba(0,0,0,0.1);
      overflow-y: scroll;

      li {
        list-style: none;
      }

      a {
        display: block;
        width: 100%;
        height: 32px;
        line-height: 32px;
        color: #666;
        font-size: 12px;
        cursor: pointer;
        word-break: keep-all;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      a {
        padding: 0 10px;
        text-decoration: none;

        &:hover {
          background-color: #F2FAFF;
        }
      }
    }
  }
</style>
