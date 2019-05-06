(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("atui/lib/_utils/cssAnimationSupported"));
	else if(typeof define === 'function' && define.amd)
		define(["atui/lib/_utils/cssAnimationSupported"], factory);
	else if(typeof exports === 'object')
		exports["spin"] = factory(require("atui/lib/_utils/cssAnimationSupported"));
	else
		root["spin"] = factory(root["atui/lib/_utils/cssAnimationSupported"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_198__) {
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

	module.exports = __webpack_require__(195);


/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Spin = __webpack_require__(196);

	var _Spin2 = _interopRequireDefault(_Spin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Spin2.default;

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(197)

	/* template */
	var __vue_template__ = __webpack_require__(199)
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

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _cssAnimationSupported = __webpack_require__(198);

	var _cssAnimationSupported2 = _interopRequireDefault(_cssAnimationSupported);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'Spin',
	  props: {
	    show: Boolean,
	    sping: Boolean,
	    tip: String,
	    size: {
	      type: String,
	      default: 'default'
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  data: function data() {
	    return {
	      visible: this.show,
	      isSupportAnimation: _cssAnimationSupported2.default
	    };
	  },

	  computed: {
	    spinClassObj: function spinClassObj() {
	      var prefixCls = this.prefixCls,
	          size = this.size,
	          sping = this.sping;

	      var classObj = {};
	      classObj[prefixCls + '-spin'] = true;
	      classObj[prefixCls + '-spin-' + size] = true;
	      classObj[prefixCls + '-sping'] = sping;
	      return classObj;
	    }
	  },
	  created: function created() {
	    if (this.sping) {
	      this.visible = true;
	    }
	  },

	  watch: {
	    sping: function sping(val) {
	      this.visible = val;
	    },
	    show: function show(newVal, oldVal) {
	      this.visible = newVal;
	    },
	    visible: function visible(newVal, oldVal) {
	      this.$emit('toggle', newVal);
	    }
	  }
	};

/***/ }),

/***/ 198:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_198__;

/***/ }),

/***/ 199:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: _vm.spinClassObj
	  }, [(_vm.isSupportAnimation || !_vm.tip) ? _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.visible),
	      expression: "visible"
	    }],
	    class: [_vm.prefixCls + '-sping-point']
	  }, [_c('div'), _vm._v(" "), _c('div'), _vm._v(" "), _c('div')]) : _c('p', {
	    class: [_vm.prefixCls + '-sping-text']
	  }, [_vm._v(_vm._s(_vm.tip || '加载中...'))]), _vm._v(" "), _c('div', {
	    class: [_vm.prefixCls + '-sping-content']
	  }, [_vm._t("default")], 2)])
	},staticRenderFns: []}

/***/ })

/******/ })
});
;