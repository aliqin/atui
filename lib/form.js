(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("./icon"), require("./layout"), require("./message"));
	else if(typeof define === 'function' && define.amd)
		define(["./icon", "./layout", "./message"], factory);
	else if(typeof exports === 'object')
		exports["form"] = factory(require("./icon"), require("./layout"), require("./message"));
	else
		root["form"] = factory(root["./icon"], root["./layout"], root["./message"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_58__, __WEBPACK_EXTERNAL_MODULE_73__, __WEBPACK_EXTERNAL_MODULE_77__) {
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
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(70);


/***/ },

/***/ 58:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_58__;

/***/ },

/***/ 70:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Form = __webpack_require__(71);

	var _Form2 = _interopRequireDefault(_Form);

	var _FormItem = __webpack_require__(75);

	var _FormItem2 = _interopRequireDefault(_FormItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_Form2.default.FormItem = _FormItem2.default;

	exports.default = _Form2.default;

/***/ },

/***/ 71:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(72)

	/* template */
	var __vue_template__ = __webpack_require__(74)
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


/***/ },

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Layout = __webpack_require__(73);

	var _Layout2 = _interopRequireDefault(_Layout);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var vRow = _Layout2.default.Row; //
	//
	//
	//
	//
	//
	//
	//

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

/***/ },

/***/ 73:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_73__;

/***/ },

/***/ 74:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('form', {
	    class: _vm.formClassObj
	  }, [_h('v-row', [_vm._t("default")])])
	},staticRenderFns: []}

/***/ },

/***/ 75:
/***/ function(module, exports, __webpack_require__) {

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


/***/ },

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Layout = __webpack_require__(73);

	var _Layout2 = _interopRequireDefault(_Layout);

	var _Icon = __webpack_require__(58);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _Message = __webpack_require__(77);

	var _Message2 = _interopRequireDefault(_Message);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var vCol = _Layout2.default.Col; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

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
	    // 是否必填
	    required: Boolean,
	    // 提示信息
	    tips: {
	      type: String,
	      default: ''
	    },
	    // 验证状态，如不设置，会根据验证规则自动生成 success,warning,error,validating
	    validStatus: {
	      type: String,
	      default: ''
	    },
	    // 配合validateStatus属性使用，是否展示校验状态图标
	    hasIcon: Boolean,
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    },
	    // 提示展示类型，默认(text)提示文案显示在输入域的下方，泡泡(popup)提示文案显示在输入域的右侧
	    tipsMode: {
	      type: String,
	      default: 'text'
	    },
	    // 输入描述，用于popup模式下
	    description: {
	      type: String
	    },
	    // popup输入提示宽度
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

/***/ },

/***/ 77:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_77__;

/***/ },

/***/ 78:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('v-col', {
	    class: _vm.formItemClassObj,
	    attrs: {
	      "span": _vm.itemCol
	    }
	  }, [_h('v-col', {
	    attrs: {
	      "span": _vm.labelCol,
	      "type": "sm"
	    }
	  }, [(_vm.label) ? _h('label', {
	    class: [_vm.prefixCls + '-form-label']
	  }, [(_vm.isRequired) ? _h('span', {
	    class: [_vm.prefixCls + '-form-required-icon']
	  }, ["*"]) : _vm._e(), "\n      " + _vm._s(_vm.label) + "\n    "]) : _vm._e()]), " ", _h('v-col', {
	    class: _vm.popupContainerClass,
	    attrs: {
	      "span": _vm.wrapperCol || _vm.calcWrapperCol,
	      "type": "sm"
	    }
	  }, [_h('div', {
	    class: [_vm.prefixCls + '-form-input']
	  }, [_vm._t("default"), " ", (_vm.showIcon) ? [(_vm.validStatus == 'warn') ? _h('icon', {
	    class: [_vm.prefixCls + '-form-status-icon'],
	    attrs: {
	      "type": "waring-s"
	    }
	  }) : _vm._e(), " ", (_vm.validStatus == 'error') ? _h('icon', {
	    class: [_vm.prefixCls + '-form-status-icon'],
	    attrs: {
	      "type": "error-s"
	    }
	  }) : _vm._e(), " ", (_vm.validStatus == 'success-s') ? _h('icon', {
	    class: [_vm.prefixCls + '-form-status-icon'],
	    attrs: {
	      "type": "success"
	    }
	  }) : _vm._e(), " ", (_vm.validStatus == 'help') ? _h('icon', {
	    class: [_vm.prefixCls + '-form-status-icon'],
	    attrs: {
	      "type": "help"
	    }
	  }) : _vm._e()] : _vm._e()]), " ", (_vm.tipsMode === 'popup' && _vm.popupTips) ? _h('message', {
	    class: [_vm.prefixCls + '-form-valid-popup-message'],
	    attrs: {
	      "type": _vm.popupMode,
	      "arrow": "left",
	      "show-icon": false
	    }
	  }, ["\n      " + _vm._s(_vm.popupTips) + "\n    "]) : _vm._e(), " ", (_vm.tipsMode === 'text' && _vm.tips && _vm.validStatus) ? _h('div', {
	    class: [_vm.prefixCls + '-form-status-info']
	  }, [_vm._s(_vm.tips)]) : _vm._e()])])
	},staticRenderFns: []}

/***/ }

/******/ })
});
;