(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("./icon"));
	else if(typeof define === 'function' && define.amd)
		define(["./icon"], factory);
	else if(typeof exports === 'object')
		exports["steps"] = factory(require("./icon"));
	else
		root["steps"] = factory(root["./icon"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_55__) {
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

	module.exports = __webpack_require__(226);


/***/ },

/***/ 55:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_55__;

/***/ },

/***/ 226:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Steps = __webpack_require__(227);

	var _Steps2 = _interopRequireDefault(_Steps);

	var _Step = __webpack_require__(230);

	var _Step2 = _interopRequireDefault(_Step);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_Steps2.default.Step = _Step2.default;

	exports.default = _Steps2.default;

/***/ },

/***/ 227:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(228)

	/* template */
	var __vue_template__ = __webpack_require__(229)
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

/***/ 228:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'Steps',
	  props: {
	    current: {
	      type: Number,
	      default: 0
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  watch: {
	    current: function current() {
	      this.mapPropsToChildComponent();
	    }
	  },
	  data: function data() {
	    return {
	      itemsWidth: [],
	      previousStepsWidth: '',
	      isDisplayNone: false
	    };
	  },

	  methods: {
	    mapPropsToChildComponent: function mapPropsToChildComponent() {
	      var self = this;
	      var len = this.$children.length - 1;

	      this.$children.forEach(function (child, index) {
	        child.stepNumber = (index + 1).toString();
	        child.lastStep = index === len;
	        child.color = self.color;

	        if (index === self.current) {
	          child.status = 'process';
	        } else if (index < self.current) {
	          child.status = 'finish';
	        } else {
	          child.status = 'wait';
	        }
	      });
	    },
	    _handleTailWidth: function _handleTailWidth() {
	      var self = this;
	      var dom = self.$el;
	      var len = dom.children.length - 1;
	      this.itemsWidth = new Array(len + 1);

	      self._setStyleByDisplay();

	      var i = 0;
	      for (; i <= len - 1; i++) {
	        var _item = this.$el.children[i].children;
	        this.itemsWidth[i] = Math.ceil(_item[0].offsetWidth + _item[1].children[0].offsetWidth);
	      }
	      this.itemsWidth[i] = Math.ceil(this.$el.children[len].offsetWidth);

	      this.previousStepsWidth = Math.floor(this.$el.offsetWidth);
	      this._updateLayout();

	      this.$children.forEach(function (child, index) {
	        child.tailWidth = self.itemsWidth.length === 0 || index === len ? 'auto' : self.itemsWidth[index] + self.tailWidth + 'px';
	      });

	      self._recoverDefaultStyle();
	    },
	    _updateLayout: function _updateLayout() {
	      var len = this.$children.length - 1;
	      var tw = 0;
	      this.itemsWidth.forEach(function (w) {
	        tw += w;
	      });
	      var dw = Math.floor((this.previousStepsWidth - tw) / len) * 0.6 - 1;
	      if (dw <= 0) {
	        return;
	      }
	      this.tailWidth = dw;
	    },
	    _setStyleByDisplay: function _setStyleByDisplay() {
	      var self = this;
	      var style = self.$el.style;
	      var display = self._getStyle(this.$el, 'display');

	      if (display === 'none' && !self.isDisplayNone) {
	        style.display = 'block';
	        style.opacity = 0;
	        self.isDisplayNone = true;
	      }
	    },
	    _recoverDefaultStyle: function _recoverDefaultStyle() {
	      var self = this;
	      var style = self.$el.style;

	      if (self.isDisplayNone) {
	        style.display = 'none';
	        style.opacity = 1;
	        self.isDisplayNone = false;
	      }
	    },
	    _getStyle: function _getStyle(elem, name) {
	      if (elem.style[name]) {
	        return elem.style[name];
	      } else if (document.defaultView && document.defaultView.getComputedStyle) {
	        name = name.replace(/([A-Z])/g, '-$1');
	        name = name.toLowerCase();

	        var s = document.defaultView.getComputedStyle(elem, '');
	        return s && s.getPropertyValue(name);
	      } else {
	        return null;
	      }
	    },
	    resize: function resize() {
	      var w = Math.floor(this.$el.offsetWidth);
	      if (this.previousStepsWidth === w) {
	        return;
	      }
	      this.previousStepsWidth = w;
	      this._updateLayout();
	    }
	  },
	  mounted: function mounted() {
	    var _this = this;

	    this.mapPropsToChildComponent();

	    setTimeout(function () {
	      _this._handleTailWidth();
	    }, 30);
	  }
	};

/***/ },

/***/ 229:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    class: [_vm.prefixCls + '-steps']
	  }, [_vm._t("default")])
	},staticRenderFns: []}

/***/ },

/***/ 230:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(231)

	/* template */
	var __vue_template__ = __webpack_require__(232)
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

/***/ 231:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Icon = __webpack_require__(55);

	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'Step',
	  data: function data() {
	    return {
	      status: 'process',
	      stepNumber: 0,
	      lastStep: false,
	      tailWidth: 'auto'
	    };
	  },

	  props: {
	    title: String,
	    description: String,
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  computed: {
	    stepClassObj: function stepClassObj() {
	      var prefixCls = this.prefixCls,
	          status = this.status,
	          lastStep = this.lastStep;

	      var classObj = {};

	      classObj[prefixCls + '-step'] = true;
	      classObj[prefixCls + '-step-status-process'] = status === 'process';
	      classObj[prefixCls + '-step-status-finish'] = status === 'finish';
	      classObj[prefixCls + '-step-status-wait'] = status === 'wait';
	      classObj[prefixCls + '-step-item-last'] = lastStep;

	      return classObj;
	    }
	  },
	  components: {
	    Icon: _Icon2.default
	  }
	};

/***/ },

/***/ 232:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    class: _vm.stepClassObj,
	    style: ({
	      'width': _vm.tailWidth
	    })
	  }, [(!_vm.lastStep) ? _h('div', {
	    class: [_vm.prefixCls + '-step-tail']
	  }, [_h('i')]) : _vm._e(), " ", _h('div', {
	    class: [_vm.prefixCls + '-step-head']
	  }, [_h('div', {
	    class: [_vm.prefixCls + '-step-head-inner']
	  }, [(_vm.status !== 'finish') ? _h('span', {
	    class: [_vm.prefixCls + '-step-icon']
	  }, ["\n      " + _vm._s(_vm.stepNumber) + "\n    "]) : _h('span', {
	    class: [_vm.prefixCls + '-step-finish-icon']
	  }, [_h('icon', {
	    attrs: {
	      "type": "success",
	      "size": "28"
	    }
	  })]), " "])]), " ", _h('div', {
	    class: [_vm.prefixCls + '-step-main']
	  }, [_h('div', {
	    class: [_vm.prefixCls + '-step-main-title']
	  }, [_vm._s(_vm.title)]), " ", _h('div', {
	    class: [_vm.prefixCls + '-step-main-description']
	  }, [_vm._s(_vm.description)])])])
	},staticRenderFns: []}

/***/ }

/******/ })
});
;