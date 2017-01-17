(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("./icon"), require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["./icon", "vue"], factory);
	else if(typeof exports === 'object')
		exports["tabs"] = factory(require("./icon"), require("vue"));
	else
		root["tabs"] = factory(root["./icon"], root["Vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_55__, __WEBPACK_EXTERNAL_MODULE_128__) {
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

	module.exports = __webpack_require__(244);


/***/ },

/***/ 55:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_55__;

/***/ },

/***/ 128:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_128__;

/***/ },

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Tabset = __webpack_require__(245);

	var _Tabset2 = _interopRequireDefault(_Tabset);

	var _Tab = __webpack_require__(248);

	var _Tab2 = _interopRequireDefault(_Tab);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_Tabset2.default.Tab = _Tab2.default;

	exports.default = _Tabset2.default;

/***/ },

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(246)

	/* template */
	var __vue_template__ = __webpack_require__(247)
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

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(128);

	var _vue2 = _interopRequireDefault(_vue);

	var _Icon = __webpack_require__(55);

	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'Tabset',
	  props: {
	    active: {
	      type: Number,
	      default: 0
	    },
	    headers: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    showLen: {
	      type: Number,
	      default: 6
	    },
	    base: {
	      type: Boolean
	    },
	    trigger: {
	      type: String,
	      default: 'click'
	    },
	    size: {
	      type: String,
	      default: 'default'
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },

	  data: function data() {
	    return {
	      renderData: [],
	      index: 2,
	      currActive: this.active,
	      translateX: 0,
	      wrapperWidth: 0,
	      navWidth: 0,
	      prev_tabIndex: 0,
	      next_tabIndex: 0,
	      itemsWidth: [],
	      maxTabIndex: 0
	    };
	  },

	  components: {
	    Icon: _Icon2.default
	  },
	  computed: {
	    listClassObj: function listClassObj() {
	      var prefixCls = this.prefixCls,
	          base = this.base,
	          size = this.size;

	      var classObj = {};

	      classObj[prefixCls + '-nav'] = true;
	      classObj[prefixCls + '-nav-tab'] = !base;
	      classObj[prefixCls + '-nav-base'] = base;
	      classObj[prefixCls + '-nav-small'] = size === 'small';

	      return classObj;
	    }
	  },
	  watch: {
	    active: function active(newVal, oldVal) {
	      this.currActive = newVal;
	    },
	    currActive: function currActive(newVal, oldVal) {
	      this.$emit('change', newVal);
	    },
	    headers: function headers() {
	      var me = this;
	      _vue2.default.nextTick(function () {
	        me.renderData = me.$children.map(function (child, index) {
	          return {
	            header: child.header,
	            disabled: child.disabled
	          };
	        });
	      });
	    }
	  },
	  methods: {
	    handleTabListClick: function handleTabListClick(index, el) {
	      if (!el.disabled) this.currActive = index;
	      this.$emit('on-tab-click', this.currActive);
	    },
	    prev: function prev() {
	      this._handleMoveX('right');
	    },
	    next: function next() {
	      this._handleMoveX('left');
	    },
	    _handleMoveX: function _handleMoveX(direction) {
	      var totalLen = this.renderData.length;
	      var prefixCls = this.prefixCls;

	      switch (direction) {
	        case 'left':
	          var maxTabIndex = totalLen - 1 + (this.showLen - 1);
	          this.maxTabIndex = maxTabIndex;
	          if (this.next_tabIndex === maxTabIndex) return;
	          this.prev_tabIndex++;
	          this.next_tabIndex = this.prev_tabIndex + this.showLen - 1;
	          break;
	        case 'right':
	          if (this.prev_tabIndex === 0) return;
	          this.next_tabIndex--;
	          this.prev_tabIndex = this.next_tabIndex - (this.showLen - 1);
	          break;
	      }
	      this.$el.querySelector('.' + prefixCls + '-nav').style.transform = 'translateX(-" + this.itemsWidth[this.prev_tabIndex].left + "px)';
	    },
	    _handleTabWidth: function _handleTabWidth() {
	      var self = this;
	      var dom = self.$el;
	      var prefixCls = self.prefixCls;
	      var nav = dom.querySelector('.' + prefixCls + '-nav');

	      var list = nav.children;
	      var showlen = this.showLen;
	      var len = list.length;
	      self.next_tabIndex = showlen - 1;

	      var i = 0;
	      for (; i < len; i++) {
	        var _itemWidth = Math.ceil(list[i].offsetWidth);
	        self.navWidth += _itemWidth;
	        self.itemsWidth.push({ width: _itemWidth, left: self.navWidth - _itemWidth });
	        if (i < showlen) {
	          self.wrapperWidth += _itemWidth;
	        }
	      }

	      self.$el.style.visibility = 'visible';
	    }
	  },
	  mounted: function mounted() {
	    this.$el.style.visibility = 'hidden';
	    var self = this;

	    setTimeout(function () {
	      self._handleTabWidth();
	    }, 30);
	  }
	};

/***/ },

