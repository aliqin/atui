(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("./icon"), require("./select"));
	else if(typeof define === 'function' && define.amd)
		define(["./icon", "./select"], factory);
	else if(typeof exports === 'object')
		exports["pagination"] = factory(require("./icon"), require("./select"));
	else
		root["pagination"] = factory(root["./icon"], root["./select"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_58__, __WEBPACK_EXTERNAL_MODULE_200__) {
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

	module.exports = __webpack_require__(189);


/***/ },

/***/ 58:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_58__;

/***/ },

/***/ 189:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Pagination = __webpack_require__(190);

	var _Pagination2 = _interopRequireDefault(_Pagination);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import Jumper from './Jumper.vue'

	// Pagination.Jumper = Jumper

	exports.default = _Pagination2.default;

/***/ },

/***/ 190:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(191)

	/* template */
	var __vue_template__ = __webpack_require__(202)
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

/***/ 191:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Jumper = __webpack_require__(192);

	var _Jumper2 = _interopRequireDefault(_Jumper);

	var _Pager = __webpack_require__(195);

	var _Pager2 = _interopRequireDefault(_Pager);

	var _Options = __webpack_require__(198);

	var _Options2 = _interopRequireDefault(_Options);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'Pagination',
	  props: {
	    pageSize: {
	      type: Number,
	      default: 10
	    },
	    pageSizeOptions: {
	      type: Array,
	      default: function _default() {
	        return [10, 20, 30, 40];
	      }
	    },
	    total: Number,
	    currPage: {
	      type: Number,
	      default: 1
	    },
	    showJumper: Boolean,
	    showSizeChanger: Boolean,
	    simple: Boolean,
	    mini: Boolean,
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  data: function data() {
	    return {
	      pageRange: [],
	      prevShow: 1,
	      nextShow: 1,
	      totalPage: 0,
	      currPageSize: this.pageSize,
	      currPageNum: this.currPage
	    };
	  },
	  created: function created() {
	    this.totalPage = Math.ceil(this.total / this.pageSize);
	    this.currPageNum = this.currPage;
	    this.currPageSize = this.pageSize;
	  },

	  watch: {
	    total: function total() {
	      this.getPageRange();
	    },
	    pageSize: function pageSize(_pageSize) {
	      this.currPageSize = _pageSize;
	    },
	    currPageSize: function currPageSize(newVal, oldVal) {
	      var _this = this;

	      this.totalPage = Math.ceil(this.total / newVal);
	      if (this.currPageNum > this.totalPage) {
	        this.currPageNum = this.totalPage;
	      }
	      this.getPageRange();
	      this.$nextTick(function () {
	        _this.$emit('size-change', _this.currPage, newVal);
	      });
	    },
	    currPage: function currPage() {
	      this.getPageRange();
	      // this.onChange(this.currPageNum)
	    },
	    currPageNum: function currPageNum(newVal, oldVal) {
	      if (newVal !== oldVal) {
	        this.$emit('change', newVal);
	      }
	    },
	    prevShow: function prevShow() {
	      this.getPageRange();
	    },
	    nextShow: function nextShow() {
	      this.getPageRange();
	    }
	  },
	  components: {
	    jumper: _Jumper2.default,
	    pager: _Pager2.default,
	    Options: _Options2.default
	  },
	  methods: {
	    changePageSize: function changePageSize(option) {
	      this.currPageSize = +option.value;
	      this.getPageRange();
	    },
	    getPageRange: function getPageRange() {
	      var start = 0;
	      var end = 0;
	      var me = this;
	      var showLen = me.prevShow + me.nextShow + 1;
	      var totalPage = me.totalPage = Math.ceil(me.total / me.currPageSize);
	      var prefixCls = me.prefixCls;
	      var currPage = me.currPageNum;

	      if (totalPage <= 1) {
	        start = end = 1;
	      } else if (me.totalPage <= showLen) {
	        start = 1;
	        end = totalPage;
	      } else {
	        if (currPage <= me.prevShow + 1) {
	          start = 1;
	          end = showLen;
	        } else if (currPage >= totalPage - me.nextShow) {
	          end = totalPage;
	          start = totalPage - showLen + 1;
	        } else {
	          start = currPage - me.prevShow;
	          end = currPage + me.nextShow;
	        }
	      }

	      me.pageRange = [];

	      if (me.simple) {
	        // 上一页
	        if (currPage !== 1) {
	          me.pageRange.push({ num: currPage - 1, text: '<', className: prefixCls + '-pagination-item-prev' });
	        } else {
	          me.pageRange.push({ className: prefixCls + '-pagination-item-disabled', icon: 'prev' });
	        }

	        me.pageRange.push({ num: currPage, text: currPage, className: prefixCls + '-pagination-item-current' });
	        me.pageRange.push({ text: '/', className: prefixCls + '-pagination-item-slash' });
	        me.pageRange.push({ text: totalPage });

	        // 下一页
	        if (currPage !== totalPage) {
	          me.pageRange.push({ num: currPage + 1, text: '>', className: prefixCls + '-pagination-item-next' });
	        } else {
	          me.pageRange.push({ className: prefixCls + '-pagination-item-disabled', icon: 'next' });
	        }
	      } else {
	        // 上一页
	        if (currPage !== 1) {
	          me.pageRange.push({ num: currPage - 1, text: '<', className: prefixCls + '-pagination-item-prev' });
	        } else {
	          me.pageRange.push({ className: prefixCls + '-pagination-item-disabled', icon: 'prev' });
	        }
	        // 第一页
	        if (start >= 2) {
	          me.pageRange.push({ num: 1, text: 1 });
	        }
	        // 省略号
	        if (start > 2) {
	          me.pageRange.push({ text: '...', className: prefixCls + '-pagination-item-ellipsis' });
	        }
	        // 显示的页码列表
	        for (var i = start; i <= end; i++) {
	          me.pageRange.push({
	            num: i,
	            text: i,
	            className: i === currPage ? prefixCls + '-pagination-item-current' : ''
	          });
	        }
	        // 省略号
	        if (end < totalPage - 1) {
	          me.pageRange.push({ text: '...', className: prefixCls + '-pagination-item-ellipsis' });
	        }
	        // 最后一页
	        if (end <= totalPage - 1) {
	          me.pageRange.push({ num: totalPage, text: totalPage });
	        }
	        // 下一页
	        if (currPage !== totalPage) {
	          me.pageRange.push({ num: currPage + 1, text: '>', className: prefixCls + '-pagination-item-next' });
	        } else {
	          me.pageRange.push({ className: prefixCls + '-pagination-item-disabled', icon: 'next' });
	        }
	      }
	    },
	    pageClick: function pageClick(i) {
	      if (!i) {
	        return false;
	      }
	      if (i === this.currPageNum) {
	        return false;
	      }
	      this.currPageNum = i;
	      this.getPageRange();
	      this.onChange(i);
	    },
	    onChange: function onChange(pageNum) {
	      // 新加的，暂时保持新老并存
	      // this.$emit('change', pageNum)
	    },
	    _isValid: function _isValid(page) {
	      return typeof page === 'number' && page >= 1 && page !== this.currPageNum;
	    },
	    _handleChange: function _handleChange(page) {
	      var _page = page;
	      if (this._isValid(_page)) {
	        if (_page > this.totalPage) {
	          _page = this.totalPage;
	        }
	        this.currPageNum = page;
	        this._current = page;
	        this.getPageRange();
	        this.onChange(_page);
	        return _page;
	      }

	      return this.currPageNum;
	    }
	  },
	  mounted: function mounted() {
	    this.getPageRange();
	  }
	}; //
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

