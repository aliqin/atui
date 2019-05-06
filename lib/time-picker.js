(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("atui/lib/_utils/GlobalMixin"), require("./input"), require("./trigger"), require("./icon"));
	else if(typeof define === 'function' && define.amd)
		define(["atui/lib/_utils/GlobalMixin", "./input", "./trigger", "./icon"], factory);
	else if(typeof exports === 'object')
		exports["time-picker"] = factory(require("atui/lib/_utils/GlobalMixin"), require("./input"), require("./trigger"), require("./icon"));
	else
		root["time-picker"] = factory(root["atui/lib/_utils/GlobalMixin"], root["./input"], root["./trigger"], root["./icon"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_39__, __WEBPACK_EXTERNAL_MODULE_58__, __WEBPACK_EXTERNAL_MODULE_59__, __WEBPACK_EXTERNAL_MODULE_65__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(233);


/***/ }),

/***/ 39:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ }),

/***/ 58:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_58__;

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_59__;

/***/ }),

/***/ 65:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_65__;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _TimePicker = __webpack_require__(234);

	var _TimePicker2 = _interopRequireDefault(_TimePicker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _TimePicker2.default;

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(235)

	/* template */
	var __vue_template__ = __webpack_require__(237)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	module.exports = __vue_exports__


/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _GlobalMixin = __webpack_require__(39);

	var _GlobalMixin2 = _interopRequireDefault(_GlobalMixin);

	var _Input = __webpack_require__(58);

	var _Input2 = _interopRequireDefault(_Input);

	var _Trigger = __webpack_require__(59);

	var _Trigger2 = _interopRequireDefault(_Trigger);

	var _Icon = __webpack_require__(65);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _selection = __webpack_require__(236);

	var _selection2 = _interopRequireDefault(_selection);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var scrollTo = function scrollTo(element, to, duration) {
	  var requestAnimationFrame = window.requestAnimationFrame || function () {
	    return setTimeout(arguments[0], 10);
	  };
	  if (duration <= 0) {
	    element.scrollTop = to;
	    return;
	  }
	  var difference = to - element.scrollTop;
	  var perTick = difference / duration * 10;
	  requestAnimationFrame(function () {
	    element.scrollTop = element.scrollTop + perTick;
	    if (element.scrollTop === to) return;
	    scrollTo(element, to, duration - 10);
	  });
	};

	exports.default = {
	  name: 'Timepicker',
	  mixins: [_GlobalMixin2.default],

	  props: {
	    placeholder: {
	      type: String,
	      default: '请选择时间'
	    },
	    size: {
	      type: String,
	      default: 'default'
	    },
	    value: {
	      type: [Date, String]
	    },
	    disabled: Boolean,
	    large: Boolean,
	    small: Boolean,
	    hideDisabledOptions: Boolean,
	    disabledHours: {
	      type: Function,
	      default: function _default() {
	        return [];
	      }
	    },
	    disabledMinutes: {
	      type: Function,
	      default: function _default() {
	        return [];
	      }
	    },
	    disabledSeconds: {
	      type: Function,
	      default: function _default() {
	        return [];
	      }
	    }
	  },
	  components: {
	    vInput: _Input2.default,
	    trigger: _Trigger2.default,
	    icon: _Icon2.default
	  },
	  data: function data() {
	    var now = new Date();
	    return {
	      hour: now.getHours(),
	      minute: now.getMinutes(),
	      second: now.getSeconds(),
	      showMenu: false
	    };
	  },

	  computed: {
	    displayValue: function displayValue() {
	      return this.leftPad(this.hour) + ':' + this.leftPad(this.minute) + ':' + this.leftPad(this.second);
	    }
	  },
	  watch: {
	    value: function value(val) {
	      if (val) {
	        this.placeholder = '';
	        var time = new Date();
	        time.setHours(this.hour);
	        time.setMinutes(this.minute);
	        time.setSeconds(this.second);
	        this.$emit('change', time, this.value);
	      }
	    },
	    hour: function hour(index) {
	      this.selectChoosed('h', index);
	    },
	    minute: function minute(index) {
	      this.selectChoosed('m', index);
	    },
	    second: function second(index) {
	      this.selectChoosed('s', index);
	    }
	  },
	  created: function created() {
	    if (this.value && this.value.constructor === Date) {
	      this.hour = this.value.getHours();
	      this.minute = this.value.getMinutes();
	      this.second = this.value.getSeconds();
	    } else if (this.value && typeof this.value === 'string') {
	      var arr = this.value.split(':');
	      this.hour = +arr[0];
	      this.minute = +arr[1];
	      this.second = +arr[2];
	    }
	  },

	  methods: {
	    leftPad: function leftPad(value) {
	      if (+value < 10) {
	        return '0' + value;
	      }
	      return value;
	    },
	    selection: function selection(choosed) {
	      var start = void 0;
	      var end = void 0;
	      if (choosed === 'H') {
	        start = 0;
	      } else if (choosed === 'M') {
	        start = 3;
	      } else if (choosed === 'S') {
	        start = 6;
	      }
	      end = start + 2;
	      (0, _selection2.default)(this.$refs.pickerToggler.$el, start, end);
	    },
	    selectChoosed: function selectChoosed(type, index, duration) {
	      var me = this;
	      var target = me.$refs[type];
	      if (target) {
	        scrollTo(target.parentNode, index * target.children[0].offsetHeight, duration || 100);
	      }
	    },
	    chooseHour: function chooseHour(index) {
	      this.hour = index;
	    },
	    chooseMinute: function chooseMinute(index) {
	      this.minute = index;
	    },
	    chooseSecond: function chooseSecond(index) {
	      this.second = index;
	    },
	    togglePopupHandler: function togglePopupHandler(show) {
	      var _this = this;

	      if (show) {
	        this.$nextTick(function () {
	          _this.selectChoosed('h', _this.hour, 1);
	          _this.selectChoosed('m', _this.minute, 1);
	          _this.selectChoosed('s', _this.second, 1);
	        });
	      }
	      this.showMenu = show;
	    },
	    closePopup: function closePopup() {
	      this.showMenu = false;
	    }
	  }
	};

/***/ }),

