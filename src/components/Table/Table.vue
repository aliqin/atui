<template>
<table class="table">
  <thead>
    <tr>
      <th v-if="rowSelection">
          <input type="checkbox" @change="onCheckAll" />
      </th>
      <th v-for="column in columns" :class="{'multi-col':column.multiCols}" :width="column.width">
          {{column['title']}}
        <template v-if="column.filters">
          <dropdown data-toggle="dropdown" :open="isOpen">
            <div data-toggle="dropdown">
              <icon type="filter"></icon>
            </div>
            <ul name="dropdown-menu" class="dropdown-menu">
              <li v-for="col in column.filters"><a href="javascript:void(0);" @click="onFilter(col.value, column)">{{col.text}}</a></li>
            </ul>
          </dropdown>
        </template>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr v-show="!dataSource.length"><td colspan="10000" style="text-align: center;" class="vue-table-empty">没有任何数据</td></tr>
    <tr v-for="
        (rowIndex, record) in dataSource
        | orderBy sortKey sortOrders[sortKey]">
        <td v-if="rowSelection">
            <input type="checkbox" v-model="checkedKeys" :value="record[rowKey]"/>
        </td>
        <td v-for="column in columns" v-bind="{'data-key': record[rowKey] ,'data-column':column.dataIndex,'data-value':record[column.dataIndex]}">
            <template v-if="column.render">
                {{{column.render(record, rowIndex, this)}}}
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
    rowSelection: {
      type:Object,
      default:{
        getCheckboxProps(record) {
          return {};
        },
        onChange() {},
        onSelect() {},
        onSelectAll() {}
      }
    },
    rowKey: String,
    onChange:Function
  },
  components: {
    Icon,
    Dropdown
  },
  data() {
    let sortOrders = {}
    this.columns.forEach((key) => sortOrders[key] = 1);
    this.compileTbody();
    return {
      sortKey: '',
      isOpen: false,
      sortOrders: sortOrders,
      checkedKeys: [],
      checkedDataList: [],
      scope: null
    }
  },
  ready () {
    // this.originData = this.dataSource
  },
  watch: {
    checkedKeys(checkedKeys) {
      var me = this;
      // 有时候需要多选的时候传两个字段，所以再保存一份选中的数据列集合
      me.checkedDataList = [];
      me.dataSource.forEach((item, i) => {
        if (checkedKeys.indexOf(item[me.rowKey]) >= 0) {
          me.checkedDataList.push(item);
        }
      })
    },
    dataSource: {
      handler() {
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
      me.checkedKeys = []
      me.checkedDataList = []
      const checked = event.target.checked
      if(checked) {
        me.dataSource.forEach((record,i) => {
          if(record[me.rowKey]) {
              me.checkedKeys.push(record[me.rowKey]);
              me.checkedDataList.push(record);
          }
        })
      }
      if( me.rowSelection.onSelectAll ) {
        me.rowSelection.onSelectAll.call(null,checked,me.checkedDataList)
      }
    },
    onSelect(col, dataId) {
      // this.$dispatch('table-selectCol', col, dataId);
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
  },
  compiled() {

  }
}
</script>
