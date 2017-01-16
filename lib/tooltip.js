(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("atui/lib/_utils/GlobalMixin"), require("./trigger"));
	else if(typeof define === 'function' && define.amd)
		define(["atui/lib/_utils/GlobalMixin", "./trigger"], factory);
	else if(typeof exports === 'object')
		exports["tooltip"] = factory(require("atui/lib/_utils/GlobalMixin"), require("./trigger"));
	else
		root["tooltip"] = factory(root["atui/lib/_utils/GlobalMixin"], root["./trigger"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_52__) {
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

	module.exports = __webpack_require__(268);


/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },

/***/ 52:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_52__;

/***/ },

/***/ 268:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Tooltip = __webpack_require__(269);

	var _Tooltip2 = _interopRequireDefault(_Tooltip);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Tooltip2.default;

/***/ },

/***/ 269:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(270)

	/* template */
	var __vue_template__ = __webpack_require__(271)
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

/***/ 270:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _GlobalMixin = __webpack_require__(2);

	var _GlobalMixin2 = _interopRequireDefault(_GlobalMixin);

	var _Trigger = __webpack_require__(52);

	var _Trigger2 = _interopRequireDefault(_Trigger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	  name: 'Tooltip',
	  mixins: [_GlobalMixin2.default],

	  components: {
	    Trigger: _Trigger2.default
	  },

	  props: {
	    trigger: {
	      type: String,
	      default: 'hover'
	    },
	    effect: {
	      type: String
	    },
	    placement: {
	      type: String,
	      default: 'top'
	    },
	    content: [String, Number],
	    popupCls: {
	      type: String,
	      default: 'tooltip'
	    }
	  },

	  methods: {
	    resetPosHandler: function resetPosHandler(data) {
	      var prefixCls = this.prefixCls,
	          popupCls = this.popupCls;
	      var $trigger = data.$trigger,
	          $popup = data.$popup,
	          placement = data.placement;

	      var $arrow = $popup.querySelector('.' + prefixCls + '-' + popupCls + '-arrow');
	      var triggerOffset = $trigger.getBoundingClientRect();

	      // 修正箭头坐标
	      if (placement.endsWith('Left')) {
	        $arrow.style.left = triggerOffset.width / 2 + 'px';
	      } else if (placement.endsWith('Right')) {
	        $arrow.style.right = triggerOffset.width / 2 + 'px';
	      } else if (placement.endsWith('Top')) {
	        $arrow.style.top = triggerOffset.height / 2 + 'px';
	      } else if (placement.endsWith('Bottom')) {
	        $arrow.style.bottom = triggerOffset.height / 2 + 'px';
	      }
	    }
	  }
	};

/***/ },

/***/ 271:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    class: [_vm.prefixCls + '-popover-cont']
	  }, [_h('trigger', {
	    attrs: {
	      "trigger": _vm.trigger,
	      "effect": _vm.effect,
	      "placement": _vm.placement,
	      "popup-cls": _vm.popupCls
	    },
	    on: {
	      "reset-pos": _vm.resetPosHandler
	    }
	  }, [_h('template', {
	    slot: "trigger"
	  }, [_vm._t("default")]), " ", _h('template', {
	    slot: "popup"
	  }, [_vm._t("popup", [_h('div', {
	    class: [_vm.prefixCls + '-tooltip-arrow']
	  }), " ", _h('div', {
	    class: [_vm.prefixCls + '-tooltip-inner'],
	    domProps: {
	      "innerHTML": _vm._s(_vm.content)
	    }
	  })], {
	    role: "tooltip"
	  })])])])
	},staticRenderFns: []}

/***/ }

/******/ })
});
;