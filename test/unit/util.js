/*
 * 测试用例工具函数
 */
import Vue from 'vue'
let util = {
  /*
   * @触发一个鼠标事件
   * @params options{Object}
   * @params options.target {DomElement} 在哪个
   * @params options.type {String}
   */
  triggerEvent (options) {
    // ci上的phantomjs不支持new MouseEvent,本地的chrome是支持的
    /*
    let evt = new MouseEvent(options.type,{
      'view': window,
      'bubbles': true,
      'cancelable': true
    })
    options.target.dispatchEvent(evt)
    */
    let evt = document.createEvent('MouseEvent')
    evt.initEvent(options.type, true, true)
    options.target.dispatchEvent(evt)
  },

  keyEvent (options) {
    const evt = document.createEvent('Events')
    evt.initEvent(options.type, true, true)
    evt.keyCode = options.keyCode
    options.target.dispatchEvent(evt)
  }
}

export function createTest (Component, propsData) {
  const Constructor = Vue.extend(Component)
  return new Constructor({
    propsData
  }).$mount()
}

export function createVue (Comp) {
  return new Vue(Comp).$mount()
}

export default util
