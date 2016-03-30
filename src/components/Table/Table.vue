<template>
<table class="table">
    <thead>
        <tr>
            <th v-if="rowSelection">
                <input type="checkbox" @change="onCheckAll" :disabled="isCheckAllDisabled"/>
            </th>
            <th v-for="key in columns" :class="{'multi-col':key.multiCols}" :width="key.width">
                {{key['title']}}
                <template v-if="key.filters">
                    <dropdown data-toggle="dropdown" :open="isOpen">
                        <div data-toggle="dropdown">
                        <icon type="filter"></icon>
                        </div>
                        <ul name="dropdown-menu" class="dropdown-menu">
                            <li v-for="col in key.filters"><a href="javascript:void(0);" @click="onFilter(col.value, key)">{{col.text}}</a></li>
                        </ul>
                    </dropdown>
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
                <template v-if="internalRowSelectable(entry)">
                    <input type="checkbox" v-model="checkedKeys" :value="entry[rowKey]"  />
                </template>
                <template v-else>
                    <input type="checkbox" v-model="checkedKeys" :value="entry[rowKey]" disabled />
                </template>
            </td>
            <td v-for="key in columns" v-bind="{'data-key': entry[rowKey] ,'data-column':key.dataIndex,'data-value':entry[key.dataIndex]}">
                <template v-if="key.as == 'text'">
                    <template v-if="key.render">
                        {{key.render(entry, rowIndex, this)}}
                    </template>
                    <template v-else>
                        <template v-if="key.filter">
                            {{{entry[key.dataIndex] | g_filter key.filter}}}
                        </template>
                        <template v-else>
                            {{entry[key.dataIndex]}}
                        </template>
                    </template>
                </template>
                <template v-else>
                    <template v-if="key.render">
                        {{{key.render(entry, rowIndex, this)}}}
                    </template>
                    <template v-else>
                        <template v-if="key.filter">
                            {{{entry[key.dataIndex] | g_filter key.filter}}}
                        </template>
                        <template v-else>
                            {{entry[key.dataIndex]}}
                        </template>
                    </template>
                </template>
            </td>
        </tr>
    </tbody>
</table>
</template>

<script type="text/babel">
import Icon from '../Icon/'
import Dropdown from '../Dropdown/'
export default{
    props: {
        dataSrouce: Array,
        columns: Array,
        filterKey: String,
        rowSelection:Boolean,
        isRowSelectable: {
            type: Function,
            default: function(rowData) {
                return true;
            }
        },
        rowKey:String
    },
    components:{
        Icon,
        Dropdown
    },
    data () {
        let sortOrders = {}
        this.columns.forEach( (key) => sortOrders[key] = 1);
        this.compileTbody();
        return {
            sortKey: '',
            isOpen:false,
            sortOrders: sortOrders,
            data:this.dataSrouce,
            checkedKeys:[],
            checkedDataList:[],
            internalRowSelectable: function(rowData) {
                this.isCheckAllDisabled = true;
                if (this.isRowSelectable(rowData)) {
                    this.isCheckAllDisabled = false;
                    return true;
                } else {
                    return false;
                }
            },
            isCheckAllDisabled: {
                type: Boolean,
                default: true
            },
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
                    if(self.isRowSelectable(key)) {
                        if(key[self.rowKey]) {
                            self.checkedKeys.push(key[self.rowKey]);
                            self.checkedDataList.push(key);
                        }
                    }
                })
            }
        },
        onSelectColumn (col, dataId) {
            // this.$dispatch('table-selectCol', col, dataId);
        },
        onFilter (value,key) {
            if(!key.onFilter) {
                return;
            }
            this.isOpen = false;
            let filterSource = this.data.filter((record) =>{
                return key.onFilter.call(this,value,record);
            })
            this.dataSrouce = filterSource;
        }
    }
}
</script>
