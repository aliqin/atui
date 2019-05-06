(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("./icon"), require("./message"));
	else if(typeof define === 'function' && define.amd)
		define(["./icon", "./message"], factory);
	else if(typeof exports === 'object')
		exports["uploader"] = factory(require("./icon"), require("./message"));
	else
		root["uploader"] = factory(root["./icon"], root["./message"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_65__, __WEBPACK_EXTERNAL_MODULE_81__) {
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

	module.exports = __webpack_require__(253);


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
/* 81 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_81__;

/***/ }),
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
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
/* 108 */,
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
/* 138 */,
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
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Uploader = __webpack_require__(254);

	var _Uploader2 = _interopRequireDefault(_Uploader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Uploader2.default;

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(255)

	/* template */
	var __vue_template__ = __webpack_require__(290)
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
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof2 = __webpack_require__(256);

	var _typeof3 = _interopRequireDefault(_typeof2);

	var _Icon = __webpack_require__(65);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _Message = __webpack_require__(81);

	var _Message2 = _interopRequireDefault(_Message);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'Uploader',
	  props: {
	    id: {
	      type: String,
	      default: ''
	    },
	    name: {
	      type: String,
	      default: 'files'
	    },
	    uploadType: {
	      type: String,
	      default: 'click' },
	    accept: {
	      type: String,
	      default: ''
	    },
	    url: {
	      type: String,
	      default: ''
	    },
	    multiple: {
	      type: Boolean,
	      default: true
	    },
	    fileList: {
	      default: null
	    },
	    maxlength: Number,
	    prefixCls: {
	      type: String,
	      default: 'atui'
	    }
	  },
	  data: function data() {
	    return {
	      value: '',
	      uploadId: this.id || 'upload' + new Date().getTime(),
	      model: null,
	      current: -1,
	      percent: 0,
	      xhr: 'FormData' in window,
	      uploadList: [],
	      progress: [],
	      dragover: false
	    };
	  },

	  computed: {
	    advanceDrag: function advanceDrag() {
	      var div = document.createElement('div');
	      return ('draggable' in div || 'ondragstart' in div && 'ondrop' in div) && 'FormData' in window && 'FileReader' in window;
	    }
	  },
	  components: {
	    Icon: _Icon2.default,
	    Message: _Message2.default
	  },
	  mounted: function mounted() {
	    this._input = document.querySelector('#' + this.uploadId);
	    this.$el = document.querySelector('#upload-' + this.uploadId);

	    this.advanceDrag && this.addDragEvt();
	  },
	  beforeDestroy: function beforeDestroy() {
	    var _this = this;

	    var events = ['drag', 'dragstart', 'dragend', 'dragleave', 'drop', 'dragover', 'dragenter'];
	    events.forEach(function (event) {
	      _this.$el.removeEventListener(event, function () {
	        return _this._eventHandler();
	      });
	    });
	  },

	  methods: {
	    onChange: function onChange(e) {
	      debugger;
	      var files = e.target.files;

	      if (files) {
	        for (var i in files) {
	          if ((0, _typeof3.default)(files[i]) === 'object' && files[i].name) {
	            this.progress.push('0%');
	            this.uploadList.push(files[i]);
	          }
	        }
	      } else {
	        this.progress = ['0%'];
	        this.uploadList = [{ name: this._input.value.replace(/^.*\\/, '') }];
	      }

	      if (this.maxlength && this.fileList.length + this.uploadList.length > this.maxlength) {
	        this._input.value = '';
	        this.uploadList = [];
	        this.showMessage('超过上传数量限制，请先删除再进行上传');
	      } else {
	        this.submitForm();
	      }
	    },
	    submitForm: function submitForm() {
	      debugger;
	      if (this.uploadList.length > 0) {
	        if (this.url) {
	          if (this.xhr) {
	            this.xhrUpload();
	          } else {
	            this.iframeUpload();
	          }
	        }
	      }
	    },
	    xhrUpload: function xhrUpload() {
	      var self = this;
	      var data = new window.FormData();
	      var i = 0;
	      var len = this.uploadList.length;

	      for (i = 0; i < len; i++) {
	        (function (i, file) {
	          if (file.type.match(self.accept)) {
	            data.append(self.name, file, file.name);

	            var xhr = new window.XMLHttpRequest();

	            xhr.open('post', self.url, true);

	            xhr.onload = function () {
	              self.parseResponse(xhr.responseText, i);
	            };

	            xhr.upload.onprogress = function (e) {
	              var loaded = e.loaded ? e.loaded : 0;
	              var total = e.total ? e.total : 1;
	              self.progress[i] = parseInt(loaded / total * 100, 10) + '%';
	            };

	            xhr.onerror = function () {
	              self.setError('上传失败了！');
	            };

	            xhr.send(data);
	          }
	        })(i, this.uploadList[i]);
	      }
	    },
	    iframeUpload: function iframeUpload() {
	      var _this2 = this;

	      var i = 0;
	      var len = this.uploadList.length;
	      if (this.testSameOrigin(this.url)) {
	        var _loop = function _loop() {
	          var iframeName = 'uploadiframe-' + i + '-' + new Date().getTime();
	          var iframe = document.createElement('iframe');
	          var form = document.createElement('form');
	          var input = document.createElement('input');

	          input.setAttribute('type', 'file');
	          input.setAttribute('value', _this2.uploadList[i].name);
	          iframe.setAttribute('name', iframeName);
	          iframe.style.display = 'none';
	          form.setAttribute('method', 'post');
	          form.setAttribute('action', _this2.url);
	          form.setAttribute('target', iframeName);
	          form.setAttribute('data-index', i);

	          document.body.appendChild(form);
	          form.appendChild(iframe);
	          form.appendChild(input);

	          iframe.addEventListener('load', function () {
	            _this2.parseResponse(iframe.contentDocument.body.innerHTML, form.getAttribute('data-id'));
	            document.body.removeChild(form);
	          });
	          form.submit();
	        };

	        for (i = 0; i < len; i++) {
	          _loop();
	        }
	      } else {
	        this.setError('iframe不支持跨域请求');
	      }
	    },
	    testSameOrigin: function testSameOrigin(url) {
	      var loc = window.location;
	      var a = document.createElement('a');
	      a.href = url;
	      return a.hostname === loc.hostname && a.port === loc.port && a.protocol === loc.protocol;
	    },
	    parseResponse: function parseResponse(response, index) {
	      var data = null;

	      if (!response) {
	        this.setError('服务器没有响应', index);
	      } else {
	        try {
	          data = JSON.parse(response);
	        } catch (e) {
	          this.setError('服务器响应数据格式有问题', index);
	        }

	        if (data) {
	          if (data.success) {
	            this.model = data.data;
	            this.$dispatch('completed::file-upload', {
	              model: this.model,
	              file: this.uploadList[index]
	            });
	          } else if (data.error) {
	            this.setError(data.error, index);
	          }
	        }
	      }
	    },
	    setError: function setError(message, index) {
	      this.errorMessage = message;
	      this.$dispatch('completed::file-upload', {
	        error: this.errorMessage,
	        file: index && this.uploadList[index] || null
	      });

	      index > -1 && this.uploadList.splice(index, 1);
	    },
	    showMessage: function showMessage(msg) {
	      _Message2.default.success(msg);
	    },
	    filemouseover: function filemouseover(index) {
	      this.current = index;
	    },
	    filemouseout: function filemouseout() {
	      this.current = -1;
	    },
	    delFile: function delFile(index) {
	      this.$dispatch('delete::file-upload', {
	        file: this.uploadList[index]
	      });
	      this.uploadList.splice(index, 1);
	    },
	    delExistFile: function delExistFile(index) {
	      this.$dispatch('delete::file-upload', {
	        file: this.fileList[index]
	      });
	      this.fileList.splice(index, 1);
	    },
	    addDragEvt: function addDragEvt() {
	      var _this3 = this;

	      var events = ['drag', 'dragstart', 'dragend', 'dragleave', 'drop', 'dragover', 'dragenter'];

	      events.forEach(function (event) {
	        _this3.$el.addEventListener(event, function (e) {
	          return _this3.dragHandler(e);
	        });
	      });
	    },
	    dragHandler: function dragHandler(e) {
	      var self = this;
	      e.preventDefault();
	      e.stopPropagation();

	      if (e.type === 'dragover' || e.type === 'dragenter') {
	        self.dragover = true;
	      }

	      if (e.type === 'dragend' || e.type === 'dragleave' || e.type === 'drop') {
	        self.dragover = false;
	        if (e.type === 'drop') {
	          var files = e.dataTransfer.files || {};
	          for (var i in files) {
	            if (files[i] && files[i].name) {
	              self.progress.push('0%');
	              self.uploadList.push(files[i]);
	            }
	          }
	          self.submitForm();
	        }
	      }
	    }
	  }
	};

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	exports.__esModule = true;

	var _iterator = __webpack_require__(257);

	var _iterator2 = _interopRequireDefault(_iterator);

	var _symbol = __webpack_require__(277);

	var _symbol2 = _interopRequireDefault(_symbol);

	var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
	} : function (obj) {
	  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
	};

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(258), __esModule: true };

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(259);
	__webpack_require__(272);
	module.exports = __webpack_require__(276).f('iterator');


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var $at = __webpack_require__(260)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(261)(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(118);
	var defined = __webpack_require__(115);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(defined(that));
	    var i = toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY = __webpack_require__(262);
	var $export = __webpack_require__(93);
	var redefine = __webpack_require__(263);
	var hide = __webpack_require__(98);
	var has = __webpack_require__(111);
	var Iterators = __webpack_require__(264);
	var $iterCreate = __webpack_require__(265);
	var setToStringTag = __webpack_require__(269);
	var getPrototypeOf = __webpack_require__(271);
	var ITERATOR = __webpack_require__(270)('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';

	var returnThis = function () { return this; };

	module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};


/***/ }),
/* 262 */
/***/ (function(module, exports) {

	module.exports = true;


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(98);


/***/ }),
/* 264 */
/***/ (function(module, exports) {

	module.exports = {};


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var create = __webpack_require__(266);
	var descriptor = __webpack_require__(107);
	var setToStringTag = __webpack_require__(269);
	var IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(98)(IteratorPrototype, __webpack_require__(270)('iterator'), function () { return this; });

	module.exports = function (Constructor, NAME, next) {
	  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
	  setToStringTag(Constructor, NAME + ' Iterator');
	};


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject = __webpack_require__(100);
	var dPs = __webpack_require__(267);
	var enumBugKeys = __webpack_require__(123);
	var IE_PROTO = __webpack_require__(120)('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(105)('iframe');
	  var i = enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(268).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

	var dP = __webpack_require__(99);
	var anObject = __webpack_require__(100);
	var getKeys = __webpack_require__(109);

	module.exports = __webpack_require__(103) ? Object.defineProperties : function defineProperties(O, Properties) {
	  anObject(O);
	  var keys = getKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

	var document = __webpack_require__(94).document;
	module.exports = document && document.documentElement;


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

	var def = __webpack_require__(99).f;
	var has = __webpack_require__(111);
	var TAG = __webpack_require__(270)('toStringTag');

	module.exports = function (it, tag, stat) {
	  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

	var store = __webpack_require__(121)('wks');
	var uid = __webpack_require__(122);
	var Symbol = __webpack_require__(94).Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has = __webpack_require__(111);
	var toObject = __webpack_require__(126);
	var IE_PROTO = __webpack_require__(120)('IE_PROTO');
	var ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function (O) {
	  O = toObject(O);
	  if (has(O, IE_PROTO)) return O[IE_PROTO];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(273);
	var global = __webpack_require__(94);
	var hide = __webpack_require__(98);
	var Iterators = __webpack_require__(264);
	var TO_STRING_TAG = __webpack_require__(270)('toStringTag');

	var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
	  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
	  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
	  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
	  'TextTrackList,TouchList').split(',');

	for (var i = 0; i < DOMIterables.length; i++) {
	  var NAME = DOMIterables[i];
	  var Collection = global[NAME];
	  var proto = Collection && Collection.prototype;
	  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(274);
	var step = __webpack_require__(275);
	var Iterators = __webpack_require__(264);
	var toIObject = __webpack_require__(112);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(261)(Array, 'Array', function (iterated, kind) {
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return step(1);
	  }
	  if (kind == 'keys') return step(0, index);
	  if (kind == 'values') return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');


/***/ }),
/* 274 */
/***/ (function(module, exports) {

	module.exports = function () { /* empty */ };


/***/ }),
/* 275 */
/***/ (function(module, exports) {

	module.exports = function (done, value) {
	  return { value: value, done: !!done };
	};


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(270);


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(278), __esModule: true };

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(279);
	__webpack_require__(287);
	__webpack_require__(288);
	__webpack_require__(289);
	module.exports = __webpack_require__(95).Symbol;


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global = __webpack_require__(94);
	var has = __webpack_require__(111);
	var DESCRIPTORS = __webpack_require__(103);
	var $export = __webpack_require__(93);
	var redefine = __webpack_require__(263);
	var META = __webpack_require__(280).KEY;
	var $fails = __webpack_require__(104);
	var shared = __webpack_require__(121);
	var setToStringTag = __webpack_require__(269);
	var uid = __webpack_require__(122);
	var wks = __webpack_require__(270);
	var wksExt = __webpack_require__(276);
	var wksDefine = __webpack_require__(281);
	var enumKeys = __webpack_require__(282);
	var isArray = __webpack_require__(283);
	var anObject = __webpack_require__(100);
	var toIObject = __webpack_require__(112);
	var toPrimitive = __webpack_require__(106);
	var createDesc = __webpack_require__(107);
	var _create = __webpack_require__(266);
	var gOPNExt = __webpack_require__(284);
	var $GOPD = __webpack_require__(286);
	var $DP = __webpack_require__(99);
	var $keys = __webpack_require__(109);
	var gOPD = $GOPD.f;
	var dP = $DP.f;
	var gOPN = gOPNExt.f;
	var $Symbol = global.Symbol;
	var $JSON = global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE = 'prototype';
	var HIDDEN = wks('_hidden');
	var TO_PRIMITIVE = wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = shared('symbol-registry');
	var AllSymbols = shared('symbols');
	var OPSymbols = shared('op-symbols');
	var ObjectProto = Object[PROTOTYPE];
	var USE_NATIVE = typeof $Symbol == 'function';
	var QObject = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function () {
	  return _create(dP({}, 'a', {
	    get: function () { return dP(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if (has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _create(D, { enumerable: createDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = toIObject(it);
	  key = toPrimitive(key, true);
	  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
	  var D = gOPD(it, key);
	  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN(toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto;
	  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f = $defineProperty;
	  __webpack_require__(285).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(125).f = $propertyIsEnumerable;
	  __webpack_require__(124).f = $getOwnPropertySymbols;

	  if (DESCRIPTORS && !__webpack_require__(262)) {
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function (name) {
	    return wrap(wks(name));
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

	for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    replacer = args[1];
	    if (typeof replacer == 'function') $replacer = replacer;
	    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
	      if ($replacer) value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(98)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

	var META = __webpack_require__(122)('meta');
	var isObject = __webpack_require__(101);
	var has = __webpack_require__(111);
	var setDesc = __webpack_require__(99).f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !__webpack_require__(104)(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

	var global = __webpack_require__(94);
	var core = __webpack_require__(95);
	var LIBRARY = __webpack_require__(262);
	var wksExt = __webpack_require__(276);
	var defineProperty = __webpack_require__(99).f;
	module.exports = function (name) {
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
	};


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(109);
	var gOPS = __webpack_require__(124);
	var pIE = __webpack_require__(125);
	module.exports = function (it) {
	  var result = getKeys(it);
	  var getSymbols = gOPS.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = pIE.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(114);
	module.exports = Array.isArray || function isArray(arg) {
	  return cof(arg) == 'Array';
	};


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(112);
	var gOPN = __webpack_require__(285).f;
	var toString = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it) {
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys = __webpack_require__(110);
	var hiddenKeys = __webpack_require__(123).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return $keys(O, hiddenKeys);
	};


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

	var pIE = __webpack_require__(125);
	var createDesc = __webpack_require__(107);
	var toIObject = __webpack_require__(112);
	var toPrimitive = __webpack_require__(106);
	var has = __webpack_require__(111);
	var IE8_DOM_DEFINE = __webpack_require__(102);
	var gOPD = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(103) ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if (IE8_DOM_DEFINE) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
	};


/***/ }),
/* 287 */
/***/ (function(module, exports) {

	

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(281)('asyncIterator');


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(281)('observable');


/***/ }),
/* 290 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: [_vm.prefixCls + '-upload'],
	    attrs: {
	      "id": 'upload-' + _vm.uploadId
	    }
	  }, [(_vm.uploadType == 'click') ? _c('div', [_c('label', [_c('input', {
	    attrs: {
	      "type": "file",
	      "name": _vm.name,
	      "accept": _vm.accept,
	      "id": _vm.uploadId,
	      "multiple": _vm.multiple
	    },
	    on: {
	      "change": function($event) {
	        _vm.onChange($event)
	      }
	    }
	  }), _vm._v(" "), _vm._t("default", [_c('span', {
	    class: [_vm.prefixCls + '-btn', _vm.prefixCls + '-btn-tertiary']
	  }, [_vm._v("点击上传")])])], 2), _vm._v(" "), _c('div', {
	    class: [_vm.prefixCls + '-upload-list']
	  }, [_vm._l((_vm.fileList), function(file, index) {
	    return _c('div', {
	      class: [_vm.prefixCls + '-upload-item']
	    }, [_c('div', {
	      class: [_vm.prefixCls + '-upload-item-info', _vm.current == index && (_vm.prefixCls + '-active')],
	      on: {
	        "mouseover": function($event) {
	          _vm.filemouseover(index)
	        },
	        "mouseout": _vm.filemouseout
	      }
	    }, [_c('icon', {
	      class: [_vm.prefixCls + '-upload-file-icon'],
	      attrs: {
	        "type": "doc",
	        "size": "12"
	      }
	    }), _vm._v(" "), _c('span', [_vm._v(_vm._s(file.name))]), _vm._v(" "), _c('icon', {
	      class: [_vm.prefixCls + '-upload-del-info'],
	      attrs: {
	        "type": "close",
	        "size": "12"
	      },
	      on: {
	        "click": function($event) {
	          _vm.delExistFile(index)
	        }
	      }
	    })], 1)])
	  }), _vm._v(" "), _vm._l((_vm.uploadList), function(file, index) {
	    return _c('div', {
	      class: [_vm.prefixCls + '-upload-item']
	    }, [_c('div', {
	      class: [_vm.prefixCls + '-upload-item-info', _vm.current == index && (_vm.prefixCls + '-active')],
	      on: {
	        "mouseover": function($event) {
	          _vm.filemouseover(index)
	        },
	        "mouseout": _vm.filemouseout
	      }
	    }, [_c('icon', {
	      class: [_vm.prefixCls + '-upload-file-icon'],
	      attrs: {
	        "type": "doc",
	        "size": "12"
	      }
	    }), _vm._v(" "), _c('span', [_vm._v(_vm._s(file.name))]), _vm._v(" "), _c('icon', {
	      class: [_vm.prefixCls + '-upload-del-info'],
	      attrs: {
	        "type": "close",
	        "size": "12"
	      },
	      on: {
	        "click": function($event) {
	          _vm.delFile(index)
	        }
	      }
	    })], 1), _vm._v(" "), _c('div', {
	      class: [_vm.prefixCls + '-upload-item-progress', _vm.progress[index] == '100%' && (_vm.prefixCls + '-hide')]
	    }, [_c('div', {
	      class: [_vm.prefixCls + '-upload-progress', _vm.prefixCls + '-upload-progress-line', _vm.prefixCls + '-upload-progress-status-success']
	    }, [_c('div', {
	      class: [_vm.prefixCls + '-upload-progress-inner']
	    }, [_c('div', {
	      class: [_vm.prefixCls + '-upload-progress-bg'],
	      style: ({
	        width: _vm.progress[index]
	      })
	    })])])])])
	  })], 2)]) : _vm._e(), _vm._v(" "), (_vm.uploadType == 'drag') ? _c('div', {
	    class: [_vm.prefixCls + '-upload-drag']
	  }, [_c('div', {
	    class: [_vm.prefixCls + '-upload-drag-container', _vm.dragover && (_vm.prefixCls + '-is-dragover')]
	  }, [_c('input', {
	    attrs: {
	      "type": "file",
	      "name": _vm.name,
	      "id": _vm.uploadId,
	      "accept": _vm.accept,
	      "multiple": _vm.multiple
	    },
	    on: {
	      "change": function($event) {
	        _vm.onChange($event)
	      }
	    }
	  }), _vm._v(" "), _c('label', {
	    class: [_vm.prefixCls + '-upload-drag-area'],
	    attrs: {
	      "for": _vm.uploadId
	    }
	  }, [_c('p', {
	    class: [_vm.prefixCls + '-upload-drag-icon']
	  }), _vm._v(" "), (_vm.advanceDrag) ? _c('span', [_vm._v("点击或将文件拖拽到此区域上传")]) : _vm._e(), _vm._v(" "), (!_vm.advanceDrag) ? _c('span', [_vm._v("当前环境不支持拖拽上传，请点此上传")]) : _vm._e(), _vm._v(" "), _vm._l((_vm.selectFiles), function(file, index) {
	    return (_vm.fileList.length > 0) ? _c('p', [_vm._v(_vm._s(file))]) : _vm._e()
	  })], 2)]), _vm._v(" "), _c('div', {
	    class: [_vm.prefixCls + '-upload-list']
	  }, [_vm._l((_vm.fileList), function(file, index) {
	    return _c('div', {
	      class: [_vm.prefixCls + '-upload-item']
	    }, [_c('div', {
	      class: [_vm.prefixCls + '-upload-item-info', _vm.current == index && (_vm.prefixCls + '-active')],
	      on: {
	        "mouseover": function($event) {
	          _vm.filemouseover(index)
	        },
	        "mouseout": _vm.filemouseout
	      }
	    }, [_c('icon', {
	      class: [_vm.prefixCls + '-upload-file-icon'],
	      attrs: {
	        "type": "doc",
	        "size": "12"
	      }
	    }), _vm._v(" "), _c('span', [_vm._v(_vm._s(file.name))]), _vm._v(" "), _c('icon', {
	      staticClass: "[prefixCls + '-upload-del-info']",
	      attrs: {
	        "type": "close",
	        "size": "12"
	      },
	      on: {
	        "click": function($event) {
	          _vm.delExistFile(index)
	        }
	      }
	    })], 1)])
	  }), _vm._v(" "), _vm._l((_vm.uploadList), function(file, index) {
	    return _c('div', {
	      class: [_vm.prefixCls + '-upload-item']
	    }, [_c('div', {
	      class: [_vm.prefixCls + '-upload-item-info', _vm.current == index && (_vm.prefixCls + '-active')],
	      on: {
	        "mouseover": function($event) {
	          _vm.filemouseover(index)
	        },
	        "mouseout": _vm.filemouseout
	      }
	    }, [_c('icon', {
	      class: [_vm.prefixCls + '-upload-file-icon'],
	      attrs: {
	        "type": "doc",
	        "size": "12"
	      }
	    }), _vm._v(" "), _c('span', [_vm._v(_vm._s(file.name))]), _vm._v(" "), _c('icon', {
	      class: [_vm.prefixCls + '-upload-del-info'],
	      attrs: {
	        "type": "close",
	        "size": "12"
	      },
	      on: {
	        "click": function($event) {
	          _vm.delFile(index)
	        }
	      }
	    })], 1), _vm._v(" "), _c('div', {
	      class: [_vm.prefixCls + '-upload-item-progress', _vm.progress[index] == '100%' && (_vm.prefixCls + '-hide')]
	    }, [_c('div', {
	      class: [_vm.prefixCls + '-upload-progress', _vm.prefixCls + '-upload-progress-line', _vm.prefixCls + '-upload-progress-status-success']
	    }, [_c('div', {
	      class: [_vm.prefixCls + '-upload-progress-inner']
	    }, [_c('div', {
	      class: [_vm.prefixCls + '-upload-progress-bg'],
	      style: ({
	        width: _vm.progress[index]
	      })
	    })])])])])
	  })], 2)]) : _vm._e()])
	},staticRenderFns: []}

/***/ })
/******/ ])
});
;