/***/ },

/***/ 192:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(193)

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


/***/ },

/***/ 193:
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
	//

	exports.default = {
	  name: 'Jumper',
	  props: {
	    quickGo: {
	      type: Function,
	      default: function _default() {}
	    },
	    currPage: {
	      type: Number
	    },
	    totalPage: {
	      type: Number
	    },
	    mini: {
	      type: Boolean,
	      default: false
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  created: function created() {
	    this._current = this.currPage;
	  },

	  computed: {
	    inputClassObj: function inputClassObj() {
	      var prefixCls = this.prefixCls,
	          mini = this.mini;

	      var classObj = {};

	      classObj[prefixCls + '-pagination-input-jumper'] = !mini;
	      classObj[prefixCls + '-pagination-mini-input'] = mini;

	      return classObj;
	    },
	    btnClassObj: function btnClassObj() {
	      var prefixCls = this.prefixCls,
	          mini = this.mini;

	      var classObj = {};

	      classObj[prefixCls + '-btn'] = true;
	      classObj[prefixCls + '-btn-tertiary'] = true;
	      classObj[prefixCls + '-btn-default'] = !mini;
	      classObj[prefixCls + '-btn-small'] = mini;

	      return classObj;
	    }
	  },
	  data: function data() {
	    return {
	      _current: null
	    };
	  },

	  methods: {
	    _handleChange: function _handleChange(e) {
	      var val = e.target.value;
	      if (Number(val) > this.totalPage) {
	        this._current = this.totalPage;
	        return;
	      }
	      this._current = e.target.value;
	    },
	    _go: function _go(e) {
	      if (this._current === '') {
	        return;
	      }
	      var val = Number(this._current);
	      if (isNaN(val)) {
	        val = this.currPage;
	      }
	      var c = this.quickGo(val);
	      this._current = c;
	    }
	  }
	};

/***/ },

/***/ 194:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return (_vm.quickGo) ? _h('div', {
	    class: [_vm.prefixCls + '-pagination-jump']
	  }, [_h('div', {
	    class: [_vm.prefixCls + '-pagination-jumper-wrap']
	  }, ["\n      跳至\n      ", _h('input', {
	    class: _vm.inputClassObj,
	    attrs: {
	      "type": "text"
	    },
	    domProps: {
	      "value": _vm._current
	    },
	    on: {
	      "change": function($event) {
	        _vm._handleChange($event)
	      }
	    }
	  }), "\n      页\n    "]), " ", _h('button', {
	    class: _vm.btnClassObj,
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": _vm._go
	    }
	  }, ["\n  跳转"])]) : _vm._e()
	},staticRenderFns: []}