/***/ 236:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createSelection;
	function createSelection(field, start, end) {
	  if (field.createTextRange) {
	    var selRange = field.createTextRange();
	    selRange.collapse(true);
	    selRange.moveStart('character', start);
	    selRange.moveEnd('character', end);
	    selRange.select();
	    field.focus();
	  } else if (field.setSelectionRange) {
	    field.focus();
	    field.setSelectionRange(start, end);
	  } else if (typeof field.selectionStart !== 'undefined') {
	    field.selectionStart = start;
	    field.selectionEnd = end;
	    field.focus();
	  }
	}

/***/ }),

/***/ 237:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: [_vm.prefixCls + '-time-picker']
	  }, [_c('trigger', {
	    ref: "trigger",
	    attrs: {
	      "trigger": "click",
	      "placement": "bottomLeft",
	      "disabled": _vm.disabled,
	      "effect": "slide",
	      "popup-hide-when-click-outside": "",
	      "popup-cover-trigger": "",
	      "show": _vm.showMenu
	    },
	    on: {
	      "toggle-popup": _vm.togglePopupHandler
	    }
	  }, [_c('div', {
	    class: [_vm.prefixCls + '-time-picker-toggler'],
	    slot: "trigger"
	  }, [_c('v-input', _vm._b({
	    attrs: {
	      "readonly": "",
	      "value": _vm.displayValue,
	      "placeholder": _vm.placeholder
	    }
	  }, 'v-input', {
	    disabled: _vm.disabled,
	    large: _vm.large,
	    small: _vm.small
	  })), _vm._v(" "), _c('icon', {
	    attrs: {
	      "type": "time",
	      "color": _vm.disabled ? '#bfbfbf' : (_vm.displayValue ? '#666' : '#BFBFBF')
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    class: [_vm.prefixCls + '-time-picker-menus'],
	    slot: "popup"
	  }, [_c('icon', {
	    attrs: {
	      "type": "clear"
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.closePopup($event)
	      }
	    }
	  }), _vm._v(" "), _c('div', [_c('v-input', _vm._b({
	    ref: "pickerToggler",
	    class: [_vm.prefixCls + '-time-picker-input'],
	    attrs: {
	      "readonly": "",
	      "value": _vm.displayValue,
	      "placeholder": _vm.placeholder
	    }
	  }, 'v-input', {
	    disabled: _vm.disabled,
	    large: _vm.large,
	    small: _vm.small
	  }))], 1), _vm._v(" "), _c('div', {
	    class: [_vm.prefixCls + '-time-picker-panel']
	  }, [_c('ul', {
	    ref: "h",
	    staticClass: "time-hours",
	    on: {
	      "mouseover": function($event) {
	        _vm.selection('H')
	      }
	    }
	  }, _vm._l((24), function(index) {
	    return (_vm.disabledHours().indexOf(index - 1) < 0) ? _c('li', {
	      key: index,
	      class: {
	        selected: _vm.hour === index - 1
	      },
	      on: {
	        "click": function($event) {
	          _vm.chooseHour(index - 1, $event)
	        }
	      }
	    }, [_vm._v(_vm._s(_vm.leftPad(index - 1)) + "\n          ")]) : _vm._e()
	  }))]), _vm._v(" "), _c('div', {
	    class: [_vm.prefixCls + '-time-picker-panel']
	  }, [_c('ul', {
	    ref: "m",
	    staticClass: "time-minute",
	    on: {
	      "mouseover": function($event) {
	        _vm.selection('M')
	      }
	    }
	  }, _vm._l((60), function(index) {
	    return (_vm.disabledMinutes().indexOf(index - 1) < 0) ? _c('li', {
	      key: index,
	      class: {
	        selected: _vm.minute === index - 1
	      },
	      on: {
	        "click": function($event) {
	          _vm.chooseMinute(index - 1, $event)
	        }
	      }
	    }, [_vm._v(_vm._s(_vm.leftPad(index - 1)) + "\n          ")]) : _vm._e()
	  }))]), _vm._v(" "), _c('div', {
	    class: [_vm.prefixCls + '-time-picker-panel'],
	    on: {
	      "mouseover": function($event) {
	        _vm.selection('S')
	      }
	    }
	  }, [_c('ul', {
	    ref: "s",
	    staticClass: "time-seconds"
	  }, _vm._l((60), function(index) {
	    return (_vm.disabledSeconds().indexOf(index - 1) < 0) ? _c('li', {
	      key: index,
	      class: {
	        selected: _vm.second === index - 1
	      },
	      on: {
	        "click": function($event) {
	          _vm.chooseSecond(index - 1, $event)
	        }
	      }
	    }, [_vm._v(_vm._s(_vm.leftPad(index - 1)) + "\n          ")]) : _vm._e()
	  }))])], 1)])], 1)
	},staticRenderFns: []}

/***/ })

/******/ })
});
;