/***/ 247:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    class: [_vm.prefixCls + '-tab-wrapper']
	  }, [_h('div', {
	    class: [_vm.prefixCls + '-tab-header']
	  }, [(_vm.renderData.length > _vm.showLen && _vm.showLen >= 3) ? _h('span', {
	    class: [_vm.prefixCls + '-tab-arrow-prev'],
	    on: {
	      "click": _vm.prev
	    }
	  }, [(_vm.prev_tabIndex == 0) ? _h('icon', {
	    staticStyle: {
	      "cursor": "not-allowed"
	    },
	    attrs: {
	      "type": "prev",
	      "size": "12",
	      "color": "#ccc"
	    }
	  }) : _h('icon', {
	    attrs: {
	      "type": "prev",
	      "size": "12"
	    }
	  }), " "]) : _vm._e(), " ", (_vm.trigger == 'click') ? _h('ul', {
	    class: _vm.listClassObj,
	    attrs: {
	      "role": "tablist"
	    }
	  }, [_vm._l((_vm.renderData), function(r, index) {
	    return _h('li', {
	      class: [index === _vm.currActive && (_vm.prefixCls + '-nav-active'), r.disabled && (_vm.prefixCls + '-nav-disabled')],
	      attrs: {
	        "disabled": r.disabled
	      },
	      on: {
	        "click": function($event) {
	          $event.preventDefault();
	          _vm.handleTabListClick(index, r)
	        }
	      }
	    }, [_h('a', {
	      attrs: {
	        "href": "javascript:void(0);"
	      },
	      domProps: {
	        "innerHTML": _vm._s(r.header)
	      }
	    })])
	  })]) : _h('ul', {
	    class: _vm.listClassObj,
	    attrs: {
	      "role": "tablist"
	    }
	  }, [_vm._l((_vm.renderData), function(r, index) {
	    return _h('li', {
	      class: [index === _vm.currActive && (_vm.prefixCls + '-nav-active'), r.disabled && (_vm.prefixCls + '-nav-disabled')],
	      attrs: {
	        "disabled": r.disabled
	      },
	      on: {
	        "mouseenter": function($event) {
	          $event.preventDefault();
	          _vm.handleTabListClick(index, r)
	        }
	      }
	    }, [_h('a', {
	      attrs: {
	        "href": "javascript:void(0);"
	      },
	      domProps: {
	        "innerHTML": _vm._s(r.header)
	      }
	    })])
	  })]), " ", " ", (_vm.renderData.length > _vm.showLen && _vm.showLen >= 3) ? _h('span', {
	    class: [_vm.prefixCls + '-tab-arrow-next'],
	    on: {
	      "click": _vm.next
	    }
	  }, [(_vm.next_tabIndex == _vm.maxTabIndex) ? _h('icon', {
	    staticStyle: {
	      "cursor": "not-allowed"
	    },
	    attrs: {
	      "type": "next",
	      "size": "12",
	      "color": "#ccc"
	    }
	  }) : _h('icon', {
	    attrs: {
	      "type": "next",
	      "size": "12"
	    }
	  }), " "]) : _vm._e()]), " ", " ", _h('div', {
	    ref: "tabContent",
	    staticClass: "tab-content"
	  }, [_vm._t("default")])])
	},staticRenderFns: []}

/***/ },

/***/ 248:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(249)

	/* template */
	var __vue_template__ = __webpack_require__(250)
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

/***/ 249:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(128);

	var _vue2 = _interopRequireDefault(_vue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'Tab',
	  props: {
	    header: {
	      type: String
	    },
	    disabled: {
	      type: Boolean
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  data: function data() {
	    return {
	      index: 0
	    };
	  },

	  computed: {
	    show: function show() {
	      return this.$parent.currActive === this.index;
	    },
	    transition: function transition() {
	      return this.$parent.effect;
	    }
	  },
	  created: function created() {
	    this.$parent.renderData.push({
	      header: this.header,
	      disabled: this.disabled
	    });
	  },
	  beforeDestroy: function beforeDestroy() {
	    var renderData = this.$parent.renderData;
	    var me = this;

	    this.$parent.renderData = renderData.filter(function (data) {
	      return data.header !== me.header;
	    });

	    var index = 0;
	    _vue2.default.nextTick(function () {
	      if (!me.$parent) {
	        return;
	      }
	      me.$parent.$children.forEach(function (child) {
	        console.log(child);
	        child.index = index++;
	      });

	      var tabLen = me.$parent.renderData.length;
	      me.$parent.currActive = Math.min(me.$parent.currActive, tabLen - 1);
	    });
	  },
	  mounted: function mounted() {
	    for (var c in this.$parent.$children) {
	      if (this.$parent.$children[c].$el === this.$el) {
	        this.index = +c;
	        break;
	      }
	    }
	  }
	};

/***/ },

/***/ 250:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
	    }],
	    class: [_vm.prefixCls + '-tab-pane'],
	    attrs: {
	      "role": "tabpanel",
	      "transition": _vm.transition
	    }
	  }, [_vm._t("default")])
	},staticRenderFns: []}

/***/ }

/******/ })
});
;