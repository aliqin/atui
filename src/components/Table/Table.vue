<template>
<table class="table">
  <thead>
    <tr>
      <th v-if="dataSource.length && rowSelection">
          <input type="checkbox" @change.stop="onCheckAll"/>
      </th>
      <th v-for="column in columns" :class="{'multi-col':column.multiCols}" :width="column.width">
          {{column['title']}}
          <dropdown v-if="dataSource.length && column.filters" data-toggle="dropdown" :open.asyc="filterOpened">
            <div data-toggle="dropdown">
              <icon type="filter"></icon>
            </div>
            <ul name="dropdown-menu" class="dropdown-menu">
              <li v-for="col in column.filters"><a href="javascript:void(0);" @click="onFilter(col.value, column)">{{col.text}}</a></li>
            </ul>
          </dropdown>
          <div v-if="dataSource.length && column.sorter" class="table-sorter">
            <icon type="up" @click="sortAction(column,$index,'ascend')" size="10" :class="{active:sorderOrder[$index] == 'ascend'}"></icon>
            <icon type="down" @click="sortAction(column,$index,'descend')" size="10" :class="{active:sorderOrder[$index] == 'descend'}"></icon>
          </div>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr v-show="!dataSource.length"><td colspan="10000" style="text-align: center;" class="vue-table-empty">没有任何数据</td></tr>
    <tr v-for="(rowIndex, record) in dataSource">
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
</template>

<script type="text/babel">
import Icon from '../Icon/'
import Dropdown from '../Dropdown/'
export default {
  props: {
    pagination:Object,
    dataSource: Array,
    columns: Array,
    rowSelection: Object,
    rowKey: String,
    onChange:Function
  },
  components: {
    Icon,
    Dropdown
  },
  data() {
    this.compileTbody()
    return {
      sortKey: '',
      filterOpened: false,
      sorderOrder:[],
      checkedRows: [],
      scope: null
    }
  },
  computed: {
    checkedValues() {
      const me = this
      let checkedKeys = me.checkedRows.map((record) => {
        return record[me.rowKey]
      })
      if(me.rowSelection.onChange) {
        me.rowSelection.onChange(me.checkedRows,checkedKeys)
      }
      return checkedKeys
    }
  },
  watch: {
    dataSource: {
      handler(item) {
        this.compileTbody()
      },
      deep: true
    }
  },
  methods: {
    compileTbody() {
      let me = this;
      //  因为table里有html和事件绑定，所以需要重新调用$compile，而马上调用时可能页面还没有重新渲染完成
      this.$nextTick(() => {
        // console.log(me)
        // me.scope = me.scope || me.$parent;
        me._context.$compile(me.$el.getElementsByTagName('tbody')[0]);
      });
    },
    sortAction(column,index,order) {
      if(typeof column.sorter === 'Function') {
        // TODO:客户端排序
      }
      this.sorderOrder[index] = order
      this.sorderOrder = Object.assign([],this.sorderOrder)
      this.$dispatch('change', this.pagination, this.filters, {
        field:column.dataIndex,
        order:order
      })
    },
    onCheckAll() {
      let me = this
      const changeRows = []
      const checked = event.target.checked
      if(checked) {
        me.dataSource.forEach((record,i) => {
          if(me.checkedRows.indexOf(record) < 0) {
            me.checkedRows.push(record)
            changeRows.push(record)
          }
        })
      } else {
        me.dataSource.forEach((record,i) => {
          if(me.checkedRows.indexOf(record) >= 0) {
            changeRows.push(record)
          }
        })
        me.checkedValues = []
        me.checkedRows = []
      }
      if( me.rowSelection.onSelectAll ) {
        me.rowSelection.onSelectAll.call(null,checked,me.checkedRows,changeRows)
      }
    },
    onCheckOne(event,record) {
      const me = this
      const checked = event.target.checked
      if(checked) {
        me.checkedRows.push(record)
      } else {
        me.checkedRows = me.checkedRows.filter((item) => {
          return record[me.rowKey]!= item[me.rowKey]
        })
      }
      if(me.rowSelection.onSelect) {
        me.rowSelection.onSelect.call(null,record,checked,me.checkedRows)
      }
    },
    onFilter(value, column) {
      this.filterOpened = false
      // let filterSource = this.dataSource.filter((record) => {
      //   return column.onFilter.call(this, value, record)
      // })
      // column.onFilter.call(this, value, record);
      this.checkedRows = []
      let filters = {}
      filters[column.dataIndex] = [value]
      this.$dispatch('change', this.pagination, filters, column.sorter)
    }
  }
}
</script>