/***/ },

/***/ 195:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(196)

	/* template */
	var __vue_template__ = __webpack_require__(197)
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

/***/ 196:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Icon = __webpack_require__(58);

	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'Pager',
	  props: {
	    simple: {
	      type: Boolean,
	      default: false
	    },
	    mini: {
	      type: Boolean,
	      default: false
	    },
	    pageRange: {
	      type: Array,
	      default: []
	    },
	    pageClick: {
	      type: Function,
	      default: function _default() {}
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  computed: {
	    pagerClassObj: function pagerClassObj() {
	      var prefixCls = this.prefixCls,
	          mini = this.mini,
	          simple = this.simple;

	      var classObj = {};

	      classObj[prefixCls + '-pagination-items'] = !mini && !simple;
	      classObj[prefixCls + '-pagination-items-simple'] = simple && !mini;
	      classObj[prefixCls + '-pagination-items-mini'] = !simple && mini;

	      return classObj;
	    }
	  },

	  components: {
	    Icon: _Icon2.default
	  }
	}; //
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
	//
	//
	//
	//
	//
	//
	//

/***/ },

/***/ 197:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('ul', {
	    class: _vm.pagerClassObj
	  }, [_vm._l((_vm.pageRange), function(page) {
	    return _h('li', {
	      class: [_vm.prefixCls + '-pagination-item', page.className],
	      on: {
	        "click": function($event) {
	          _vm.pageClick(page.num)
	        }
	      }
	    }, [(page.className != _vm.prefixCls + '-pagination-item-prev' && page.className != _vm.prefixCls + '-pagination-item-next') ? _h('span', ["\n      " + _vm._s(page.text) + "\n    "]) : _vm._e(), " ", (page.className === _vm.prefixCls + '-pagination-item-prev') ? _h('icon', {
	      attrs: {
	        "type": "prev",
	        "size": "12",
	        "color": "#666"
	      }
	    }) : _vm._e(), " ", (page.className === _vm.prefixCls + '-pagination-item-next') ? _h('icon', {
	      attrs: {
	        "type": "next",
	        "size": "12",
	        "color": "#666"
	      }
	    }) : _vm._e(), " ", (page.className === _vm.prefixCls + '-pagination-item-disabled' && page.icon === 'prev') ? _h('icon', {
	      attrs: {
	        "type": "prev",
	        "size": "12",
	        "color": "#e6e6e6"
	      }
	    }) : _vm._e(), " ", (page.className === _vm.prefixCls + '-pagination-item-disabled' && page.icon === 'next') ? _h('icon', {
	      attrs: {
	        "type": "next",
	        "size": "12",
	        "color": "#e6e6e6"
	      }
	    }) : _vm._e()])
	  })])
	},staticRenderFns: []}

