<template>
<table class="table">
  <thead>
    <tr>
      <th v-if="dataSource.length && rowSelection">
          <input type="checkbox" @change.stop="onCheckAll" />
      </th>
      <th v-for="column in columns" :class="{'multi-col':column.multiCols}" :width="column.width">
          {{column['title']}}
          <dropdown v-if="column.filters" data-toggle="dropdown" :open="isOpen">
            <div data-toggle="dropdown">
              <icon type="filter"></icon>
            </div>
            <ul name="dropdown-menu" class="dropdown-menu">
              <li v-for="col in column.filters"><a href="javascript:void(0);" @click="onFilter(col.value, column)">{{col.text}}</a></li>
            </ul>
          </dropdown>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr v-show="!dataSource.length"><td colspan="10000" style="text-align: center;" class="vue-table-empty">没有任何数据</td></tr>
    <tr v-for="
        (rowIndex, record) in dataSource
        | orderBy sortKey sortOrders[sortKey]">
        <td v-if="rowSelection">
            <input type="checkbox" v-model="checkedValues" :value="record[rowKey]" @change.stop="onCheckOne($event,record)" v-bind="rowSelection.getCheckboxProps(record)"/>
        </td>
        <td v-for="column in columns">
            <template v-if="column.render">
                {{{column.render(record[column.dataIndex],record)}}}
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
    let sortOrders = {}
    this.columns.forEach((key) => sortOrders[key] = 1)
    this.compileTbody();
    return {
      sortKey: '',
      isOpen: false,
      sortOrders: sortOrders,
      checkedValues: [],
      checkedRows: [],
      scope: null
    }
  },
  computed: {
    checkedValues() {
      const me = this
      return this.checkedRows.map((record) => {
        return record[me.rowKey]
      })
    },

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
        me.scope = me.scope || me.$parent;
        me.scope.$compile(me.$el.getElementsByTagName('tbody')[0]);
      });
    },
    sortBy(key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
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
      me.rowSelection.onSelect.call(null,record,checked,me.checkedRows)
    },
    onFilter(value, column) {
      this.isOpen = false
      // let filterSource = this.dataSource.filter((record) => {
      //   return column.onFilter.call(this, value, record)
      // })
      // column.onFilter.call(this, value, record);
      let filters = {}
      filters[column.dataIndex] = [value]
      this.$dispatch('change', this.pagination, filters, column.sorter)
    }
  }
}
</script>
