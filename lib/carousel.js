(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["carousel"] = factory();
	else
		root["carousel"] = factory();
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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(31);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Carousel = __webpack_require__(32);

	var _Carousel2 = _interopRequireDefault(_Carousel);

	var _Slide = __webpack_require__(42);

	var _Slide2 = _interopRequireDefault(_Slide);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_Carousel2.default.Slide = _Slide2.default;
	exports.default = _Carousel2.default;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(33)

	/* template */
	var __vue_template__ = __webpack_require__(41)
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _animation = __webpack_require__(34);

	exports.default = {
	  name: 'Carousel',
	  data: function data() {
	    return {
	      posFlag: 0,
	      childrenLength: 0
	    };
	  },

	  props: {
	    width: {
	      type: String,
	      default: '100%'
	    },
	    height: {
	      type: String,
	      default: '100%'
	    },
	    interval: {
	      type: Number,
	      default: 3000
	    },
	    speed: {
	      type: Number,
	      default: 500
	    },
	    autoPlay: {
	      type: Boolean,
	      default: true
	    },
	    hoverStop: {
	      type: Boolean
	    },
	    indicators: {
	      default: 'center'
	    },
	    controlBtn: {
	      type: Boolean
	    },
	    animation: {
	      type: String,
	      default: 'normal'
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  components: {
	    normal: _animation.normal,
	    fade: _animation.fade
	  },
	  computed: {
	    thisSpeed: function thisSpeed() {
	      var speed = this.speed / 1000;
	      return speed.toFixed(2);
	    },
	    indicatorClass: function indicatorClass() {
	      if (this.indicators) {
	        return this.prefixCls + '-carousel-' + this.indicators;
	      }
	    }
	  },
	  methods: {
	    play: function play() {
	      var content = this.$refs.content;
	      var me = this;
	      function setTimer() {
	        return setInterval(function () {
	          if (me.posFlag < me.childrenLength - 1) {
	            me.posFlag++;
	          } else {
	            me.posFlag = 0;
	          }
	          content.animation(me.posFlag);
	        }, me.interval);
	      }
	      return function () {
	        if (me.timer) {
	          clearInterval(me.timer);
	          me.timer = setTimer();
	        } else {
	          if (me.autoPlay && me.childrenLength > 2) {
	            me.timer = setTimer();
	          }
	        }
	      };
	    },
	    stop: function stop() {
	      if (this.hoverStop) {
	        clearInterval(this.timer);
	      }
	    },
	    resume: function resume() {
	      if (this.hoverStop) {
	        this.play();
	      }
	    },
	    next: function next() {
	      var content = this.$refs.content;
	      if (this.posFlag < this.childrenLength - 1) {
	        ++this.posFlag;
	      } else {
	        this.posFlag = 0;
	      }
	      content.animation(this.posFlag);

	      this.play();
	    },
	    preview: function preview() {
	      var content = this.$refs.content;

	      if (this.posFlag > 0) {
	        --this.posFlag;
	      } else {
	        this.posFlag = this.childrenLength - 2;
	      }
	      content.animation(this.posFlag, 'preview');
	      this.play();
	    },
	    jump2: function jump2(index) {
	      var content = this.$refs.content;
	      content.animation(index, 'jump');
	      this.posFlag = index;
	      this.play();
	    },
	    newItem: function newItem(item) {
	      var sliderContent = this.$refs.content;
	      this.addChildrenLength();
	      this.scaleItemsWidth(item);
	      if (sliderContent.scaleWidth) {
	        sliderContent.scaleWidth(this.$el.clientWidth);
	      }
	      this.autoplay();
	    }
	  },
	  mounted: function mounted() {
	    var _this = this;

	    var me = this;
	    me.$nextTick(function () {
	      me.play = me.play();
	      me.$el.clentHight;
	      me.play();
	    });
	    me.$on('scaleSliderWidth', function (fn) {
	      fn(me.$el.clientWidth, me.childrenLength);

	      me.scaleSliderWidth = function () {
	        fn(me.$el.clientWidth, me.childrenLength);
	      };
	    }).$on('addItem', function () {
	      me.childrenLength++;
	      if (_this.animation === 'normal') {
	        me.$nextTick(function () {
	          me.scaleSliderWidth();
	        });
	      }
	      me.play();
	    }).$on('scaleItemsWidth', function (fn) {
	      fn(me.$el.clientWidth);
	    }).$on('before', function (item) {
	      me.$emit('before-change', item);
	    }).$on('after', function (item) {
	      me.$emit('after-change', item);
	    });
	  },

	  beforeDestroy: function beforeDestroy() {
	    this.$off();
	  }
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fade = exports.normal = undefined;

	var _normal = __webpack_require__(35);

	var _normal2 = _interopRequireDefault(_normal);

	var _fade = __webpack_require__(38);

	var _fade2 = _interopRequireDefault(_fade);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.normal = _normal2.default;
	exports.fade = _fade2.default;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(36)

	/* template */
	var __vue_template__ = __webpack_require__(37)
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
/* 36 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  data: function data() {
	    return {
	      width: ''
	    };
	  },

	  methods: {
	    scaleWidth: function scaleWidth(width, childrenLen) {
	      var totalWidth = width * childrenLen;
	      this.width = width;
	      this.$el.style.width = totalWidth + 'px';
	    },
	    animation: function animation(position) {
	      var me = this;
	      me.$parent.$emit('before', me);
	      me.$el.style.transform = 'translateX(' + position * -this.width + 'px)';
	      function endCall() {
	        me.$el.removeEventListener('transitionend', endCall);
	        me.$parent.$emit('after', me);
	      }
	      me.$el.addEventListener('transitionend', endCall, false);
	    }
	  },
	  mounted: function mounted() {
	    var _this = this;

	    this.$nextTick(function () {
	      _this.$parent.$emit('scaleSliderWidth', _this.scaleWidth);
	    });
	  }
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', [_vm._t("default")])
	},staticRenderFns: []}

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(39)

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


/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  data: function data() {
	    return {
	      items: []
	    };
	  },

	  props: {
	    speed: String
	  },
	  mounted: function mounted() {
	    var _this = this;

	    var items = this.items = this.$el.children;
	    var length = items.length;
	    Array.prototype.forEach.call(items, function (item, index) {
	      item.style.position = 'absolute';
	      if (index === 0) {
	        item.style.position = 'relative';
	      }
	      item.style.left = 0;
	      item.style.top = 0;
	      item.style.zIndex = length - index;
	      item.style.transition = 'opacity ' + _this.speed + 's';
	      item.style.opacity = 0;
	    });
	    items[0].style.opacity = 1;
	  },

	  methods: {
	    animation: function animation(position, flag) {
	      var _this3 = this;

	      var me = this;
	      me.$parent.$emit('before', me);

	      var length = this.items.length;
	      function fade(preview, next) {
	        var _this2 = this;

	        this.items[preview].style.opacity = 0;
	        this.items[next].style.opacity = 1;
	        setTimeout(function () {
	          _this2.items[preview].style.zIndex = length;
	          _this2.items[next].style.zIndex = length + 1;
	        }, parseInt(this.speed) * 1000);
	      }
	      if (flag === 'preview') {
	        if (position === length - 1) {
	          fade.call(this, 0, position);
	        } else {
	          fade.call(this, position + 1, position);
	        }
	      } else if (flag === 'jump') {
	        Array.prototype.forEach.call(this.items, function (item, index) {
	          item.style.opacity = 0;

	          setTimeout(function () {
	            item.style.zIndex = length;
	          }, parseInt(_this3.speed) * 1000);
	        });

	        this.items[position].style.opacity = 1;
	        setTimeout(function () {
	          _this3.items[position].style.zIndex = length + 1;
	        }, parseInt(this.speed) * 1000);
	      } else {
	        if (position === 0) {
	          fade.call(this, length - 1, position);
	        } else {
	          fade.call(this, position - 1, position);
	        }
	      }

	      function endCall() {
	        me.$el.removeEventListener('transitionend', endCall);
	        me.$parent.$emit('after', me);
	      }
	      me.$el.addEventListener('transitionend', endCall, false);
	    }
	  }
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', [_vm._t("default")])
	},staticRenderFns: []}

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    class: [_vm.prefixCls + '-carousel'],
	    style: ({
	      width: _vm.width,
	      height: _vm.height
	    }),
	    on: {
	      "mouseover": _vm.stop,
	      "mouseout": _vm.resume
	    }
	  }, [_h(_vm.animation, {
	    ref: "content",
	    tag: "component",
	    class: [_vm.prefixCls + '-carousel-content'],
	    style: ({
	      transition: 'all ' + _vm.thisSpeed + 's'
	    }),
	    attrs: {
	      "speed": _vm.thisSpeed
	    }
	  }, [_vm._t("default")]), " ", (_vm.controlBtn) ? _h('div', {
	    class: [_vm.prefixCls + '-carousel-btn', _vm.prefixCls + '-carousel-left-btn'],
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        _vm.preview($event)
	      }
	    }
	  }, [_h('i', {
	    class: [_vm.prefixCls + '-carousel-icon', _vm.prefixCls + '-carousel-icon-left']
	  })]) : _vm._e(), " ", (_vm.controlBtn) ? _h('div', {
	    class: [_vm.prefixCls + '-carousel-btn', _vm.prefixCls + '-carousel-right-btn'],
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        _vm.next($event)
	      }
	    }
	  }, [_h('i', {
	    class: [_vm.prefixCls + '-carousel-icon', _vm.prefixCls + '-carousel-icon-right']
	  })]) : _vm._e(), " ", (_vm.indicators !== false && _vm.childrenLength > 1) ? _h('div', {
	    class: [_vm.prefixCls + '-carousel-indicators', _vm.indicatorClass],
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	      }
	    }
	  }, [_vm._l((_vm.childrenLength), function(item, index) {
	    return _h('i', {
	      class: [_vm.prefixCls + '-carousel-indicator-icon', {
	        'carousel-indicator-active': _vm.posFlag === index
	      }],
	      on: {
	        "click": function($event) {
	          _vm.jump2(index)
	        }
	      }
	    })
	  })]) : _vm._e()])
	},staticRenderFns: []}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(43)

	/* template */
	var __vue_template__ = __webpack_require__(44)
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
/* 43 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'Slide',
	  props: {
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  methods: {
	    scaleItemWidth: function scaleItemWidth(width) {
	      this.$el.style.width = width + 'px';
	    }
	  },
	  mounted: function mounted() {
	    var _this = this;

	    this.$nextTick(function () {
	      _this.$parent.$parent.$emit('scaleItemsWidth', _this.scaleItemWidth);
	      _this.$parent.$parent.$emit('addItem', _this.$el);
	    });
	  }
	};

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _h('div', {
	    class: [_vm.prefixCls + '-carousel-item']
	  }, [_vm._t("default")])
	},staticRenderFns: []}

/***/ }
/******/ ])
});
;