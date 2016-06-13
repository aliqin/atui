import Vue from 'vue'
import atui from '../../src/'

describe('组件库整体检查', () => {
  it('是否33个组件', () => {
    expect(Object.keys(atui)).to.have.length.above(32)
  })

  for (var i in atui) {
    let component = atui[i]
    it(i, () => {
      expect(component).to.be.ok
      // 如果是复合组件，比如Layout
      if (!component['template']) {
        console.log(Object.keys(component))
      }
    })
  }
})
