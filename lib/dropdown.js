(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("atui/lib/_utils/GlobalMixin"), require("./trigger"));
	else if(typeof define === 'function' && define.amd)
		define(["atui/lib/_utils/GlobalMixin", "./trigger"], factory);
	else if(typeof exports === 'object')
		exports["dropdown"] = factory(require("atui/lib/_utils/GlobalMixin"), require("./trigger"));
	else
		root["dropdown"] = factory(root["atui/lib/_utils/GlobalMixin"], root["./trigger"]);
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

	module.exports = __webpack_require__(70);


/***/ }),

/***/ 39:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_59__;

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Dropdown = __webpack_require__(71);

	var _Dropdown2 = _interopRequireDefault(_Dropdown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Dropdown2.default;

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(72)

	/* template */
	var __vue_template__ = __webpack_require__(73)
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

/***/ 72:
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
	  name: 'Dropdown',
	  mixins: [_GlobalMixin2.default],
	  props: {
	    trigger: {
	      type: String,
	      default: 'click'
	    },
	    open: {
	      type: Boolean
	    },
	    hideOnClick: {
	      type: Boolean,
	      default: true
	    },
	    offset: {
	      type: Array,
	      default: function _default() {
	        return [0, 2];
	      }
	    }
	  },
	  components: {
	    Trigger: _Trigger2.default
	  },
	  data: function data() {
	    return {
	      isOpen: this.open
	    };
	  },

	  watch: {
	    open: function open(newVal, oldVal) {
	      this.isOpen = newVal;
	    },
	    isOpen: function isOpen(newVal, oldVal) {
	      this.$emit('change', newVal);
	    }
	  },
	  created: function created() {
	    var _this = this;

	    this.$on('closeDropdown', function () {
	      _this.isOpen = false;
	    });
	  },

	  methods: {
	    onTogglePopup: function onTogglePopup(val) {
	      this.isOpen = val;
	    },
	    onPopClick: function onPopClick() {
	      this.hideOnClick && (this.isOpen = false);
	    }
	  }
	};

/***/ }),

/***/ 73:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: [_vm.prefixCls + '-dropdown-cont', _vm.isOpen && (_vm.prefixCls + '-dropdown-open')]
	  }, [_c('trigger', {
	    attrs: {
	      "trigger": _vm.trigger,
	      "effect": "slide",
	      "popup-cls": "dropdown",
	      "placement": "bottomLeft",
	      "popup-hide-delay": 200,
	      "offset": _vm.offset,
	      "popup-hide-when-click-outside": "",
	      "popup-use-trigger-width": "",
	      "show": _vm.isOpen
	    },
	    on: {
	      "toggle-popup": _vm.onTogglePopup
	    }
	  }, [_c('template', {
	    slot: "trigger"
	  }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
	    class: [_vm.prefixCls + '-dropdown-menu-cont', 'atui-dropdown-menu'],
	    on: {
	      "click": _vm.onPopClick
	    },
	    slot: "popup"
	  }, [_vm._t("dropdown-menu", null, {
	    role: "dropdown"
	  })], 2)], 2)], 1)
	},staticRenderFns: []}

/***/ })

/******/ })
});
;