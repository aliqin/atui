(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["textarea"] = factory();
	else
		root["textarea"] = factory();
})(this, function() {
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

	module.exports = __webpack_require__(255);


/***/ },

/***/ 255:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Textarea = __webpack_require__(256);

	var _Textarea2 = _interopRequireDefault(_Textarea);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Textarea2.default;

/***/ },

/***/ 256:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(257)

	/* template */
	var __vue_template__ = __webpack_require__(258)
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

/***/ 257:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'Textarea',
	  props: {
	    limitWords: Number,
	    placeholder: String,
	    name: String,
	    disabled: Boolean,
	    error: Boolean,
	    success: Boolean,
	    value: {
	      type: String,
	      default: ''
	    },
	    wordsCount: Boolean,
	    countTips: {
	      type: String,
	      default: '输入字数：'
	    },
	    autosize: Boolean,
	    maxRows: [String, Number],
	    minRows: [String, Number],
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  data: function data() {
	    return {
	      content: this.value,
	      overLimit: false,
	      isDisabled: this.disabled === true || this.disabled === '',
	      preId: 'pre' + new Date().getTime()
	    };
	  },

	  watch: {
	    value: function value(newVal, oldVal) {
	      this.content = newVal;
	    },
	    content: function content(newVal, oldVal) {
	      var len = newVal.length;
	      this.curWords = len;
	      if (len >= this.limitWords - 0) {
	        this.overLimit = true;
	      } else {
	        this.overLimit = false;
	      }
	      this.$emit('input', newVal);
	    }
	  },
	  computed: {
	    curWords: function curWords() {
	      if (this.content) {
	        return this.content.length;
	      }
	      return 0;
	    },
	    textareaClassObj: function textareaClassObj() {
	      var prefixCls = this.prefixCls,
	          success = this.success,
	          error = this.error,
	          autosize = this.autosize,
	          overLimit = this.overLimit;

	      var classObj = {};

	      classObj[prefixCls + '-textarea'] = true;
	      classObj[prefixCls + '-textarea-success'] = success === true || success === '';
	      classObj[prefixCls + '-textarea-error'] = error || error === '' || overLimit;
	      classObj[prefixCls + '-textarea-autosize'] = autosize;

	      return classObj;
	    },
	    wordClassObj: function wordClassObj() {
	      var prefixCls = this.prefixCls,
	          error = this.error,
	          overLimit = this.overLimit;

	      var classObj = {};

	      classObj[prefixCls + '-words-area'] = true;
	      classObj[prefixCls + '-words-error'] = error || error === '' || overLimit;

	      return classObj;
	    }
	  },
	  mounted: function mounted() {
	    var _this = this;

	    if (this.autosize && (this.maxRows || this.minRows)) {
	      (function () {
	        var self = _this;
	        setTimeout(function () {
	          var ele = document.getElementById(self.preId);
	          var style = window.getComputedStyle ? window.getComputedStyle(ele, '') : ele.currentStyle;
	          var borderTopWidth = style.borderTopWidth.replace('px', '') - 0;
	          var borderBottomWidth = style.borderBottomWidth.replace('px', '') - 0;
	          var paddingTop = style.paddingTop.replace('px', '') - 0;
	          var paddingBottom = style.paddingBottom.replace('px', '') - 0;
	          var lineHeight = style.lineHeight.replace('px', '') - 0;
	          if (self.maxRows) {
	            ele.style.maxHeight = self.maxRows * lineHeight + borderTopWidth + borderBottomWidth + paddingTop + paddingBottom + 'px';
	          }

	          if (self.minRows) {
	            ele.style.minHeight = self.minRows * lineHeight + borderTopWidth + borderBottomWidth + paddingTop + paddingBottom + 'px';
	          }
	        }, 0);
	      })();
	    }
	  }
	};

/***/ },

/***/ 258:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    class: [_vm.prefixCls + '-textarea-box']
	  }, [_h('div', {
	    class: [_vm.prefixCls + '-textarea-wrap']
	  }, [(_vm.autosize) ? [_h('pre', {
	    attrs: {
	      "id": _vm.preId
	    }
	  }, [_h('span', [_vm._s(_vm.content)]), _h('br')])] : _vm._e(), " ", _h('textarea', _vm._b({
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.content),
	      expression: "content"
	    }],
	    class: _vm.textareaClassObj,
	    attrs: {
	      "maxlength": _vm.limitWords,
	      "name": _vm.name,
	      "placeholder": _vm.placeholder
	    },
	    domProps: {
	      "value": _vm._s(_vm.content)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.content = $event.target.value
	      }
	    }
	  }, 'textarea', {
	    disabled: _vm.isDisabled
	  }))]), " ", (_vm.limitWords) ? _h('p', {
	    class: _vm.wordClassObj
	  }, [_vm._s(_vm.curWords) + "/" + _vm._s(_vm.limitWords)]) : _vm._e(), " ", (_vm.wordsCount) ? _h('p', {
	    class: [_vm.prefixCls + '-textarea-words-area']
	  }, [_vm._s(_vm.countTips) + _vm._s(_vm.curWords)]) : _vm._e()])
	},staticRenderFns: []}

/***/ }

/******/ })
});
;