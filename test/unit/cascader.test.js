import Vue from 'vue'
import Cascader from '../../src/components/Cascader/'
const options = [{
  'value': '2016',
  'label': '2016年',
  'children': [{
    'value': '01',
    'label': '一月',
    'disabled': false
  }, {
    'value': '02',
    'label': '二月',
    'disabled': false
  }, {
    'value': '03',
    'label': '三月',
    'disabled': false
  }, {
    'value': '04',
    'label': '四月',
    'disabled': true
  }, {
    'value': '05',
    'label': '五月',
    'disabled': true
  }, {
    'value': '06',
    'label': '六月',
    'disabled': true
  }, {
    'value': '07',
    'label': '七月',
    'disabled': true
  }, {
    'value': '08',
    'label': '八月',
    'disabled': true
  }, {
    'value': '09',
    'label': '九月',
    'disabled': true
  }, {
    'value': '10',
    'label': '十月',
    'disabled': true
  }, {
    'value': '11',
    'label': '十一月',
    'disabled': true
  }, {
    'value': '12',
    'label': '十二月',
    'disabled': true
  }]
}, {
  'value': '2015',
  'label': '2015年',
  'children': [{
    'value': '01',
    'label': '一月'
  }, {
    'value': '02',
    'label': '二月'
  }, {
    'value': '03',
    'label': '三月'
  }, {
    'value': '04',
    'label': '四月'
  }, {
    'value': '05',
    'label': '五月'
  }, {
    'value': '06',
    'label': '六月'
  }, {
    'value': '07',
    'label': '七月'
  }, {
    'value': '08',
    'label': '八月'
  }, {
    'value': '09',
    'label': '九月'
  }, {
    'value': '10',
    'label': '十月'
  }, {
    'value': '11',
    'label': '十一月'
  }, {
    'value': '12',
    'label': '十二月'
  }]
}]
const defaultValue = ['2016', '05']
let vm = new Vue({
  template: `
      <div>
        <cascader :options="options" @change="selectChange"
        :default-value="defaultValue">
        </cascader>
      </div>
      `,
  components: {
    Cascader
  },
  data: {
    options: options,
    defaultValue: defaultValue
  }
}).$mount()
describe('Cascader', () => {
  it('Cascader组件是否正常显示', () => {
    expect(vm.$el.querySelectorAll('.cascader-picker').length).above(0)
  })
  it('事件回调', () => {

  })
})
