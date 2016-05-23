import Vue from 'vue'
import vSelect from '../../src/components/Select/'
const vOption = vSelect.Option
const vm = new Vue({
  data() {
    return {
      show: true
    }
  },
  template:
      '<div>'+
      '<v-select :value="single" :placeholder="placeholder" style="width:200px;" @change="onSlectChange">'+
        '<v-option value="Apple">苹果</v-option>'+
        '<v-option value="Banana" disabled>Banana</v-option>'+
        '<v-option value="Cherry">Cherry</v-option>'+
        '<v-option value="Orange">OrangeText</v-option>'+
        '<v-option value="Grape">Grape</v-option>'+
        '<v-option value="agg">鸡蛋</v-option>'+
        '<v-option value="芒果">芒果</v-option>'+
      '</v-select></div>',
  components: { vSelect,vOption:vOption }
}).$mount()


describe('Select', () => {
  it('Select组件基础渲染', () => {
    expect(vm.$el.querySelectorAll('.option').length).to.equal(7)
  })
})
