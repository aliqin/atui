(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("atui/lib/_utils/GlobalMixin"), require("./trigger"));
	else if(typeof define === 'function' && define.amd)
		define(["atui/lib/_utils/GlobalMixin", "./trigger"], factory);
	else if(typeof exports === 'object')
		exports["popover"] = factory(require("atui/lib/_utils/GlobalMixin"), require("./trigger"));
	else
		root["popover"] = factory(root["atui/lib/_utils/GlobalMixin"], root["./trigger"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_39__, __WEBPACK_EXTERNAL_MODULE_59__) {
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

	module.exports = __webpack_require__(172);


/***/ }),

/***/ 39:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_59__;

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Popover = __webpack_require__(173);

	var _Popover2 = _interopRequireDefault(_Popover);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Popover2.default;

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(174)

	/* template */
	var __vue_template__ = __webpack_require__(175)
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

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _GlobalMixin = __webpack_require__(39);

	var _GlobalMixin2 = _interopRequireDefault(_GlobalMixin);

	var _Trigger = __webpack_require__(59);

	var _Trigger2 = _interopRequireDefault(_Trigger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'Popover',
	  mixins: [_GlobalMixin2.default],
	  components: {
	    Trigger: _Trigger2.default
	  },
	  props: {
	    trigger: String,
	    effect: String,
	    visible: {
	      type: Boolean
	    },
	    popCls: {
	      type: String,
	      default: ''
	    },
	    popZIndex: {
	      type: Number,
	      default: 0
	    },
	    placement: String,
	    title: String,
	    content: String,
	    showHeader: {
	      type: Boolean,
	      default: true
	    },
	    alwaysShow: Boolean
	  },
	  methods: {
	    onTogglePopup: function onTogglePopup(show) {
	      this.$emit('pop-change', show);
	    }
	  }
	};

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: [_vm.prefixCls + '-popover-cont']
	  }, [_c('trigger', {
	    attrs: {
	      "v:ref": "trigger",
	      "trigger": _vm.trigger,
	      "effect": _vm.effect,
	      "placement": _vm.placement,
	      "popup-cls": "popover",
	      "popup-always-show": _vm.alwaysShow,
	      "show": _vm.visible,
	      "popup-z-index": _vm.popZIndex ? _vm.popZIndex : 0,
	      "custom-popup-cls": _vm.popCls
	    },
	    on: {
	      "toggle-popup": _vm.onTogglePopup
	    }
	  }, [_c('template', {
	    slot: "trigger"
	  }, [_vm._t("default")], 2), _vm._v(" "), _c('template', {
	    slot: "popup"
	  }, [_vm._t("popup", [_c('div', {
	    class: [_vm.prefixCls + '-popover-arrow']
	  }), _vm._v(" "), _c('h3', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.showHeader && _vm.title),
	      expression: "showHeader && title"
	    }],
	    class: [_vm.prefixCls + '-popover-title']
	  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('div', {
	    class: [_vm.prefixCls + '-popover-content']
	  }, [_vm._t("content", [_c('span', {
	    domProps: {
	      "innerHTML": _vm._s(_vm.content)
	    }
	  })])], 2)], {
	    role: "popover"
	  })], 2)], 2)], 1)
	},staticRenderFns: []}

/***/ })

/******/ })
});
;