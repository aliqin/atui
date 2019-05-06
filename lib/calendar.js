(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("atui/lib/_utils/GlobalMixin"));
	else if(typeof define === 'function' && define.amd)
		define(["atui/lib/_utils/GlobalMixin"], factory);
	else if(typeof exports === 'object')
		exports["calendar"] = factory(require("atui/lib/_utils/GlobalMixin"));
	else
		root["calendar"] = factory(root["atui/lib/_utils/GlobalMixin"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_39__) {
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

	module.exports = __webpack_require__(36);


/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Calendar = __webpack_require__(37);

	var _Calendar2 = _interopRequireDefault(_Calendar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Calendar2.default;

/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(38)

	/* template */
	var __vue_template__ = __webpack_require__(40)
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

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _GlobalMixin = __webpack_require__(39);

	var _GlobalMixin2 = _interopRequireDefault(_GlobalMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var localeConfig = {
	  zh_CN: {
	    weekRange: ['日', '一', '二', '三', '四', '五', '六'],
	    monthNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
	  },
	  en_US: {
	    weekRange: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
	    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
	  }
	};

	exports.default = {

	  mixins: [_GlobalMixin2.default],
	  name: 'Calendar',
	  props: {
	    value: {
	      type: Date,
	      default: function _default() {
	        return new Date();
	      }
	    },
	    format: {
	      default: 'yyyy-MMMM-dd'
	    },
	    locale: {
	      default: 'zh_CN'
	    },
	    disabledDate: {
	      type: Function,
	      default: function _default() {}
	    },
	    width: {
	      type: String,
	      default: '100%'
	    },
	    show: {
	      type: Boolean,
	      default: true
	    },
	    mode: {
	      type: String,
	      default: 'month'
	    }
	  },
	  data: function data() {
	    return {
	      weekRange: localeConfig[this.locale].weekRange,
	      dateRange: [],
	      decadeRange: [],
	      currDate: new Date(),
	      displayDayView: true,
	      displayMonthView: false,
	      displayYearView: false,
	      monthNames: localeConfig[this.locale].monthNames
	    };
	  },

	  watch: {
	    value: function value(val) {
	      this.currDate = val;
	    },
	    currDate: function currDate() {
	      this.getDateRange();
	    },
	    disabledDate: function disabledDate() {
	      this.getDateRange();
	    }
	  },
	  methods: {
	    close: function close() {
	      this.displayDayView = this.displayMonthView = this.displayMonthView = false;
	    },
	    preNextDecadeClick: function preNextDecadeClick(flag) {
	      var year = this.currDate.getFullYear();
	      var months = this.currDate.getMonth();
	      var date = this.currDate.getDate();

	      if (flag === 0) {
	        this.currDate = new Date(year - 10, months, date);
	      } else {
	        this.currDate = new Date(year + 10, months, date);
	      }
	    },
	    preNextMonthClick: function preNextMonthClick(flag) {
	      var year = this.currDate.getFullYear();
	      var month = this.currDate.getMonth();
	      var date = this.currDate.getDate();
	      if (flag === 0) {
	        var preMonth = this.getYearMonth(year, month - 1);
	        this.currDate = new Date(preMonth.year, preMonth.month, date);
	      } else {
	        var nextMonth = this.getYearMonth(year, month + 1);
	        this.currDate = new Date(nextMonth.year, nextMonth.month, date);
	      }
	    },
	    preNextYearClick: function preNextYearClick(flag) {
	      var year = this.currDate.getFullYear();
	      var months = this.currDate.getMonth();
	      var date = this.currDate.getDate();

	      if (flag === 0) {
	        this.currDate = new Date(year - 1, months, date);
	      } else {
	        this.currDate = new Date(year + 1, months, date);
	      }
	    },
	    yearSelect: function yearSelect(year) {
	      this.displayYearView = false;
	      this.displayMonthView = true;
	      this.currDate = new Date(year, this.currDate.getMonth(), this.currDate.getDate());
	    },
	    daySelect: function daySelect(date, event) {
	      var el = event.target;
	      var prefixCls = this.prefixCls;

	      if (el.className.split(' ').indexOf(prefixCls + '-calendar-item-disable') >= 0) {
	        return false;
	      } else {
	        this.currDate = date;

	        this.$emit('change', this.stringify(this.currDate), date);
	      }
	    },
	    switchMonthView: function switchMonthView() {
	      this.displayDayView = false;
	      this.displayMonthView = true;
	    },
	    switchDecadeView: function switchDecadeView() {
	      this.displayMonthView = false;
	      this.displayYearView = true;
	    },
	    monthSelect: function monthSelect(index) {
	      this.displayMonthView = false;
	      this.displayDayView = true;
	      this.currDate = new Date(this.currDate.getFullYear(), index, this.currDate.getDate());
	    },
	    getYearMonth: function getYearMonth(year, month) {
	      if (month > 11) {
	        year++;
	        month = 0;
	      } else if (month < 0) {
	        year--;
	        month = 11;
	      }
	      return { year: year, month: month };
	    },
	    stringifyDecadeHeader: function stringifyDecadeHeader(date) {
	      var yearStr = date.getFullYear().toString();
	      var firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0;
	      var lastYearOfDecade = parseInt(firstYearOfDecade, 10) + 10;
	      return firstYearOfDecade + '-' + lastYearOfDecade;
	    },
	    stringifyDayHeader: function stringifyDayHeader(date) {
	      return date.getFullYear() + '年' + this.monthNames[date.getMonth()] + '月';
	    },
	    parseMonth: function parseMonth(date) {
	      return this.monthNames[date.getMonth()];
	    },
	    stringifyYearHeader: function stringifyYearHeader(date) {
	      return date.getFullYear();
	    },
	    stringify: function stringify(date) {
	      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.format;

	      if (!date) {
	        return;
	      }
	      var year = date.getFullYear();
	      var month = date.getMonth() + 1;
	      var day = date.getDate();
	      var monthName = this.parseMonth(date);

	      return format.replace(/yyyy/g, year).replace(/MMMM/g, monthName).replace(/MMM/g, monthName.substring(0, 3)).replace(/MM/g, ('0' + month).slice(-2)).replace(/dd/g, ('0' + day).slice(-2)).replace(/yy/g, year).replace(/M(?!a)/g, month).replace(/d/g, day);
	    },
	    parse: function parse(strOrDate) {
	      var date = new Date(strOrDate);
	      return isNaN(date.getFullYear()) ? new Date() : date;
	    },
	    getDayCount: function getDayCount(year, month) {
	      var dict = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	      if (month === 1) {
	        if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
	          return 29;
	        }
	        return 28;
	      }
	      return dict[month];
	    },
	    getDateRange: function getDateRange() {
	      var prefixCls = this.prefixCls;

	      var today = new Date();

	      var time = {
	        year: this.currDate.getFullYear(),
	        month: this.currDate.getMonth(),
	        day: this.currDate.getDate()
	      };
	      var yearStr = time.year.toString();
	      var firstYearOfDecade = yearStr.substring(0, yearStr.length - 1) + 0 - 1;

	      this.dateRange = [];
	      this.decadeRange = [];

	      for (var i = 0; i < 12; i++) {
	        this.decadeRange.push({
	          text: firstYearOfDecade + i
	        });
	      }
	      var currMonthFirstDay = new Date(time.year, time.month, 1);
	      var firstDayWeek = currMonthFirstDay.getDay() + 1;
	      if (firstDayWeek === 0) {
	        firstDayWeek = 7;
	      }
	      var dayCount = this.getDayCount(time.year, time.month);
	      if (firstDayWeek > 1) {
	        var preMonth = this.getYearMonth(time.year, time.month - 1);
	        var prevMonthDayCount = this.getDayCount(preMonth.year, preMonth.month);
	        for (var _i = 1; _i < firstDayWeek; _i++) {
	          var dayText = prevMonthDayCount - firstDayWeek + _i + 1;
	          var date = new Date(preMonth.year, preMonth.month, dayText);
	          var sclass = this.disabledDate(date) ? prefixCls + '-calendar-item-disable' : prefixCls + '-calendar-item-gray';
	          this.dateRange.push({
	            text: dayText,
	            date: date,
	            sclass: sclass
	          });
	        }
	      }

	      for (var _i2 = 1; _i2 <= dayCount; _i2++) {
	        var _date = new Date(time.year, time.month, _i2);

	        var _sclass = '';

	        if (_i2 === today.getDate() && today.getFullYear() === time.year && today.getMonth() === time.month) {
	          _sclass = 'atui-calendar-item-today';
	        }

	        if (_i2 === time.day) {
	          if (this.value) {
	            var valueDate = this.value;
	            if (valueDate) {
	              if (valueDate.getFullYear() === time.year && valueDate.getMonth() === time.month) {
	                _sclass = 'atui-calendar-dateRange-item-active';
	              }
	            }
	          }
	        }

	        if (this.disabledDate(_date)) {
	          _sclass = 'atui-calendar-item-disable';
	        }

	        this.dateRange.push({
	          text: _i2,
	          date: _date,
	          sclass: _sclass
	        });
	      }

	      if (this.dateRange.length < 42) {
	        var nextMonthNeed = 42 - this.dateRange.length;
	        var nextMonth = this.getYearMonth(time.year, time.month + 1);
	        for (var _i3 = 1; _i3 <= nextMonthNeed; _i3++) {
	          var _date2 = new Date(nextMonth.year, nextMonth.month, _i3);
	          var _sclass2 = this.disabledDate(_date2) ? 'atui-calendar-item-disable' : 'atui-calendar-item-gray';
	          this.dateRange.push({
	            text: _i3,
	            date: _date2,
	            sclass: _sclass2
	          });
	        }
	      }
	    }
	  },
	  mounted: function mounted() {
	    this.$emit('child-created', this);
	    this.currDate = this.value || new Date();
	  }
	};

/***/ }),

/***/ 39:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ }),

