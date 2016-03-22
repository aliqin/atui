<template>
    <div class="pagination" v-if="totalPage > 1">
        <ul class="pagination-item">
            <li v-for="page in pageRange" @click="pageClick(page.num)" :class={'current':page.className}>
                {{page.text}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        id: {
            type: String
        },
        totalPage : Number,
        currPage : Number
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
    methods : {
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
            }
            //第一页
            if (start >= 2){
                this.pageRange.push({num:1, text:1})
            }
            //省略好
            if (start > 2){
                this.pageRange.push({text:'...'})
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
                this.pageRange.push({text:'...'})
            }
            //最后一页
            if (end <= totalPage-1){
                this.pageRange.push({num:totalPage, text:totalPage})
            }
            //下一页
            if (currPage != totalPage){
                this.pageRange.push({num:currPage+1, text:'>'})
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
        }
    },
    ready () {
        this.getPageRange()
    }
}
</script>
