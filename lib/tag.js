(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("./icon"));
	else if(typeof define === 'function' && define.amd)
		define(["./icon"], factory);
	else if(typeof exports === 'object')
		exports["tag"] = factory(require("./icon"));
	else
		root["tag"] = factory(root["./icon"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_65__) {
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

	module.exports = __webpack_require__(225);


/***/ }),

/***/ 65:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_65__;

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Tag = __webpack_require__(226);

	var _Tag2 = _interopRequireDefault(_Tag);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Tag2.default;

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(227)

	/* template */
	var __vue_template__ = __webpack_require__(228)
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

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Icon = __webpack_require__(65);

	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'Tag',
	  props: {
	    color: String,
	    closable: Boolean,
	    href: String,
	    size: {
	      type: String,
	      default: '12'
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  data: function data() {
	    return {
	      closed: false
	    };
	  },

	  methods: {
	    closeHandler: function closeHandler(e) {
	      this.$emit('close', e);
	    }
	  },
	  components: {
	    vIcon: _Icon2.default
	  }
	};

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return (!_vm.closed) ? _c('div', {
	    class: [_vm.prefixCls + '-tag', _vm.color && (_vm.prefixCls + '-tag-color')],
	    style: ({
	      'background-color': _vm.color
	    })
	  }, [_c('a', {
	    class: [_vm.prefixCls + '-tag-text'],
	    style: ({
	      'fontSize': _vm.size + 'px'
	    }),
	    attrs: {
	      "href": _vm.href,
	      "target": _vm.href ? '_blank' : ''
	    }
	  }, [_vm._t("default")], 2), _vm._v(" "), (_vm.closable) ? _c('span', {
	    class: [_vm.prefixCls + '-tag-close'],
	    on: {
	      "click": _vm.closeHandler
	    }
	  }, [_c('v-icon', {
	    attrs: {
	      "type": "close",
	      "size": _vm.size
	    }
	  })], 1) : _vm._e()]) : _vm._e()
	},staticRenderFns: []}

/***/ })

/******/ })
});
;