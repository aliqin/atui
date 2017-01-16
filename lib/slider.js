(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("atui/lib/_utils/EventListener"), require("./tooltip"));
	else if(typeof define === 'function' && define.amd)
		define(["atui/lib/_utils/EventListener", "./tooltip"], factory);
	else if(typeof exports === 'object')
		exports["slider"] = factory(require("atui/lib/_utils/EventListener"), require("./tooltip"));
	else
		root["slider"] = factory(root["atui/lib/_utils/EventListener"], root["./tooltip"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_224__) {
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

	module.exports = __webpack_require__(221);


/***/ },

/***/ 1:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },

/***/ 221:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Slider = __webpack_require__(222);

	var _Slider2 = _interopRequireDefault(_Slider);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Slider2.default;

/***/ },

/***/ 222:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(223)

	/* template */
	var __vue_template__ = __webpack_require__(225)
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

/***/ 223:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Tooltip = __webpack_require__(224);

	var _Tooltip2 = _interopRequireDefault(_Tooltip);

	var _EventListener = __webpack_require__(1);

	var _EventListener2 = _interopRequireDefault(_EventListener);

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
	//
	//
	//

	exports.default = {
	  name: 'Slider',
	  props: {
	    // 默认值/初识位置，也可实时获取最新值
	    value: [String, Number, Array],
	    // 不可用状态
	    disabled: null,
	    // 区间，最小值
	    min: [String, Number],
	    // 区间，最大值
	    max: [String, Number],
	    // 分段式滑块配置
	    marks: Object,
	    // 不同标记间的关系，默认为包含关系，false表示是并列关系
	    included: {
	      type: Boolean,
	      default: true
	    },
	    // 每步的步数，如果为0，则只能到marks标记位置
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
	    /**
	     * 取值区间差
	     */
	    range: function range() {
	      // let min = this.min
	      // let max = this.max
	      this.minValue = this.minValue || 0;
	      this.maxValue = this.maxValue || 100;
	      if (this.maxValue - this.minValue < 0) {
	        var mid = this.minValue;
	        this.minValue = this.maxValue;
	        this.maxValue = mid;
	      }
	      return this.maxValue - this.minValue;
	    },

	    /**
	     * 每个取值单位所占总长度的比例
	     */
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
	    /**
	     * 组件配置数据统一转Array
	     * 且最多只能配置两个取值数据
	     */
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

	        // 最多只能配置两个数据
	        if (valueArray.length > 2) valueArray.length = 2;

	        // 取值不能超过区间
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


	    /**
	     * slider组件初始化回调
	     * @param  {[type]} value [description]
	     * @return {[type]}       [description]
	     */
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

/***/ },

/***/ 224:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_224__;

/***/ },

/***/ 225:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    class: _vm.sliderClassObj,
	    attrs: {
	      "id": _vm.sliderId
	    },
	    on: {
	      "click": _vm.clickFun
	    }
	  }, [_vm._l((_vm.valuePercent), function(item, index) {
	    return [_h('tooltip', {
	      attrs: {
	        "content": _vm.valueArray[index]
	      }
	    }, [_h('div', {
	      class: [_vm.prefixCls + '-slider-handle'],
	      style: ({
	        'left': item + '%'
	      }),
	      on: {
	        "mousedown": _vm.mousedown
	      }
	    })])]
	  }), " ", (_vm.valuePercent.length == 1) ? [_h('div', {
	    class: [_vm.prefixCls + '-slider-track'],
	    style: ({
	      'visibility': 'visible',
	      'left': '0%',
	      'width': _vm.valuePercent[0] + '%'
	    })
	  }), " "] : _vm._e(), " ", (_vm.valuePercent.length > 1) ? [_h('div', {
	    class: [_vm.prefixCls + '-slider-track'],
	    style: ({
	      'visibility': 'visible',
	      'left': _vm.valuePercent[0] + '%',
	      'width': _vm.valuePercent[1] - _vm.valuePercent[0] + '%'
	    })
	  })] : _vm._e(), " ", _h('div', {
	    class: [_vm.prefixCls + '-slider-step']
	  }), " ", _h('div', {
	    class: [_vm.prefixCls + '-slider-mark']
	  })])
	},staticRenderFns: []}

/***/ }

/******/ })
});
;