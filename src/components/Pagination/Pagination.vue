<template>
    <div class="pagination" v-if="totalPage > 1">
        <div class="pagination-selector">
            <v-select :value.sync="single", :placeholder="placeholder",@change="_selectPageSize">
                <v-option value="10">10 条/页</v-option>
                <v-option value="20">20 条/页</v-option>
                <v-option value="30">30 条/页</v-option>
                <v-option value="40">40 条/页</v-option>
            </v-select>
            <span class="pagination-totalpage">共{{ total }}条数据</span>
        </div>
        <jumper 
            :quick-go="showJumper ? _handleChange.bind(this) : null",
            :curr-page="currPage",
            :total-page="totalPage"
        ></jumper>
        <ul class="pagination-items">
            <li v-for="page in pageRange" @click="pageClick(page.num)" :class="{'current':(page.className==='current'),
            'pagination-item-disabled':(page.className==='disabled'),
            'pagination-item-ellipsis':(page.className==='ellipsis')}" class="pagination-item">
                {{page.text}}
            </li>
        </ul>
        
    </div>
        
</template>
<script>
import jumper from './Jumper.vue'
import vSelect from '../Select.vue'
import vOption from '../Option.vue'

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
        currPage : Number,
        showJumper: Boolean,
        showPageSizeChanger: false
    },
    data () {
        return {
            pageRange : [],
            prevShow : 1,
            nextShow : 1,
            single: "10",
            placeholder: '10 条/页'
        }
    },
    watch : {
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
        jumper,vSelect,vOption
    },
    methods : {

        _changePageSize(value) {
            alert(value)
        },

        getPageRange (){
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

            //上一页
            if (currPage != 1){
                this.pageRange.push({num:currPage-1, text:'<'})
            } else {
                this.pageRange.push({text:'<', className:'disabled'});
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
                this.pageRange.push({num:currPage+1, text:'>'})
            } else {
                this.pageRange.push({text:'>', className:'disabled'})
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
            this.$dispatch('pageChange', pageNum, this.id);
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
