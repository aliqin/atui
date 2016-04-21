<template>
<div :class="{'table-container':true,loading:loading}">
  <spin size="sm" v-if="loading"></spin>
  <div class="table-body">
    <table class="table">
      <thead class="table-thead">
        <tr>
          <th v-if="rowSelection">
              <input v-if="dataSource.length" type="checkbox" v-bind="{checked:isCheckedAll}" @change="onCheckAll"/>
          </th>
          <th v-for="column in columns" :class="{'multi-col':column.multiCols}" :width="column.width">
              {{column['title']}}
              <dropdown v-if="column.filters" data-toggle="dropdown" :open="filterOpened">
                <div data-toggle="dropdown">
                  <icon type="filter" size="12"></icon>
                </div>
                <ul name="dropdown-menu" class="dropdown-menu">
                  <li v-for="col in column.filters"><a href="javascript:void(0);" @click="onFilter(col.value, column)">{{col.text}}</a></li>
                </ul>
              </dropdown>
              <div v-if="dataSource.length && column.sorter" class="table-sorter">
                <icon type="up" size="10" @click="sortAction(column,$index,'ascend')" size="10" :class="{active:sorderOrder[$index] == 'ascend'}"></icon>
                <icon type="down" size="10" @click="sortAction(column,$index,'descend')" size="10" :class="{active:sorderOrder[$index] == 'descend'}"></icon>
              </div>
          </th>
        </tr>
      </thead>
      <tbody class="table-tbody">
        <tr v-show="!dataSource.length"><td colspan="10000" style="text-align: center;" class="vue-table-empty">{{noDataTip}}</td></tr>
        <tr v-for="(rowIndex, record) in dataSource" :track-by="$index">
            <td v-if="rowSelection">
                 <input type="checkbox" v-model="checkedValues" :value="record[rowKey]" @change.stop="onCheckOne($event,record)" v-bind="rowSelection.getCheckboxProps(record)"/>
            </td>
            <td v-for="column in columns">
                <template v-if="column.render">
                    {{{column.render(record[column.dataIndex],record,rowIndex)}}}
                </template>
                <template v-else>
                    {{record[column.dataIndex]}}
                </template>
            </td>
        </tr>
      </tbody>
    </table>
  </div>

</div>
</template>

<script type="text/babel">
import Icon from '../Icon/'
import Dropdown from '../Dropdown/'
import Spin from '../Spin/'
export default {
  props: {
    pagination:Object,
    dataSource: Array,
    noDataTip:{
      type:String,
      default:'没有任何数据'
    },
    columns: Array,
    rowSelection: Object,
    rowKey: String,
    loading:Boolean
  },
  components: {
    Icon,
    Dropdown,
    Spin
  },
  data() {
    this.compileTbody()
    return {
      isCheckedAll: false,
      sorderOrder:[],
      checkedRows: [],
      filterOpened:false,
      filters:null,
      sorter:null
    }
  },
  computed: {
    checkedValues() {
      const me = this
      let checkedKeys = me.checkedRows.map((record) => {
        return record[me.rowKey]
      })
      if(me.rowSelection.onChange) {
        me.rowSelection.onChange(checkedKeys,me.checkedRows)
      }
      return checkedKeys
    },
    checkebleRows() {
      // 过滤出非禁用的项供选择使用
      return this.dataSource.filter((record) => {
        if(this.rowSelection) {
          return !this.rowSelection.getCheckboxProps || !this.rowSelection.getCheckboxProps(record).disabled
        }
      })
    },
    // isCheckedAll() {
    //   let me = this
    //   me.checkedRows.length === me.checkebleRows.length
    // }
  },
  watch: {
    dataSource: {
      handler(item) {
        // this.checkedRows = []
        // this.checkedValues = []
        // this.isCheckedAll = false
        let me = this
        me.compileTbody()
        if(me.checkebleRows) {
          me.isCheckedAll = me.checkedRows.length === me.checkebleRows.length
        }
      }
    }
  },
  ready(){

  },
  methods: {
    compileTbody() {
      let me = this;
      //  因为table里有html和事件绑定，所以需要重新调用$compile，而马上调用时可能页面还没有重新渲染完成
      this.$nextTick(() => {
        // console.log(me)
        // me.scope = me.scope || me.$parent
        me._context.$compile(me.$el.getElementsByTagName('table')[0])
      });
    },
    sortAction(column,index,order) {
      if(typeof column.sorter === 'Function') {
        // TODO:客户端排序
      }
      this.sorderOrder[index] = order
      this.sorderOrder = Object.assign([],this.sorderOrder)
      this.$dispatch('table-change', this.pagination, this.filters, {
        field:column.dataIndex,
        order:order
      })
    },
    // 点击全选框触发
    onCheckAll() {
      let me = this
      const changeRows = []
      const checked = event.target.checked
      if(checked) {
        me.checkebleRows.forEach((record,i) => {
          if(me.checkedRows.indexOf(record) < 0) {
            me.checkedRows.push(record)
            changeRows.push(record)
          }
        })
        // 不能使用计算属性，因为会与点击全选的行为相冲突
        me.isCheckedAll = true
      } else {
        me.checkebleRows.forEach((record,i) => {
          if(me.checkedRows.indexOf(record) >= 0) {
            changeRows.push(record)
          }
        })
        me.checkedRows = []
      }
      if( me.rowSelection.onSelectAll ) {
        me.rowSelection.onSelectAll(checked,me.checkedRows,changeRows)
      }
      me.$dispatch('table-change', this.pagination, this.filters, this.sorter)
    },
    // 选中某一个单选框时触发
    onCheckOne(event,record) {
      const me = this
      const checked = event.target.checked
      if(checked) {
        if(me.checkedRows.indexOf(record) === -1) {
          me.checkedRows.push(record)
        }
      } else {
        me.checkedRows = me.checkedRows.filter((item) => {
          return record[me.rowKey]!= item[me.rowKey]
        })
      }
      if(me.rowSelection.onSelect) {
        me.rowSelection.onSelect(record,checked,me.checkedRows)
      }
      me.isCheckedAll = me.checkedRows.length === me.checkebleRows.length
    },
    // filter时触发
    onFilter(value, column) {
      let me = this
      me.filterOpened = true
      setTimeout(()=>{
        me.filterOpened = false
      },100)

      me.checkedRows = []
      me.isCheckedAll = false
      me.filters = {}
      me.filters[column.dataIndex] = [value]
      me.$dispatch('table-change', this.pagination, me.filters, column.sorter)
    }
  }
}
</script>
