/**
 * Created by jiangyi on 16/7/13.
 */

import Vue from 'vue'
import Form from '../'

const FormItem = Form.FormItem

describe('Form组件单元测试', () => {
  let vm = new Vue({
    components: {
      vForm: Form,
      vFormItem: FormItem
    },
    template: `
      <v-form action="aaa.do" method="post">
        <v-form-item required label="性取向" label-col="4">
            <label><input type="checkbox" name="sexy" checked />男</label>
            <label><input type="checkbox" name="sexy" />女</label>
          </v-form-item>
      </v-form>
    `,
    replace: false
  }).$mount()

  it('基础功能渲染', () => {
    expect(vm.$el.querySelectorAll('.atui-form').length).to.be.equal(1)
    expect(vm.$el.querySelectorAll('.atui-form-item').length).to.be.equal(1)
  })
})
