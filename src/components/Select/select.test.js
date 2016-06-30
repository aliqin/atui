import Vue from 'vue'
import vSelect from '../Select'
const vOption = vSelect.Option

describe('Select', () => {
  const vm = new Vue({
    data () {
      return {
        show: true
      }
    },
    template: `
    <div>
    <v-select :value="Cherry" :placeholder="placeholder" style="width:200px;" class="j-basic">
    <v-option value="Apple">苹果</v-option>
    <v-option value="Banana" disabled>Banana</v-option>
    <v-option value="Cherry">Cherry</v-option>
    <v-option value="Orange">OrangeText</v-option>
    <v-option value="Grape">Grape</v-option>
    <v-option value="agg">鸡蛋</v-option>
    <v-option value="芒果">芒果</v-option>
    </v-select>
    <v-select multiple class="j-multiple">
      <v-option value="Apple">苹果</v-option>
        <v-option value="Banana">香蕉</v-option>
        <v-option value="Cherry">Cherry</v-option>
        <v-option value="Orange">Orange</v-option>
        <v-option value="Grape">Grape</v-option>
    </v-select>
    </div>`,
    components: { vSelect, vOption }
  }).$mount()

  it('Select组件基础渲染', () => {
    expect(vm.$el.querySelectorAll('.j-basic .option').length).to.equal(7)
    expect(vm.$el.querySelectorAll('.j-basic span').length).to.equal(3)
  })

  it('Select组件多选使用', () => {
    expect(vm.$el.querySelectorAll('.j-multiple .select-search-field').length).to.equal(1)
  })

  it('mousedown事件的处理方法调用', () => {
    vm.$children[0].disabled = true
    expect(vm.$children[0].show).to.false
    vm.$children[0].toggleDropdown()
    expect(vm.$children[0].show).to.false

    vm.$children[0].disabled = false
    vm.$children[0].toggleDropdown()
    expect(vm.$children[0].show).to.true
  })

  it('option-change事件处理方法调用', () => {
    // For basic usage
    expect(vm.$children[0].selectedOptions.length).to.equal(0)
    vm.$children[0].$emit('option-change', {'label': '苹果', 'value': 'Apple'})
    expect(vm.$children[0].selectedOptions.length).to.equal(1)
    expect(vm.$children[0].value).to.equal('Apple')
    expect(vm.$children[0].show).to.false
    expect(vm.$children[0].searchText).to.equal('')

    // For multiple select tag
    expect(vm.$children[1].selectedOptions.length).to.equal(0)
    vm.$children[1].$emit('option-change', {'label': 'Orange', 'value': 'Orange'})
    expect(vm.$children[1].selectedOptions.length).to.equal(1)
    expect(vm.$children[1].value.indexOf('Orange')).to.not.equal(-1)
  })
})
