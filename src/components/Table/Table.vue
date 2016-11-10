<template>
  <div :class="[prefixCls + '-table', prefixCls + '-table-'+ size, loading && (prefixCls + '-table-loading')]">
    <spin size="sm" v-if="loading"></spin>
    <!-- <table :class="['atui-table-fixed-header','atui-table']" v-if="fixedHeader">
  </table> -->
    <div :class="[prefixCls + '-table-container', fixedHeader && (prefixCls + '-table-fixed-header')]">
      <table>
        <colgroup>
          <col v-if="rowSelection"></col>
          <col v-for="column in columns" :width="column.width"></col>
        </colgroup>
        <thead>
          <tr>
            <th v-if="rowSelection" :class="[prefixCls + '-table-selection-column']">
              <input v-if="dataSource && dataSource.length" type="checkbox" v-bind="{checked:isCheckedAll,disabled:isDisabledAll}" @change="onCheckAll"
              />
            </th>
            <th v-for="column in columns" :width="column.width">
              {{{column['title']}}}
              <dropdown v-ref:filter-menu v-if="column.filters" trigger="hover">
                <div>
                  <icon type="filter" size="12"></icon>
                </div>
                <div name="dropdown-menu" slot="dropdown-menu" :class="[prefixCls + '-dropdown-menu', prefixCls + '-table-filter-dropdown']">
                  <ul>
                    <li v-for="filter in column.filters">
                    <label>
                      <input :type="column.filterMultiple === false ? 'radio' : 'checkbox' " :value="filter.value" v-model="filters[column.dataIndex]" />{{filter.text}}
                    </label>
                    </li>
                  </ul>
                  <div :class="[prefixCls + '-table-filter-dropdown-btns']">
                    <a :class="[prefixCls + '-table-filter-dropdown-link confirm']" @click="onFilter(column)">确定</a>
                    <a :class="[prefixCls + '-table-filter-dropdown-link', prefixCls + '-table-clear']" @click="resetFilter(column)">重置</a>
                  </div>
                </div>

              </dropdown>
              <div v-if="dataSource && dataSource.length && column.sorter" :class="[prefixCls + '-table-sorter']">
                <icon type="caretup" size="10" @click="sortAction(column,$index,'ascend')" :class="[sorderOrder[$index] == 'ascend' && (prefixCls + '-table-active')]"></icon>
                <icon type="caretdown" size="10" @click="sortAction(column,$index,'descend')" :class="[sorderOrder[$index] == 'descend' && (prefixCls + '-table-active')]"></icon>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="!dataSource || !dataSource.length">
            <td colspan="20" style="text-align: center;" :class="[prefixCls + '-table-empty']">{{noDataTip}}</td>
          </tr>
          <tr v-for="(rowIndex, record) in dataSource" :track-by="$index">
            <td v-if="rowSelection" :class="[prefixCls + '-table-selection-column']">
              <input type="checkbox" v-model="checkedValues" :value="record[rowKey]" @change.stop="onCheckOne($event,record)" v-bind="rowSelection.getCheckboxProps && rowSelection.getCheckboxProps(record)"
              />
            </td>
            <td v-for="column in columns">
              <template v-if="column.render && record">
                {{{column.render.call(this._context,record[column.dataIndex],record,rowIndex)}}}
              </template>
              <template v-else>
                {{{record[column.dataIndex]}}}
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-show="pagination && pagination.total > 0" :class="[prefixCls + '-table-pagination']">
      <pagination v-ref:pager :total="pagination.total" :show-jumper="true" :show-size-changer="true" @pagination-page-change="changePage" @pagination-size-change="changeSize"></pagination>
    </div>
  </div>
</template>

<script type="text/babel">
import Icon from '../Icon/'
import Dropdown from '../Dropdown/'
import Spin from '../Spin/'
import Pagination from '../Pagination/'

export default {
  props: {
    pagination: {
      type: Object,
      default () {
        return {
          total: 0,
          currPage: 1
        }
      }
    },
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
    },
    prefixCls: {
      type: String,
      default: 'atui'
    }
  },
  components: {
    Icon,
    Dropdown,
    Spin,
    Pagination
  },
  data () {
    this.compileTbody()
    const filters = {}
    this.columns.forEach((item) => {
      if (item.filters) {
        // 如果有filter的情况，则把filter保存为一个空对象，filter时的chechbox需要用到双向绑定
        filters[item.dataIndex] = []
      }
    })
    return {
      originDataSource: Object.assign(this.dataSource || [], []),
      isCheckedAll: false,
      isDisabledAll: false,
      sorderOrder: [],
      checkedRows: [],
      filterOpened: false,
      filters: filters,
      sorter: {}
    }
  },
  compiled () {
    if (this.pagination.total > 0) {
      let pager = this.$refs.pager
      this.dataSource = this.originDataSource.slice(pager.currPage || 0, pager.pageSize)
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
      handler (data, oldData) {
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
    onFilter (column) {
      let me = this
      me.$broadcast('closeDropdown')
      if (column.hasOwnProperty('filterMultiple') && column.filterMultiple === false) {
        /* vue的v-model会把radio的值转换成一个字符串，这里为了参数格式与checkbox相同
        则再转换成数组 */
        let value = me.filters[column.dataIndex]
        me.filters[column.dataIndex] = [value]
      }
      me.$dispatch('table-change', this.pagination, me.filters, me.sorter)
    },
    resetFilter (column) {
      this.filters[column.dataIndex] = []
      this.onFilter(column)
    },
    changePage (pageNum) {
      let me = this
      let pager = me.$refs.pager
      // 如果原始originDataSource有多余数据，证明是客户端分页
      if (me.originDataSource.length > pageNum * pager.pageSize) {
        me.dataSource = me.originDataSource.slice(
          (pageNum - 1) * pager.pageSize,
          pageNum * pager.pageSize
        )
      }
      this.pagination.onChange && this.pagination.onChange(pageNum)
      me.pagination.currPage = pageNum
      me.$dispatch('table-change', this.pagination, me.filters, me.sorter)
    },
    changeSize (current, pageSize) {
      let pager = this.$refs.pager
      this.dataSource = this.originDataSource.slice(
        (current - 1) * pager.pageSize,
        current * pager.pageSize
      )
      this.pagination.onShowSizeChange && this.pagination.onShowSizeChange(current, pageSize)
    }
    // fixedHeaderAction () {
    //   if (this.fixedHeader) {
    //     let header = this.$el.querySelector('.table-thead')
    //     let colgroup = this.$el.querySelector('colgroup').cloneNode(true)
    //     let fixedTable = this.$el.querySelector('.atui-table-fixed-header')
    //     fixedTable.appendChild(colgroup)
    //     fixedTable.appendChild(header)
    //   }
    // }
  }
}
</script>
