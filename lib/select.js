(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("atui/lib/_utils/GlobalMixin"), require("./trigger"), require("./icon"), require("./tag"));
	else if(typeof define === 'function' && define.amd)
		define(["atui/lib/_utils/GlobalMixin", "./trigger", "./icon", "./tag"], factory);
	else if(typeof exports === 'object')
		exports["select"] = factory(require("atui/lib/_utils/GlobalMixin"), require("./trigger"), require("./icon"), require("./tag"));
	else
		root["select"] = factory(root["atui/lib/_utils/GlobalMixin"], root["./trigger"], root["./icon"], root["./tag"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_39__, __WEBPACK_EXTERNAL_MODULE_59__, __WEBPACK_EXTERNAL_MODULE_65__, __WEBPACK_EXTERNAL_MODULE_185__) {
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

	module.exports = __webpack_require__(182);


/***/ }),

/***/ 39:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_39__;

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_59__;

/***/ }),

/***/ 65:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_65__;

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Select = __webpack_require__(183);

	var _Select2 = _interopRequireDefault(_Select);

	var _Option = __webpack_require__(187);

	var _Option2 = _interopRequireDefault(_Option);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_Select2.default.Option = _Option2.default;

	exports.default = _Select2.default;

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(184)

	/* template */
	var __vue_template__ = __webpack_require__(186)
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

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _GlobalMixin = __webpack_require__(39);

	var _GlobalMixin2 = _interopRequireDefault(_GlobalMixin);

	var _Icon = __webpack_require__(65);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _Tag = __webpack_require__(185);

	var _Tag2 = _interopRequireDefault(_Tag);

	var _Trigger = __webpack_require__(59);

	var _Trigger2 = _interopRequireDefault(_Trigger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'Select',

	  mixins: [_GlobalMixin2.default],

	  props: {
	    value: {
	      type: [String, Number, Array],
	      default: ''
	    },
	    placeholder: {
	      type: String,
	      default: '请选择'
	    },
	    dropdownClassName: {
	      type: String,
	      default: ''
	    },
	    dropdownZIndex: {
	      type: Number,
	      default: 0
	    },
	    large: Boolean,
	    small: Boolean,
	    width: {
	      type: String,
	      default: 'auto'
	    },
	    tags: Boolean,
	    multiple: Boolean,
	    limit: {
	      type: Number,
	      default: 1024
	    },
	    disabled: {
	      type: Boolean
	    }
	  },
	  components: {
	    Icon: _Icon2.default,
	    Tag: _Tag2.default,
	    Trigger: _Trigger2.default
	  },
	  created: function created() {
	    var me = this;
	    var value = this.value;
	    if (me.multiple || me.tags) {
	      me.multipleSelect = true;
	    }
	    value = me.formatValue(value);
	    if (me.value !== null || me.selectedOptions.length) {
	      me.showPlaceholder = false;
	    }
	    this.currValue = value;
	    this.$on('option-change', function (option) {
	      me.showPlaceholder = false;
	      if (me.multipleSelect) {
	        var isSelected = me.currValue.indexOf(option.value) >= 0;
	        if (!isSelected) {
	          me.currValue.push(option.value);
	        } else {
	          var index = me.currValue.indexOf(option.value);
	          me.currValue.splice(index, 1);
	        }
	      } else {
	        me.currValue = option.value;
	        this.selectedOptions = [option];
	      }
	      if (!this.multipleSelect) {
	        this.$refs.trigger.showPopup = false;
	      }
	      me.searchText = '';
	    });
	  },
	  data: function data() {
	    return {
	      searchText: '',
	      noResult: false,
	      activeIndex: 0,
	      showPlaceholder: true,
	      showNotify: false,
	      show: false,
	      currValue: this.value,
	      multipleSelect: false,
	      options: [],
	      selectedOptions: []
	    };
	  },


	  computed: {
	    showText: function showText() {
	      return this.selectedOptions && this.selectedOptions[0] && this.selectedOptions[0].label;
	    },
	    selectClassObj: function selectClassObj() {
	      var prefixCls = this.prefixCls,
	          show = this.show,
	          multipleSelect = this.multipleSelect,
	          large = this.large,
	          small = this.small;

	      var classObj = {};

	      classObj[prefixCls + '-select-cont'] = true;
	      classObj[prefixCls + '-dropdown-open'] = show;
	      classObj[prefixCls + '-select-multipleSelect'] = multipleSelect;
	      classObj[prefixCls + '-select-large'] = large;
	      classObj[prefixCls + '-select-small'] = small;

	      return classObj;
	    }
	  },

	  watch: {
	    currValue: function currValue(newVal, oldVal) {
	      this.$emit('input', newVal);
	    },
	    value: function value(val) {
	      var me = this;
	      this.currValue = this.formatValue(val);
	      if (!val) {
	        me.showPlaceholder = true;
	        return;
	      }
	      me.showPlaceholder = false;
	      if (me.multipleSelect) {
	        if (val.length > this.limit) {
	          me.showNotify = true;
	          me.currValue.pop();
	          setTimeout(function () {
	            me.showNotify = false;
	          }, 1000);
	        }

	        var options = [];
	        val.forEach(function (v) {
	          var option = me.options.filter(function (opt) {
	            return opt.value === v;
	          });
	          if (option.length) {
	            options.push(option[0]);
	          } else {
	            options.push({
	              label: v,
	              value: v,
	              disabled: false
	            });
	          }
	        });
	        me.$set(this, 'selectedOptions', options);
	      } else {
	        me.$refs.trigger.$children.forEach(function (child) {
	          if (val === child.value && !child.disabled) {
	            var option = {
	              label: child.$el.innerText,
	              value: child.value,
	              disabled: child.disabled
	            };
	            me.selectedOptions = [option];
	            child.chosen = true;
	          }
	        });
	      }
	    },
	    selectedOptions: function selectedOptions(options) {
	      this.$emit('change', this.multipleSelect ? options : options[0]);
	    }
	  },

	  methods: {
	    formatValue: function formatValue(value) {
	      var me = this;
	      value = value || me.value;

	      if (value === null) {
	        value = me.multipleSelect ? [] : '';
	      }
	      if (me.multipleSelect && !Array.isArray(value)) {
	        value = [value];
	      }
	      if (!me.multipleSelect && Array.isArray(value)) {
	        value = value.slice(0, 1);
	      }
	      if (me.multipleSelect && value.length > me.limit) {
	        value = value.slice(0, me.limit);
	      }

	      return value;
	    },
	    setValue: function setValue(value) {
	      this.currValue = value;
	    },
	    closeTag: function closeTag(option) {
	      var index = this.currValue.indexOf(option.value);
	      this.currValue.splice(index, 1);
	    },
	    deleteTag: function deleteTag(event) {
	      var input = event.target;
	      var value = input.value;
	      if (value.length === 0) {
	        var index = this.currValue.indexOf(value);
	        this.currValue.splice(index, 1);
	      }
	    },
	    onInput: function onInput(event) {
	      var input = event.target;
	      var value = input.value;
	      var width = value.length * 10;
	      this.showPlaceholder = false;
	      input.style.width = width + 10 + 'px';
	    },
	    createTag: function createTag(event) {
	      if (this.tags) {
	        var value = event.target.value;
	        if (!value || !value.trim().length) {
	          return;
	        }
	        if (this.currValue.indexOf(value) === -1) {
	          this.currValue.push(value);
	        }
	        this.searchText = '';
	        event.target.style.width = '10px';
	      }
	    },
	    focusInput: function focusInput(ev) {
	      this.$refs.searchField.focus();
	    },
	    selectDown: function selectDown(event) {},
	    selectUp: function selectUp(event) {},
	    togglePopupHandler: function togglePopupHandler(show) {
	      var me = this;
	      if (this.disabled) {
	        this.show = false;
	        return;
	      }
	      this.show = !this.show;
	      if (this.multipleSelect) {
	        this.showPlaceholder = false;
	        setTimeout(function () {
	          return me.$refs.searchField.focus();
	        }, 10);
	      }
	    }
	  }
	};

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_185__;

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: _vm.selectClassObj
	  }, [_c('trigger', {
	    ref: "trigger",
	    attrs: {
	      "trigger": "click",
	      "placement": "bottomLeft",
	      "effect": "slide",
	      "popup-hide-when-click-outside": "",
	      "disabled": _vm.disabled,
	      "width": _vm.width,
	      "show": _vm.show,
	      "popup-z-index": _vm.dropdownZIndex ? _vm.dropdownZIndex : 0,
	      "custom-popup-cls": _vm.dropdownClassName,
	      "popup-use-trigger-width": ""
	    },
	    on: {
	      "toggle-popup": _vm.togglePopupHandler
	    }
	  }, [_c('div', _vm._b({
	    class: [_vm.prefixCls + '-select-toggle', _vm.tags && (_vm.prefixCls + '-select-tags')],
	    attrs: {
	      "tabindex": "1"
	    },
	    slot: "trigger"
	  }, 'div', {
	    disabled: _vm.disabled
	  }), [(!_vm.multipleSelect) ? [_c('span', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.showPlaceholder),
	      expression: "showPlaceholder"
	    }],
	    class: [_vm.prefixCls + '-select-placeholder']
	  }, [_vm._v(_vm._s(_vm.placeholder))]), _vm._v(" "), _c('span', {
	    class: [_vm.prefixCls + '-select-btn-content']
	  }, [_vm._v(_vm._s(_vm.showText))]), _vm._v(" "), _c('span', {
	    class: [_vm.prefixCls + '-select-caret', _vm.show && (_vm.prefixCls + '-select-open')]
	  }, [_c('icon', {
	    class: [_vm.prefixCls + '-dropdown-icon'],
	    attrs: {
	      "type": "down",
	      "size": "12"
	    }
	  })], 1)] : _c('div', {
	    on: {
	      "click": _vm.focusInput
	    }
	  }, [_c('span', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.showPlaceholder),
	      expression: "showPlaceholder"
	    }],
	    class: [_vm.prefixCls + '-select-placeholder']
	  }, [_vm._v(_vm._s(_vm.placeholder))]), _vm._v(" "), _vm._l((_vm.selectedOptions), function(option) {
	    return _c('tag', {
	      attrs: {
	        "closable": ""
	      },
	      on: {
	        "close": function($event) {
	          _vm.closeTag(option)
	        }
	      }
	    }, [_vm._v(_vm._s(option.label))])
	  }), _vm._v(" "), _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.searchText),
	      expression: "searchText"
	    }],
	    ref: "searchField",
	    class: [_vm.prefixCls + '-select-search-field'],
	    attrs: {
	      "type": "text",
	      "autocomplete": "off"
	    },
	    domProps: {
	      "value": (_vm.searchText)
	    },
	    on: {
	      "input": [function($event) {
	        if ($event.target.composing) { return; }
	        _vm.searchText = $event.target.value
	      }, _vm.onInput],
	      "keydown": [function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "delete", [8, 46])) { return null; }
	        _vm.deleteTag($event)
	      }, function($event) {
	        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
	        $event.preventDefault();
	        _vm.createTag($event)
	      }],
	      "blur": _vm.createTag
	    }
	  })], 2)], 2), _vm._v(" "), _c('div', {
	    class: [_vm.prefixCls + '-dropdown-menu'],
	    style: ({
	      width: _vm.width
	    }),
	    slot: "popup"
	  }, [_vm._t("default"), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.noResult),
	      expression: "noResult"
	    }],
	    staticClass: "no-result"
	  }, [_vm._v("无结果")]), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.showNotify),
	      expression: "showNotify"
	    }],
	    staticClass: "notify",
	    attrs: {
	      "transition": "fadein"
	    }
	  }, [_vm._v("最多可选 (" + _vm._s(_vm.limit) + ")项.")])], 2)])], 1)
	},staticRenderFns: []}

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(188)

	/* template */
	var __vue_template__ = __webpack_require__(189)
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

