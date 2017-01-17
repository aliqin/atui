(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("atui/lib/_utils/GlobalMixin"), require("./input"), require("./trigger"), require("./calendar"), require("./icon"));
	else if(typeof define === 'function' && define.amd)
		define(["atui/lib/_utils/GlobalMixin", "./input", "./trigger", "./calendar", "./icon"], factory);
	else if(typeof exports === 'object')
		exports["date-picker"] = factory(require("atui/lib/_utils/GlobalMixin"), require("./input"), require("./trigger"), require("./calendar"), require("./icon"));
	else
		root["date-picker"] = factory(root["atui/lib/_utils/GlobalMixin"], root["./input"], root["./trigger"], root["./calendar"], root["./icon"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_29__, __WEBPACK_EXTERNAL_MODULE_48__, __WEBPACK_EXTERNAL_MODULE_49__, __WEBPACK_EXTERNAL_MODULE_54__, __WEBPACK_EXTERNAL_MODULE_55__) {
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

	module.exports = __webpack_require__(51);


/***/ },

/***/ 29:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_29__;

/***/ },

/***/ 48:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_48__;

/***/ },

/***/ 49:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_49__;

/***/ },

/***/ 51:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _DatePicker = __webpack_require__(52);

	var _DatePicker2 = _interopRequireDefault(_DatePicker);

	var _RangePicker = __webpack_require__(57);

	var _RangePicker2 = _interopRequireDefault(_RangePicker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_DatePicker2.default.RangePicker = _RangePicker2.default;

	exports.default = _DatePicker2.default;

/***/ },

/***/ 52:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(53)

	/* template */
	var __vue_template__ = __webpack_require__(56)
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

/***/ 53:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _GlobalMixin = __webpack_require__(29);

	var _GlobalMixin2 = _interopRequireDefault(_GlobalMixin);

	var _Trigger = __webpack_require__(49);

	var _Trigger2 = _interopRequireDefault(_Trigger);

	var _Calendar = __webpack_require__(54);

	var _Calendar2 = _interopRequireDefault(_Calendar);

	var _Icon = __webpack_require__(55);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _Input = __webpack_require__(48);

	var _Input2 = _interopRequireDefault(_Input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'DatePicker',
	  mixins: [_GlobalMixin2.default],
	  props: {
	    value: {
	      type: String
	    },
	    placeholder: {
	      type: String,
	      default: '请选择日期'
	    },
	    format: {
	      default: 'yyyy-MM-dd'
	    },
	    locale: {
	      default: 'zh_CN'
	    },
	    disabledDate: {
	      type: Function,
	      default: function _default(date) {}
	    },
	    disabled: Boolean,
	    large: Boolean,
	    small: Boolean
	  },

	  components: {
	    Icon: _Icon2.default, Calendar: _Calendar2.default, Trigger: _Trigger2.default, VInput: _Input2.default
	  },

	  data: function data() {
	    return {
	      iconColor: '#BFBFBF',
	      show: false,
	      selectedValue: this.value
	    };
	  },


	  watch: {
	    value: function value(val) {
	      if (val) {
	        this.iconColor = '#666';
	        return;
	      }
	      this.iconColor = '#BFBFBF';
	    }
	  },

	  methods: {
	    selectChange: function selectChange(value) {
	      this.selectedValue = value;
	      this.$refs.trigger.showPopup = false;

	      this.$emit('change', value);
	    }
	  }
	};

/***/ },

/***/ 54:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_54__;

/***/ },

/***/ 55:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_55__;

/***/ },

