(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("./icon"), require("vue"), require("./dropdown"), require("./spin"), require("./pagination"));
	else if(typeof define === 'function' && define.amd)
		define(["./icon", "vue", "./dropdown", "./spin", "./pagination"], factory);
	else if(typeof exports === 'object')
		exports["table"] = factory(require("./icon"), require("vue"), require("./dropdown"), require("./spin"), require("./pagination"));
	else
		root["table"] = factory(root["./icon"], root["Vue"], root["./dropdown"], root["./spin"], root["./pagination"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_65__, __WEBPACK_EXTERNAL_MODULE_138__, __WEBPACK_EXTERNAL_MODULE_214__, __WEBPACK_EXTERNAL_MODULE_215__, __WEBPACK_EXTERNAL_MODULE_216__) {
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

	module.exports = __webpack_require__(211);


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
/* 65 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_65__;

/***/ }),
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
/* 87 */,
/* 88 */,
/* 89 */,
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
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_138__;

/***/ }),
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Table = __webpack_require__(212);

	var _Table2 = _interopRequireDefault(_Table);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Table2.default;

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(213)

	/* template */
	var __vue_template__ = __webpack_require__(217)
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
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _assign = __webpack_require__(90);

	var _assign2 = _interopRequireDefault(_assign);

	var _vue = __webpack_require__(138);

	var _vue2 = _interopRequireDefault(_vue);

	var _Icon = __webpack_require__(65);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _Dropdown = __webpack_require__(214);

	var _Dropdown2 = _interopRequireDefault(_Dropdown);

	var _Spin = __webpack_require__(215);

	var _Spin2 = _interopRequireDefault(_Spin);

	var _Pagination = __webpack_require__(216);

	var _Pagination2 = _interopRequireDefault(_Pagination);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'Table',
	  props: {
	    pagination: {
	      type: Object,
	      default: function _default() {
	        return {
	          total: 0,
	          pageSize: 10,
	          currPage: 1
	        };
	      }
	    },
	    dataSource: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    noDataTip: {
	      type: String,
	      default: '没有任何数据'
	    },
	    columns: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    rowExpandable: {
	      type: Function,
	      default: function _default() {
	        return true;
	      }
	    },
	    expandedRowRender: Function,
	    rowSelection: Object,
	    rowKey: String,
	    loading: {
	      type: Boolean,
	      default: false
	    },
	    fixedHeader: Boolean,
	    size: {
	      type: String,
	      default: 'default'
	    },
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  components: {
	    Icon: _Icon2.default,
	    Dropdown: _Dropdown2.default,
	    Spin: _Spin2.default,
	    Pagination: _Pagination2.default
	  },
	  data: function data() {
	    var filters = {};
	    var columnMap = {};
	    this.columns.forEach(function (item) {
	      _vue2.default.set(item, '__selectedText', '全部');
	      columnMap[item.dataIndex] = item;
	      if (item.filters) {
	        filters[item.dataIndex] = [];
	      }
	    });
	    return {
	      originDataSource: (0, _assign2.default)(this.dataSource || [], []),
	      dataList: (0, _assign2.default)(this.dataSource || [], []),
	      isCheckedAll: false,
	      isDisabledAll: false,
	      sorderOrder: [],
	      checkedRows: [],
	      rowStates: [],
	      filterOpened: false,
	      filters: filters,
	      columnMap: columnMap,
	      sorter: {}
	    };
	  },
	  created: function created() {
	    var me = this;
	    if (this.dataList) {
	      this.dataList.forEach(function (record, index) {
	        _vue2.default.set(me.rowStates, index, {});
	        _vue2.default.set(me.rowStates[index], '__expanded', false);
	      });
	    }
	  },
	  mounted: function mounted() {
	    if (this.pagination.total > 0) {
	      var pager = this.$refs.pager;
	      var startIndex = (pager.currPage - 1) * pager.pageSize;
	      startIndex = startIndex >= pager.total ? 0 : startIndex;

	      this.dataList = this.originDataSource.slice(startIndex, startIndex + pager.pageSize);
	    }
	  },

	  computed: {
	    checkedValues: function checkedValues() {
	      var me = this;
	      var checkedKeys = me.checkedRows.map(function (record) {
	        return record[me.rowKey];
	      });
	      if (me.rowSelection && me.rowSelection.onChange) {
	        me.rowSelection.onChange(checkedKeys, me.checkedRows);
	      }
	      return checkedKeys;
	    },
	    checkebleRows: function checkebleRows() {
	      var me = this;
	      var rows = [];

	      if (me.dataList && me.dataList.length) {
	        rows = me.dataList.filter(function (record) {
	          if (me.rowSelection) {
	            return !me.rowSelection.getCheckboxProps || !me.rowSelection.getCheckboxProps(record).disabled;
	          }
	        });
	      }
	      return rows;
	    }
	  },
	  watch: {
	    dataSource: function dataSource(data, oldData) {
	      this.originDataSource = (0, _assign2.default)(this.dataSource || [], []);
	      this.dataList = data;
	    },

	    dataList: {
	      handler: function handler(data, oldData) {
	        var me = this;
	        var rowStates = me.rowStates;
	        data.forEach && data.forEach(function (record, index) {
	          if (!rowStates[index]) {
	            rowStates[index] = {};
	          }

	          if (!rowStates[index].hasOwnProperty('__expanded')) {
	            _vue2.default.set(rowStates[index], '__expanded', false);
	          }
	        });
	        me.compileTbody();

	        me.checkedRows = data.filter(function (record) {
	          if (me.checkedValues) {
	            return me.checkedValues.indexOf(record[me.rowKey]) >= 0;
	          }
	        });
	        if (me.checkebleRows.length) {
	          me.isCheckedAll = me.checkedRows.length === me.checkebleRows.length;
	        }
	      },

	      deep: true
	    }
	  },
	  methods: {
	    onRowClick: function onRowClick(rowIndex, record) {
	      this.$emit('row-click', rowIndex, record);
	    },
	    onRowExpand: function onRowExpand(rowIndex, record) {
	      var state = this.rowStates[rowIndex];
	      _vue2.default.set(state, '__expanded', !state.__expanded);
	    },
	    compileTbody: function compileTbody() {
	      var me = this;

	      me.$nextTick(function () {
	        me.isDisabledAll = !me.checkebleRows.length;
	      });
	    },
	    sortAction: function sortAction(column, index, order) {
	      if (typeof column.sorter === 'function') {}
	      this.sorderOrder[index] = order;
	      this.sorderOrder = (0, _assign2.default)([], this.sorderOrder);
	      this.$emit('table-change', this.pagination, this.filters, {
	        field: column.dataIndex,
	        order: order
	      });
	    },
	    onCheckAllChange: function onCheckAllChange(event) {
	      var me = this;
	      var changeRows = [];
	      var input = event.srcElement || event.target;
	      var checked = input.checked;
	      if (checked) {
	        me.checkebleRows.forEach(function (record, i) {
	          if (me.checkedRows.indexOf(record) < 0) {
	            me.checkedRows.push(record);
	            changeRows.push(record);
	          }
	        });

	        me.isCheckedAll = true;
	      } else {
	        me.checkebleRows.forEach(function (record, i) {
	          if (me.checkedRows.indexOf(record) >= 0) {
	            changeRows.push(record);
	          }
	        });
	        me.checkedRows = [];
	      }
	      if (me.rowSelection.onSelectAll) {
	        me.rowSelection.onSelectAll(checked, me.checkedRows, changeRows);
	      }
	    },
	    onCheckOne: function onCheckOne(event, record) {
	      var me = this;
	      var input = event.srcElement || event.target;
	      var checked = input.checked;
	      if (checked) {
	        if (me.checkedRows.indexOf(record) === -1) {
	          me.checkedRows.push(record);
	        }
	      } else {
	        me.checkedRows = me.checkedRows.filter(function (item) {
	          return record[me.rowKey] !== item[me.rowKey];
	        });
	      }
	      if (me.rowSelection.onSelect) {
	        me.rowSelection.onSelect(record, checked, me.checkedRows);
	      }
	      me.isCheckedAll = me.checkedRows.length === me.checkebleRows.length;
	    },
	    onFilter: function onFilter(isSingle, column, fileterValue, filterText) {
	      var _this = this;

	      var me = this;
	      var filters = me.filters;
	      if (isSingle) {
	        filters[column.dataIndex] = fileterValue;
	        _vue2.default.set(column, '__selectedText', filterText);
	      }
	      me.$refs.filterMenu.forEach(function (dropdown) {
	        dropdown.$emit('closeDropdown');
	      });
	      this.dataList = this.originDataSource;

	      var _loop = function _loop(currColumnKey) {
	        var currColumn = me.columnMap[currColumnKey];
	        var value = filters[currColumnKey];

	        if (currColumn.hasOwnProperty('filterMultiple') && currColumn.filterMultiple === false) {}
	        if (currColumn.onFilter) {
	          me.dataList = me.dataList.filter(function (record) {
	            return value.length === 0 || currColumn.onFilter.call(_this, value, record);
	          });
	        } else {
	          me.$emit('table-change', me.pagination, me.filters, me.sorter);
	        }
	      };

	      for (var currColumnKey in filters) {
	        _loop(currColumnKey);
	      }
	    },
	    resetFilter: function resetFilter(column) {
	      _vue2.default.set(column, '__selectedText', '全部');
	      this.filters[column.dataIndex] = [];
	      this.onFilter();
	    },
	    changePage: function changePage(pageNum) {
	      var me = this;
	      var pager = me.$refs.pager;

	      if (me.originDataSource.length > pager.pageSize) {
	        me.dataList = me.originDataSource.slice((pageNum - 1) * pager.pageSize, pageNum * pager.pageSize);
	      }

	      me.pagination.currPage = pageNum;
	      me.$emit('table-change', this.pagination, me.filters, me.sorter);
	    },
	    changeSize: function changeSize(current, pageSize) {
	      var pager = this.$refs.pager;
	      this.dataList = this.originDataSource.slice((current - 1) * pager.pageSize, current * pager.pageSize);
	      this.pagination.onShowSizeChange && this.pagination.onShowSizeChange(current, pageSize);
	    }
	  }
	};