/***/ 188:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'Option',
	  props: {
	    value: [String, Number],
	    disabled: Boolean,
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  data: function data() {
	    return {
	      active: false
	    };
	  },

	  computed: {
	    chosen: function chosen() {
	      var _this = this;

	      var me = this;
	      return me.$parent.$parent.selectedOptions.some(function (item) {
	        return item.value === _this.value;
	      });
	    },
	    show: function show() {
	      var searchText = this.$parent.$parent.searchText.trim();
	      if (searchText.length && this.$parent.$parent.multiple) {
	        return this.$el.innerText.indexOf(searchText) >= 0;
	      }
	      return true;
	    },
	    optionClassObj: function optionClassObj() {
	      var prefixCls = this.prefixCls,
	          active = this.active,
	          disabled = this.disabled,
	          chosen = this.chosen;

	      var classObj = {};

	      classObj[prefixCls + '-dropdown-option'] = true;
	      classObj[prefixCls + '-dropdown-option-disabled'] = disabled;
	      classObj[prefixCls + '-dropdown-option-active'] = active;
	      classObj[prefixCls + '-dropdown-option-chosen'] = chosen;

	      return classObj;
	    }
	  },
	  mounted: function mounted() {
	    var option = {
	      label: this.$el.innerText.trim(),
	      value: this.value,
	      disabled: this.disabled
	    };
	    this.$parent.$parent.$data.options.push(option);
	    var value = this.$parent.$parent.value;
	    if (Array.isArray(value) && value.indexOf(this.value) >= 0 || value === this.value) {
	      this.$parent.$parent.selectedOptions.push(option);
	    }
	  },

	  methods: {
	    handleClick: function handleClick() {
	      if (this.disabled) {
	        return;
	      }
	      var option = {
	        label: this.$el.innerText,
	        value: this.value
	      };
	      this.$parent.$parent.$emit('option-change', option);
	    }
	  },
	  events: {
	    valueChange: function valueChange(val) {
	      if (val === this.value && !this.disabled) {
	        var option = {
	          label: this.$el.innerText,
	          value: this.value,
	          disabled: this.disabled
	        };
	        this.$parent.$parent.selectedOptions = [option];
	        this.chosen = true;
	      }
	    }
	  }
	};

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
	    }],
	    class: _vm.optionClassObj,
	    on: {
	      "mouseup": function($event) {
	        $event.preventDefault();
	        $event.stopPropagation();
	        _vm.handleClick($event)
	      }
	    }
	  }, [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ })

/******/ })
});
;