(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("atui/lib/_utils/GlobalMixin"), require("./trigger"), require("./icon"));
	else if(typeof define === 'function' && define.amd)
		define(["atui/lib/_utils/GlobalMixin", "./trigger", "./icon"], factory);
	else if(typeof exports === 'object')
		exports["searchbox"] = factory(require("atui/lib/_utils/GlobalMixin"), require("./trigger"), require("./icon"));
	else
		root["searchbox"] = factory(root["atui/lib/_utils/GlobalMixin"], root["./trigger"], root["./icon"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_39__, __WEBPACK_EXTERNAL_MODULE_59__, __WEBPACK_EXTERNAL_MODULE_65__) {
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

	module.exports = __webpack_require__(178);


/***/ }),

/***/ 39:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_59__;

/***/ }),

/***/ 65:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_65__;

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Searchbox = __webpack_require__(179);

	var _Searchbox2 = _interopRequireDefault(_Searchbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Searchbox2.default;

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(180)

	/* template */
	var __vue_template__ = __webpack_require__(181)
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

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _GlobalMixin = __webpack_require__(39);

	var _GlobalMixin2 = _interopRequireDefault(_GlobalMixin);

	var _Icon = __webpack_require__(65);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _Trigger = __webpack_require__(59);

	var _Trigger2 = _interopRequireDefault(_Trigger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'Searchbox',
	  mixins: [_GlobalMixin2.default],

	  components: {
	    Trigger: _Trigger2.default, Icon: _Icon2.default
	  },

	  props: {
	    placeholder: {
	      type: String,
	      default: ''
	    },
	    notFoundContent: {
	      type: String,
	      default: ''
	    },
	    value: {
	      type: String,
	      default: ''
	    },
	    searchList: Array,
	    large: Boolean,
	    small: Boolean,
	    textField: {
	      type: String,
	      default: 'name'
	    },
	    filterField: {
	      type: Array
	    }
	  },

	  data: function data() {
	    return {
	      searchValue: this.value,
	      iconColor: '#BFBFBF',
	      showPop: false,
	      isCheck: false
	    };
	  },


	  computed: {
	    filterLables: function filterLables() {
	      var str = this.filterField.map(function (item) {
	        return '' + item;
	      });
	      return str.join(' ');
	    },
	    inputClassObj: function inputClassObj() {
	      var prefixCls = this.prefixCls,
	          large = this.large,
	          small = this.small;

	      var classObj = {};

	      classObj[prefixCls + '-searchbox-input'] = true;
	      classObj[prefixCls + '-input'] = true;
	      classObj[prefixCls + '-input-large'] = large;
	      classObj[prefixCls + '-input-small'] = small;

	      return classObj;
	    },
	    filterValue: function filterValue() {
	      return this.value.replace(/^\s+|\s+$/g, '');
	    }
	  },

	  beforeDestroy: function beforeDestroy() {
	    if (this._closeEvent) this._closeEvent.remove();
	  },


	  watch: {
	    searchValue: function searchValue(newVal, oldVal) {
	      newVal = newVal.replace(/^\s+|\s+$/g, '');
	      oldVal = oldVal.replace(/^\s+|\s+$/g, '');

	      if (newVal !== oldVal) {
	        !this.isCheck && this.$emit('value-change', newVal, this);

	        this.isCheck = false;
	      }
	    }
	  },

	  methods: {
	    focusInput: function focusInput() {
	      this.iconColor = '#00A0FF';
	      this.showPop = true;
	    },
	    blurInput: function blurInput() {
	      this.iconColor = '#BFBFBF';
	      this.showPop = false;
	    },
	    checkItem: function checkItem(index, val) {
	      this.searchValue = val;
	      this.isCheck = true;
	      this.$emit('value-check', this.searchList[index], this);
	      this.blurInput();
	    },
	    clearInput: function clearInput() {
	      this.searchValue = '';
	    }
	  }
	};

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: [_vm.prefixCls + '-searchbox-cont']
	  }, [_c('trigger', {
	    staticStyle: {
	      "width": "100%"
	    },
	    attrs: {
	      "trigger": "focus",
	      "effect": "slide",
	      "placement": "bottomLeft",
	      "popup-cls": "searchbox",
	      "popup-use-trigger-width": ""
	    }
	  }, [_c('div', {
	    slot: "trigger"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.searchValue),
	      expression: "searchValue"
	    }],
	    class: _vm.inputClassObj,
	    attrs: {
	      "type": "text",
	      "placeholder": _vm.placeholder
	    },
	    domProps: {
	      "value": (_vm.searchValue)
	    },
	    on: {
	      "focus": _vm.focusInput,
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.searchValue = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('icon', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.searchValue),
	      expression: "searchValue"
	    }],
	    attrs: {
	      "type": "clear",
	      "color": "#bfbfbf",
	      "size": "14"
	    },
	    on: {
	      "click": _vm.clearInput
	    }
	  }), _vm._v(" "), _c('icon', {
	    attrs: {
	      "type": "search",
	      "color": _vm.iconColor,
	      "size": "14"
	    }
	  })], 1), _vm._v(" "), (_vm.searchList && _vm.searchList.length > 0) ? _c('div', {
	    ref: "popup",
	    class: [_vm.prefixCls + '-searchbox-list-containter'],
	    slot: "popup"
	  }, [_c('ul', {
	    class: [_vm.prefixCls + '-searchbox-list-dropdown']
	  }, _vm._l((_vm.searchList), function(item, index) {
	    return (~item[_vm.textField].indexOf(_vm.searchValue)) ? _c('li', [_c('a', {
	      attrs: {
	        "href": "javascript:;",
	        "title": item[_vm.textField]
	      },
	      on: {
	        "click": function($event) {
	          _vm.checkItem(index, item[_vm.textField])
	        }
	      }
	    }, [_vm._v(_vm._s(item[_vm.textField]))])]) : _vm._e()
	  }))]) : _vm._e()])], 1)
	},staticRenderFns: []}

/***/ })

/******/ })
});
;