(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("./icon"), require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["./icon", "vue"], factory);
	else if(typeof exports === 'object')
		exports["modal"] = factory(require("./icon"), require("vue"));
	else
		root["modal"] = factory(root["./icon"], root["Vue"]);
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

	module.exports = __webpack_require__(179);


/***/ },

/***/ 55:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_55__;

/***/ },

/***/ 128:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_128__;

/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _vue = __webpack_require__(128);

	var _vue2 = _interopRequireDefault(_vue);

	var _Modal = __webpack_require__(180);

	var _Modal2 = _interopRequireDefault(_Modal);

	var _Icon = __webpack_require__(55);

	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var iconConfig = {
	  'info': {
	    icon: 'info',
	    color: '#30b2f2'
	  },
	  'success': {
	    icon: 'success',
	    color: '#1dbf38'
	  },
	  'error': {
	    icon: 'error',
	    color: '#ff5959'
	  },
	  'confirm': {
	    icon: 'help',
	    color: '#b366ff'
	  }
	};['info', 'success', 'error', 'confirm'].forEach(function (type) {
	  _Modal2.default[type] = function (_ref) {
	    var title = _ref.title,
	        content = _ref.content,
	        onOk = _ref.onOk,
	        _ref$btnOkText = _ref.btnOkText,
	        btnOkText = _ref$btnOkText === undefined ? '确定' : _ref$btnOkText,
	        _ref$btnCancelText = _ref.btnCancelText,
	        btnCancelText = _ref$btnCancelText === undefined ? '取消' : _ref$btnCancelText;

	    var modalObj = new _vue2.default({
	      template: '\n        <modal :class="[prefixCls + \'-modal\', prefixCls + \'-confirm\', prefixCls + \'-confirm-\' + type]" :show="show" small :callback="callback">\n          <div v-if="title" slot="modal-header"></div>\n          <div slot="modal-body">\n            <div :class="[prefixCls + \'-confirm-header\']">\n              <icon :type="type" size="36" :color="color"></icon>\n              <span :class="[prefixCls + \'-confirm-title\']">{{title}}</span>\n            </div>\n            <div :class="[prefixCls + \'-confirm-content\']" v-html="content"></div>\n          </div>\n          <div slot="modal-footer" :class="[prefixCls + \'-modal-footer\']">\n            <template  v-if="type!==\'help\'">\n            <button type="button" :class="[prefixCls + \'-btn\', prefixCls + \'-btn-default\']" @click="callback">{{\'\u786E\u5B9A\' !== btnOkText ? btnOkText : \'\u77E5\u9053\u4E86\'}}</button>\n            </template>\n            <template v-else>\n            <button type="button" :class="[prefixCls + \'-btn\', prefixCls + \'-btn-default\']" @click="callback">{{btnOkText}}</button>\n            <button type="button" :class="[prefixCls + \'-btn\', prefixCls + \'-btn-tertiary\']" @click="close">' + btnCancelText + '</button>            \n            </template>\n          </div>\n        </modal>',
	      components: {
	        Modal: _Modal2.default,
	        Icon: _Icon2.default
	      },
	      data: {
	        title: title,
	        content: content,
	        type: iconConfig[type].icon,
	        color: iconConfig[type].color,
	        show: true,
	        btnOkText: '确定',
	        btnCancelText: '取消',
	        prefixCls: 'atui'
	      },
	      methods: {
	        callback: function callback() {
	          onOk && onOk();
	          this.show = false;
	        },
	        close: function close() {
	          this.show = false;
	        }
	      }
	    });

	    var elem = modalObj.$mount();
	    document.body.appendChild(elem.$el);
	  };
	});

	exports.default = _Modal2.default;

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(181)

	/* template */
	var __vue_template__ = __webpack_require__(182)
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

/***/ 181:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'Modal',
	  props: {
	    title: String,
	    show: {
	      require: true,
	      type: Boolean
	    },
	    width: String,
	    height: String,
	    callback: {
	      type: Function,
	      default: function _default() {}
	    },
	    effect: String,
	    backdrop: Boolean,
	    small: Boolean,
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  methods: {
	    open: function open() {
	      this.visible = true;
	    },
	    close: function close() {
	      this.visible = false;
	    },
	    clickBack: function clickBack() {
	      if (this.backdrop) {
	        this.close();
	      }
	    }
	  },
	  data: function data() {
	    return {
	      visible: this.show
	    };
	  },

	  watch: {
	    show: function show(val) {
	      this.visible = val;
	    },
	    visible: function visible(val) {
	      var event = val ? 'open' : 'close';
	      this.$emit(event);
	    }
	  },
	  mounted: function mounted() {
	    var me = this;
	    window.addEventListener('keyup', function (ev) {
	      if (ev.keyCode === 27) {
	        me.visible = false;
	      }
	    });
	    document.body.appendChild(this.$el);

	    if (this.show) {
	      this.visible = true;
	    }
	  },

	  computed: {
	    dialogClassObj: function dialogClassObj() {
	      var prefixCls = this.prefixCls,
	          large = this.large,
	          small = this.small;

	      var dialogClass = {};

	      dialogClass[prefixCls + '-modal-dialog'] = true;
	      dialogClass[prefixCls + '-modal-lg'] = large;
	      dialogClass[prefixCls + '-modal-sm'] = small;

	      return dialogClass;
	    }
	  }
	};

/***/ },

/***/ 182:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.visible),
	      expression: "visible"
	    }],
	    class: [_vm.prefixCls + '-modal'],
	    attrs: {
	      "role": "dialog"
	    },
	    on: {
	      "click": _vm.clickBack
	    }
	  }, [_h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.visible),
	      expression: "visible"
	    }],
	    class: _vm.dialogClassObj,
	    style: ({
	      width: _vm.width
	    }),
	    attrs: {
	      "role": "document"
	    }
	  }, [_h('div', {
	    class: [_vm.prefixCls + '-modal-content']
	  }, [_vm._t("modal-header", [_h('div', {
	    class: [_vm.prefixCls + '-modal-header']
	  }, [_h('button', {
	    class: [_vm.prefixCls + '-close'],
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": _vm.close
	    }
	  }, [_h('span', ["×"])]), " ", _h('h4', {
	    class: [_vm.prefixCls + '-modal-title']
	  }, [_vm._s(_vm.title)])])]), " ", _h('div', {
	    class: [_vm.prefixCls + '-modal-body'],
	    style: ({
	      height: _vm.height,
	      maxHeight: '500px'
	    })
	  }, [_vm._t("modal-body")]), " ", _vm._t("modal-footer", [_h('div', {
	    class: [_vm.prefixCls + '-modal-footer']
	  }, [_h('button', {
	    class: [_vm.prefixCls + '-btn', _vm.prefixCls + '-btn-default'],
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": _vm.callback
	    }
	  }, ["确定"]), " ", _h('button', {
	    class: [_vm.prefixCls + '-btn', _vm.prefixCls + '-btn-tertiary'],
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": _vm.close
	    }
	  }, ["取消"])])])])])])
	},staticRenderFns: []}

/***/ }

/******/ })
});
;