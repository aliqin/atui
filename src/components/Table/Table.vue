<template>
  <div :class="['atui-table-container','atui-table-'+size, {loading :loading}]">
    <spin size="sm" v-if="loading"></spin>
    <!-- <table :class="['atui-table-fixed-header','atui-table']" v-if="fixedHeader">
  </table> -->
    <div :class="['atui-table-body',{'atui-fixed-header':fixedHeader}]">
      <table class="atui-table">
        <colgroup>
          <col v-if="rowSelection"></col>
          <col v-for="column in columns" :width="column.width"></col>
        </colgroup>
        <thead class="table-thead">
          <tr>
            <th v-if="rowSelection" class="atui-table-selection-column">
              <input v-if="dataSource && dataSource.length" type="checkbox" v-bind="{checked:isCheckedAll,disabled:isDisabledAll}" @change="onCheckAll"
              />
            </th>
            <th v-for="column in columns" :width="column.width">
              {{column['title']}}
              <dropdown v-if="column.filters" data-toggle="dropdown" :open="filterOpened">
                <div data-toggle="dropdown">
                  <icon type="filter" size="12"></icon>
                </div>
                <ul name="dropdown-menu" class="dropdown-menu">
                  <li v-for="col in column.filters"><a href="javascript:void(0);" @click="onFilter(col.value, column)">{{col.text}}</a></li>
                </ul>
              </dropdown>
              <div v-if="dataSource && dataSource.length && column.sorter" class="table-sorter">
                <icon type="up" size="10" @click="sortAction(column,$index,'ascend')" :class="{active:sorderOrder[$index] == 'ascend'}"></icon>
                <icon type="down" size="10" @click="sortAction(column,$index,'descend')" :class="{active:sorderOrder[$index] == 'descend'}"></icon>
              </div>
            </th>
          </tr>
        </thead>
        <tbody class="table-tbody">
          <tr v-if="!dataSource || !dataSource.length">
            <td colspan="10" style="text-align: center;" class="vue-table-empty">{{noDataTip}}</td>
          </tr>
          <tr v-for="(rowIndex, record) in dataSource" :track-by="$index">
            <td v-if="rowSelection" class="atui-table-selection-column">
              <input type="checkbox" v-model="checkedValues" :value="record[rowKey]" @change.stop="onCheckOne($event,record)" v-bind="rowSelection.getCheckboxProps && rowSelection.getCheckboxProps(record)"
              />
            </td>
            <td v-for="column in columns">
              <template v-if="column.render && record">
                {{{column.render.call(this._context,record[column.dataIndex],record,rowIndex)}}}
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
    pagination: Object,
    dataSource: {
      type: Array,
      default () {
        return []
      }
    },
    noDataTip: {
      type: String,
      default: '没有任何数据'
    },
    columns: {
      type: Array,
      default () {
        return []
      }
    },
    rowSelection: Object,
    rowKey: String,
    loading: Boolean,
    fixedHeader: Boolean,
    size: {
      type: String,
      default: 'default'
    }
  },
  components: {
    Icon,
    Dropdown,
    Spin
  },
  data () {
    this.compileTbody()
    return {
      isCheckedAll: false,
      isDisabledAll: false,
      sorderOrder: [],
      checkedRows: [],
      filterOpened: false,
      filters: null,
      sorter: null
    }
  },
  computed: {
    checkedValues () {
      let me = this
      let checkedKeys = me.checkedRows.map((record) => {
        return record[me.rowKey]
      })
      if (me.rowSelection && me.rowSelection.onChange) {
        me.rowSelection.onChange(checkedKeys, me.checkedRows)
      }
      return checkedKeys
    },
    checkebleRows () {
      let me = this
      let rows = []
      // 过滤出非禁用的项供选择使用
      if (me.dataSource && me.dataSource.length) {
        rows = me.dataSource.filter((record) => {
          if (me.rowSelection) {
            return !me.rowSelection.getCheckboxProps || !me.rowSelection.getCheckboxProps(record).disabled
          }
        })
      }
      return rows
    }
  },
  watch: {
    dataSource: {
      handler (data) {
        let me = this
        me.compileTbody()

        // 如果有删除行为或者清空行为，则需要把选中行数据重新计算出，否则checkedRow一直存在没变化
        me.checkedRows = data.filter((record) => {
          if (me.checkedValues) {
            return me.checkedValues.indexOf(record[me.rowKey]) >= 0
          }
        })
        if (me.checkebleRows.length) {
          me.isCheckedAll = me.checkedRows.length === me.checkebleRows.length
        }
      },
      deep: true
    }
  },
  methods: {
    compileTbody () {
      let me = this
      //  因为table里有html和事件绑定，所以需要重新调用$compile，而马上调用时可能页面还没有重新渲染完成
      me.$nextTick(() => {
        me._context.$compile(me.$el)
        me.isDisabledAll = !me.checkebleRows.length
      })
    },
    sortAction (column, index, order) {
      if (typeof column.sorter === 'function') {
        // TODO:客户端排序
      }
      this.sorderOrder[index] = order
      this.sorderOrder = Object.assign([], this.sorderOrder)
      this.$dispatch('table-change', this.pagination, this.filters, {
        field: column.dataIndex,
        order: order
      })
    },
    // 点击全选框触发
    onCheckAll (event) {
      let me = this
      let changeRows = []
      let input = event.srcElement || event.target
      let checked = input.checked
      if (checked) {
        me.checkebleRows.forEach((record, i) => {
          if (me.checkedRows.indexOf(record) < 0) {
            me.checkedRows.push(record)
            changeRows.push(record)
          }
        })
        // 不能使用计算属性，因为会与点击全选的行为相冲突
        me.isCheckedAll = true
      } else {
        me.checkebleRows.forEach((record, i) => {
          if (me.checkedRows.indexOf(record) >= 0) {
            changeRows.push(record)
          }
        })
        me.checkedRows = []
      }
      if (me.rowSelection.onSelectAll) {
        me.rowSelection.onSelectAll(checked, me.checkedRows, changeRows)
      }
    },
    // 选中某一个单选框时触发
    onCheckOne (event, record) {
      const me = this
      let input = event.srcElement || event.target
      const checked = input.checked
      if (checked) {
        if (me.checkedRows.indexOf(record) === -1) {
          me.checkedRows.push(record)
        }
      } else {
        me.checkedRows = me.checkedRows.filter((item) => {
          return record[me.rowKey] !== item[me.rowKey]
        })
      }
      if (me.rowSelection.onSelect) {
        me.rowSelection.onSelect(record, checked, me.checkedRows)
      }
      me.isCheckedAll = me.checkedRows.length === me.checkebleRows.length
    },
    // filter时触发
    onFilter (value, column) {
      let me = this
      me.filterOpened = true
      setTimeout(() => {
        me.filterOpened = false
      }, 100)
      me.filters = {}
      me.filters[column.dataIndex] = [value]
      me.$dispatch('table-change', this.pagination, me.filters, me.sorter)
    },
    fixedHeaderAction () {
      if (this.fixedHeader) {
        let header = this.$el.querySelector('.table-thead')
        let colgroup = this.$el.querySelector('colgroup').cloneNode(true)
        let fixedTable = this.$el.querySelector('.atui-table-fixed-header')
        fixedTable.appendChild(colgroup)
        fixedTable.appendChild(header)
      }
    }
  },
  attached () {
    // this.fixedHeaderAction()
  }
}
</script>