/***/ }),
/* 214 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_214__;

/***/ }),
/* 215 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_215__;

/***/ }),
/* 216 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_216__;

/***/ }),
/* 217 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: [_vm.prefixCls + '-table', _vm.prefixCls + '-table-' + _vm.size, _vm.loading && (_vm.prefixCls + '-table-loading')]
	  }, [(_vm.loading) ? _c('spin', {
	    attrs: {
	      "size": "sm"
	    }
	  }) : _vm._e(), _vm._v(" "), _c('div', {
	    class: [_vm.prefixCls + '-table-container', _vm.fixedHeader && (_vm.prefixCls + '-table-fixed-header')]
	  }, [_c('table', [_c('colgroup', [(_vm.rowSelection) ? _c('col') : _vm._e(), _vm._v(" "), (_vm.expandedRowRender) ? _c('col') : _vm._e(), _vm._v(" "), _vm._l((_vm.columns), function(column) {
	    return _c('col', {
	      attrs: {
	        "width": column.width
	      }
	    })
	  })], 2), _vm._v(" "), _c('thead', [_vm._t("head-row", [_c('tr', [(_vm.rowSelection) ? _c('th', {
	    class: [_vm.prefixCls + '-table-selection-column']
	  }, [(_vm.dataList && _vm.dataList.length) ? _c('input', {
	    attrs: {
	      "type": "checkbox"
	    },
	    on: {
	      "change": _vm.onCheckAllChange
	    }
	  }) : _vm._e()]) : _vm._e(), _vm._v(" "), (_vm.expandedRowRender) ? _c('th', {
	    class: [_vm.prefixCls + '-table-expand-icon-th']
	  }) : _vm._e(), _vm._v(" "), _vm._l((_vm.columns), function(column, index) {
	    return _c('th', {
	      attrs: {
	        "width": column.width
	      }
	    }, [_c('span', {
	      domProps: {
	        "innerHTML": _vm._s(column['title'])
	      }
	    }), _vm._v(" "), (column.filters) ? _c('dropdown', {
	      ref: "filterMenu",
	      refInFor: true,
	      attrs: {
	        "trigger": "hover",
	        "hideOnClick": false
	      }
	    }, [_c('div', [_c('icon', {
	      attrs: {
	        "type": "filter",
	        "size": "12"
	      }
	    })], 1), _vm._v(" "), _c('div', {
	      class: [_vm.prefixCls + '-dropdown-menu', _vm.prefixCls + '-table-filter-dropdown'],
	      attrs: {
	        "name": "dropdown-menu"
	      },
	      slot: "dropdown-menu"
	    }, [(column.filterMultiple !== false) ? [_c('ul', _vm._l((column.filters), function(filter) {
	      return _c('li', [_c('label', [(column.filterMultiple === false) ? [_c('input', {
	        directives: [{
	          name: "model",
	          rawName: "v-model",
	          value: (_vm.filters[column.dataIndex]),
	          expression: "filters[column.dataIndex]"
	        }],
	        attrs: {
	          "type": "radio"
	        },
	        domProps: {
	          "value": filter.value,
	          "checked": _vm._q(_vm.filters[column.dataIndex], filter.value)
	        },
	        on: {
	          "__c": function($event) {
	            var $$exp = _vm.filters,
	              $$idx = column.dataIndex;
	            if (!Array.isArray($$exp)) {
	              _vm.filters[column.dataIndex] = filter.value
	            } else {
	              $$exp.splice($$idx, 1, filter.value)
	            }
	          }
	        }
	      }), _vm._v(_vm._s(filter.text) + "\n                        ")] : [_c('input', {
	        directives: [{
	          name: "model",
	          rawName: "v-model",
	          value: (_vm.filters[column.dataIndex]),
	          expression: "filters[column.dataIndex]"
	        }],
	        attrs: {
	          "type": "checkbox"
	        },
	        domProps: {
	          "value": filter.value,
	          "checked": Array.isArray(_vm.filters[column.dataIndex]) ? _vm._i(_vm.filters[column.dataIndex], filter.value) > -1 : (_vm.filters[column.dataIndex])
	        },
	        on: {
	          "__c": function($event) {
	            var $$a = _vm.filters[column.dataIndex],
	              $$el = $event.target,
	              $$c = $$el.checked ? (true) : (false);
	            if (Array.isArray($$a)) {
	              var $$v = filter.value,
	                $$i = _vm._i($$a, $$v);
	              if ($$c) {
	                $$i < 0 && (_vm.filters[column.dataIndex] = $$a.concat($$v))
	              } else {
	                $$i > -1 && (_vm.filters[column.dataIndex] = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
	              }
	            } else {
	              var $$exp = _vm.filters,
	                $$idx = column.dataIndex;
	              if (!Array.isArray($$exp)) {
	                _vm.filters[column.dataIndex] = $$c
	              } else {
	                $$exp.splice($$idx, 1, $$c)
	              }
	            }
	          }
	        }
	      }), _vm._v(_vm._s(filter.text) + "\n                        ")]], 2)])
	    })), _vm._v(" "), _c('div', {
	      class: [_vm.prefixCls + '-table-filter-dropdown-btns']
	    }, [_c('a', {
	      class: [_vm.prefixCls + '-table-filter-dropdown-link confirm'],
	      on: {
	        "click": function($event) {
	          _vm.onFilter()
	        }
	      }
	    }, [_vm._v("确定")]), _vm._v(" "), _c('a', {
	      class: [_vm.prefixCls + '-table-filter-dropdown-link', _vm.prefixCls + '-table-clear'],
	      on: {
	        "click": function($event) {
	          _vm.resetFilter(column)
	        }
	      }
	    }, [_vm._v("重置")])])] : [_c('ul', {
	      class: [_vm.prefixCls + '-table-filter-single']
	    }, [_c('li', {
	      class: [_vm.prefixCls + '-table-filter-single-item', column.__selectedText === '全部' ? 'selected' : ''],
	      on: {
	        "click": function($event) {
	          _vm.resetFilter(column)
	        }
	      }
	    }, [_c('icon', {
	      attrs: {
	        "type": "tick",
	        "size": "10"
	      }
	    }), _c('span', [_vm._v("全部")])], 1), _vm._v(" "), _vm._l((column.filters), function(filter) {
	      return _c('li', {
	        class: [column.__selectedText === filter.text ? 'selected' : '', _vm.prefixCls + '-table-filter-single-item'],
	        on: {
	          "click": function($event) {
	            _vm.onFilter(true, column, filter.value, filter.text)
	          }
	        }
	      }, [_c('icon', {
	        attrs: {
	          "type": "tick",
	          "size": "10"
	        }
	      }), _c('span', [_vm._v(_vm._s(filter.text))])], 1)
	    })], 2)]], 2)]) : _vm._e(), _vm._v(" "), (_vm.dataList && _vm.dataList.length && column.sorter) ? _c('div', {
	      class: [_vm.prefixCls + '-table-sorter']
	    }, [_c('icon', {
	      class: [_vm.sorderOrder[index] == 'ascend' && (_vm.prefixCls + '-table-active')],
	      attrs: {
	        "type": "caretup",
	        "size": "10"
	      },
	      nativeOn: {
	        "click": function($event) {
	          _vm.sortAction(column, index, 'ascend')
	        }
	      }
	    }), _vm._v(" "), _c('icon', {
	      class: [_vm.sorderOrder[index] == 'descend' && (_vm.prefixCls + '-table-active')],
	      attrs: {
	        "type": "caretdown",
	        "size": "10"
	      },
	      nativeOn: {
	        "click": function($event) {
	          _vm.sortAction(column, index, 'descend')
	        }
	      }
	    })], 1) : _vm._e()], 1)
	  })], 2)], {
	    columns: _vm.columns
	  })], 2), _vm._v(" "), _c('tbody', [(!_vm.dataList || !_vm.dataList.length) ? _c('tr', [_c('td', {
	    class: [_vm.prefixCls + '-table-empty'],
	    staticStyle: {
	      "text-align": "center"
	    },
	    attrs: {
	      "colspan": "20"
	    }
	  }, [_vm._t("noDataTip", [_vm._v("\n              " + _vm._s(_vm.noDataTip) + "\n            ")])], 2)]) : _vm._e(), _vm._v(" "), _vm._l((_vm.dataList), function(record, rowIndex) {
	    return [_c('tr', {
	      attrs: {
	        "track-by": rowIndex
	      },
	      on: {
	        "click": function($event) {
	          _vm.onRowClick(rowIndex, record)
	        }
	      }
	    }, [(_vm.rowSelection) ? _c('td', {
	      class: [_vm.prefixCls + '-table-selection-column']
	    }, [_c('input', _vm._b({
	      directives: [{
	        name: "model",
	        rawName: "v-model",
	        value: (_vm.checkedValues),
	        expression: "checkedValues"
	      }],
	      attrs: {
	        "type": "checkbox"
	      },
	      domProps: {
	        "value": record[_vm.rowKey],
	        "checked": Array.isArray(_vm.checkedValues) ? _vm._i(_vm.checkedValues, record[_vm.rowKey]) > -1 : (_vm.checkedValues)
	      },
	      on: {
	        "change": function($event) {
	          $event.stopPropagation();
	          _vm.onCheckOne($event, record)
	        },
	        "__c": function($event) {
	          var $$a = _vm.checkedValues,
	            $$el = $event.target,
	            $$c = $$el.checked ? (true) : (false);
	          if (Array.isArray($$a)) {
	            var $$v = record[_vm.rowKey],
	              $$i = _vm._i($$a, $$v);
	            if ($$c) {
	              $$i < 0 && (_vm.checkedValues = $$a.concat($$v))
	            } else {
	              $$i > -1 && (_vm.checkedValues = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
	            }
	          } else {
	            _vm.checkedValues = $$c
	          }
	        }
	      }
	    }, 'input', _vm.rowSelection.getCheckboxProps && _vm.rowSelection.getCheckboxProps(record)))]) : _vm._e(), _vm._v(" "), (_vm.expandedRowRender) ? _c('td', {
	      class: [_vm.prefixCls + '-table-row-expand-icon-cell']
	    }, [(_vm.rowExpandable(record, rowIndex)) ? _c('span', {
	      class: [_vm.prefixCls + '-table-row-expand-icon', _vm.prefixCls + (_vm.rowStates[rowIndex].__expanded ? '-table-row-expanded' : '-table-row-collapsed')],
	      on: {
	        "click": function($event) {
	          _vm.onRowExpand(rowIndex, record)
	        }
	      }
	    }) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm._l((_vm.columns), function(column) {
	      return _c('td', {
	        class: [column.className || '']
	      }, [_vm._t(column.dataIndex || column.key, [_c('span', {
	        domProps: {
	          "innerHTML": _vm._s(record[column.dataIndex])
	        }
	      })], {
	        record: record,
	        rowIndex: rowIndex
	      })], 2)
	    })], 2), _vm._v(" "), (_vm.rowStates[rowIndex].__expanded) ? _c('tr', {
	      class: [_vm.prefixCls + '-table-expanded-row']
	    }, [_c('td', [(_vm.rowExpandable(record, rowIndex)) ? _c('span', {
	      class: [_vm.prefixCls + '-expanded-row-indent']
	    }) : _vm._e()]), _vm._v(" "), _c('td', {
	      attrs: {
	        "colspan": _vm.columns.length
	      },
	      domProps: {
	        "innerHTML": _vm._s(_vm.expandedRowRender(record))
	      }
	    })]) : _vm._e()]
	  })], 2)])]), _vm._v(" "), _c('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.pagination && _vm.pagination.total > 0),
	      expression: "pagination && pagination.total > 0"
	    }],
	    class: [_vm.prefixCls + '-table-pagination']
	  }, [_c('pagination', {
	    ref: "pager",
	    attrs: {
	      "total": _vm.pagination.total,
	      "currPage": _vm.pagination.currPage,
	      "page-size": _vm.pagination.pageSize,
	      "show-jumper": true,
	      "show-size-changer": true
	    },
	    on: {
	      "change": _vm.changePage,
	      "pagination-page-change": _vm.changePage,
	      "pagination-size-change": _vm.changeSize
	    }
	  })], 1)], 1)
	},staticRenderFns: []}

/***/ })
/******/ ])
});
;