/***/ 56:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    class: [_vm.prefixCls + '-datepicker']
	  }, [_h('trigger', {
	    ref: "trigger",
	    attrs: {
	      "trigger": "click",
	      "effect": "slide",
	      "placement": "bottomLeft",
	      "disabled": _vm.disabled,
	      "popup-hide-when-click-outside": ""
	    }
	  }, [_h('div', {
	    class: [_vm.prefixCls + '-datepicker-toggle'],
	    slot: "trigger"
	  }, [_h('v-input', _vm._b({
	    attrs: {
	      "type": "text",
	      "value": _vm.selectedValue,
	      "placeholder": _vm.placeholder,
	      "readonly": ""
	    }
	  }, 'v-input', {
	    disabled: _vm.disabled,
	    large: _vm.large,
	    small: _vm.small
	  })), " ", " ", _h('icon', {
	    attrs: {
	      "type": "calendar",
	      "color": _vm.iconColor
	    }
	  })]), " ", _h('div', {
	    class: [_vm.prefixCls + '-datepicker-calendar'],
	    slot: "popup"
	  }, [_h('calendar', {
	    ref: "calendar",
	    attrs: {
	      "value": _vm.selectedValue,
	      "format": _vm.format,
	      "locale": _vm.locale,
	      "disabled-date": _vm.disabledDate
	    },
	    on: {
	      "change": _vm.selectChange
	    }
	  })])])])
	},staticRenderFns: []}

/***/ },

/***/ 57:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(58)

	/* template */
	var __vue_template__ = __webpack_require__(59)
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

/***/ 58:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _DatePicker = __webpack_require__(52);

	var _DatePicker2 = _interopRequireDefault(_DatePicker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'RangePicker',
	  props: {
	    showTime: {
	      type: Boolean
	    },
	    startDate: {
	      type: String
	    },
	    endDate: {
	      type: String
	    },
	    format: {
	      default: 'yyyy-MM-dd'
	    },
	    disabled: Boolean,
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  components: {
	    DatePicker: _DatePicker2.default
	  },
	  data: function data() {
	    return {
	      selectedStartDate: this.startDate,
	      selectedEndDate: this.endDate,
	      disabledEndDate: function disabledEndDate() {},
	      disabledStartDate: function disabledStartDate() {}
	    };
	  },

	  methods: {
	    onStartDateChange: function onStartDateChange(value) {
	      var me = this;
	      me.setDisabledEndDate(value);
	      me.selectedStartDate = value;
	      if (me.selectedStartDate) {
	        me.$emit('change', me.selectedStartDate, me.selectedEndDate);
	      }
	    },
	    onEndDateChange: function onEndDateChange(value) {
	      var me = this;
	      me.setDisabledStartDate(value);
	      me.selectedEndDate = value;
	      if (me.selectedStartDate) {
	        me.$emit('change', me.selectedStartDate, me.selectedEndDate);
	      }
	    },
	    setDisabledEndDate: function setDisabledEndDate(value) {
	      this.disabledEndDate = function (date) {
	        return date.getTime() < new Date(value + ' 00:00:00').getTime();
	      };
	    },
	    setDisabledStartDate: function setDisabledStartDate(value) {
	      this.disabledStartDate = function (date) {
	        return date.getTime() > new Date(value + ' 00:00:00').getTime();
	      };
	    }
	  }
	};

/***/ },

/***/ 59:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    class: [_vm.prefixCls + '-datepicker-rangepicker']
	  }, [_h('date-picker', {
	    ref: "startDate",
	    attrs: {
	      "value": _vm.selectedStartDate,
	      "disabled": _vm.disabled,
	      "format": _vm.format,
	      "placeholder": "开始日期",
	      "disabled-date": _vm.disabledStartDate
	    },
	    on: {
	      "change": _vm.onStartDateChange
	    }
	  }), " ", _h('span', {
	    class: [_vm.prefixCls + '-datepicker-rangepicker-separator']
	  }, [" - "]), " ", _h('date-picker', {
	    ref: "endDate",
	    attrs: {
	      "value": _vm.selectedEndDate,
	      "disabled": _vm.disabled,
	      "format": _vm.format,
	      "placeholder": "结束日期",
	      "disabled-date": _vm.disabledEndDate
	    },
	    on: {
	      "change": _vm.onEndDateChange
	    }
	  })])
	},staticRenderFns: []}

/***/ }

/******/ })
});
;