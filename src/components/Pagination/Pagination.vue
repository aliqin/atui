<template>
  <div class="pagination">
  <template v-if="totalPage > 1">
    <options :total="total" :default-size="pageSize" :show-size-changer="showSizeChanger"></options>
    <jumper
        :quick-go="showJumper ? _handleChange.bind(this) : null"
        :curr-page="currPage"
        :total-page="totalPage"
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
    total: Number,
    currPage: {
      type: Number,
      default: 1
    },
    showJumper: Boolean,
    showSizeChanger: Boolean,
    simple: {
      type: Boolean
    },
    mini: {
      type: Boolean
    }
  },
  data () {
    return {
      pageRange: [],
      totalPage: Math.ceil(this.total / this.pageSize),
      prevShow: 1,
      nextShow: 1
    }
  },
  watch: {
    total () {
      this.getPageRange()
    },
    pageSize () {
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
    jumper,
    pager,
    Options
  },
  methods: {
    _changePageSize (value) {

    },
    getPageRange () {
      let start = 0
      let end = 0
      let me = this
      let showLen = me.prevShow + me.nextShow + 1
      let totalPage = me.totalPage = Math.ceil(me.total / me.pageSize)

      let currPage = me.currPage

      if (totalPage <= 1) {
        start = end = 1
      } else if (me.totalPage <= showLen) {
        start = 1
        end = totalPage
      } else {
        if (currPage <= me.prevShow + 1) {
          start = 1
          end = showLen
        } else if (currPage >= totalPage - me.nextShow) {
          end = totalPage
          start = totalPage - showLen + 1
        } else {
          start = currPage - me.prevShow
          end = currPage + me.nextShow
        }
      }

      me.pageRange = []

      if (me.simple) {
        // 上一页
        if (currPage !== 1) {
          me.pageRange.push({num: currPage - 1, text: '<', className: 'prev'})
        } else {
          me.pageRange.push({className: 'disabled', icon: 'prev'})
        }

        me.pageRange.push({num: me.currPage, text: me.currPage, className: 'current'})
        me.pageRange.push({text: '/', className: 'slash'})
        me.pageRange.push({text: totalPage})

        // 下一页
        if (currPage !== totalPage) {
          me.pageRange.push({num: currPage + 1, text: '>', className: 'next'})
        } else {
          me.pageRange.push({className: 'disabled', icon: 'next'})
        }
      } else {
        // 上一页
        if (currPage !== 1) {
          me.pageRange.push({num: currPage - 1, text: '<', className: 'prev'})
        } else {
          me.pageRange.push({className: 'disabled', icon: 'prev'})
        }
        // 第一页
        if (start >= 2) {
          me.pageRange.push({num: 1, text: 1})
        }
        // 省略号
        if (start > 2) {
          me.pageRange.push({text: '...', className: 'ellipsis'})
        }
        // 显示的页码列表
        for (let i = start; i <= end; i++) {
          me.pageRange.push({
            num: i,
            text: i,
            className: (i === currPage) ? 'current' : ''
          })
        }
        // 省略号
        if (end < totalPage - 1) {
          me.pageRange.push({text: '...', className: 'ellipsis'})
        }
        // 最后一页
        if (end <= totalPage - 1) {
          me.pageRange.push({num: totalPage, text: totalPage})
        }
        // 下一页
        if (currPage !== totalPage) {
          me.pageRange.push({num: currPage + 1, text: '>', className: 'next'})
        } else {
          me.pageRange.push({className: 'disabled', icon: 'next'})
        }
      }
    },
    pageClick (i) {
      if (!i) {
        return false
      }
      if (i === this.currPage) {
        return false
      }

      this.currPage = i
      this.getPageRange()
    },
    onChange (pageNum) {
      this.$dispatch('pagination-page-change', pageNum, this.id)
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
