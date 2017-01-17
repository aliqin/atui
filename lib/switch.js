(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["switch"] = factory();
	else
		root["switch"] = factory();
})(this, function() {
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

	module.exports = __webpack_require__(233);


/***/ },

/***/ 233:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Switch = __webpack_require__(234);

	var _Switch2 = _interopRequireDefault(_Switch);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Switch2.default;

/***/ },

/***/ 234:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(235)

	/* template */
	var __vue_template__ = __webpack_require__(236)
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

/***/ 235:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'Switch',
	  props: {
	    checked: Boolean,
	    value: String,
	    disabled: Boolean,
	    small: Boolean,
	    color: String,
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  data: function data() {
	    return {
	      isChecked: this.checked,
	      isDisabled: this.disabled
	    };
	  },

	  watch: {
	    checked: function checked(val, oldVal) {
	      this.isChecked = this.checked;
	    },
	    isChecked: function isChecked(val, oldVal) {
	      this.$emit('check-change', val);
	    },
	    disabled: function disabled(val, oldVal) {
	      this.isDisabled = val;
	    }
	  },
	  computed: {
	    switchClassObj: function switchClassObj() {
	      var prefixCls = this.prefixCls,
	          small = this.small,
	          isChecked = this.isChecked,
	          isDisabled = this.isDisabled;

	      var classObj = {};

	      classObj[prefixCls + '-switch'] = true;
	      classObj[prefixCls + '-switch-small'] = small;
	      classObj[prefixCls + '-switch-checked'] = isChecked;
	      classObj[prefixCls + '-switch-disabled'] = isDisabled;

	      return classObj;
	    }
	  },
	  methods: {
	    changeHandler: function changeHandler() {
	      if (this.isDisabled) {
	        return;
	      }
	      this.isChecked = !this.isChecked;
	      this.$emit('change', this);
	    }
	  }
	};

/***/ },

/***/ 236:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('span', {
	    class: _vm.switchClassObj,
	    style: ({
	      borderColor: this.isDisabled ? '#f2f2f2' : (this.isChecked) ? _vm.color : '#bfbfbf',
	      backgroundColor: this.isDisabled ? '#f2f2f2' : (this.isChecked) ? _vm.color : '#bfbfbf'
	    }),
	    on: {
	      "click": _vm.changeHandler
	    }
	  }, [_h('span', {
	    class: [_vm.prefixCls + '-switch-content']
	  }, [(_vm.isChecked && !_vm.small) ? _vm._t("checkedPart") : _vm._e(), " ", (!_vm.isChecked && !_vm.small) ? _vm._t("unCheckedPart") : _vm._e()])])
	},staticRenderFns: []}

/***/ }

/******/ })
});
;