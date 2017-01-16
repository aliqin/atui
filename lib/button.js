(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["button"] = factory();
	else
		root["button"] = factory();
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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(23);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Button = __webpack_require__(24);

	var _Button2 = _interopRequireDefault(_Button);

	var _Group = __webpack_require__(27);

	var _Group2 = _interopRequireDefault(_Group);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_Button2.default.Group = _Group2.default;

	exports.default = _Button2.default;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(25)

	/* template */
	var __vue_template__ = __webpack_require__(26)
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
/* 25 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
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
	  name: 'Button',
	  props: {
	    type: {
	      type: String,
	      default: 'button'
	    },
	    large: Boolean,
	    small: Boolean,
	    loading: Boolean,
	    value: {
	      type: String,
	      default: ''
	    },
	    primary: Boolean,
	    secondary: Boolean,
	    tertiary: Boolean,
	    text: Boolean,
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  computed: {
	    btnClassObj: function btnClassObj() {
	      var prefixCls = this.prefixCls,
	          large = this.large,
	          small = this.small,
	          primary = this.primary,
	          secondary = this.secondary,
	          tertiary = this.tertiary,
	          text = this.text,
	          loading = this.loading;

	      var btnClass = {};
	      btnClass[prefixCls + '-btn'] = true;
	      btnClass[prefixCls + '-btn-large'] = large;
	      btnClass[prefixCls + '-btn-small'] = small;
	      btnClass[prefixCls + '-btn-primary'] = primary;
	      btnClass[prefixCls + '-btn-secondary'] = secondary;
	      btnClass[prefixCls + '-btn-tertiary'] = tertiary;
	      btnClass[prefixCls + '-btn-text'] = text;
	      btnClass[prefixCls + '-btn-loading'] = loading;

	      return btnClass;
	    }
	  }
	};

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('button', {
	    class: _vm.btnClassObj,
	    attrs: {
	      "type": _vm.type
	    }
	  }, [(_vm.loading) ? _h('span', {
	    class: [_vm.prefixCls + '-btn-loadingWrap']
	  }, [_h('span', {
	    class: [_vm.prefixCls + '-loading-bounce1']
	  }), " ", _h('span', {
	    class: [_vm.prefixCls + '-loading-bounce2']
	  }), " ", _h('span', {
	    class: [_vm.prefixCls + '-loading-bounce3']
	  })]) : _vm._e(), " ", _vm._t("default", [_vm._s(_vm.value)])])
	},staticRenderFns: []}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(28)

	/* template */
	var __vue_template__ = __webpack_require__(29)
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
/* 28 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  name: 'Group',
	  props: {
	    large: Boolean,
	    small: Boolean,
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  methods: {
	    clickBtnGroup: function clickBtnGroup(e) {
	      e.cancelBubble = true;
	      var target = e.target;
	      var $parent = target.parentNode;
	      var $btns = $parent.getElementsByClassName('btn');
	      var index = [].indexOf.call($btns, target);
	      var len = $btns.length;
	      var oldClass = '';
	      var newClass = '';
	      for (var i = 0; i < len; i++) {
	        oldClass = $btns[i].getAttribute('class');
	        newClass = oldClass.replace('active', '');
	        if (i === index) {
	          newClass += ' active';
	        }
	        $btns[i].setAttribute('class', newClass);
	      }
	      this.$emit('switch', this, index);
	    }
	  },
	  computed: {
	    btnClassObj: function btnClassObj() {
	      var prefixCls = this.prefixCls,
	          large = this.large,
	          small = this.small;

	      var btnClass = {};

	      btnClass[prefixCls + '-btn-group'] = true;
	      btnClass[prefixCls + '-btn-large'] = large;
	      btnClass[prefixCls + '-btn-small'] = small;

	      return btnClass;
	    }
	  }

	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    class: _vm.btnClassObj,
	    on: {
	      "click": _vm.clickBtnGroup
	    }
	  }, [_vm._t("default")])
	},staticRenderFns: []}

/***/ }
/******/ ])
});
;