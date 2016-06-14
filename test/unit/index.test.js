import atui from '../../src/'

describe('组件库整体检查', () => {
  it('是否32个组件', () => {
    expect(Object.keys(atui)).to.have.length.above(31)
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
