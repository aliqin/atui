(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["input"] = factory();
	else
		root["input"] = factory();
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
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(87);


/***/ }),
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
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Input = __webpack_require__(88);

	var _Input2 = _interopRequireDefault(_Input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Input2.default;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(89)

	/* template */
	var __vue_template__ = __webpack_require__(127)
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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(90);

	var _assign2 = _interopRequireDefault(_assign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'Input',
	  props: {
	    placeholder: {
	      type: String,
	      default: ''
	    },
	    error: Boolean,
	    success: Boolean,
	    warn: Boolean,
	    large: Boolean,
	    small: Boolean,
	    value: [String, Number],
	    maxlength: String,
	    minlength: String,
	    minlengthTips: String,

	    validStatus: {
	      type: String,
	      default: ''
	    },

	    rules: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    rulesTips: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    validResult: Object,

	    tips: {
	      type: String,
	      default: ''
	    },

	    errorTips: {
	      type: String,
	      default: ''
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },

	  data: function data() {
	    var defaultErrorTips = this.errorTips || this.tips;

	    return {
	      defaultErrorTips: defaultErrorTips,
	      content: this.value
	    };
	  },


	  computed: {
	    inputClassObj: function inputClassObj() {
	      var prefixCls = this.prefixCls,
	          large = this.large,
	          small = this.small,
	          error = this.error,
	          success = this.success,
	          warn = this.warn,
	          validStatus = this.validStatus;

	      var classObj = {};

	      classObj[prefixCls + '-input'] = true;
	      classObj[prefixCls + '-input-large'] = large;
	      classObj[prefixCls + '-input-small'] = small;
	      classObj[prefixCls + '-input-error'] = error || validStatus === 'error';
	      classObj[prefixCls + '-input-success'] = success || validStatus === 'success';
	      classObj[prefixCls + '-input-warn'] = warn || validStatus === 'warn';

	      return classObj;
	    }
	  },

	  watch: {
	    value: function value(newVal, oldVal) {
	      this.content = newVal;
	    },
	    content: function content(newVal, oldVal) {
	      this.valid(newVal);
	      this.$emit('input', newVal);
	    }
	  },

	  methods: {
	    setValidStatus: function setValidStatus() {
	      var val = this.validResult;
	      var tips = '';
	      var status = '';

	      for (var key in val) {
	        var obj = val[key];
	        if (obj) {
	          tips += obj.tips + '  ';

	          if (obj.validStatus !== 'success') {
	            status = 'error';
	          }
	        }
	      }

	      if (this.defaultErrorTips === '') {
	        this.tips = tips.trim();
	        this.errorTips = tips.trim();
	      }

	      this.validStatus = status;
	    },
	    valid: function valid(val) {
	      if (this.minlength) {
	        this.minlengthValid(val);
	      }

	      if (this.rules) {
	        this.rulesValid(val);
	      }
	    },
	    rulesValid: function rulesValid(value) {
	      var self = this;

	      self.rules.forEach(function (val, index) {
	        self.rulesItemValid(val, value, index);
	      });
	    },
	    rulesItemValid: function rulesItemValid(rule, value, index) {
	      var self = this;

	      if (rule.constructor && rule.constructor.name === 'RegExp') {
	        self.regularValid(value, rule, index);
	        return;
	      }

	      switch (rule) {
	        case 'required':
	          self.requiredValid(value, index);
	          break;
	        case 'notNull':
	          self.requiredValid(value, index);
	          break;
	        case 'isPhone':
	          self.phoneValid(value, index);
	          break;
	        case 'isNumber':
	          self.numberValid(value, index);
	          break;
	        case 'isTelephone':
	          self.telValid(value, index);
	          break;
	        case 'isEmail':
	          self.emailValid(value, index);
	          break;
	      }
	    },
	    requiredValid: function requiredValid(val, index) {
	      var results = {};
	      var tips = index > -1 ? this.rulesTips[index] || this.errorTips || this.tips || '输入不能为空' : this.requiredTips || this.errorTips || this.tips || '输入不能为空';

	      if (!val) {
	        results.requiredValid = {
	          validStatus: 'error',
	          tips: tips
	        };
	      } else {
	        results.requiredValid = {
	          validStatus: 'success',
	          tips: ''
	        };
	      }

	      (0, _assign2.default)(this.validResult, results);
	      this.setValidStatus();
	    },
	    minlengthValid: function minlengthValid(val) {
	      var minlength = this.minlength - 0;
	      var results = {};
	      var tips = this.minlengthTips || '输入字符数不能小于' + minlength;
	      if (val) {
	        var len = val.length;
	        if (len < minlength) {
	          results.minlengthValid = {
	            validStatus: 'error',
	            tips: tips
	          };
	        } else {
	          results.minlengthValid = {
	            validStatus: 'success',
	            tips: ''
	          };
	        }
	      }

	      (0, _assign2.default)(this.validResult, results);
	      this.setValidStatus();
	    },
	    phoneValid: function phoneValid(value, index) {
	      var rule = /^1\d{10}$/;
	      var results = {};
	      var tips = index > -1 ? this.rulesTips[index] || this.errorTips || this.tips || '输入手机号码格式错误' : '输入手机号码格式错误';

	      if (rule.test(value) || value === '') {
	        results.isPhoneValid = {
	          validStatus: 'success',
	          tips: ''
	        };
	      } else {
	        results.isPhoneValid = {
	          validStatus: 'error',
	          tips: tips
	        };
	      }

	      (0, _assign2.default)(this.validResult, results);
	      this.setValidStatus();
	    },
	    numberValid: function numberValid(value, index) {
	      var rule = /^\d*$/;
	      var results = {};
	      var tips = index > -1 ? this.rulesTips[index] || this.errorTips || this.tips || '数字验证失败' : '数字验证失败';

	      if (rule.test(value) || value === '') {
	        results.isNumberValid = {
	          validStatus: 'success',
	          tips: ''
	        };
	      } else {
	        results.isNumberValid = {
	          validStatus: 'error',
	          tips: tips
	        };
	      }

	      (0, _assign2.default)(this.validResult, results);
	      this.setValidStatus();
	    },
	    telValid: function telValid(value, index) {
	      var rule = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
	      var results = {};
	      var tips = index > -1 ? this.rulesTips[index] || this.errorTips || this.tips || '输入固话格式错误，固话请用-' : '输入固话格式错误，固话请用-';

	      if (rule.test(value) || value === '') {
	        results.isTelValid = {
	          validStatus: 'success',
	          tips: ''
	        };
	      } else {
	        results.isTelValid = {
	          validStatus: 'error',
	          tips: tips
	        };
	      }

	      (0, _assign2.default)(this.validResult, results);
	      this.setValidStatus();
	    },
	    emailValid: function emailValid(value, index) {
	      var rule = /^[a-z0-9](\w|\.|-)*@([a-z0-9]+-?[a-z0-9]+\.){1,3}[a-z]{2,4}$/i;
	      var results = {};
	      var tips = index > -1 ? this.rulesTips[index] || this.errorTips || this.tips || '输入email格式错误' : '输入email格式错误';

	      if (rule.test(value) || value === '') {
	        results.isEmailValid = {
	          validStatus: 'success',
	          tips: ''
	        };
	      } else {
	        results.isEmailValid = {
	          validStatus: 'error',
	          tips: tips
	        };
	      }

	      (0, _assign2.default)(this.validResult, results);
	      this.setValidStatus();
	    },
	    regularValid: function regularValid(value, rule, index) {
	      var results = {};
	      var tips = this.rulesTips[index] || '第' + (index + 1) + '条正则规则验证失败';
	      var reg = rule;

	      if (reg.test(value) || value === '') {
	        results.regularValid = {
	          validStatus: 'success',
	          tips: ''
	        };
	      } else {
	        results.regularValid = {
	          validStatus: 'error',
	          tips: tips
	        };
	      }

	      (0, _assign2.default)(this.validResult, results);
	      this.setValidStatus();
	    }
	  }
	};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(91), __esModule: true };

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(92);
	module.exports = __webpack_require__(95).Object.assign;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(93);

	$export($export.S + $export.F, 'Object', { assign: __webpack_require__(108) });


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(94);
	var core = __webpack_require__(95);
	var ctx = __webpack_require__(96);
	var hide = __webpack_require__(98);
	var PROTOTYPE = 'prototype';

	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var IS_WRAP = type & $export.W;
	  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
	  var expProto = exports[PROTOTYPE];
	  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
	  var key, own, out;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if (own && key in exports) continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function (C) {
	      var F = function (a, b, c) {
	        if (this instanceof C) {
	          switch (arguments.length) {
	            case 0: return new C();
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if (IS_PROTO) {
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	module.exports = $export;


/***/ }),
/* 94 */
/***/ (function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 95 */
/***/ (function(module, exports) {

	var core = module.exports = { version: '2.5.1' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(97);
	module.exports = function (fn, that, length) {
	  aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};


/***/ }),
/* 97 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(99);
	var createDesc = __webpack_require__(107);
	module.exports = __webpack_require__(103) ? function (object, key, value) {
	  return dP.f(object, key, createDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	var anObject = __webpack_require__(100);
	var IE8_DOM_DEFINE = __webpack_require__(102);
	var toPrimitive = __webpack_require__(106);
	var dP = Object.defineProperty;

	exports.f = __webpack_require__(103) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if (IE8_DOM_DEFINE) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(101);
	module.exports = function (it) {
	  if (!isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};


/***/ }),
/* 101 */
/***/ (function(module, exports) {

	module.exports = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(103) && !__webpack_require__(104)(function () {
	  return Object.defineProperty(__webpack_require__(105)('div'), 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(104)(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});


/***/ }),
/* 104 */
/***/ (function(module, exports) {

	module.exports = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(101);
	var document = __webpack_require__(94).document;
	// typeof document.createElement is 'object' in old IE
	var is = isObject(document) && isObject(document.createElement);
	module.exports = function (it) {
	  return is ? document.createElement(it) : {};
	};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(101);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function (it, S) {
	  if (!isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};


/***/ }),
/* 107 */
/***/ (function(module, exports) {

	module.exports = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys = __webpack_require__(109);
	var gOPS = __webpack_require__(124);
	var pIE = __webpack_require__(125);
	var toObject = __webpack_require__(126);
	var IObject = __webpack_require__(113);
	var $assign = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(104)(function () {
	  var A = {};
	  var B = {};
	  // eslint-disable-next-line no-undef
	  var S = Symbol();
	  var K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function (k) { B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
	  var T = toObject(target);
	  var aLen = arguments.length;
	  var index = 1;
	  var getSymbols = gOPS.f;
	  var isEnum = pIE.f;
	  while (aLen > index) {
	    var S = IObject(arguments[index++]);
	    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
	    var length = keys.length;
	    var j = 0;
	    var key;
	    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
	  } return T;
	} : $assign;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys = __webpack_require__(110);
	var enumBugKeys = __webpack_require__(123);

	module.exports = Object.keys || function keys(O) {
	  return $keys(O, enumBugKeys);
	};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	var has = __webpack_require__(111);
	var toIObject = __webpack_require__(112);
	var arrayIndexOf = __webpack_require__(116)(false);
	var IE_PROTO = __webpack_require__(120)('IE_PROTO');

	module.exports = function (object, names) {
	  var O = toIObject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};


/***/ }),
/* 111 */
/***/ (function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(113);
	var defined = __webpack_require__(115);
	module.exports = function (it) {
	  return IObject(defined(it));
	};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(114);
	// eslint-disable-next-line no-prototype-builtins
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};


/***/ }),
/* 114 */
/***/ (function(module, exports) {

	var toString = {}.toString;

	module.exports = function (it) {
	  return toString.call(it).slice(8, -1);
	};


/***/ }),
/* 115 */
/***/ (function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(112);
	var toLength = __webpack_require__(117);
	var toAbsoluteIndex = __webpack_require__(119);
	module.exports = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = toIObject($this);
	    var length = toLength(O.length);
	    var index = toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(118);
	var min = Math.min;
	module.exports = function (it) {
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};


/***/ }),
/* 118 */
/***/ (function(module, exports) {

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	module.exports = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(118);
	var max = Math.max;
	var min = Math.min;
	module.exports = function (index, length) {
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(121)('keys');
	var uid = __webpack_require__(122);
	module.exports = function (key) {
	  return shared[key] || (shared[key] = uid(key));
	};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(94);
	var SHARED = '__core-js_shared__';
	var store = global[SHARED] || (global[SHARED] = {});
	module.exports = function (key) {
	  return store[key] || (store[key] = {});
	};


/***/ }),
/* 122 */
/***/ (function(module, exports) {

	var id = 0;
	var px = Math.random();
	module.exports = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};


/***/ }),
/* 123 */
/***/ (function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');


/***/ }),
/* 124 */
/***/ (function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 125 */
/***/ (function(module, exports) {

	exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(115);
	module.exports = function (it) {
	  return Object(defined(it));
	};


/***/ }),
/* 127 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.content),
	      expression: "content"
	    }],
	    class: _vm.inputClassObj,
	    attrs: {
	      "placeholder": _vm.placeholder,
	      "valid-status": _vm.validStatus,
	      "maxlength": _vm.maxlength
	    },
	    domProps: {
	      "value": (_vm.content)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.content = $event.target.value
	      }
	    }
	  })
	},staticRenderFns: []}

/***/ })
/******/ ])
});
;