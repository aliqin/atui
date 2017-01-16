(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("./icon"), require(undefined));
	else if(typeof define === 'function' && define.amd)
		define(["./icon", "vue"], factory);
	else if(typeof exports === 'object')
		exports["message"] = factory(require("./icon"), require("vue"));
	else
		root["message"] = factory(root["./icon"], root["Vue"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_58__, __WEBPACK_EXTERNAL_MODULE_134__) {
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

	module.exports = __webpack_require__(181);


/***/ },

/***/ 58:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_58__;

/***/ },

/***/ 134:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_134__;

/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(134);

	var _vue2 = _interopRequireDefault(_vue);

	var _Message = __webpack_require__(182);

	var _Message2 = _interopRequireDefault(_Message);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	['info', 'success', 'error', 'warning', 'loading'].forEach(function (type, i) {
	  _Message2.default[type] = function (content) {
	    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3000;
	    var placement = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'top';

	    var el = document.createElement('div');
	    document.body.appendChild(el);
	    var message = new _vue2.default({
	      el: el,
	      template: '\n        <transition :name="transition">\n          <message class="atui-message-notice" v-if="show"\n          :show="true"\n          :duration="duration"\n          :type="type"\n          :transition="transition"\n          :placement="placement"\n          show-icon\n          style="z-index:2000;">\n          {{content}}\n          </message>\n        </transition>\n        ',
	      components: {
	        Message: _Message2.default
	      },
	      data: function data() {
	        return {
	          content: content,
	          type: type,
	          duration: duration,
	          show: false,
	          transition: 'movedown',
	          placement: placement
	        };
	      },
	      mounted: function mounted() {
	        var me = this;
	        me.$nextTick(function () {
	          me.show = true;
	        });
	        if (me.duration) {
	          setTimeout(function () {
	            me.show = false;
	            setTimeout(function () {
	              me.$destroy();
	              me.$el.parentNode.removeChild(me.$el);
	            }, 1000);
	          }, duration);
	        }
	      }
	    });
	    return message;
	  };
	});

	exports.default = _Message2.default;

/***/ },

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(183)

	/* template */
	var __vue_template__ = __webpack_require__(184)
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

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Icon = __webpack_require__(58);

	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'Message',
	  props: {
	    type: {
	      type: String,
	      default: 'info'
	    },
	    closable: {
	      type: Boolean
	    },
	    showIcon: {
	      type: Boolean
	    },
	    show: {
	      type: Boolean,
	      default: true
	    },
	    duration: {
	      type: [String, Number]
	    },
	    placement: {
	      type: String
	    },
	    content: String,
	    transition: {
	      type: String,
	      default: 'fade'
	    },
	    arrow: String,
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  components: {
	    Icon: _Icon2.default
	  },
	  watch: {
	    show: function show(val) {
	      var _this = this;

	      if (this._timeout) clearTimeout(this._timeout);
	      if (val && Boolean(this.duration)) {
	        this._timeout = setTimeout(function () {
	          _this.show = false;
	        }, this.duration);
	      }
	    }
	  },
	  computed: {
	    messageClassObj: function messageClassObj() {
	      var prefixCls = this.prefixCls,
	          type = this.type,
	          arrow = this.arrow,
	          placement = this.placement;

	      var messageClass = {};
	      messageClass[prefixCls + '-message'] = true;
	      messageClass[prefixCls + '-message-success'] = type === 'success';
	      messageClass[prefixCls + '-message-warning'] = type === 'warning';
	      messageClass[prefixCls + '-message-info'] = type === 'info';
	      messageClass[prefixCls + '-message-error'] = type === 'error';
	      messageClass[prefixCls + '-message-help'] = type === 'help';
	      messageClass[prefixCls + '-message-top'] = placement === 'top';
	      messageClass[prefixCls + '-message-top-right'] = placement === 'top-right';
	      messageClass[prefixCls + '-message-center'] = placement === 'center';
	      messageClass[prefixCls + '-message-arrow'] = !!arrow;
	      messageClass[prefixCls + '-message-arrow-' + arrow] = !!arrow;
	      return messageClass;
	    }
	  },
	  methods: {
	    close: function close() {
	      this.show = false;
	      this.$emit('close');
	    }
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

/***/ },

/***/ 184:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
	    }],
	    class: _vm.messageClassObj,
	    attrs: {
	      "transition": _vm.transition,
	      "role": "alert"
	    }
	  }, [_h('div', {
	    class: [_vm.prefixCls + '-message-content']
	  }, [_h('button', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.closable),
	      expression: "closable"
	    }],
	    class: [_vm.prefixCls + '-close'],
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": _vm.close
	    }
	  }, [_h('span', ["×"])]), " ", (_vm.showIcon) ? _h('icon', {
	    attrs: {
	      "type": _vm.type + '-s'
	    }
	  }) : _vm._e(), " ", _vm._t("default", ["\n      " + _vm._s(_vm.content) + "\n    "])])])
	},staticRenderFns: []}

/***/ }

/******/ })
});
;