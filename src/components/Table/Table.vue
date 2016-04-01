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
        (rowIndex, entry) in dataSource
        | filterBy filterKey
        | orderBy sortKey sortOrders[sortKey]">
        <td v-if="rowSelection">
            <input type="checkbox" v-model="checkedKeys" :value="entry[rowKey]" disabled />
        </td>
        <td v-for="column in columns" v-bind="{'data-key': entry[rowKey] ,'data-column':column.dataIndex,'data-value':entry[column.dataIndex]}">
          <template v-if="column.as == 'text'">
            <template v-if="column.render">
                {{column.render(entry, rowIndex, this)}}
            </template>
            <template v-else>
                <template v-if="column.filter">
                    {{{entry[column.dataIndex] | g_filter column.filter}}}
                </template>
                <template v-else>
                    {{entry[column.dataIndex]}}
                </template>
            </template>
          </template>
          <template v-else>
            <template v-if="column.render">
                {{{column.render(entry, rowIndex, this)}}}
            </template>
            <template v-else>
                <template v-if="column.filter">
                    {{{entry[column.dataIndex] | g_filter column.filter}}}
                </template>
                <template v-else>
                    {{entry[column.dataIndex]}}
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
export default {
  props: {
    pagination:Object,
    dataSource: Array,
    columns: Array,
    filterKey: String,
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
    console.log(this.onChange)
  },
  watch: {
    checkedKeys(checkedKeys) {
      var self = this;
      // 有时候需要多选的时候传两个字段，所以再保存一份选中的数据列集合
      self.checkedDataList = [];
      self.dataSource.forEach((item, i) => {
        if (checkedKeys.indexOf(item[self.rowKey]) >= 0) {
          self.checkedDataList.push(item);
        }
      });
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
      let self = this;
      //  因为table里有html和事件绑定，所以需要重新调用$compile，而马上调用时可能页面还没有重新渲染完成
      this.$nextTick(() => {
        self.scope = self.scope || self.$parent;
        self.scope.$compile(self.$el.getElementsByTagName('tbody')[0]);
      });
    },
    sortBy(key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    },
    onCheckAll() {
      let self = this;
      self.checkedKeys = [];
      self.checkedDataList = [];
      if (event.target.checked) {
        self.dataSource.forEach((item, i) => {
          if (self.isRowSelectable(item)) {
            if (key[item.rowKey]) {
              self.checkedKeys.push(item[self.rowKey]);
              self.checkedDataList.push(item);
            }
          }
        })
      }
    },
    onSelectColumn(col, dataId) {
      // this.$dispatch('table-selectCol', col, dataId);
    },
    onFilter(value, column) {
      if (!column.onFilter) {
        return;
      }
      this.isOpen = false;
      // let filterSource = this.dataSource.filter((record) => {
      //   return column.onFilter.call(this, value, record)
      // })
      // return filterSource
      // column.onFilter.call(this, value, record);
      let filters = {};
      filters[column.dataIndex] = [value]
      this.$dispatch('change', this.pagination, filters, column.sorter)
    }
  }
}
</script>
