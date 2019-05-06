(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("atui/lib/_utils/EventListener"), require("./tooltip"));
	else if(typeof define === 'function' && define.amd)
		define(["atui/lib/_utils/EventListener", "./tooltip"], factory);
	else if(typeof exports === 'object')
		exports["slider"] = factory(require("atui/lib/_utils/EventListener"), require("./tooltip"));
	else
		root["slider"] = factory(root["atui/lib/_utils/EventListener"], root["./tooltip"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_193__) {
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

	module.exports = __webpack_require__(190);


/***/ }),

/***/ 15:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Slider = __webpack_require__(191);

	var _Slider2 = _interopRequireDefault(_Slider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Slider2.default;

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(192)

	/* template */
	var __vue_template__ = __webpack_require__(194)
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

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Tooltip = __webpack_require__(193);

	var _Tooltip2 = _interopRequireDefault(_Tooltip);

	var _EventListener = __webpack_require__(15);

	var _EventListener2 = _interopRequireDefault(_EventListener);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'Slider',
	  props: {
	    value: [String, Number, Array],

	    disabled: null,

	    min: [String, Number],

	    max: [String, Number],

	    marks: Object,

	    included: {
	      type: Boolean,
	      default: true
	    },

	    step: [String, Number],
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },

	  data: function data() {
	    return {
	      currValue: this.value,
	      minValue: this.min,
	      maxValue: this.max,
	      width: '',
	      valueArray: [],
	      valuePercent: [],
	      dragging: false
	    };
	  },


	  components: {
	    Tooltip: _Tooltip2.default
	  },

	  watch: {
	    value: function value(val) {
	      this.currValue = val;
	    },
	    currValue: function currValue(val) {
	      this.valueArray = this.valueToArray();
	      this.$emit('input', val);
	    },
	    valueArray: function valueArray(val) {
	      if (val.length === 1) {
	        this.currValue = val[0] + '';
	      }
	    }
	  },

	  computed: {
	    range: function range() {
	      this.minValue = this.minValue || 0;
	      this.maxValue = this.maxValue || 100;
	      if (this.maxValue - this.minValue < 0) {
	        var mid = this.minValue;
	        this.minValue = this.maxValue;
	        this.maxValue = mid;
	      }
	      return this.maxValue - this.minValue;
	    },
	    unit: function unit() {
	      return Math.round(100 / this.range);
	    },
	    isDisabled: function isDisabled() {
	      return this.disabled;
	    },
	    sliderClassObj: function sliderClassObj() {
	      var prefixCls = this.prefixCls,
	          disabled = this.disabled;

	      var classObj = {};

	      classObj[prefixCls + '-slider'] = true;
	      classObj[prefixCls + '-slider-disabled'] = disabled;

	      return classObj;
	    },
	    sliderId: function sliderId() {
	      return this.id || 'slider' + new Date().getTime();
	    }
	  },

	  mounted: function mounted() {
	    var _this = this;

	    var self = this;

	    setTimeout(function () {
	      self.wrapper = self.getWrapperElement(self.sliderId);
	      self.sliderWidth = self.wrapper.getBoundingClientRect().width;
	      self.wrapperLeft = self.wrapper.getBoundingClientRect().left;

	      self.valueArray = _this.valueToArray();
	    }, 0);

	    _EventListener2.default.listen(document, 'mousemove', function (e) {
	      self.mousemove(e);
	    });

	    _EventListener2.default.listen(document, 'mouseup', function (e) {
	      self.mouseup(e);
	    });
	  },


	  methods: {
	    valueToArray: function valueToArray() {
	      var value = this.currValue.toString().replace(/[\]\[]/g, '');
	      var typeData = value.replace(/,/g, '');
	      var unit = this.unit;
	      var min = this.minValue || 0;
	      var valueArray = [];
	      var valuePercent = [];

	      if (typeData - 0 >= 0) {
	        valueArray = value.split(',');
	        valueArray.sort();

	        if (valueArray.length > 2) valueArray.length = 2;

	        for (var i = 0; i < valueArray.length; i++) {
	          valueArray[i] = this.valueRange(valueArray[i]);
	          valuePercent.push((valueArray[i] - min) * unit);
	        }
	      } else {
	        console.error('配置数据格式出错，请配置数字、数字型字符串、数字型数组、数字型数组字符串类型');
	        valueArray = [0];
	        valuePercent = [0];
	      }
	      this.valuePercent = valuePercent;
	      return valueArray;
	    },
	    valueRange: function valueRange(value) {
	      var min = this.minValue;
	      var max = this.maxValue;

	      if (min && min - 0 >= 0 && value < min) value = min;
	      if (!min && value < 0) value = 0;

	      if (max && max - 0 >= 0 && value > max) value = max;
	      if (!max && value > 100) value = 100;

	      return value;
	    },
	    sliderStartCallBack: function sliderStartCallBack(value) {
	      this.$emit('start', value, this);
	    },
	    getWrapperElement: function getWrapperElement(wrapper) {
	      return document.getElementById(wrapper);
	    },
	    clickFun: function clickFun(e) {
	      this.dragging = false;
	      this.preventEventDefaults(e);
	      this.stopEventPropagation(e);
	      if (!this.isDisabled) {
	        this.change(e);
	        this.dragging = false;
	      }
	    },
	    change: function change(e) {
	      var sliderWidth = this.sliderWidth;
	      var clickLocal = e.x + document.body.scrollLeft;
	      var wrapperLeft = this.wrapperLeft;
	      var range = this.range;
	      var unit = this.unit;
	      var clickRate = Math.round((clickLocal - wrapperLeft) / sliderWidth * range * unit);
	      var min = this.minValue || 0;
	      var max = this.maxValue || 100;
	      var clickValue = Math.round((clickLocal - wrapperLeft) / sliderWidth * range) + min;
	      var valueArray = this.valueArray;
	      var valuePercent = this.valuePercent;
	      var len = valueArray.length;

	      if (clickRate < 0) clickRate = 0;
	      if (clickRate > 100) clickRate = 100;
	      if (clickValue < min) clickValue = min;
	      if (clickValue > max) clickValue = max;

	      if (len > 1) {
	        if (clickRate - 0 >= valuePercent[1] - 0) {
	          valuePercent[1] = clickRate;
	          valueArray[1] = clickValue;
	        } else if (clickRate - 0 >= valuePercent[0] - 0) {
	          if (valuePercent[1] - clickRate < clickRate - valuePercent[0]) {
	            valuePercent[1] = clickRate;
	            valueArray[1] = clickValue;
	          } else if (valuePercent[1] - clickRate > clickRate - valuePercent[0]) {
	            valuePercent[0] = clickRate;
	            valueArray[0] = clickValue;
	          }
	        } else {
	          valuePercent[0] = clickRate;
	          valueArray[0] = clickValue;
	        }
	      } else {
	        valuePercent[0] = clickRate;
	        valueArray[0] = clickValue;
	      }

	      this.valueArray = valueArray.reverse().reverse();
	      this.valuePercent = valuePercent.reverse().reverse();

	      this.$emit('change', this.valueArray, this);
	    },
	    preventEventDefaults: function preventEventDefaults(e) {
	      if (!e) {
	        e = window.event;
	      }
	      if (e.preventDefault) {
	        e.preventDefault();
	      }
	      e.returnValue = false;
	    },
	    stopEventPropagation: function stopEventPropagation(e) {
	      if (!e) {
	        e = window.event;
	      }
	      if (e.stopPropagation) {
	        e.stopPropagation();
	      }
	      e.cancelBubble = true;
	    },
	    mousedown: function mousedown(e) {
	      if (!this.isDisabled) {
	        this.handler = e.target;
	        this.preventEventDefaults(e);
	        this.stopEventPropagation(e);
	        this.dragging = true;
	      }
	    },
	    mousemove: function mousemove(e) {
	      if (!this.isDisabled && this.dragging) {
	        this.change(e);
	      }
	    },
	    mouseup: function mouseup(e) {
	      if (this.dragging) {
	        this.dragging = false;
	        this.$emit('afterChange', this.valueArray, this);
	      }
	    }
	  }
	};

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_193__;

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: _vm.sliderClassObj,
	    attrs: {
	      "id": _vm.sliderId
	    },
	    on: {
	      "click": _vm.clickFun
	    }
	  }, [_vm._l((_vm.valuePercent), function(item, index) {
	    return [_c('tooltip', {
	      attrs: {
	        "content": _vm.valueArray[index]
	      }
	    }, [_c('div', {
	      class: [_vm.prefixCls + '-slider-handle'],
	      style: ({
	        'left': item + '%'
	      }),
	      on: {
	        "mousedown": _vm.mousedown
	      }
	    })])]
	  }), _vm._v(" "), (_vm.valuePercent.length == 1) ? [_c('div', {
	    class: [_vm.prefixCls + '-slider-track'],
	    style: ({
	      'visibility': 'visible',
	      'left': '0%',
	      'width': _vm.valuePercent[0] + '%'
	    })
	  })] : _vm._e(), _vm._v(" "), (_vm.valuePercent.length > 1) ? [_c('div', {
	    class: [_vm.prefixCls + '-slider-track'],
	    style: ({
	      'visibility': 'visible',
	      'left': _vm.valuePercent[0] + '%',
	      'width': _vm.valuePercent[1] - _vm.valuePercent[0] + '%'
	    })
	  })] : _vm._e(), _vm._v(" "), _c('div', {
	    class: [_vm.prefixCls + '-slider-step']
	  }), _vm._v(" "), _c('div', {
	    class: [_vm.prefixCls + '-slider-mark']
	  })], 2)
	},staticRenderFns: []}

/***/ })

/******/ })
});
;