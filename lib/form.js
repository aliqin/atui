(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("./icon"), require("./layout"), require("./message"));
	else if(typeof define === 'function' && define.amd)
		define(["./icon", "./layout", "./message"], factory);
	else if(typeof exports === 'object')
		exports["form"] = factory(require("./icon"), require("./layout"), require("./message"));
	else
		root["form"] = factory(root["./icon"], root["./layout"], root["./message"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_65__, __WEBPACK_EXTERNAL_MODULE_77__, __WEBPACK_EXTERNAL_MODULE_81__) {
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

	module.exports = __webpack_require__(74);


/***/ }),

/***/ 65:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_65__;

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Form = __webpack_require__(75);

	var _Form2 = _interopRequireDefault(_Form);

	var _FormItem = __webpack_require__(79);

	var _FormItem2 = _interopRequireDefault(_FormItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_Form2.default.FormItem = _FormItem2.default;

	exports.default = _Form2.default;

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(76)

	/* template */
	var __vue_template__ = __webpack_require__(78)
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

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Layout = __webpack_require__(77);

	var _Layout2 = _interopRequireDefault(_Layout);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var vRow = _Layout2.default.Row;

	exports.default = {
	  name: 'Form',
	  props: {
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  computed: {
	    formClassObj: function formClassObj() {
	      var prefixCls = this.prefixCls;

	      var classObj = {};

	      classObj[prefixCls + '-form'] = true;
	      return classObj;
	    }
	  },
	  components: {
	    vRow: vRow
	  }
	};

/***/ }),

/***/ 77:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_77__;

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('form', {
	    class: _vm.formClassObj
	  }, [_c('v-row', [_vm._t("default")], 2)], 1)
	},staticRenderFns: []}

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(80)

	/* template */
	var __vue_template__ = __webpack_require__(82)
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

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Layout = __webpack_require__(77);

	var _Layout2 = _interopRequireDefault(_Layout);

	var _Icon = __webpack_require__(65);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _Message = __webpack_require__(81);

	var _Message2 = _interopRequireDefault(_Message);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var vCol = _Layout2.default.Col;

	exports.default = {
	  name: 'FormItem',
	  props: {
	    label: String,
	    itemCol: {
	      type: String,
	      default: '24'
	    },
	    labelCol: {
	      type: String,
	      default: '7'
	    },
	    wrapperCol: {
	      type: String,
	      default: ''
	    },

	    required: Boolean,

	    tips: {
	      type: String,
	      default: ''
	    },

	    validStatus: {
	      type: String,
	      default: ''
	    },

	    hasIcon: Boolean,
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    },

	    tipsMode: {
	      type: String,
	      default: 'text'
	    },

	    description: {
	      type: String
	    },

	    descriptionWidth: {
	      type: [Number, String],
	      default: 300
	    },
	    descriptionSpace: {
	      type: [Number, String],
	      default: 300
	    }
	  },

	  computed: {
	    popupContainerClass: function popupContainerClass() {
	      if (this.tipsMode === 'popup' && this.popupTips) {
	        return this.prefixCls + '-form-valid-popup-container';
	      }

	      return '';
	    },
	    popupContainerStyle: function popupContainerStyle() {
	      var self = this;
	      if (self.tipsMode === 'popup' && self.popupTips) {
	        return {
	          paddingRight: self.descriptionSpace + 'px'
	        };
	      }
	      return {};
	    },
	    formItemClassObj: function formItemClassObj() {
	      var prefixCls = this.prefixCls,
	          validStatus = this.validStatus;

	      var classObj = {};

	      classObj[prefixCls + '-form-item'] = true;
	      classObj[prefixCls + '-form-with-help'] = validStatus;
	      classObj[prefixCls + '-form-has-error'] = validStatus === 'error';
	      classObj[prefixCls + '-form-has-success'] = validStatus === 'success';
	      classObj[prefixCls + '-form-popup'] = this.tipsMode === 'popup' && this.popupTips;

	      return classObj;
	    },
	    isRequired: function isRequired() {
	      return !!this.required;
	    },
	    showIcon: function showIcon() {
	      return this.validStatus && !!this.hasIcon;
	    },
	    calcWrapperCol: function calcWrapperCol() {
	      var span = 24 - parseInt(this.labelCol);
	      return span.toString();
	    },
	    popupMode: function popupMode() {
	      if (this.validStatus === 'error') {
	        return 'error';
	      }

	      return 'warning';
	    },
	    popupTips: function popupTips() {
	      if (this.validStatus === 'error') {
	        return this.tips;
	      }

	      return this.description;
	    },
	    descriptionRight: function descriptionRight() {
	      return this.descriptionSpace - 0 - this.descriptionWidth;
	    }
	  },
	  components: {
	    vCol: vCol,
	    Icon: _Icon2.default,
	    Message: _Message2.default
	  }
	};

/***/ }),

/***/ 81:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_81__;

/***/ }),

/***/ 82:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('v-col', {
	    class: _vm.formItemClassObj,
	    attrs: {
	      "span": _vm.itemCol
	    }
	  }, [_c('v-col', {
	    attrs: {
	      "span": _vm.labelCol,
	      "type": "sm"
	    }
	  }, [(_vm.label) ? _c('label', {
	    class: [_vm.prefixCls + '-form-label']
	  }, [(_vm.isRequired) ? _c('span', {
	    class: [_vm.prefixCls + '-form-required-icon']
	  }, [_vm._v("*")]) : _vm._e(), _vm._v("\n      " + _vm._s(_vm.label) + "\n    ")]) : _vm._e()]), _vm._v(" "), _c('v-col', {
	    class: _vm.popupContainerClass,
	    attrs: {
	      "span": _vm.wrapperCol || _vm.calcWrapperCol,
	      "type": "sm"
	    }
	  }, [_c('div', {
	    class: [_vm.prefixCls + '-form-input']
	  }, [_vm._t("default"), _vm._v(" "), (_vm.showIcon) ? [(_vm.validStatus == 'warn') ? _c('icon', {
	    class: [_vm.prefixCls + '-form-status-icon'],
	    attrs: {
	      "type": "waring-s"
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.validStatus == 'error') ? _c('icon', {
	    class: [_vm.prefixCls + '-form-status-icon'],
	    attrs: {
	      "type": "error-s"
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.validStatus == 'success') ? _c('icon', {
	    class: [_vm.prefixCls + '-form-status-icon'],
	    attrs: {
	      "type": "success-s"
	    }
	  }) : _vm._e(), _vm._v(" "), (_vm.validStatus == 'help') ? _c('icon', {
	    class: [_vm.prefixCls + '-form-status-icon'],
	    attrs: {
	      "type": "help"
	    }
	  }) : _vm._e()] : _vm._e()], 2), _vm._v(" "), (_vm.tipsMode === 'popup' && _vm.popupTips) ? _c('message', {
	    class: [_vm.prefixCls + '-form-valid-popup-message'],
	    attrs: {
	      "type": _vm.popupMode,
	      "arrow": "left",
	      "show-icon": false
	    }
	  }, [_vm._v("\n      " + _vm._s(_vm.popupTips) + "\n    ")]) : _vm._e(), _vm._v(" "), (_vm.tipsMode === 'text' && _vm.tips && _vm.validStatus) ? _c('div', {
	    class: [_vm.prefixCls + '-form-status-info']
	  }, [_vm._v(_vm._s(_vm.tips))]) : _vm._e()], 1)], 1)
	},staticRenderFns: []}

/***/ })

/******/ })
});
;