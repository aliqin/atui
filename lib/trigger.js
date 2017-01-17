(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("atui/lib/_utils/GlobalMixin"), require("atui/lib/_utils/EventListener"));
	else if(typeof define === 'function' && define.amd)
		define(["atui/lib/_utils/GlobalMixin", "atui/lib/_utils/EventListener"], factory);
	else if(typeof exports === 'object')
		exports["trigger"] = factory(require("atui/lib/_utils/GlobalMixin"), require("atui/lib/_utils/EventListener"));
	else
		root["trigger"] = factory(root["atui/lib/_utils/GlobalMixin"], root["atui/lib/_utils/EventListener"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_29__, __WEBPACK_EXTERNAL_MODULE_219__) {
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

	module.exports = __webpack_require__(275);


/***/ },

/***/ 29:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_29__;

/***/ },

/***/ 219:
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_219__;

/***/ },

/***/ 275:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Trigger = __webpack_require__(276);

	var _Trigger2 = _interopRequireDefault(_Trigger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Trigger2.default;

/***/ },

/***/ 276:
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(277)

	/* template */
	var __vue_template__ = __webpack_require__(278)
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

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _GlobalMixin = __webpack_require__(29);

	var _GlobalMixin2 = _interopRequireDefault(_GlobalMixin);

	var _EventListener = __webpack_require__(219);

	var _EventListener2 = _interopRequireDefault(_EventListener);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'Trigger',
	  mixins: [_GlobalMixin2.default],
	  props: {
	    trigger: {
	      type: String,
	      default: 'click'
	    },
	    effect: {
	      type: String,
	      default: 'zoom'
	    },
	    placement: {
	      type: String,
	      default: 'bottom'
	    },
	    width: {
	      type: String,
	      default: '100%'
	    },
	    offset: {
	      type: Array,
	      default: function _default() {
	        return [0, 2];
	      }
	    },
	    popupCls: {
	      type: String,
	      default: 'popup'
	    },
	    popupAlwaysInView: {
	      type: Boolean,
	      default: true
	    },
	    popupAlwaysShow: {
	      type: Boolean
	    },
	    popupHideWhenClickOutside: {
	      type: Boolean
	    },

	    popupCoverTrigger: {
	      type: Boolean
	    },
	    popupHideDelay: {
	      type: Number,
	      default: 0
	    },
	    triggerUsePopupWidth: {
	      type: Boolean
	    },
	    popupUseTriggerWidth: {
	      type: Boolean
	    },
	    show: {
	      type: Boolean
	    },
	    disabled: {
	      type: Boolean
	    }
	  },

	  data: function data() {
	    return {
	      position: {
	        top: 0,
	        left: 0
	      },
	      showPopup: this.show,
	      popupPlacement: this.placement
	    };
	  },


	  computed: {
	    popupClassObj: function popupClassObj() {
	      var prefixCls = this.prefixCls,
	          popupCls = this.popupCls,
	          placement = this.placement;

	      var classObj = {};

	      classObj[prefixCls + '-popup'] = true;
	      classObj[prefixCls + '-' + popupCls] = true;
	      classObj[prefixCls + '-' + popupCls + '-top'] = placement === 'top';
	      classObj[prefixCls + '-' + popupCls + '-top-left'] = placement === 'topLeft';
	      classObj[prefixCls + '-' + popupCls + '-top-right'] = placement === 'topRight';
	      classObj[prefixCls + '-' + popupCls + '-left'] = placement === 'left';
	      classObj[prefixCls + '-' + popupCls + '-left-top'] = placement === 'leftTop';
	      classObj[prefixCls + '-' + popupCls + '-left-bottom'] = placement === 'leftBottom';
	      classObj[prefixCls + '-' + popupCls + '-right'] = placement === 'right';
	      classObj[prefixCls + '-' + popupCls + '-right-top'] = placement === 'rightTop';
	      classObj[prefixCls + '-' + popupCls + '-right-bottom'] = placement === 'rightBottom';
	      classObj[prefixCls + '-' + popupCls + '-bottom'] = placement === 'bottom';
	      classObj[prefixCls + '-' + popupCls + '-bottom-left'] = placement === 'bottomLeft';
	      classObj[prefixCls + '-' + popupCls + '-bottom-right'] = placement === 'bottomRight';

	      return classObj;
	    }
	  },

	  watch: {
	    showPopup: function showPopup(val, oldVal) {
	      this.$emit('toggle-popup', val);
	    },
	    show: function show(val, oldVal) {
	      this.showPopup = val;
	    }
	  },

	  mounted: function mounted() {
	    var _this = this;

	    var me = this;
	    var $trigger = me.$refs.trigger;
	    var $popup = me.$refs.popup;
	    var $triggerTarget = $trigger.querySelector('input, textarea');
	    var trigger = this.trigger,
	        popupHideWhenClickOutside = this.popupHideWhenClickOutside,
	        triggerUsePopupWidth = this.triggerUsePopupWidth,
	        popupAlwaysShow = this.popupAlwaysShow,
	        popupUseTriggerWidth = this.popupUseTriggerWidth;

	    if (trigger === 'focus') {
	      me._focusEvent = _EventListener2.default.listen($triggerTarget, 'focus', function () {
	        me.showPopup = true;
	        _this.$nextTick(function () {
	          _this.resetPos();
	        });
	      });

	      me._blurEvent = _EventListener2.default.listen($triggerTarget, 'blur', function () {
	        setTimeout(function () {
	          me.showPopup = false;
	        }, 100);
	      });
	    }

	    if (!popupAlwaysShow && popupHideWhenClickOutside) {
	      this._closeEvent = _EventListener2.default.listen(window, 'click', function (ev) {
	        if (!$popup.contains(ev.target) && !$trigger.contains(ev.target)) {
	          me.showPopup = false;
	        }
	      });
	    }

	    if (triggerUsePopupWidth) {
	      $popup.style.visibility = 'hidden';
	      $popup.style.display = 'block';
	      $trigger.style.width = window.getComputedStyle($popup).width;
	      $popup.style.visibility = '';
	      $popup.style.display = 'none';
	    }

	    if (popupUseTriggerWidth) {
	      $popup.style.minWidth = window.getComputedStyle($trigger).width;
	    }

	    if (popupAlwaysShow) {
	      $popup.style.visibility = 'hidden';
	      this.showPopup = true;
	      this.$nextTick(function () {
	        _this.resetPos();
	      });
	      $popup.style.visibility = '';
	    }

	    this.$nextTick(function () {
	      if (_this.$refs.popup) {
	        document.body.appendChild(_this.$refs.popup);
	      }
	    });
	  },
	  created: function created() {
	    console.log('created');
	    this.showPopup = this.show;
	  },


	  methods: {
	    enablePopupInView: function enablePopupInView(data) {
	      var popupPlacement = this.popupPlacement;
	      var triggerOffset = data.triggerOffset,
	          triggerWidth = data.triggerWidth,
	          triggerHeight = data.triggerHeight,
	          popupWidth = data.popupWidth,
	          popupHeight = data.popupHeight;

	      var triggerTop = triggerOffset.top;
	      var triggerLeft = triggerOffset.left;
	      var winWidth = window.innerWidth;
	      var winHeight = window.innerHeight;
	      var fixedPlacement = popupPlacement;
	      var hasFix = false;

	      if (~fixedPlacement.indexOf('top')) {
	        if (triggerTop < popupHeight) {
	          fixedPlacement = fixedPlacement.replace('top', 'bottom');
	          hasFix = true;
	        }
	      } else if (~fixedPlacement.indexOf('bottom')) {
	        if (winHeight - triggerTop - triggerHeight < popupHeight) {
	          fixedPlacement = fixedPlacement.replace('bottom', 'top');
	          hasFix = true;
	        }
	      } else if (~fixedPlacement.indexOf('left')) {
	        if (triggerLeft < popupWidth) {
	          fixedPlacement = fixedPlacement.replace('left', 'right');
	          hasFix = true;
	        }
	      } else if (~fixedPlacement.indexOf('right')) {
	        if (winWidth - triggerLeft - triggerWidth < popupWidth) {
	          fixedPlacement = fixedPlacement.replace('right', 'left');
	          hasFix = true;
	        }
	      }
	      if (this.endsWith('Top', fixedPlacement)) {
	        if (winHeight - triggerTop - triggerHeight < popupHeight) {
	          fixedPlacement = fixedPlacement.replace('Top', 'Bottom');
	          hasFix = true;
	        }
	      } else if (this.endsWith('Bottom', fixedPlacement)) {
	        if (triggerTop < popupHeight) {
	          fixedPlacement = fixedPlacement.replace('Bottom', 'Top');
	          hasFix = true;
	        }
	      } else if (this.endsWith('Left', fixedPlacement)) {
	        if (winWidth - triggerLeft - triggerWidth < popupWidth) {
	          fixedPlacement = fixedPlacement.replace('Left', 'Right');
	          hasFix = true;
	        }
	      } else if (this.endsWith('Right', fixedPlacement)) {
	        if (triggerLeft < popupWidth) {
	          fixedPlacement = fixedPlacement.replace('Right', 'Left');
	          hasFix = true;
	        }
	      }

	      if (hasFix) {
	        this.resetPos(fixedPlacement);
	      } else {
	        this.resetPos(this.placement);
	      }
	    },
	    resetPos: function resetPos(inPlacement) {
	      var me = this;
	      var popupAlwaysInView = this.popupAlwaysInView,
	          offset = this.offset,
	          popupCoverTrigger = this.popupCoverTrigger;

	      var $popup = me.$refs.popup;

	      if (!inPlacement && me.show && $popup.offsetWidth === 0) {
	        setTimeout(function () {
	          me.resetPos();
	        }, 0);
	        return;
	      }

	      var $trigger = me.$refs.trigger.children[0];
	      var triggerOffset = $trigger.getBoundingClientRect();
	      var triggerLeft = document.documentElement.scrollLeft + document.body.scrollLeft + triggerOffset.left;
	      var triggerTop = document.documentElement.scrollTop + document.body.scrollTop + triggerOffset.top;
	      var triggerWidth = triggerOffset.width;
	      var triggerHeight = triggerOffset.height;
	      var popupWidth = $popup.offsetWidth;
	      var popupHeight = $popup.offsetHeight;

	      if (popupAlwaysInView && !inPlacement) {
	        return this.enablePopupInView({
	          triggerOffset: triggerOffset,
	          triggerWidth: triggerWidth,
	          triggerHeight: triggerHeight,
	          popupWidth: popupWidth,
	          popupHeight: popupHeight
	        });
	      }

	      if (inPlacement) {
	        this.popupPlacement = inPlacement;
	      }

	      switch (this.popupPlacement) {
	        case 'top':
	          me.position.left = triggerLeft - popupWidth / 2 + triggerWidth / 2;
	          me.position.top = triggerTop - popupHeight - 4;
	          break;
	        case 'topLeft':
	          me.position.left = triggerLeft;
	          me.position.top = triggerTop - popupHeight - 4;
	          break;
	        case 'topRight':
	          me.position.left = triggerLeft + triggerWidth - popupWidth;
	          me.position.top = triggerTop - popupHeight;
	          break;
	        case 'left':
	          me.position.left = triggerLeft - popupWidth;
	          me.position.top = triggerTop + triggerHeight / 2 - popupHeight / 2;
	          break;
	        case 'leftTop':
	          me.position.left = triggerLeft - popupWidth;
	          me.position.top = triggerTop;
	          break;
	        case 'leftBottom':
	          me.position.left = triggerLeft - popupWidth;
	          me.position.top = triggerTop + triggerHeight - popupHeight;
	          break;
	        case 'right':
	          me.position.left = triggerLeft + triggerWidth;
	          me.position.top = triggerTop + triggerHeight / 2 - popupHeight / 2;
	          break;
	        case 'rightTop':
	          me.position.left = triggerLeft + triggerWidth;
	          me.position.top = triggerTop;
	          break;
	        case 'rightBottom':
	          me.position.left = triggerLeft + triggerWidth;
	          me.position.top = triggerTop + triggerHeight - popupHeight;
	          break;
	        case 'bottom':
	          me.position.left = triggerLeft - popupWidth / 2 + triggerWidth / 2;
	          me.position.top = triggerTop + triggerHeight;
	          break;
	        case 'bottomLeft':
	          me.position.left = triggerLeft;
	          me.position.top = triggerTop + triggerHeight;
	          break;
	        case 'bottomRight':
	          me.position.left = triggerLeft + triggerWidth - popupWidth;
	          me.position.top = triggerTop + triggerHeight;
	          break;
	        default:
	          console.log('Wrong placement prop');
	      }

	      if (popupCoverTrigger) {
	        if (~this.placement.indexOf('top')) {
	          offset[1] = triggerHeight;
	        } else if (~this.placement.indexOf('bottom')) {
	          offset[1] = -triggerHeight;
	        }
	      }

	      $popup.style.left = this.position.left + offset[0] + 'px';
	      $popup.style.top = this.position.top + offset[1] + 'px';

	      this.$emit('reset-pos', {
	        $trigger: $trigger,
	        $popup: $popup,
	        placement: this.popupPlacement
	      });
	    },
	    endsWith: function endsWith(target, source) {
	      return source.lastIndexOf(target) + target.length === source.length;
	    },
	    clickHandler: function clickHandler(ev) {
	      var _this2 = this;

	      if (this.disabled) return;

	      this.showPopup = !this.showPopup;

	      if (this.showPopup) {
	        this.$nextTick(function () {
	          _this2.resetPos();
	        });
	      }
	    },
	    hoverHandler: function hoverHandler(ev) {
	      var _this3 = this;

	      if (this.disabled) return;

	      var me = this;
	      var popupHideDelay = this.popupHideDelay;
	      var type = ev.type;


	      if (popupHideDelay && this._mouseLeaveTimer) clearTimeout(this._mouseLeaveTimer);

	      if (type === 'mouseenter') {
	        this.showPopup = true;
	        this.$nextTick(function () {
	          _this3.resetPos();
	        });
	      } else {
	        if (popupHideDelay) {
	          this._mouseLeaveTimer = setTimeout(function () {
	            me.showPopup = false;
	          }, popupHideDelay);
	        } else {
	          this.showPopup = false;
	        }
	      }
	    },
	    focusHandler: function focusHandler(ev) {
	      var _this4 = this;

	      if (this.disabled) return;

	      var type = ev.type;


	      if (type === 'focus') {
	        this.showPopup = true;
	        this.$nextTick(function () {
	          _this4.resetPos();
	        });
	      } else {
	        this.showPopup = false;
	      }
	    }
	  },

	  beforeDestroy: function beforeDestroy() {
	    var $popup = this.$refs.popup;

	    if ($popup && $popup.nodeType) {
	      $popup.parentNode.removeChild($popup);
	    }

	    if (this._blurEvent) {
	      this._blurEvent.remove();
	      this._focusEvent.remove();
	    }

	    if (this._closeEvent) {
	      this._closeEvent.remove();
	    }

	    this._mouseLeaveTimer = null;
	  }
	};

