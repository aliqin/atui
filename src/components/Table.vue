<template>
<table class="vue-table">
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

<style lang="less">
.vue-table {
  width:100%;
  border-collapse: collapse;

  thead {
    background-color: #F7F7F7;
    border-bottom: 1px solid #D1D1D1;

    tr:hover {
      background-color: #F7F7F7;
    }

    .multi-col {
      position: relative;
      &:hover {
        cursor: pointer;

        ul {
          display: block;
        }
      }

      ul {
        display: none;
        position: absolute;
        width: 100%;
        z-index: 10;

        li {
            background-color: #fff;
        }

        a {
            display: block;
            height: 32px;
            padding: 7px 8px;
            text-decoration: none;
            color: #333;
            font-size: 12px;
            line-height: 20px;

        &:hover {
             cursor: pointer;
             background-color: #f5f5f5;
         }
        }
      }
    }
  }

  tbody,tfoot {
    background-color: #FFF;
  }

  th,td {
    //.text-overflow;
    text-align:left;
    vertical-align: middle;
  }

  th {
    // .user-select(none);

    position:relative;
    padding:12px 15px;
    color:#333;
  }

  tr:hover {
    background-color: #FEFEFE;
  }

  tr.none {
    td {
      text-align: center;
    }

    &:hover {
      background-color: #FFF;
    }
  }

  tfoot {
    tr:hover {
      background-color: inherit;
    }
  }

  td {
    //.text-overflow;

    position: relative;
    padding: 15px;
    border-bottom: 1px solid #F0F0F0;
    color:#555;
  }

  a.btn-op {
      margin-right: 10px;
      color: #0083cd;
      text-decoration: none;
      cursor: pointer;
      font-size: 12px;
      white-space: nowrap;

     &:active {
         color: #0083cd;;
     }
  }

  .filter,
  .sort {
    cursor: pointer;
    overflow: inherit;

    img {
      margin-left:3px;
      vertical-align: middle;
    }
  }

  .sort {
    .icon-down,
    .icon-up {
      display: none;
    }

    &.down {
      .icon-down {
        display: inline-block;
      }
      .icon-up {
        display: none;
      }
    }

    &.up {
      .icon-down {
        display: none;
      }
      .icon-up {
        display: inline-block;
      }
    }
  }

  .filter-layer {
    display: none;
    position: absolute;
    left:0;
    top:37px;
    box-shadow: 2px 2px 2px #EEE;
    border: 1px solid #D1D1D1;
    z-index:1;
    background-color: #FFF;

    span {
      //.text-overflow;

      display: block;
      width:100%;
      text-align: left;
      padding:5px 10px;

      &:hover {
        background-color: #FFF9F3;
      }

      &.on {
        background-color: #FF6200;
        color:#FFF;
      }
    }
  }

  .operator {
    margin-right:5px;
  }

  .pagination {
    float:right;
    margin-top:0;
  }
}
.vue-dataTable-loading {
  position: absolute;
  background:url(//img.alicdn.com/tps/i1/T1cKm3XkRpXXXXXXXX-48-48.gif) no-repeat center center;
}

</style>

<script type="text/babel">
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
