import Vue from 'vue'
import Tree from '../'

let treeData = {
  name: 'My Tree',
  children: [
    { name: 'hello' },
    { name: 'wat' },
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        },
        { name: 'hello' },
        { name: 'wat' },
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        }
      ]
    }
  ]
}
let vm = new Vue({
  template: `
      <div>
      <v-tree :data-source="dataSource" ref="myTree" @expand="onExpand"></v-tree>
      </div>
      `,
  components: {
    vTree: Tree
  },
  data: {
    dataSource: treeData
  },
  methods: {
    onExpand () {
      console.log(arguments)
    }
  }
}).$mount()

describe('Tree', () => {
  it('Tree组件是否正常显示', () => {
    expect(vm.$el.querySelectorAll('ul.atui-tree').length).to.equal(1)
  })
})
