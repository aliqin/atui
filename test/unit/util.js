/*
* 测试用例工具函数
*/

let util = {
  /*
  * @触发一个鼠标事件
  * @params options{Object}
  * @params options.target {DomElement} 在哪个
  * @params options.type {String}
  */
  triggerEvent(options) {
    let evt = new MouseEvent(options.type,{
      'view': window,
      'bubbles': true,
      'cancelable': true
    })
    options.target.dispatchEvent(evt)
  },

  keyEvent(options) {
    const evt = document.createEvent('Events');
    evt.initEvent(options.type, true, true);
    evt.keyCode = options.keyCode;
    options.target.dispatchEvent(evt);
  }
}

export default util