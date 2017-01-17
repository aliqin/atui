'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.directive('scroll-load', {
  bind: function bind() {},
  update: function update(value) {
    var timmer = void 0;
    var me = this;
    var el = me.el;
    var lock = false;
    this.scrollHandler = function () {
      clearTimeout(timmer);
      timmer = setTimeout(function () {
        if (lock) {
          return;
        }
        var elH = el.clientHeight;
        var elOffset = el.getBoundingClientRect();
        var scrollTop = document.documentElement.scrollTop;
        var elBottomOffset = elOffset.top + elH - scrollTop;
        if (elBottomOffset < window.screen.height + 50) {
          lock = true;
          me.vm[me.expression](function () {
            lock = false;
          });
        }
      }, 16);
    };
    window.addEventListener('scroll', this.scrollHandler, false);
  },
  unbind: function unbind() {
    window.removeEventListener('scroll', this.scrollHandler);
  }
});

module.exports = {};