/***/ 40:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
	    }],
	    class: [_vm.prefixCls + '-calendar']
	  }, [_c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.displayDayView),
	      expression: "displayDayView"
	    }],
	    class: [_vm.prefixCls + '-calendar-popup']
	  }, [_c('div', {
	    class: [_vm.prefixCls + '-calendar-inner']
	  }, [_c('div', {
	    class: [_vm.prefixCls + '-calendar-header']
	  }, [_c('span', {
	    class: [_vm.prefixCls + '-calendar-month-btn', _vm.prefixCls + '-calendar-preBtn'],
	    on: {
	      "click": function($event) {
	        _vm.preNextMonthClick(0)
	      }
	    }
	  }, [_vm._v("‹")]), _vm._v(" "), _c('span', {
	    class: [_vm.prefixCls + '-calendar-month-btn', _vm.prefixCls + '-calendar-nextBtn'],
	    on: {
	      "click": function($event) {
	        _vm.preNextMonthClick(1)
	      }
	    }
	  }, [_vm._v("›")]), _vm._v(" "), _c('p', {
	    on: {
	      "click": _vm.switchMonthView
	    }
	  }, [_vm._v(_vm._s(_vm.stringifyDayHeader(_vm.currDate)))])]), _vm._v(" "), _c('div', {
	    class: [_vm.prefixCls + '-calendar-body']
	  }, [_c('div', {
	    class: [_vm.prefixCls + '-calendar-weekRange']
	  }, _vm._l((_vm.weekRange), function(w) {
	    return _c('span', [_vm._v(_vm._s(w))])
	  })), _vm._v(" "), _c('div', {
	    class: [_vm.prefixCls + '-calendar-dateRange']
	  }, _vm._l((_vm.dateRange), function(d) {
	    return _c('span', {
	      class: d.sclass,
	      on: {
	        "click": function($event) {
	          _vm.daySelect(d.date, $event)
	        }
	      }
	    }, [_vm._v(_vm._s(d.text))])
	  }))]), _vm._v(" "), _c('div', {
	    class: [_vm.prefixCls + '-calendar-footer']
	  }, [_c('a', {
	    class: [_vm.prefixCls + '-calendar-today-btn'],
	    attrs: {
	      "role": "button",
	      "title": _vm.stringifyDayHeader(_vm.currDate)
	    },
	    on: {
	      "click": function($event) {
	        _vm.daySelect(new Date(), $event)
	      }
	    }
	  }, [_vm._v("今天")])])])]), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.displayMonthView),
	      expression: "displayMonthView"
	    }],
	    class: [_vm.prefixCls + '-calendar-popup']
	  }, [_c('div', {
	    class: [_vm.prefixCls + '-calendar-inner']
	  }, [_c('div', {
	    class: [_vm.prefixCls + '-calendar-header']
	  }, [_c('span', {
	    class: ['month-btn', _vm.prefixCls + '-calendar-preBtn'],
	    on: {
	      "click": function($event) {
	        _vm.preNextYearClick(0)
	      }
	    }
	  }, [_vm._v("<")]), _vm._v(" "), _c('span', {
	    class: ['month-btn', _vm.prefixCls + '-calendar-nextBtn'],
	    on: {
	      "click": function($event) {
	        _vm.preNextYearClick(1)
	      }
	    }
	  }, [_vm._v(">")]), _vm._v(" "), _c('p', {
	    on: {
	      "click": _vm.switchDecadeView
	    }
	  }, [_vm._v(_vm._s(_vm.stringifyYearHeader(_vm.currDate)))])]), _vm._v(" "), _c('div', {
	    class: [_vm.prefixCls + '-calendar-body']
	  }, [_c('div', {
	    class: [_vm.prefixCls + '-calendar-monthRange']
	  }, [_vm._l((_vm.monthNames), function(m, index) {
	    return [_c('span', {
	      class: [(_vm.monthNames[_vm.value && _vm.value.getMonth()] === m) &&
	        _vm.currDate.getFullYear() === _vm.value && _vm.value.getFullYear() && _vm.prefixCls + '-calendar-dateRange-item-active'
	      ],
	      on: {
	        "click": function($event) {
	          _vm.monthSelect(index)
	        }
	      }
	    }, [_vm._v(_vm._s(m.substr(0, 3)))])]
	  })], 2)])])]), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.displayYearView),
	      expression: "displayYearView"
	    }],
	    class: [_vm.prefixCls + '-calendar-popup']
	  }, [_c('div', {
	    class: [_vm.prefixCls + '-calendar-inner']
	  }, [_c('div', {
	    class: [_vm.prefixCls + '-calendar-header']
	  }, [_c('span', {
	    class: ['month-btn', _vm.prefixCls + '-calendar-preBtn'],
	    on: {
	      "click": function($event) {
	        _vm.preNextDecadeClick(0)
	      }
	    }
	  }, [_vm._v("<")]), _vm._v(" "), _c('span', {
	    class: ['month-btn', _vm.prefixCls + '-calendar-nextBtn'],
	    on: {
	      "click": function($event) {
	        _vm.preNextDecadeClick(1)
	      }
	    }
	  }, [_vm._v(">")]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.stringifyDecadeHeader(_vm.currDate)))])]), _vm._v(" "), _c('div', {
	    class: [_vm.prefixCls + '-calendar-body']
	  }, [_c('div', {
	    class: [_vm.prefixCls + '-calendar-monthRange decadeRange']
	  }, [_vm._l((_vm.decadeRange), function(decade) {
	    return [_c('span', {
	      class: [_vm.value && _vm.value.getFullYear() === decade.text && _vm.prefixCls + '-calendar-dateRange-item-active'],
	      on: {
	        "click": function($event) {
	          $event.stopPropagation();
	          _vm.yearSelect(decade.text)
	        }
	      }
	    }, [_vm._v(_vm._s(decade.text))])]
	  })], 2)])])])])
	},staticRenderFns: []}

/***/ })

/******/ })
});
;