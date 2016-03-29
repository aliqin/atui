<template>
<table class="table">
    <thead>
        <tr>
            <th v-if="rowSelection">
                <input type="checkbox" @change="onCheckAll"/>
            </th>
            <th v-for="key in columns" :class="{'multi-col':key.multiCols}" :width="key.width">
                {{key['title']}}
                <template v-if="key.multiCols">
                    <span class="iconfont">&#xe608;</span>
                    <ul>
                        <li v-for="col in key.multiCols"><a href="javascript:void(0);" @click="onSelectColumn(col.id, col.dataId)">{{col.name}}</a></li>
                    </ul>
                </template>
            </th>

        </tr>
    </thead>
    <tbody>
        <tr v-show="!dataSrouce.length"><td colspan="10000" style="text-align: center;" class="vue-table-empty">没有任何数据</td></tr>
        <tr v-for="
            (rowIndex, entry) in dataSrouce
            | filterBy filterKey
            | orderBy sortKey sortOrders[sortKey]">
            <td v-if="rowSelection">
                <input type="checkbox" v-model="checkedKeys" :value="entry[rowKey]"  />
            </td>
            <td v-for="key in columns" v-bind="{'data-key': entry[rowKey] ,'data-column':key.dataIndex,'data-value':entry[key.dataIndex]}">
                <template v-if="key.render">
                    {{{key.render(entry, rowIndex)}}}
                </template>
                <template v-else>
                {{{entry[key.dataIndex] | g_filter key.filter}}}
                </template>
            </td>
        </tr>
    </tbody>
</table>
</template>

<script>
export default{
    props: {
        dataSrouce: Array,
        columns: Array,
        filterKey: String,
        rowSelection:Boolean,
        rowKey:String
    },
    data () {
        let sortOrders = {}
        this.columns.forEach( (key) => sortOrders[key] = 1);
        this.compileTbody();
        return {
            sortKey: '',
            sortOrders: sortOrders,
            data:this.dataSrouce,
            checkedKeys:[],
            checkedDataList:[],
            scope: null
        }
    },
    watch:{
        checkedKeys (checkedKeys) {
            var self = this;
            // 有时候需要多选的时候传两个字段，所以再保存一份选中的数据列集合
            self.checkedDataList = [];
            self.dataSrouce.forEach((item,i) => {
                if(checkedKeys.indexOf(item[self.rowKey]) >=0 ) {
                    self.checkedDataList.push(item);
                }
            });
        },
        dataSrouce:{
            handler () {
                this.compileTbody();
            },
            deep : true
        }
    },
    methods: {
        compileTbody () {
            let self = this;
            //  因为table里有html和事件绑定，所以需要重新调用$compile，而马上调用时可能页面还没有重新渲染完成
            this.$nextTick(() => {
                self.scope = self.scope || self.$parent;
                self.scope.$compile(self.$el.getElementsByTagName('tbody')[0]);
            });
        },
        sortBy (key) {
            this.sortKey = key
            this.sortOrders[key] = this.sortOrders[key] * -1
        },
        onCheckAll () {
            let self = this;
            self.checkedKeys = [];
            self.checkedDataList = [];
            if(event.target.checked) {
                self.dataSrouce.forEach((key,i) => {
                    if(key[self.rowKey]) {
                        self.checkedKeys.push(key[self.rowKey]);
                        self.checkedDataList.push(key);
                    }
                })
            }
        },
        onSelectColumn (col, dataId) {
            this.$dispatch('table-selectCol', col, dataId);
        }
    }
}
</script>
