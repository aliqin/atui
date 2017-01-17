(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("atui/lib/_utils/GlobalMixin"), require("./input"), require("./trigger"));
	else if(typeof define === 'function' && define.amd)
		define(["atui/lib/_utils/GlobalMixin", "./input", "./trigger"], factory);
	else if(typeof exports === 'object')
		exports["cascader"] = factory(require("atui/lib/_utils/GlobalMixin"), require("./input"), require("./trigger"));
	else
		root["cascader"] = factory(root["atui/lib/_utils/GlobalMixin"], root["./input"], root["./trigger"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_29__, __WEBPACK_EXTERNAL_MODULE_48__, __WEBPACK_EXTERNAL_MODULE_49__) {
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

	module.exports = __webpack_require__(45);


/***/ },

/***/ 29:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_29__;

/***/ },

/***/ 45:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Cascader = __webpack_require__(46);

	var _Cascader2 = _interopRequireDefault(_Cascader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Cascader2.default;

/***/ },

/***/ 46:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(47)

	/* template */
	var __vue_template__ = __webpack_require__(50)
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

/***/ 47:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _GlobalMixin = __webpack_require__(29);

	var _GlobalMixin2 = _interopRequireDefault(_GlobalMixin);

	var _Input = __webpack_require__(48);

	var _Input2 = _interopRequireDefault(_Input);

	var _Trigger = __webpack_require__(49);

	var _Trigger2 = _interopRequireDefault(_Trigger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'Cascader',
	  mixins: [_GlobalMixin2.default],
	  props: {
	    options: {
	      type: Array,
	      required: true
	    },
	    placeholder: {
	      type: String,
	      default: '请选择'
	    },
	    width: {
	      type: String
	    },
	    displayRender: {
	      type: Function,
	      default: function _default(label) {
	        return label.join(' / ');
	      }
	    },
	    expandTrigger: {
	      type: String,
	      default: 'click'
	    },
	    defaultValue: {
	      type: Array
	    }
	  },

	  components: {
	    vInput: _Input2.default,
	    trigger: _Trigger2.default
	  },

	  data: function data() {
	    return {
	      menus: [],
	      selectedOptions: [],
	      displayValue: ''
	    };
	  },


	  computed: {
	    selectedValue: function selectedValue() {
	      var me = this;
	      return me.selectedOptions.map(function (option) {
	        return option.value;
	      });
	    },
	    selectedLabel: function selectedLabel() {
	      var me = this;
	      return me.selectedOptions.map(function (option) {
	        return option.label;
	      });
	    }
	  },

	  created: function created() {
	    var me = this;
	    me.menus[0] = [];
	    me.options.forEach(function (option, i) {
	      me.menus[0].push({
	        label: option.label,
	        value: option.value,
	        children: option.children
	      });
	    });
	    if (me.defaultValue) {
	      me.defaultValue.forEach(function (value, i) {
	        var option = me.menus[i].filter(function (option) {
	          return option.value === value;
	        });
	        me.changeOption(i, option[0]);
	      });
	    }
	  },


	  methods: {
	    changeOption: function changeOption(index, option, event) {
	      var me = this;
	      var menus = me.menus.slice(0, index + 1);
	      if (option.disabled) {
	        return;
	      }
	      me.selectedOptions = me.selectedOptions.slice(0, index + 1);
	      me.selectedOptions[index] = option;
	      if (option.children) {
	        menus.push(option.children);
	      } else {
	        me.displayValue = me.displayRender(me.selectedLabel);

	        if (event) {
	          me.$emit('change', me.selectedValue, me.selectedOptions);
	        }
	        me.show = false;
	      }
	      me.menus = menus;
	    }
	  }
	};

/***/ },

/***/ 48:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_48__;

/***/ },

/***/ 49:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_49__;

/***/ },

/***/ 50:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    class: [_vm.prefixCls + '-cascader']
	  }, [_h('trigger', {
	    attrs: {
	      "trigger": "click",
	      "placement": "bottomLeft",
	      "effect": "slide",
	      "popup-hide-when-click-outside": ""
	    }
	  }, [_h('span', {
	    class: [_vm.prefixCls + '-cascader-picker'],
	    slot: "trigger"
	  }, [_h('v-input', {
	    style: ({
	      width: _vm.width
	    }),
	    attrs: {
	      "readonly": "",
	      "value": _vm.displayValue,
	      "placeholder": _vm.placeholder
	    }
	  })]), " ", _h('div', {
	    class: [_vm.prefixCls + '-cascader-menus'],
	    slot: "popup"
	  }, [_vm._l((_vm.menus), function(menu, index) {
	    return _h('ul', {
	      class: [_vm.prefixCls + '-cascader-menu']
	    }, [_vm._l((menu), function(option) {
	      return _h('li', {
	        class: [_vm.prefixCls + '-cascader-menu-item', _vm.selectedOptions[index] === option && _vm.prefixCls + '-cascader-selected', option.disabled && (_vm.prefixCls + '-cascader-disabled')],
	        on: {
	          "click": function($event) {
	            _vm.changeOption(index, option, $event)
	          }
	        }
	      }, [_vm._s(option.label)])
	    })])
	  })])])])
	},staticRenderFns: []}

/***/ }

/******/ })
});
;