/***/ },

/***/ 198:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(199)

	/* template */
	var __vue_template__ = __webpack_require__(201)
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

/***/ 199:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Select = __webpack_require__(200);

	var _Select2 = _interopRequireDefault(_Select);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var vOption = _Select2.default.Option; //
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  name: 'Options',
	  props: {
	    total: {
	      type: Number
	    },
	    defaultSize: {
	      type: Number
	    },
	    pageSizeOptions: {
	      type: Array,
	      default: function _default() {
	        return [10, 20, 30, 40];
	      }
	    },
	    showSizeChanger: {
	      type: Boolean
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  components: {
	    vSelect: _Select2.default, vOption: vOption
	  },
	  methods: {
	    change: function change(data) {
	      this.$emit('pagination-size-change', data);
	    }
	  }
	};

/***/ },

/***/ 200:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_200__;

/***/ },

/***/ 201:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return (_vm.showSizeChanger) ? _h('div', {
	    class: [_vm.prefixCls + '-pagination-selector']
	  }, [_h('v-select', {
	    staticStyle: {
	      "width": "100px"
	    },
	    attrs: {
	      "default-value": _vm.defaultSize
	    },
	    on: {
	      "change": _vm.change
	    }
	  }, [_vm._l((_vm.pageSizeOptions), function(size) {
	    return _h('v-option', {
	      attrs: {
	        "value": size
	      }
	    }, [_vm._s(size) + " 条/页"])
	  })]), " ", _h('div', {
	    class: [_vm.prefixCls + '-pagination-totalpage']
	  }, ["共" + _vm._s(_vm.total) + "条数据"])]) : _vm._e()
	},staticRenderFns: []}

/***/ },

/***/ 202:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    class: [_vm.prefixCls + '-pagination']
	  }, [(_vm.totalPage > 1) ? [_h('options', {
	    attrs: {
	      "total": _vm.total,
	      "default-size": _vm.pageSize,
	      "page-size-options": _vm.pageSizeOptions,
	      "show-size-changer": _vm.showSizeChanger
	    },
	    on: {
	      "pagination-size-change": _vm.changePageSize
	    }
	  }), " ", _h('jumper', {
	    attrs: {
	      "quick-go": _vm.showJumper ? _vm._handleChange.bind(this) : null,
	      "curr-page": _vm.currPageNum,
	      "total-page": _vm.totalPage,
	      "mini": _vm.mini
	    }
	  }), " ", _h('pager', {
	    attrs: {
	      "page-range": _vm.pageRange,
	      "simple": _vm.simple,
	      "mini": _vm.mini,
	      "page-click": _vm.pageClick
	    }
	  })] : _vm._e()])
	},staticRenderFns: []}

/***/ }

/******/ })
});
;