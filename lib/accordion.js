(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["accordion"] = factory();
	else
		root["accordion"] = factory();
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
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Accordion = __webpack_require__(2);

	var _Accordion2 = _interopRequireDefault(_Accordion);

	var _Panel = __webpack_require__(5);

	var _Panel2 = _interopRequireDefault(_Panel);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_Accordion2.default.Panel = _Panel2.default;

	exports.default = _Accordion2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(3)

	/* template */
	var __vue_template__ = __webpack_require__(4)
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
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'Accordion',
	  props: {
	    openOne: Boolean,
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  created: function created() {
	    var _this = this;

	    this.$on('isOpenEvent', function (child) {
	      if (_this.openOne) {
	        _this.$children.forEach(function (item, index) {
	          item.index = index;
	          if (child !== item) {
	            item.openState = false;
	          }
	        });
	      }
	    });
	  },
	  mounted: function mounted() {
	    var me = this;
	    me.$children.forEach(function (item, index) {
	      item.index = index;
	    });
	  }
	};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: [_vm.prefixCls + '-panel-group']
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(6)

	/* template */
	var __vue_template__ = __webpack_require__(7)
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
/* 6 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'Panel',
	  props: {
	    open: Boolean,
	    onToggle: {
	      type: Function,
	      default: function _default() {}
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  data: function data() {
	    return {
	      height: 0,
	      openState: this.open
	    };
	  },

	  methods: {
	    clicked: function clicked() {
	      this.openState = !this.openState;
	      this.onToggle(this);
	      this.$emit('click', this);
	      this.$parent.$emit('isOpenEvent', this);
	    }
	  },
	  mounted: function mounted() {
	    var panel = this.$refs.panel;
	    panel.style.display = 'block';
	    this.height = panel.offsetHeight;
	    if (!this.openState) panel.style.display = 'none';
	  },

	  transitions: {
	    collapse: {
	      afterEnter: function afterEnter(el) {
	        el.style.maxHeight = '';
	      },
	      beforeLeave: function beforeLeave(el) {
	        el.style.maxHeight = el.offsetHeight + 'px';
	        return el.offsetHeight;
	      }
	    }
	  }
	};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: [_vm.prefixCls + '-panel', _vm.prefixCls + '-panel-default']
	  }, [_c('div', {
	    class: [_vm.prefixCls + '-panel-heading'],
	    on: {
	      "click": function($event) {
	        _vm.clicked()
	      }
	    }
	  }, [_vm._t("panel-header")], 2), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.openState),
	      expression: "openState"
	    }],
	    ref: "panel",
	    class: [_vm.prefixCls + '-panel-collapse'],
	    attrs: {
	      "transition": "collapse"
	    }
	  }, [_c('div', {
	    class: [_vm.prefixCls + '-panel-body']
	  }, [_vm._t("default")], 2)])])
	},staticRenderFns: []}

/***/ })
/******/ ])
});
;