/***/ },

/***/ 278:
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    class: [_vm.prefixCls + '-trigger-cont'],
	    staticStyle: {
	      "width": "100%"
	    }
	  }, [(_vm.popupAlwaysShow) ? _h('div', {
	    ref: "trigger",
	    class: [_vm.prefixCls + '-trigger', _vm.disabled && (_vm.prefixCls + '-trigger-disabled')]
	  }, [_vm._t("trigger")]) : _vm._e(), " ", (_vm.trigger === 'click' && !_vm.popupAlwaysShow) ? _h('div', {
	    ref: "trigger",
	    class: [_vm.prefixCls + '-trigger', _vm.disabled && (_vm.prefixCls + '-trigger-disabled')],
	    on: {
	      "click": _vm.clickHandler
	    }
	  }, [_vm._t("trigger")]) : _vm._e(), " ", (_vm.trigger === 'hover') ? _h('div', {
	    ref: "trigger",
	    class: [_vm.prefixCls + '-trigger', _vm.disabled && (_vm.prefixCls + '-trigger-disabled')],
	    on: {
	      "mouseenter": _vm.hoverHandler,
	      "mouseleave": _vm.hoverHandler
	    }
	  }, [_vm._t("trigger")]) : _vm._e(), " ", (_vm.trigger === 'focus' || _vm.trigger === 'always') ? _h('div', {
	    ref: "trigger",
	    class: [_vm.prefixCls + '-trigger', _vm.disabled && (_vm.prefixCls + '-trigger-disabled')]
	  }, [_vm._t("trigger")]) : _vm._e(), " ", (_vm.trigger === 'hover') ? _h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.showPopup),
	      expression: "showPopup"
	    }],
	    ref: "popup",
	    class: _vm.popupClassObj,
	    attrs: {
	      "transition": _vm.effect
	    },
	    on: {
	      "mouseenter": _vm.hoverHandler,
	      "mouseleave": _vm.hoverHandler
	    }
	  }, [_vm._t("popup")]) : _h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.showPopup),
	      expression: "showPopup"
	    }],
	    ref: "popup",
	    class: _vm.popupClassObj,
	    attrs: {
	      "transition": _vm.effect
	    }
	  }, [_vm._t("popup")]), " "])
	},staticRenderFns: []}

/***/ }

/******/ })
});
;