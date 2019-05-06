(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("atui/lib/_utils/GlobalMixin"), require("./input"), require("./trigger"), require("./calendar"), require("./icon"));
	else if(typeof define === 'function' && define.amd)
		define(["atui/lib/_utils/GlobalMixin", "./input", "./trigger", "./calendar", "./icon"], factory);
	else if(typeof exports === 'object')
		exports["date-picker"] = factory(require("atui/lib/_utils/GlobalMixin"), require("./input"), require("./trigger"), require("./calendar"), require("./icon"));
	else
		root["date-picker"] = factory(root["atui/lib/_utils/GlobalMixin"], root["./input"], root["./trigger"], root["./calendar"], root["./icon"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_39__, __WEBPACK_EXTERNAL_MODULE_58__, __WEBPACK_EXTERNAL_MODULE_59__, __WEBPACK_EXTERNAL_MODULE_64__, __WEBPACK_EXTERNAL_MODULE_65__) {
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

	module.exports = __webpack_require__(61);


/***/ }),

/***/ 39:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ }),

/***/ 58:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_58__;

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_59__;

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _DatePicker = __webpack_require__(62);

	var _DatePicker2 = _interopRequireDefault(_DatePicker);

	var _RangePicker = __webpack_require__(67);

	var _RangePicker2 = _interopRequireDefault(_RangePicker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_DatePicker2.default.RangePicker = _RangePicker2.default;

	exports.default = _DatePicker2.default;

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(63)

	/* template */
	var __vue_template__ = __webpack_require__(66)
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

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _GlobalMixin = __webpack_require__(39);

	var _GlobalMixin2 = _interopRequireDefault(_GlobalMixin);

	var _Trigger = __webpack_require__(59);

	var _Trigger2 = _interopRequireDefault(_Trigger);

	var _Calendar = __webpack_require__(64);

	var _Calendar2 = _interopRequireDefault(_Calendar);

	var _Icon = __webpack_require__(65);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _Input = __webpack_require__(58);

	var _Input2 = _interopRequireDefault(_Input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'DatePicker',
	  mixins: [_GlobalMixin2.default],
	  props: {
	    value: {
	      type: Date,
	      default: function _default() {
	        return null;
	      }
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
	      default: function _default(date) {
	        return false;
	      }
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
	      currDate: this.value,
	      currDateText: this.value && this.value.toString('yyyy-MM-dd') || this.placeholder
	    };
	  },
	  mounted: function mounted() {
	    this.currDateText = this.$refs.calendar.stringify(this.currDate, this.format);
	  },


	  watch: {
	    value: function value(newVal, oldVal) {
	      if (+newVal === +oldVal) {
	        return;
	      }
	      if (newVal) {
	        this.iconColor = '#666';
	      } else {
	        this.iconColor = '#BFBFBF';
	      }
	      this.currDate = newVal;
	    },
	    currDate: function currDate(val) {
	      this.currDateText = this.$refs.calendar.stringify(this.currDate, this.format);
	      this.$emit('input', val);
	    }
	  },

	  methods: {
	    selectChange: function selectChange(text, date) {
	      this.currDate = date;
	      this.$refs.trigger.showPopup = false;

	      this.$emit('change', date);
	    }
	  }
	};

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_64__;

/***/ }),

/***/ 65:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_65__;

/***/ }),

/***/ 66:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: [_vm.prefixCls + '-datepicker']
	  }, [_c('trigger', {
	    ref: "trigger",
	    attrs: {
	      "trigger": "click",
	      "effect": "slide",
	      "placement": "bottomLeft",
	      "disabled": _vm.disabled,
	      "offset": [0, 0],
	      "popup-hide-when-click-outside": ""
	    }
	  }, [_c('div', {
	    class: [_vm.prefixCls + '-datepicker-toggle'],
	    slot: "trigger"
	  }, [_c('v-input', _vm._b({
	    attrs: {
	      "type": "text",
	      "value": _vm.currDateText,
	      "placeholder": _vm.placeholder,
	      "readonly": ""
	    }
	  }, 'v-input', {
	    disabled: _vm.disabled,
	    large: _vm.large,
	    small: _vm.small
	  })), _vm._v(" "), _c('icon', {
	    attrs: {
	      "type": "calendar",
	      "color": _vm.iconColor
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    class: [_vm.prefixCls + '-datepicker-calendar'],
	    slot: "popup"
	  }, [_c('calendar', {
	    ref: "calendar",
	    attrs: {
	      "value": _vm.currDate,
	      "format": _vm.format,
	      "locale": _vm.locale,
	      "disabled-date": _vm.disabledDate
	    },
	    on: {
	      "change": _vm.selectChange
	    }
	  })], 1)])], 1)
	},staticRenderFns: []}

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(68)

	/* template */
	var __vue_template__ = __webpack_require__(69)
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

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _DatePicker = __webpack_require__(62);

	var _DatePicker2 = _interopRequireDefault(_DatePicker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'RangePicker',
	  props: {
	    showTime: {
	      type: Boolean
	    },
	    startDate: {
	      type: Date,
	      default: function _default() {
	        return null;
	      }
	    },
	    endDate: {
	      type: Date,
	      default: function _default() {
	        return null;
	      }
	    },
	    format: {
	      default: 'yyyy-MM-dd'
	    },
	    disabled: Boolean,
	    disabledStart: {
	      type: Function,
	      default: function _default(date) {
	        return false;
	      }
	    },
	    disabledEnd: {
	      type: Function,
	      default: function _default(date) {
	        return false;
	      }
	    },
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
	      disabledEndDate: this.disabledEnd,
	      disabledStartDate: this.disabledStart
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
	      var me = this;
	      this.disabledEndDate = function (date) {
	        return date.getTime() < new Date(value).getTime() || me.disabledEnd(date);
	      };
	    },
	    setDisabledStartDate: function setDisabledStartDate(value) {
	      var me = this;
	      this.disabledStartDate = function (date) {
	        return date.getTime() > new Date(value).getTime() || me.disabledEnd(date);
	      };
	    }
	  }
	};

/***/ }),

/***/ 69:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: [_vm.prefixCls + '-datepicker-rangepicker']
	  }, [_c('date-picker', {
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
	  }), _vm._v(" "), _c('span', {
	    class: [_vm.prefixCls + '-datepicker-rangepicker-separator']
	  }, [_vm._v(" - ")]), _vm._v(" "), _c('date-picker', {
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
	  })], 1)
	},staticRenderFns: []}

/***/ })

/******/ })
});
;