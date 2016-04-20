<template>
  <div class="pagination">
  <template v-if="totalPage > 1">
    <options :total="total" :default-size="defaultSize" :show-size-changer="showSizeChanger"></options>
    <jumper
        :quick-go="showJumper ? _handleChange.bind(this) : null",
        :curr-page="currPage",
        :total-page="totalPage",
        :mini="mini"
    ></jumper>
    <pager :page-range="pageRange" :simple="simple"  :mini="mini" :page-click="pageClick"></pager>
  </template>
  </div>
</template>
<script>
import jumper from './Jumper.vue'
import pager from './Pager.vue'
import Options from './Options.vue'
export default {
  props: {
    id: {
      type: String
    },
    pageSize: {
      type: Number,
      default: 10
    },
    totalPage: Number,
    total: Number,
    currPage : {
      type: Number
    },
    showJumper: Boolean,
    showSizeChanger: Boolean,
    simple: {
      type: Boolean,
      default: false
    },
    mini: {
      type: Boolean,
      default: false
    },
    defaultSize: {
      type: Number,
      default: 10
    }
  },
  data () {
    return {
      pageRange : [],
      prevShow : 1,
      nextShow : 1
    }
  },
  watch : {
    totalPage () {
        this.getPageRange()
    },

    currPage () {
        this.getPageRange()
        this.onChange(this.currPage)
    },
    prevShow () {
        this.getPageRange()
    },
    nextShow () {
        this.getPageRange()
    }
  },
  components: {
    jumper,pager,Options
  },
  methods : {
    _changePageSize(value) {

    },
    getPageRange () {
        var start = 0
        var end = 0
        var showLen = this.prevShow + this.nextShow + 1
        var totalPage = Math.max(this.totalPage, 1)
        var currPage = this.currPage

        if (totalPage <= 1){
            start = end = 1
        }
        else if (totalPage <= showLen){
            start = 1
            end = totalPage
        }
        else {
            if (currPage <= this.prevShow + 1){
                start = 1
                end = showLen
            }
            else if (currPage >= totalPage - this.nextShow){
                end = totalPage
                start = totalPage - showLen + 1
            }
            else {
                start = currPage - this.prevShow
                end = currPage + this.nextShow
            }
        }

        this.pageRange = []

        if(this.simple) {
            //上一页
            if (currPage != 1){
                this.pageRange.push({num:currPage-1, text:'<', className: 'prev'})
            } else {
                this.pageRange.push({className:'disabled', icon: 'prev'});
            }

            this.pageRange.push({num:this.currPage, text:this.currPage, className: 'current'})
            this.pageRange.push({text:'/', className: 'slash'})
            this.pageRange.push({text:totalPage})

            // 下一页
            if (currPage != totalPage){
                this.pageRange.push({num:currPage+1, text:'>', className: 'next'})
            } else {
                this.pageRange.push({className:'disabled', icon: 'next'})
            }

        } else {
            //上一页
            if (currPage != 1){
                this.pageRange.push({num:currPage-1, text:'<', className: 'prev'})
            } else {
                this.pageRange.push({className:'disabled', icon: 'prev'});
            }

            //第一页
            if (start >= 2){
                this.pageRange.push({num:1, text:1})
            }
            //省略号
            if (start > 2){
                this.pageRange.push({text:'...', className:'ellipsis'})
            }
            //显示的页码列表
            for (var i=start; i<=end; i++){
                this.pageRange.push({
                    num : i,
                    text : i,
                    className : (i==currPage) ? 'current' : ''
                })
            }
            //省略号
            if (end < totalPage-1){
                this.pageRange.push({text:'...', className:'ellipsis'})
            }
            //最后一页
            if (end <= totalPage-1){
                this.pageRange.push({num:totalPage, text:totalPage})
            }
            //下一页
            if (currPage != totalPage){
                this.pageRange.push({num:currPage+1, text:'>', className: 'next'})
            } else {
                this.pageRange.push({className:'disabled', icon: 'next'})
            }
        }
    },
    pageClick (i){
        if (!i){
            return false
        }
        if (i == this.currPage){
            return false
        }

        this.currPage = i
        this.getPageRange()
    },
    onChange (pageNum) {
        this.$dispatch('pagination-page-change', pageNum, this.id);
    },
    _isValid (page) {
        return typeof page === 'number' && page >= 1 && page !== this.currPage
    },
    _handleChange (page) {
      let _page = page

      if (this._isValid(_page)) {
        if (_page > this.totalPage) {
          _page = this.totalPage
        }

        this.currPage = page
        this._current = page
        this.onChange(_page)

        return _page
      }

      return this.currPage
    }
  },
  ready () {
      this.getPageRange()
  }
}
</script>
