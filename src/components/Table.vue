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

<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
}
.table thead {
  background-color: #F7F7F7;
  border-bottom: 1px solid #D1D1D1;
}
.table thead tr:hover {
  background-color: #F7F7F7;
}
.table thead .multi-col {
  position: relative;
}
.table thead .multi-col:hover {
  cursor: pointer;
}
.table thead .multi-col:hover ul {
  display: block;
}
.table thead .multi-col ul {
  display: none;
  position: absolute;
  width: 100%;
  z-index: 10;
}
.table thead .multi-col ul li {
  background-color: #fff;
}
.table thead .multi-col ul a {
  display: block;
  height: 32px;
  padding: 7px 8px;
  text-decoration: none;
  color: #333;
  font-size: 12px;
  line-height: 20px;
}
.table thead .multi-col ul a:hover {
  cursor: pointer;
  background-color: #f5f5f5;
}
.table tbody,
.table tfoot {
  background-color: #FFF;
}
.table th,
.table td {
  text-align: left;
  vertical-align: middle;
}
.table th {
  position: relative;
  padding: 12px 15px;
  color: #333;
}
.table tr:hover {
  background-color: #FEFEFE;
}
.table tr.none td {
  text-align: center;
}
.table tr.none:hover {
  background-color: #FFF;
}
.table tfoot tr:hover {
  background-color: inherit;
}
.table td {
  position: relative;
  padding: 15px;
  border-bottom: 1px solid #F0F0F0;
  color: #555;
}
.table a.btn-op {
  margin-right: 10px;
  color: #0083cd;
  text-decoration: none;
  cursor: pointer;
  font-size: 12px;
  white-space: nowrap;
}
.table a.btn-op:active {
  color: #0083cd;
}
.table .filter,
.table .sort {
  cursor: pointer;
  overflow: inherit;
}
.table .filter img,
.table .sort img {
  margin-left: 3px;
  vertical-align: middle;
}
.table .sort .icon-down,
.table .sort .icon-up {
  display: none;
}
.table .sort.down .icon-down {
  display: inline-block;
}
.table .sort.down .icon-up {
  display: none;
}
.table .sort.up .icon-down {
  display: none;
}
.table .sort.up .icon-up {
  display: inline-block;
}
.table .filter-layer {
  display: none;
  position: absolute;
  left: 0;
  top: 37px;
  box-shadow: 2px 2px 2px #EEE;
  border: 1px solid #D1D1D1;
  z-index: 1;
  background-color: #FFF;
}
.table .filter-layer span {
  display: block;
  width: 100%;
  text-align: left;
  padding: 5px 10px;
}
.table .filter-layer span:hover {
  background-color: #FFF9F3;
}
.table .filter-layer span.on {
  background-color: #FF6200;
  color: #FFF;
}
.table .operator {
  margin-right: 5px;
}
.table .pagination {
  float: right;
  margin-top: 0;
}
.vue-dataTable-loading {
  position: absolute;
  background: url(//img.alicdn.com/tps/i1/T1cKm3XkRpXXXXXXXX-48-48.gif) no-repeat center center;
}

</style>

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
